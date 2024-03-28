import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { country_list } from "../data/countryList";
import { AiOutlineRollback } from "react-icons/ai";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

export const Signup = () => {
  const countries = country_list;
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    area: 0,
    country: "India",
    zip: null,
  });

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData((prevFormData)=> ({...prevFormData, [name]: value}))
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    const auth = getAuth();
    await createUserWithEmailAndPassword(auth, formData.email, formData.password)
      .then(async (userCreds) => {
        
        // Save form data to Firestore
        const db = getFirestore();
        await setDoc(doc(db, "users/" + userCreds.user.uid), {
            fullName: formData.fullName,
            email: formData.email,
            password: formData.password,
            area: formData.area,
            country: formData.country,
            zip: formData.zip,
        });
        const user = userCreds.user;
        console.log(user);
        if (user) {
            console.log('User created successfully');
            alert('User created successfully');
            window.location.reload(false);
            navigate("/login");
        }
      })
        
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        if (errorCode === 'auth/email-already-in-use') {
            alert('The email address is already in use by another account.');
          } else {
            alert(errorMessage);
          }
      })
      // navigate("/login");
    };

  return (
    <div className="flex flex-col w-1/2 h-full px-5">
      <div className="flex w-full justify-between">
        <h1 className="pt-4 text-3xl font-serif text-gray-700">Sign Up</h1>
        <AiOutlineRollback
          className="w-8 h-8 mt-4 cursor-pointer"
          onClick={() => navigate("/")}
        />
      </div>
      <div className="flex flex-col w-full h-full justify-evenly lg:pr-9">
        <form method="post" onSubmit={handleSubmit}>
          <div class="flex items-center w-full mb-6">
            <div class="w-1/3">
              <label
                class="block text-center text-gray-500 font-bold mb-1 pr-4"
                for="inline-fullName"
              >
                Full Name
              </label>
            </div>
            <div class="w-2/3">
              <input
                class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
                id="inline-fullName"
                name="fullName"
                type="text"
                placeholder="John Doe"
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div class="flex items-center w-full mb-6">
            <div class="w-1/3">
              <label
                class="block text-center text-gray-500 font-bold mb-1 pr-4"
                for="inline-email"
              >
                Email
              </label>
            </div>
            <div class="w-2/3">
              <input
                class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
                id="inline-email"
                name="email"
                type="email"
                placeholder="abc@gmail.com"
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div class="flex items-center w-full mb-6">
            <div class="w-1/3">
              <label
                class="block text-center text-gray-500 font-bold mb-1 pr-4"
                for="inline-password"
              >
                Set Password
              </label>
            </div>
            <div class="w-2/3">
              <input
                class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
                id="inline-password"
                name="password"
                type="password"
                placeholder="********"
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div class="flex items-center w-full mb-6">
            <div class="w-1/3">
              <label
                class="block text-center text-gray-500 font-bold mb-1 pr-4"
                for="inline-area"
              >
                Your Farm Area
              </label>
            </div>
            <div class="w-2/3">
              <input
                class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
                id="inline-area"
                name="area"
                type="number"
                placeholder="In metres square"
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row">
            <div class="flex items-center w-1/2 mb-6 pr-4">
              <div class="w-2/5">
                <label
                  class="block text-center text-gray-500 font-bold mb-1"
                  for="inline-country"
                >
                  Country
                </label>
              </div>
              <div class="w-3/5">
                <select
                  class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
                  id="inline-country"
                  name="country"
                  onChange={handleChange}
                  defaultValue={"India"}
                >
                  {countries.map((country, id) => (
                    <option key={id}>{country}</option>
                  ))}
                </select>
              </div>
            </div>

            <div class="flex items-center w-1/2 mb-6">
              <div class="w-1/3">
                <label
                  class="block text-center text-gray-500 font-bold mb-1"
                  for="inline-zip"
                >
                  Zip Code
                </label>
              </div>
              <div class="w-2/3">
                <input
                  class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
                  id="inline-zip"
                  name="zip"
                  onChange={handleChange}
                  type="text"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-center pt-2">
            <button 
              className="bg-green-900 px-4 py-1 rounded-md text-white shadow-md shadow-gray-500"
              type="submit"
            >
              Signup
              
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};