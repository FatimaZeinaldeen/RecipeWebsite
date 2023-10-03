import React from 'react';
import "./FeedbackDisplay.module.css";

function FeedbackDisplay({ feedbackData }) {
  return (
    <div>
      {feedbackData.map((feedback) => (
        <div key={feedback.id} className="feedback-item">
          <div className="user-profile">
            <img src={feedback.userPhoto} alt={`${feedback.userName}'s profile`} />
          </div>
          <div className="user-info">
            <p className="user-name">{feedback.userName}</p>
            <p className="feedback-content">{feedback.feedbackContent}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FeedbackDisplay;
