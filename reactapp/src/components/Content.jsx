import React from 'react'

export const Content = () => {
  // fetch last 5 data from DB and give it to historyData here

  const historyData = [
    'Wheat',
    'Corn',
    'Green-peas',
    'Cabbage',
    'Cauli-flower',
]

const soilProp = [
    'Black',
    'High-moisture',
    'Silt',
    'Low ammonia',
    'High phosphorus'
]

return (
  <div className="flex flex-col py-10 px-16 h-screen overflow-y-auto w-full">

    <div className="text-3xl font-semibold"><h2 >Dashboard</h2></div>

    <div className="flex space-x-8 py-6">
      <div className="flex flex-col rounded-md border border-green-700 w-[400px] h-auto px-8 py-4 pb-6 justify-center">
        <div className="flex justify-center text-xl font-semibold"><h2 >Crop History</h2></div>
            <div className="pl-5">
                <ul style={{ listStyleType: 'circle' }}>{ 
                historyData.map((item)=><li>{item}</li>)
            }</ul>
            </div>
        
      </div>
      <div className="flex flex-col rounded-md border border-green-700 w-[400px] h-auto px-8 py-4 justify-center">
        <div className="flex justify-center text-xl font-semibold"><h2>Your land size</h2></div>
            <p className="text-gray-500 mt-3 self-center">30 Acres</p>
            {/* Here fetch land size of farmer from DB */}
    </div>
    </div>

    { /*
    <div className="flex space-x-8 py-6 w-4/5">
      <div className="flex flex-col rounded-md border w-full p-8 justify-center">
        
        Expenses Graph
         Chart JS 

      </div>
    </div> 
    */ }
    
    <div className="flex space-x-8 py-6">
      <div className="flex flex-col rounded-md border border-green-700 w-[400px] h-min py-5 px-9 justify-center">
        <div className="flex justify-center text-xl font-semibold">
            <h2>Farm Properties</h2>
        </div>
        <div className="pl-5">
                <ul style={{ listStyleType: 'bullet' }}>{ 
                soilProp.map((item)=><li>{item}</li>)
            }</ul>
            </div>
      </div>

      <div className="flex flex-col rounded-md border border-green-700 w-[400px] h-auto py-3 justify-center">
        <div className="flex justify-center text-xl font-semibold"><h2>Soil Tested?</h2></div>
        
        <div className="self-center"><li className="text-gray-500 mt-3">Positive</li></div>
        
        {/* from database retrieve if soil is tested by physical device or not */}
      </div>

    </div>
  </div>
);
}
