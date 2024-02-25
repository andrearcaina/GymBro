import { useState } from 'react';

export default function RoadMapForm({onSubmit}) {
  const [hasDietaryRestrictions, setHasDietaryRestrictions] = useState(false);
  const [restrictionDetails, setRestrictionDetails] = useState('');
  const [fitGoal, setFitGoal] = useState('bulking-and-muscle-growth'); // Default value

  const handleCheckboxChange = (e) => {
    setHasDietaryRestrictions(e.target.checked);
  };

  const handleDetailsChange = (e) => {
    setRestrictionDetails(e.target.value);
  };

  let restrictionQueryString = '';
    
  if(restrictionDetails === ''){
    restrictionQueryString = "none";
  }else{
    restrictionQueryString = restrictionDetails;
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:5000/api/mealPlan/${fitGoal}/${restrictionQueryString}`, {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json'
          }
      });
      const mealData = await response.json();
      onSubmit(mealData);
      } catch (error) {
        console.error(error);
      }
  }

  return (
      <form className="catamaran max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md" action="/submit" onSubmit={handleFormSubmit}>
        <div className="mb-4">
        <label className="catamaran block text-gray-700 text-sm font-bold mb-2" htmlFor="age" required>Age:</label>
        <input className="catamaran shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="number" id="age" name="age"/>
      </div>

      <div className="catamaran mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="weight">Weight in lbs:</label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" id="weight" name="weight"/>
      </div>

      <div className="catamaran mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fitGoal">Fitness Goal:</label>
        <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="fitGoal" name="fitGoal" value={fitGoal} onChange={(e) => setFitGoal(e.target.value)}>
          <option value="weight-gain">Gain weight/muscle</option>
          <option value="weight-loss">Lose weight/body fat</option>
          <option value="muscle-growth">Maintain weight but gain muscle mass</option>
          <option value="ab-training">Strengthen Abs</option>
        </select>
      </div>

      <div className="catamaran mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="aproxCal">Approximate Daily Caloric Intake:</label>
        <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="aproxCal" name="aproxCal">
          <option value="little">less than 2000 kcal</option>
          <option value="medium">2000-2800 kcal</option>
          <option value="average">2800-3200 kcal</option>
          <option value="more">3200-4000 kcal</option>
          <option value="alot">more than 4000 kcal</option>
        </select>
      </div>

      <div className="catamaran mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dietaryRestrictions">Do you have any dietary restrictions?</label>
        <div>
          <label htmlFor="dietaryRestrictions" className="inline-flex items-center">
            <input type="checkbox" id="dietaryRestrictions" name="dietaryRestrictions" value="yes" checked={hasDietaryRestrictions} onChange={handleCheckboxChange}/>
            <span className="ml-2">Yes</span>
          </label>
          <label htmlFor="noDietaryRestrictions" className="inline-flex items-center ml-6">
            <input type="checkbox" id="noDietaryRestrictions" name="dietaryRestrictions" value="none" checked={!hasDietaryRestrictions} onChange={handleCheckboxChange}/>
            <span className="ml-2">No</span>
          </label>
        </div>
      </div>

      {hasDietaryRestrictions && (
        <div className="catamaran mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="restriction-details">Please explain your dietary restrictions:</label>
          <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="restriction-details" name="restriction-details" rows="4" cols="50" value={restrictionDetails} onChange={handleDetailsChange}></textarea>
        </div>
      )}

      <div className="catamaran flex justify-center">
        <button className="permanent-marker-regular bg-blue-500 hover:bg-blue-700 text-white font-bold text-2xl py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline" type="submit">Submit</button>
      </div>
    </form>
  );
}
