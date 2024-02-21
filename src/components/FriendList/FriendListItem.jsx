import css from './FriendListItem.module.css';
import clsx from 'clsx';

const FriendListItem = ({ avatar, name, isOnline }) => {
  //const classNames = ['friendIsOnline'];
  // isOnline ? classNames.push('isOnline') : classNames.push('isOffline');
  return (
    <div>
      <img className={css.friendImage} src={avatar} alt="Avatar" width="48" />
      <p className={css.friendName}>{name}</p>
      <p
        className={clsx(
          'friendIsOnline',
          isOnline ? css.onlineColor : css.offlineColor
        )}
      >
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  );
};

export default FriendListItem;
