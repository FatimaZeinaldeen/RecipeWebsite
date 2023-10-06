import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes to define prop types
import styles from './Textbox.module.css';

function Textbox({ placeholder }) {
  return (
    <div>
      <input type="text" className={styles.Textbox} placeholder={placeholder} />
    </div>
  );
}

// Define prop types to specify that the 'placeholder' prop should be a string (optional)
Textbox.propTypes = {
  placeholder: PropTypes.string,
};

export default Textbox;
