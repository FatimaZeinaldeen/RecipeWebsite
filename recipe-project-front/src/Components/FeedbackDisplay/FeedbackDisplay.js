import React from 'react';
import styles from "./FeedbackDisplay.module.css";
import userPhoto from "../../assets/photos/feedback&reviewsuserPhoto.jpg";
function FeedbackDisplay({ feedbackData, feedbackData1 }) {
  return (
    <div className={styles.allfeedbacks}>
      {feedbackData.map((feedback) => (
        <div key={feedback.id} className={styles.feedbackitem}>
          <div className={styles.userprofile}>
           <img alt='userphoto' src={userPhoto}></img>
          </div>
          <div className={styles.userinfo}>
            <p className={styles.username}>{feedback.username}</p>
            <p className={styles.feedbackcontent}>{feedback.newfeedback}</p>
          </div>
        </div>
      ))}

      {feedbackData1.map((feedback) => (
        <div key={feedback.id} className={styles.feedbackitem}>
          <div className={styles.userprofile}>
           <img alt='userphoto' src={userPhoto}></img>
          </div>
          <div className={styles.userinfo}>
            <p className={styles.username}>{feedback.userName}</p>
            <p className={styles.feedbackcontent}>{feedback.feedbackContent}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FeedbackDisplay;
