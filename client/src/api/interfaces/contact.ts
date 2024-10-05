import { HeroAttributes, ImageProps, PageAttributes } from './defaults';

export type ContactPageAttributes = PageAttributes & {
  hero?: HeroAttributes;
  contactInfo?: ContactInfoAttributes;
  socialLinks?: {
    instaUrl?: string;
    facebookUrl?: string;
    youtubeUrl?: string;
  };
  pets?: string;
};

export type ContactInfoAttributes = {
  mapUrl?: string;
  contactItem?: ContactItemAttribute[];
};

export type ContactItemAttribute = {
  title: string;
  description: string;
  type: 'hours' | 'email' | 'phone';
};

export type PetAttribute = {
  title: string;
  image: ImageProps;
};

export type PetsAttribute = {
  title: string;
  pet: PetAttribute;
};
