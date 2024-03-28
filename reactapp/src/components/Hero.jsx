import farmVideo from '../assets/videos/farm.mp4';

export const Hero = () => {
    return (
      <div>
        <div className="w-full h-[100vh] top-[90px]">
          <div className="w-[100%] h-full absolute bg-black opacity-30"></div>
          <video
            className="object-cover h-full w-full absolute -z-10"
            src={farmVideo}
            autoPlay
            loop
            muted
          />
  
          <div className='w-full h-[90%] flex flex-col justify-center items-center text-white px-4 text-center'>
            <div className="border-2 bg-white opacity-50 rounded-lg mt-6">
              <h1 className="text-black placeholder-opacity-0 text-4xl font-bold">Our AIM</h1>
              <p className="w-[150vh] text-2xl text-black">
              🌾 Sustainable Agriculture: We're committed to sustainable farming
                  practices. GreenHarvest suggests crops and strategies that promote
                  soil health and reduce environmental impact.
              </p>
            </div>
            <div className="border-2 bg-white opacity-50 rounded-lg my-10">
              <h1 className="text-black placeholder-opacity-0 text-4xl font-bold">What's in it for you?</h1>
              <p className="w-[150vh] text-2xl text-black">
              📈 Maximize Profits: Increase your farm's productivity and
                profitability by choosing the right crops at the right time. Our
                recommendations are designed to maximize your yields and minimize
                risks.
              </p>
            </div>
            
          </div>
          
        </div>
      </div>
    );
  };
  