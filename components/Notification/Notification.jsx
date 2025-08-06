import { NotificationCom } from './styled';

import Picture from '../Picture';

const Notification = ({ notification }) => {
  const { link, img } = notification;

  return (
    <NotificationCom href={link} passHref>
      <Picture path={img.path} src={img.src} alt={img.alt} png />
    </NotificationCom>
  );
};

export default Notification;
