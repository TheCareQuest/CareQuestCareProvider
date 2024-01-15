import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import './RequestPage.css';

const RequestPage = () => {
  const [requests, setRequests] = useState([
    { username: 'Zahid_Khan', fullName: 'Zahid Abbass Khan', imagePath: 'zahid_image.png' },
    { username: 'Rashida_', fullName: 'Rashida Hakeem', imagePath: 'rashida_image.png' },
    { username: 'Sakeena', fullName: 'Sakeena Bibi', imagePath: 'sakeena_image.png' },
    { username: 'Ghulam Akram', fullName: 'Akram Ayub', imagePath: 'akram_image.png' },
    { username: 'Ruqaiya_78', fullName: 'Ruqaiya Malik', imagePath: 'ruqaiya_image.png' },
    { username: 'Mehboob_Afridi1990', fullName: 'Mehboob Afridi', imagePath: 'mehboob_image.png' },
    { username: 'Shafqat_khan', fullName: 'Shafqat Ali Khan', imagePath: 'shafqat_image.png' },
    // Add more requests as needed
  ]);

  const [showRequestAccepted, setShowRequestAccepted] = useState(false);

  const handleAccept = (index) => {
    // Handle the logic for accepting the request
    // For now, just show the popup
    setShowRequestAccepted(true);

    // You can update the request status or perform any other necessary actions here
  };

  const handleDecline = (index) => {
    // Handle the logic for declining the request
    // For now, remove the request from the list
    const updatedRequests = [...requests];
    updatedRequests.splice(index, 1);
    setRequests(updatedRequests);
  };

  return (
    <div className="request-page">
      <h1>Charity Requests</h1>
      {showRequestAccepted && (
        <div className="request-accepted">
          <FontAwesomeIcon icon={faCheck} className="tick-icon" />
          <p>Request Accepted</p>
        </div>
        
      )}
      <ul className="request-list">
        {requests.map((request, index) => (
          <li key={index} className="request-item">
            <div className="user-info">
              <img
                src={`https://www.example.com/${request.imagePath}`}
                alt={request.username}
                className="user-avatar"
              />
              <div className="user-details">
                <span className="username">{request.username}</span>
                <span className="full-name">{request.fullName}</span>
              </div>
            </div>
            <div className="action-buttons">
              <buttonreq className="accept-button" onClick={() => handleAccept(index)}>
                Accept
              </buttonreq>
              <buttonreq className="decline-button" onClick={() => handleDecline(index)}>
                Decline
              </buttonreq>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RequestPage;
