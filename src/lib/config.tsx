import themeConfig from '../../theme.config';

import { PhotoboxConfig } from '@/types/config';

export function getConfig() {
  const config: PhotoboxConfig = {
    // Customization

    logo: <img src="/logo2.svg" className="" alt="logo" />,
    gallery: {
      crop: 'square'
    },

    editor: {
      backgroundRemoval: true
    },

    assetsFolder: process.env.NEXT_PUBLIC_CLOUDINARY_ASSETS_FOLDER || 'photobox',
    assetsTag: process.env.NEXT_PUBLIC_CLOUDINARY_ASSETS_TAG || 'photobox',
    libraryTag: process.env.NEXT_PUBLIC_CLOUDINARY_LIBRARY_TAG || 'photobox-library',
    creationTag: process.env.NEXT_PUBLIC_CLOUDINARY_CREATION_TAG || 'photobox-creation',
    favoritesTag: process.env.NEXT_PUBLIC_CLOUDINARY_FAVORITES_TAG || 'photobox-favorite',
    trashTag: process.env.NEXT_PUBLIC_CLOUDINARY_TRASH_TAG || 'photobox-trash',

    ...themeConfig
  }

  return config;
}