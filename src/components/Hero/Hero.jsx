
// // import './Hero.css'; 
// // import CountUp from "react-countup";

// // const Hero = () => {
// //     return (
// //         <section className="hero-wrapper">
// //             <div className="innerWidth paddings flexCenter hero-container">
// //                 <div className="hero-left">
// //                     <div className="hero-title">
// //                         <h1>Quest for Change<br/> Where Compassion Meets Action<br/> </h1>
// //                     </div>
// //                     <div className="flexColStart hero-desc">
// //                         <span>Focus on cause let The Care Quest handle the rest</span>
// //                     </div>

// //                     <div className="flexCenter search-bar">
// //                         <input type="text"/>
// //                         <button className="button">Search</button>
// //                     </div></div>
// //                     <div className="flexCenter stats">
// //                     <div className="flexColCenter stat">
// //                     <span>
// //                             <CountUp start={1000} end={5000} duration={4} />
// //                             <span>+</span></span>
// //                             <span>Hope Seekers</span>
// //                    
            
// //                            
// //                         <span>
            
// //                             <CountUp start={50} end={200} duration={4} />
// //                             <span>+</span></span>
// //                             <span>Registered Campaigns</span>
// //                     </div>
// //                     </div>

// //                      <div className="flexCenter hero-right">
// //                         <div className="image-container">
// //                             <img src="./hero-image.png" alt="logo" />
// //                         </div> 
// //                     </div> 
// //                 </div>

// //         </section>
// //     );
// // };

// // export default Hero;
//  import React from "react";
// import "./Hero.css";
// import CountUp from "react-countup";
// import { motion } from "framer-motion";


// const Hero = () => {
//   return (
//     <section className="hero-wrapper">
//       <div className="paddings innerWidth flexCenter hero-container">
//         {/* left side */}
//         <div className="flexColStart hero-left">
//           <div className="hero-title">
//             <div className="orange-circle" />
//             <motion.h1
//             initial={{ y: "2rem", opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{
//               duration: 2,
//               type: "ease-in",
//             }}
//             >
//               The
//              Care
//             Quest
//             </motion.h1>
//           </div>
//           <div className="flexColStart secondaryText flexhero-des">
//             <span>Where Compassion Meets Action</span>
//             <span>Focus on cause let The Care Quest handle the rest</span>
//           </div>
 
         

//           <div className="flexCenter stats">
//             <div className="flexColCenter stat">
//               <span>
//                 <CountUp start={1000} end={5000} duration={4} /> <span>+</span>
//               </span>
//               <span className="statText "> Hope Seekers</span><br/>
//             </div>

//             <div className="flexColCenter stat">
//             <span>
//                             <CountUp start={500} end={700} duration={4} />
//                             <span>+</span></span>

                        
//                             <span className="statText"> Care Providers</span><br/>
                         
                     
//             </div>

//             <div className="flexColCenter stat">
//             <span>
            
//                                         <CountUp start={50} end={200} duration={4} />
//                                         <span>+</span></span>
                                        
//                                         <span className="statText">Registered Campaigns</span><br/>

                                     


//             </div>
//           </div>
//         </div>

//         {/* right side */}
//         <div className="flexCenter hero-right">
//           <motion.div
//             initial={{ x: "7rem", opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             transition={{
//               duration: 2,
//               type: "ease-in",
//             }}
//             className="image-containerr"
//           >
//             <img src="./myhero.png" alt="hero" />
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;


import React from "react";
import "./Hero.css";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const Hero = () => {
  const sliderVariants = {
    initial: {
      x: 0,
    },
    animate: {
      x: "-220%",
      transition: {
        repeat: "Infinity",
        repeatType: "mirror",
        duration: 10,
      },
    },
  };

  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        {/* left side */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 2,
                type: "ease-in",
              }}
            >
              The Care Quest
            </motion.h1>
          </div>
          <div className="flexColStart secondaryTextt flexhero-des" style={{ zIndex: 2 }}>
            <span>Empower Your Voice, Shape the Care Community</span>
            <span>Focus on the cause, let The Care Quest handle the rest</span>
          </div>
           
         
          <div className="flexCenter stats" style={{ zIndex: 2 }}>
            {/* Your existing stats content */}
            <div className="flexColCenter stat">
              <span>
                <CountUp start={1000} end={5000} duration={4} /> <span>+</span>
              </span>
              <span className="statText "> Hope Seekers</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp start={500} end={700} duration={4} />
                <span>+</span>
              </span>
              <span className="statText"> Care Providers</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp start={50} end={200} duration={4} />
                <span>+</span>
              </span>
              <span className="statText">Campaigns</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp start={50} end={100} duration={4} />
                <span>+</span>
              </span>
              <span className="statText">Trust Endorsers</span>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="flexCenter hero-right" style={{ zIndex: 2 }}>
          <motion.div
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "ease-in",
            }}
            className="image-container"
          >
            <img src="./myhero.png" alt="hero" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;