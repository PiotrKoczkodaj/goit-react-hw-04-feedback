import styles from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ forGood, forBad, forNeutral }) => {
  return (
    <div>
      <button className={styles.buttons} onClick={forGood}>
        good
      </button>
      <button className={styles.buttons} onClick={forNeutral}>
        neutral
      </button>
      <button className={styles.buttons} onClick={forBad}>
        bad
      </button>
    </div>
  );
};

FeedbackOptions.propTypes = {
  forGood: PropTypes.func.isRequired,
  forBad: PropTypes.func.isRequired,
  forNeutral: PropTypes.func.isRequired,
};
