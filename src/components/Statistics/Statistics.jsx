import styles from './Statistics.module.css';
import PropTypes from 'prop-types';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  const classMaker = () => {
    if (total === 0) {
      return styles.disabled;
    }
    return styles.active;
  };
  return (
    <div className={classMaker()}>
      <h3>Statistics</h3>
      <ul>
        <li>good:{good}</li>
        <li>neutral:{neutral}</li>
        <li>bad:{bad}</li>
        <li>Total:{total}</li>
        <li>percentage:{positivePercentage}</li>
      </ul>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};
