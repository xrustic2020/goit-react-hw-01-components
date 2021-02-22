import PropTypes from 'prop-types';
import s from './FriendList.module.css';
import FriendListItem from 'components/Friends/FriendListItem';

export default function FriendList({ friends }) {
  return (
    <ul className={s.friendList}>
      {friends.map(item => (
        <FriendListItem
          key={item.id}
          avatar={item.avatar}
          name={item.name}
          isOnline={item.isOnline}
        />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
