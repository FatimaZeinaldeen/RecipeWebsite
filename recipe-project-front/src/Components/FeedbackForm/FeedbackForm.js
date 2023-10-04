import React, { useState } from 'react';
import "./FeedbackForm.module.css";

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
    <form onSubmit={handleSubmit}>
      <textarea value={feedback} onChange={handleInputChange} placeholder="Your Feedback..." rows="5" cols="70"/>
      <button type="submit">Submit</button> {/* will be modified to image button */}
    </form>
  );
}

export default FeedbackForm;
