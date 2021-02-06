import PropTypes from 'prop-types';
import defaultImage from './default.jpg';
import s from './Profile.module.css';

export default function Profile({
  name,
  tag,
  location,
  avatar = defaultImage,
  stats: { followers, views, likes },
}) {
  return (
    <div className={s.profile}>
      <div className={s.description}>
        <img className={s.avatar} src={avatar} alt="Аватар пользователя" />
        <p className={s.name}>{name}</p>
        <p className={s.tag}>@{tag}</p>
        <p className={s.location}>{location}</p>
      </div>

      <ul className={s.stats}>
        <li>
          <span className={s.label}>Followers </span>
          <span className={s.quantity}>{followers}</span>
        </li>
        <li>
          <span className={s.label}>Views </span>
          <span className={s.quantity}>{views}</span>
        </li>
        <li>
          <span className={s.label}>Likes </span>
          <span className={s.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
