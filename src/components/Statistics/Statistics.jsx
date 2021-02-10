import PropTypes from 'prop-types';
import getRandomColor from './getRandomColor';
import s from './Statistics.module.css';

export default function Statistics({ data, title }) {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title.toUpperCase()}</h2>}

      <ul className={s.statList}>
        {data.map(({ id, label, percentage }) => (
          <li
            key={id}
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
  title: PropTypes.string,
};
