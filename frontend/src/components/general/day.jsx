export default function Day({ data }) {

function searchGoogle(query) {
  const searchQuery = encodeURIComponent(query);
  const googleSearchURL = `https://www.google.com/search?q=${searchQuery}`;
  window.open(googleSearchURL, '_blank');
}
  
  return (
    <div>
      {Object.entries(data).map(([day, meals], index) => (
        <div key={index} className="text-center bg-white shadow-2xl  rounded-xl w-2/3 p-5 m-10">
          {/* Ensure "Day 1" only renders once */}
          <h1 className="font-bold text-5xl permanent-marker-regular">{day}:</h1>
          
          <div className="grid grid-cols-2 gap-6">
            <div className=" flex items-left flex-col relative">
              <h2 className="p-0 text-center font-bold text-3xl permanent-marker-regular">Exercise Routine</h2>
              <div className="flex">
                <div className="h-10 w-48 bg-gray-200 rounded-md overflow-hidden p-2">
                  Warmup 
                </div>
                <span className="py-1.5">
                  →
                </span>
                  <div className="w-64 bg-gray-200 rounded-md overflow-hidden p-2 hover:scale-110 transition-all duration-100 ease-in-out"
                  onClick={() => searchGoogle('10 mins of light stretches: neck rolls, shoulder circles, arm swings, leg swings, ankle rotations.')}>
                    10 mins of light stretches: neck rolls, shoulder circles, arm swings, leg swings, ankle rotations.
                  </div>
              </div>
              <div className="w-48 rounded-md overflow-hidden">
                ↓
              </div>
              <div className="flex">
                <div className="h-10 w-48 bg-gray-200 rounded-md overflow-hidden p-2">
                  Cardio
                </div>
                <span className="py-1.5">
                  →
                </span>
                <div className="w-64 bg-gray-200 rounded-md overflow-hidden p-2 hover:scale-110 transition-all duration-100 ease-in-out"
                  onClick={() => searchGoogle('test search')}>
                    10 mins of light stretches: neck rolls, shoulder circles, arm swings, leg swings, ankle rotations.
                  </div>
              </div>
              <div className="w-48 rounded-md overflow-hidden">
                ↓
              </div>
              <div className="flex">
                <div className="h-10 w-48 bg-gray-200 rounded-md overflow-hidden p-2">
                  Chest
                </div>
                <span className="py-1.5">
                  →
                </span>
                <div className="w-64 bg-gray-200 rounded-md overflow-hidden p-2 hover:scale-110 transition-all duration-100 ease-in-out"
                  onClick={() => searchGoogle('test search')}>
                    10 mins of light stretches: neck rolls, shoulder circles, arm swings, leg swings, ankle rotations.
                </div>
              </div>
              <div className="w-48 rounded-md overflow-hidden">
                ↓
              </div>
              <div className="flex">
                <div className="h-10 w-48 bg-gray-200 rounded-md overflow-hidden p-2">
                  Back
                </div>
                <span className="py-1.5">
                  →
                </span>
                <div className="w-64 bg-gray-200 rounded-md overflow-hidden p-2 hover:scale-110 transition-all duration-100 ease-in-out"
                  onClick={() => searchGoogle('test search')}>
                    10 mins of light stretches: neck rolls, shoulder circles, arm swings, leg swings, ankle rotations.
                </div>
              </div>
            </div>
            
            <div className="">
              <h2 className="permanent-marker-regular font-bold text-3xl ">Meal Plan</h2>
              
              <div className="flex justify-center items-center text-left pl-10 h-[95%]">
                <div className="bg-gray-300 p-4 rounded-3xl">
                  {meals["Breakfast"] ? (
                      <p>Breakfast: {meals["Breakfast"].replace(/\./g, '').replace(/\)/g, '')}/serving)</p>
                  ) : 
                      <p>Breakfast: Omelette with a side of Avocado Toast (600 calories/serving)</p>
                  }
                  <br/>
                  {meals["Lunch"] ? (
                      <p>Lunch: {meals["Lunch"].replace(/\./g, '').replace(/\)/g, '')}/serving)</p>
                  ) : (
                      <p>Lunch: Chicken Alfredo with a side of salad (900 calories/serving)</p>
                  )}
                  <br/>
                  {meals["Dinner"] ? (
                      <p>Dinner: {meals["Dinner"].replace(/\./g, '').replace(/\)/g, '')}/serving)</p>
                  ) : (
                      <p>Dinner: Mac and Cheese (500 calories/serving)</p>
                  )}
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
