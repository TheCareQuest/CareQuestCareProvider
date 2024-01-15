import React, { useState } from 'react';
import './Profile.css';

const Profile = () => {
  const [profileBio, setProfileBio] = useState('');
  const [profileIntro, setProfileIntro] = useState('');
  const [profileServices, setProfileServices] = useState('');
  const [profilePastExperience, setPastExperience] = useState('');
  const [profileContact, setContact] = useState('');
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (event) => {
        setSelectedAvatar(event.target.result);
      };

      reader.readAsDataURL(file);
    }
  };

  const validateForm = () => {
    // Implement your validation logic here
    // Return true if the form is valid, otherwise false
    // For simplicity, returning true in this example
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Save the profile data to the database (simulated here)
      setIsFormSubmitted(true);
      setShowSuccessModal(true);
    } else {
      setIsFormSubmitted(false);
      alert('Please fill in all the required information.');
    }
  };

  const handleModalClose = () => {
    setShowSuccessModal(false);
  };

  return (
    <div className='wrapper'>
      <div className="profile-container">
        <span className='primaryText '>Create Profile</span>
        <form onSubmit={handleSubmit}>
          <div className="profile-pic-container">
            <div className="profile-pic">
              <label htmlFor="avatar-upload" className="avatar-label">
                {selectedAvatar ? (
                  <img src={selectedAvatar} alt="Avatar" className="avatar-preview" />
                ) : (
                  'Photo'
                )}
                <input
                  type="file"
                  id="avatar-upload"
                  style={{ display: 'none' }}
                  onChange={handleAvatarChange}
                />
              </label>
            </div>
          </div>

          <textarea
            name="profile-bio"
            placeholder="Add a short bio."
            value={profileBio}
            onChange={(e) => setProfileBio(e.target.value)}
            maxLength={100}
          /><br/>

          <textarea
            name="profile-intro"
            placeholder="Add Introduction."
            value={profileIntro}
            onChange={(e) => setProfileIntro(e.target.value)}
            maxLength={200}
          /><br/>

          <textarea
            name="profile-services"
            placeholder="Add Your Services."
            value={profileServices}
            onChange={(e) => setProfileServices(e.target.value)}
            minLength={5}
            maxLength={200}
          /><br/>

<input
  type="tel"
  name="profile-Contact"
  placeholder="Tel"
  value={profileContact}
  pattern="^\d{11}$"
  onChange={(e) => setContact(e.target.value)}
/><br/>
          <textarea
            name="profile-PastExperience"
            placeholder="Tell others about your Charity Campaigns Experience"
            value={profilePastExperience}
            onChange={(e) => setPastExperience(e.target.value)}
            maxLength={250}
          /><br/>

          <button type="submit" disabled={isFormSubmitted}>
            {isFormSubmitted ? 'Profile Created!' : 'Save'}
          </button>
        </form>
        
        {showSuccessModal && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={handleModalClose}>&times;</span>
              <p>Congrats! CareProvider! Successfully Created Profile</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
