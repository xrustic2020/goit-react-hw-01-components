import PropTypes from 'prop-types';
import getRandomColor from './getRandomColor';
import s from './Statistics.module.css';
// import getRandomColor from './getRandomColor';

export default function Statistics({ data }) {
  return (
    <section className={s.statistics}>
      <h2 className={s.title}>UPLOAD STATS</h2>

      <ul className={s.statList}>
        {data.map(({ key, label, percentage }) => (
          <li
            key={key}
            style={{ backgroundColor: getRandomColor() }}
            className={s.item}
          >
            <span className={s.label}>{label}</span>
            <span className={s.percentage}>{percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    }),
  ).isRequired,
};
