import React from 'react';
import { motion } from 'framer-motion';
import './CharityDetails.css'

const CharityDetails2 = () => {
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
              <p> Orhni</p>
              <p><strong>Care Provider Name:</strong> </p>
              <p>Ehtisham Farooq</p>
              <p><strong>Location:</strong> </p>
              <p>F-10, Islamabad</p>
              <p><strong>Email:</strong> </p>
             <p>ehtisham9@gmail.com</p>
              <p><strong>Type of Aid:</strong> </p>
              <p>Volunteer Service </p>
              <p><strong>Mode of Assistance:</strong></p>
              <span> Empower change through the gift of clothing  <br/>
                where every garment becomes a beacon of hope </span>
              <span><p><strong>Eligibility Criteria:</strong></p></span>

                <span> Open to all genders, ages, and backgrounds,<br/> promoting inclusivity and diversity. </span> 
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
    <img src="/clothingcharity.png" alt="clothing charity" />
  </motion.div>
</div>

        </div>
      </div>
    </div>
  );
}

export default CharityDetails2;


