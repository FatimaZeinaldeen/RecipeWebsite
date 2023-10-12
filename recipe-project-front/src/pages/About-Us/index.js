import React, { useState,useEffect } from 'react';
import FeedbackForm from '../../Components/FeedbackForm/FeedbackForm.js'; 
import FeedbackDisplay from '../../Components/FeedbackDisplay/FeedbackDisplay.js';
import Style from './About-Us.module.css';
import axios from 'axios';

function About() {
  const [feedbackData, setFeedbackData] = useState([]);
  const [feedbackData1, setFeedbackData1] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/About-Us/getAllfeedbacks') 
      .then((response) => {
        setFeedbackData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching feedback data:', error);
      });
  }, []);


  const handleFeedbackSubmit = (newFeedback) => {
    const newFeedbackItem = {
      id: feedbackData1.length + 1,
      userPhoto: 'user.jpg',
      userName: 'User', //hon lzm est5dm l  id li bl useContext la jib l name mn l database
      feedbackContent: newFeedback,
    };

    setFeedbackData1([...feedbackData1, newFeedbackItem]);
  };
   
  
  return (
    <div>
        <h2 className={Style.h2aboutUs}>About Us:</h2>
        <p className={Style.paragAboutus} >"Embark on an extraordinary culinary journey where each dish becomes a symphony of flavors, an ode to creativity, and a celebration of your inner chef. Our recipe website is your portal to a world of mouthwatering creations, gourmet secrets, and epicurean inspiration, all designed to transform your home cooking into a gourmet masterpiece that will tantalize your taste buds and leave a lasting impression on every guest"</p>
        <h2 className={Style.h2peoplesthought} >People's thoughts:</h2>
        <FeedbackDisplay 
            feedbackData={feedbackData}
            feedbackData1={feedbackData1} 
        />
        <p className={Style.Pabovefeedback}>Tell Us What You Think!</p>
        <FeedbackForm onFeedbackSubmit={handleFeedbackSubmit} />
        <p className={Style.Punderfeedback}>Your feedback is the compass that guides us toward improvement.</p>

    </div>
  )
}

export default About
