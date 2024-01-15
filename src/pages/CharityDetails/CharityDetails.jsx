import React from 'react';
import { motion } from 'framer-motion';
import './CharityDetails.css'

const CharityDetails = () => {
  return (
    <div className='wrapper'>
      <div className="flexCenter paddings innerWidth charity-container">
        {/* like button */}
        {/* Assuming you have a component named Heart */}
        {/* <div className="like">
          <Heart id={data?.id} />
        </div> */}
 
        <div className="flexCenter charity-details">
          {/* left - Free Education Drive details */}
          <div className="flexColStart">
            <span className="primaryText head">
              <h1>Free Education Drive</h1>
            </span>
            <span className="secondaryText">
              <p><strong>Charity Title:</strong> </p>
              <p> Roshan Mustaqbil</p>
              <p><strong>Care Provider Name:</strong> </p>
              <p>Sana Kiyani</p>
              <p><strong>Location:</strong> </p>
              <p>G-10 Markaz, Islamabad</p>
              <p><strong>Email:</strong> </p>
             <p>sanakiyani89@gmail.com</p>
              <p><strong>Type of Aid:</strong> </p>
              <p>Free Education Service</p>
              <p><strong>Mode of Assistance:</strong></p>
              <span> A world where education knows no price tag  <br/>
               for every child's bright tomorrow.</span>
              <span><p><strong>Eligibility Criteria:</strong></p></span>
              <ul>
                <li><strong>Age:</strong><br/> Children between the ages of 5 and 16 are<br/> eligible to enroll.</li>
               
                <li><strong>Documentation:</strong><br/> Submission of necessary documentation, <br/>
                such  as proof of income, residence etc to <br/>  verifyeligibility.</li>
              </ul>
<br/>
              {/* Centered button */}
              <div className="flexCenter">
                <buttonch>Apply Now!</buttonch>
              </div>
            </span>
          </div>

        {/* right - Image container with motion animation */}
<div className="flexCenter b-right">
  <motion.div
    initial={{ x: "7rem", opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{
      duration: 2,
      type: "ease-in",
    }}
    className="image-container"
  >
    <img src="/teacher.png" alt="free education" />
  </motion.div>
</div>

        </div>
      </div>
    </div>
  );
}

export default CharityDetails;


