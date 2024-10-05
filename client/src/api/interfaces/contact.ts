import { HeroAttributes, ImageProps, PageAttributes } from './defaults';

export type ContactPageAttributes = PageAttributes & {
  hero?: HeroAttributes;
  contactInfo?: ContactInfoAttributes;
  socialLinks?: {
    instaUrl?: string;
    facebookUrl?: string;
    youtubeUrl?: string;
  };
  pets?: ContactPetsAttributes;
};

export type ContactPetsAttributes = {
  title?: string;
  petItems?: ContactPetItemAttribute[];
};

export type ContactPetItemAttribute = {
  text: string;
  image: ImageProps;
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
