export default function Day1() {
    return (
      <div className="text-center border-2 border-black rounded-xl w-2/3 p-5 m-10">
        <h1 className="font-bold text-3xl">Day 1</h1>
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
              <p>Breakfast:</p>
              <br />
              <p>Lunch:</p>
              <br />
              <p>Dinner:</p>
              <br />
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  