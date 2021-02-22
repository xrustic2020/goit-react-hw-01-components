import PropTypes from 'prop-types';
import s from './FriendListItem.module.css';
import defaultImage from './default.png';

export default function FriendListItem({
  avatar = defaultImage,
  name,
  isOnline,
  id,
}) {
  return (
    <li className={s.item} key={id}>
      <span
        className={s.status}
        style={
          isOnline
            ? { backgroundColor: 'lightgreen' }
            : { backgroundColor: 'red' }
        }
      ></span>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  friends: PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  }),
};
