import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes to define prop types
import styles from '../Textbox/Textbox.module.css';

function Textboxx({ placeholder }) {
  return (
    <div>
      <input type="text" className={styles.Textbox} placeholder={placeholder} />
    </div>
  );
}

// Define prop types to specify that the 'placeholder' prop should be a string (optional)
Textboxx.propTypes = {
  placeholder: PropTypes.string,
};

export default Textboxx;
