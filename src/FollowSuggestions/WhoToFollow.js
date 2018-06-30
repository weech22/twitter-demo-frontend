const aiAvatar = `${process.env.PUBLIC_URL}/avatars/ai.png`;
const creodeAvatar = `${process.env.PUBLIC_URL}/avatars/creode.png`;
const eAvatar = `${process.env.PUBLIC_URL}/avatars/epiphany.png`;

const whoToFollow = [
  {
    avatar: aiAvatar,
    name: 'AppleInsider',
    username: 'appleinsider',
    isVerified: false,
  },
  {
    avatar: creodeAvatar,
    name: 'Creode',
    username: 'Creode',
    isVerified: true,
  },
  {
    avatar: eAvatar,
    name: 'Epiphany Search',
    username: 'EpiphanySearch',
    isVerified: false,
  },
];

export default whoToFollow;
