

import React, { useState } from 'react';
import './OurCampaigns.css';

const OurCampaigns = () => {
  const [charityTitle, setCharityTitle] = useState('');
  const [careProviderName, setCareProviderName] = useState('');
  const [Location, setLocation] = useState('');
  const [email, setEmail] = useState('');
  const [typeOfAid, setTypeOfAid] = useState('');
  const [modeOfAssistance, setModeOfAssistance] = useState('');
  const [eligibilityCriteria, setEligibilityCriteria] = useState('');
  const [showAlert, setShowAlert] = useState(false); // Add this line for the showAlert state

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form validation here
    if (!charityTitle || !careProviderName || !Location || !typeOfAid || !modeOfAssistance || !eligibilityCriteria) {
      alert('Please fill out all required fields.');
      return;
    }

    // Validate email format (if provided)
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert('Please enter a valid email Location (e.g., abc@gmail.com).');
      return;
    }

    // If all validations pass, show success message
    setShowAlert(true);

    // Perform additional actions like submitting the form data to a server
  };

  return (
    <div className="wrapper">
      <div className="flexColCenter paddings innerWidth OurCampaigns-container">
        <form onSubmit={handleSubmit}>
        {showAlert && (
            <div className="alert alert-error">
              {/* Customize the alert message */}
              Please fill out all required fields 
            </div>
          )}
        <label>
     <strong>Campaign Title :</strong>  
         <input
          type="text"
          value={charityTitle}
          placeholder='Enter Campaign Title Here'
          onChange={(e) => setCharityTitle(e.target.value)}
          maxLength={25}
        />
      </label>

      <label>
        <strong>Care Provider Name :     </strong>  
        <input
          type="text"
          value={careProviderName}
          placeholder='Enter Your Name Here'
          onChange={(e) => setCareProviderName(e.target.value)}
          maxLength={25}
        />
      </label>
      <label>
      <strong>Location:   </strong> 
 <input
    type="text"
    value={Location}
    placeholder='Enter Your Authentic Location Here'
    onChange={(e) => setLocation(e.target.value)}
 />
</label>

     

      <label>
      <strong> Email :</strong> 
        <input
          type="email"
          placeholder='Format: abc@gmail.com '
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>

      <label>
      <strong>  Type of Aid:</strong>
        <select value={typeOfAid} onChange={(e) => setTypeOfAid(e.target.value)}>
          <option value="">Select...</option>
          <option value="donate">In-Kind Charity</option>
          <option value="service">Volunteer Service</option>
        </select>
      </label>

      <label>
      <strong> Mode of Assistance:</strong>
        <input
          type="text"
          value={modeOfAssistance}
          placeholder='Explain How Will You Provide Help '
          onChange={(e) => setModeOfAssistance(e.target.value)}
          maxLength={200}
        />
      </label>

      <label>
      <strong>Eligibility Criteria :</strong>
        <textarea
          value={eligibilityCriteria}
          placeholder='(Describe Eligibility Criteria Of Campaign)'
          onChange={(e) => setEligibilityCriteria(e.target.value)}
          maxLength={100}
        />
      </label>

          <button type="submit">Submit</button>

        </form>
      </div>
    </div>
  );
};

export default OurCampaigns;