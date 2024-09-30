import type { Schema, Attribute } from '@strapi/strapi';

export interface MenuMenuItem extends Schema.Component {
  collectionName: 'components_menu_menu_items';
  info: {
    displayName: 'MenuItem';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    text: Attribute.String & Attribute.Required;
    url: Attribute.String;
    category: Attribute.Relation<
      'menu.menu-item',
      'oneToOne',
      'api::category.category'
    >;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaDescription: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 50;
        maxLength: 160;
      }>;
    metaImage: Attribute.Media<'images' | 'files' | 'videos'>;
    metaSocial: Attribute.Component<'shared.meta-social', true>;
    keywords: Attribute.Text;
    metaRobots: Attribute.String;
    structuredData: Attribute.JSON;
    metaViewport: Attribute.String;
    canonicalURL: Attribute.String;
  };
}

export interface SharedSearch extends Schema.Component {
  collectionName: 'components_shared_searches';
  info: {
    displayName: 'Search';
    icon: 'search';
  };
  attributes: {
    placeholder: Attribute.String;
  };
}

export interface SharedMetaSocial extends Schema.Component {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
    icon: 'project-diagram';
  };
  attributes: {
    socialNetwork: Attribute.Enumeration<['Facebook', 'Twitter']> &
      Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedHero extends Schema.Component {
  collectionName: 'components_shared_heroes';
  info: {
    displayName: 'Hero';
    icon: 'layout';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.String;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    button: Attribute.Component<'shared.button'>;
  };
}

export interface SharedButton extends Schema.Component {
  collectionName: 'components_shared_buttons';
  info: {
    displayName: 'Button';
    icon: 'server';
  };
  attributes: {
    text: Attribute.String;
    url: Attribute.String;
  };
}

export interface BlogPostVideo extends Schema.Component {
  collectionName: 'components_blog_post_videos';
  info: {
    displayName: 'video';
    description: '';
  };
  attributes: {
    title: Attribute.String &
      Attribute.DefaultTo<'Hej! Mo\u017Ce rozwi\u0105\u017Cemy to razem?'>;
    embedURL: Attribute.String & Attribute.Required;
  };
}

export interface BlogPostTex extends Schema.Component {
  collectionName: 'components_blog_post_texes';
  info: {
    displayName: 'TEX';
    icon: 'feather';
    description: '';
  };
  attributes: {
    TEX: Attribute.Text;
    type: Attribute.Enumeration<['tex']> &
      Attribute.Required &
      Attribute.DefaultTo<'tex'>;
  };
}

export interface BlogPostSource extends Schema.Component {
  collectionName: 'components_blog_post_sources';
  info: {
    displayName: 'source';
    icon: 'oneWay';
    description: '';
  };
  attributes: {
    text: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'\u0179r\u00F3d\u0142o:'>;
    url: Attribute.Enumeration<
      [
        'https://cke.gov.pl/egzamin-osmoklasisty/arkusze/',
        'https://cke.gov.pl/egzamin-maturalny/egzamin-maturalny-w-formule-2015/arkusze/',
        'https://cke.gov.pl/egzamin-maturalny/egzamin-w-starej-formule/arkusze/'
      ]
    >;
  };
}

export interface BlogPostImage extends Schema.Component {
  collectionName: 'components_blog_post_images';
  info: {
    displayName: 'image';
    icon: 'landscape';
    description: '';
  };
  attributes: {
    image: Attribute.Media<'images' | 'files'>;
    type: Attribute.Enumeration<['image']> &
      Attribute.Required &
      Attribute.DefaultTo<'image'>;
  };
}

export interface BlogPostAnswer extends Schema.Component {
  collectionName: 'components_blog_post_answers';
  info: {
    displayName: 'Answer';
    icon: 'lightbulb';
    description: '';
  };
  attributes: {
    TEX: Attribute.Text & Attribute.Required;
    image: Attribute.Component<'blog-post.image'>;
  };
}

export interface ContactPagePets extends Schema.Component {
  collectionName: 'components_contact_page_pets';
  info: {
    displayName: 'Pets';
    description: '';
  };
  attributes: {
    petItem: Attribute.Component<'contact-page.pet-item', true>;
    title: Attribute.String;
  };
}

export interface ContactPagePetItem extends Schema.Component {
  collectionName: 'components_contact_page_pet_items';
  info: {
    displayName: 'PetItem';
  };
  attributes: {
    text: Attribute.String;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface ContactPageContactItem extends Schema.Component {
  collectionName: 'components_contact_page_contact_items';
  info: {
    displayName: 'ContactItem';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
  };
}

export interface ContactPageContactInfo extends Schema.Component {
  collectionName: 'components_contact_page_contact_infos';
  info: {
    displayName: 'ContactInfo';
    description: '';
  };
  attributes: {
    contactItem: Attribute.Component<'contact-page.contact-item', true>;
    mapUrl: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'menu.menu-item': MenuMenuItem;
      'shared.seo': SharedSeo;
      'shared.search': SharedSearch;
      'shared.meta-social': SharedMetaSocial;
      'shared.hero': SharedHero;
      'shared.button': SharedButton;
      'blog-post.video': BlogPostVideo;
      'blog-post.tex': BlogPostTex;
      'blog-post.source': BlogPostSource;
      'blog-post.image': BlogPostImage;
      'blog-post.answer': BlogPostAnswer;
      'contact-page.pets': ContactPagePets;
      'contact-page.pet-item': ContactPagePetItem;
      'contact-page.contact-item': ContactPageContactItem;
      'contact-page.contact-info': ContactPageContactInfo;
    }
  }
}
