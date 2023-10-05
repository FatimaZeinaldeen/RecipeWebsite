import React, { useState } from 'react';
import FeedbackForm from '../../Components/FeedbackForm/FeedbackForm.js'; 
import FeedbackDisplay from '../../Components/FeedbackDisplay/FeedbackDisplay.js';
import styles from './about.module.css';

function About() {
  const [feedbackData, setFeedbackData] = useState([]);

  const handleFeedbackSubmit = (newFeedback) => {
    // Create a new feedback object and add it to the feedbackData array
    const newFeedbackItem = {
      id: feedbackData.length + 1,
      userPhoto: 'user.jpg',//mne5dn mn l database
      userName: 'User',
      feedbackContent: newFeedback,
    };

    setFeedbackData([...feedbackData, newFeedbackItem]);
  };
  return (
    <div>
        <h2 className={styles.h2aboutUs}>About Us:</h2>
        <p className={styles.paragAboutus} >"Embark on an extraordinary culinary journey where each dish becomes a symphony of flavors, an ode to creativity, and a celebration of your inner chef. Our recipe website is your portal to a world of mouthwatering creations, gourmet secrets, and epicurean inspiration, all designed to transform your home cooking into a gourmet masterpiece that will tantalize your taste buds and leave a lasting impression on every guest"</p>
        <h2 className={styles.h2peoplesthought} >People's thoughts:</h2>
        <FeedbackDisplay feedbackData={feedbackData} />
        <p className={styles.Pabovefeedback}>Tell Us What You Think!</p>
        <FeedbackForm onFeedbackSubmit={handleFeedbackSubmit} />
        <p className={styles.Punderfeedback}>Your feedback is the compass that guides us toward improvement.</p>

    </div>
  )
}

export default About
