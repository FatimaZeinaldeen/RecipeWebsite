import React, { useState } from 'react';
import styles from "./FeedbackForm.module.css";

function FeedbackForm({ onFeedbackSubmit }) {
  const [feedback, setFeedback] = useState(''); //setFeedback is the setter function that allows you to update the feedback state. SO when the user types something into an input field, you can call setFeedback(newValue) to update the feedback state with the new value

  const handleInputChange = (event) => {
    setFeedback(event.target.value);// when you use event.target.value in a React event handler for an input field, you're accessing the text or value that the user has entered into that specific input field. You can then use this value to perform actions or update the state in your React component, such as storing it in a state variable or sending it to a server for further processing.

  };

  const handleSubmit = (event) => {
    event.preventDefault(); // By default, when a form is submitted, the browser will try to reload the page or navigate to a new URL, So calling event.preventDefault() stops this default behavior from happening
    onFeedbackSubmit(feedback);
    setFeedback('');
  };

  return (
  <form className={styles.formsendfeedback} onSubmit={handleSubmit}>
    <div className={styles.sendfeedbackcontainer}>
      <svg 
         xmlns="http://www.w3.org/2000/svg" 
         width="2.7em" 
         height="2.7em" 
         viewBox="0 0 24 24">
         <g fill="#ffa101" 
         fill-rule="evenodd" 
         clip-rule="evenodd">
          <path d="M16 9a4 4 0 1 1-8 0a4 4 0 0 1 8 0Zm-2 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0Z"/>
          <path d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11s11-4.925 11-11S18.075 1 12 1ZM3 12c0 2.09.713 4.014 1.908 5.542A8.986 8.986 0 0 1 12.065 14a8.984 8.984 0 0 1 7.092 3.458A9 9 0 1 0 3 12Zm9 9a8.963 8.963 0 0 1-5.672-2.012A6.992 6.992 0 0 1 12.065 16a6.991 6.991 0 0 1 5.689 2.92A8.964 8.964 0 0 1 12 21Z"/></g></svg>
      <textarea className={styles.textareafeedback} value={feedback} onChange={handleInputChange} placeholder="Your Feedback..." rows="1.5" cols="50"/>
      <button className={styles.buttonfeedback} type="submit">
        <svg 
           xmlns="http://www.w3.org/2000/svg" 
           width="1.8em" 
           height="1.8em" 
           viewBox="0 0 16 16">
           <path fill="#FFA101"d="M1.724 1.053a.5.5 0 0 0-.714.545l1.403 4.85a.5.5 0 0 0 .397.354l5.69.953c.268.053.268.437 0 .49l-5.69.953a.5.5 0 0 0-.397.354l-1.403 4.85a.5.5 0 0 0 .714.545l13-6.5a.5.5 0 0 0 0-.894l-13-6.5Z"/>
        </svg>
      </button>
    </div> 
  </form>
  );
}

export default FeedbackForm;
