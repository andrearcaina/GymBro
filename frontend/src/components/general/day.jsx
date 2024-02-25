export default function Day({ data }) {
  return (
    <div>
      {Object.entries(data).map(([day, meals], index) => (
        <div key={index} className="text-center border-2 border-black rounded-xl w-2/3 p-5 m-10">
          {/* Ensure "Day 1" only renders once */}
          <h1 className="font-bold text-3xl">{day}:</h1>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="text-center relative">
              <h2 className="font-bold text-xl">Exercise Routine</h2>
              <div className="h-10 bg-gray-200 rounded-md overflow-hidden py-2">
                text
              </div>
            </div>
            
            <div>
              <h2 className="font-bold text-xl">Meal Plan</h2>
              
              <div className="text-left pl-10">
                <div>
                  <p>Breakfast: {meals["Breakfast"]}/serving</p>
                  
                  <br />
                  
                  <p>Lunch: {meals["Lunch"]}/serving</p>
                  
                  <br />
                  
                  <p>Dinner: {meals["Dinner"]}/serving</p>
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
