import { ISocialMedia } from "../interfaces/social-media.interface";

export const SocialMedias: Array<ISocialMedia> = [
  {
    name: 'contato@oichegamos.com.br',
    url: 'mailto:contato@oichegamos.com.br',
    icon: 'assets/icons/email.png',
    disabled: false,
    showOnHomePage: false,
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/oichegamos',
    icon: 'assets/icons/instagram.png',
    disabled: false,
    showOnHomePage: true,
  },
  {
    name: 'Pinterest',
    url: '',
    icon: 'assets/icons/pinterest.png',
    disabled: true,
    showOnHomePage: false,
  },
  {
    name: 'Spotify',
    url: '',
    icon: 'assets/icons/spotify.png',
    disabled: true,
    showOnHomePage: false,
  },
  {
    name: 'TikTok',
    url: 'https://tiktok.com/oichegamos',
    icon: 'assets/icons/tiktok.png',
    disabled: false,
    showOnHomePage: true,
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/oichegamos',
    icon: 'assets/icons/twitter.png',
    disabled: true,
    showOnHomePage: false,
  },
  {
    name: 'YouTube',
    url: 'https://youtube.com/@oichegamos',
    icon: 'assets/icons/youtube.png',
    disabled: false,
    showOnHomePage: true,
  },

];
