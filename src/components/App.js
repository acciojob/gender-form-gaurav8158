
import React from "react";
import './../styles/App.css';

const App = () => {

   const [gender, setGender] = useState("");
  const [shirtSize, setShirtSize] = useState("");
  const [dressSize, setDressSize] = useState("");

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleShirtSizeChange = (e) => {
    setShirtSize(e.target.value);
  };

  const handleDressSizeChange = (e) => {
    setDressSize(e.target.value);
  };
  return (
    <div>
        {/* Do not remove the main div */}
      <h2>Gender Form</h2>
      <label htmlFor="gender">Select your gender:</label>
      <select id="gender" value={gender} onChange={handleGenderChange}>
        <option value="">--Please choose an option--</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>

      {gender === "male" && (
        <div>
          <label htmlFor="shirtSize">Select your shirt size:</label>
          <select id="shirtSize" value={shirtSize} onChange={handleShirtSizeChange}>
            <option value="">--Please choose an option--</option>
            <option value="s">S</option>
            <option value="m">M</option>
            <option value="l">L</option>
            <option value="xl">XL</option>
          </select>
        </div>
      )}

      {gender === "female" && (
        <div>
          <label htmlFor="dressSize">Select your dress size:</label>
          <select id="dressSize" value={dressSize} onChange={handleDressSizeChange}>
            <option value="">--Please choose an option--</option>
            <option value="2">2</option>
            <option value="4">4</option>
            <option value="6">6</option>
            <option value="8">8</option>
            <option value="10">10</option>
          </select>
        </div>
      )}
    </div>
  )
}

export default App









