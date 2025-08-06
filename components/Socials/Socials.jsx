import { SocialsCom, Social } from './styled';

const SocialsItems = [
  {
    id: 1,
    href: 'https://www.instagram.com/raw.app/',
    name: 'Instagram',
  },
  {
    id: 2,
    href: 'https://www.linkedin.com/company/raw-dating-app/',
    name: 'LinkedIn',
  },
  {
    id: 3,
    href: 'https://www.tiktok.com/@raw.app',
    name: ' Tiktok',
  },
  {
    id: 4,
    href: 'https://twitter.com/raw__app',
    name: 'X',
  },
];

const Socials = () => (
  <SocialsCom>
    {SocialsItems.map(({ id, href, name }) => (
      <Social key={id} href={href} target="_blank">
        <span className="first">{name}</span>
        <span className="second">{name}</span>
      </Social>
    ))}
  </SocialsCom>
);

export default Socials;
