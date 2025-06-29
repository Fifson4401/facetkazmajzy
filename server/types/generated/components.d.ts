import type { Attribute, Schema } from '@strapi/strapi';

export interface BlogPostAnswer extends Schema.Component {
  collectionName: 'components_blog_post_answers';
  info: {
    description: '';
    displayName: 'Answer';
    icon: 'lightbulb';
  };
  attributes: {
    image: Attribute.Component<'blog-post.image'>;
    TEX: Attribute.Text & Attribute.Required;
  };
}

export interface BlogPostImage extends Schema.Component {
  collectionName: 'components_blog_post_images';
  info: {
    description: '';
    displayName: 'image';
    icon: 'landscape';
  };
  attributes: {
    image: Attribute.Media<'images' | 'files'>;
    type: Attribute.Enumeration<['image']> &
      Attribute.Required &
      Attribute.DefaultTo<'image'>;
  };
}

export interface BlogPostSource extends Schema.Component {
  collectionName: 'components_blog_post_sources';
  info: {
    description: '';
    displayName: 'source';
    icon: 'oneWay';
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

export interface BlogPostTex extends Schema.Component {
  collectionName: 'components_blog_post_texes';
  info: {
    description: '';
    displayName: 'TEX';
    icon: 'feather';
  };
  attributes: {
    TEX: Attribute.Text;
    type: Attribute.Enumeration<['tex']> &
      Attribute.Required &
      Attribute.DefaultTo<'tex'>;
  };
}

export interface BlogPostVideo extends Schema.Component {
  collectionName: 'components_blog_post_videos';
  info: {
    description: '';
    displayName: 'video';
  };
  attributes: {
    embedURL: Attribute.String & Attribute.Required;
    title: Attribute.String &
      Attribute.DefaultTo<'Hej! Mo\u017Ce rozwi\u0105\u017Cemy to razem?'>;
  };
}

export interface ContactPageContactInfo extends Schema.Component {
  collectionName: 'components_contact_page_contact_infos';
  info: {
    description: '';
    displayName: 'ContactInfo';
  };
  attributes: {
    contactItem: Attribute.Component<'contact-page.contact-item', true>;
    mapUrl: Attribute.Text;
  };
}

export interface ContactPageContactItem extends Schema.Component {
  collectionName: 'components_contact_page_contact_items';
  info: {
    description: '';
    displayName: 'ContactItem';
  };
  attributes: {
    description: Attribute.Text;
    title: Attribute.String;
    type: Attribute.Enumeration<['hours', 'email', 'phone']> &
      Attribute.Required;
  };
}

export interface ContactPagePetItem extends Schema.Component {
  collectionName: 'components_contact_page_pet_items';
  info: {
    displayName: 'PetItem';
  };
  attributes: {
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    text: Attribute.String;
  };
}

export interface ContactPagePets extends Schema.Component {
  collectionName: 'components_contact_page_pets';
  info: {
    description: '';
    displayName: 'Pets';
  };
  attributes: {
    petItems: Attribute.Component<'contact-page.pet-item', true>;
    title: Attribute.String;
  };
}

export interface ContactPageSocialLinks extends Schema.Component {
  collectionName: 'components_contact_page_social_links';
  info: {
    description: '';
    displayName: 'SocialLinks';
    icon: 'cursor';
  };
  attributes: {
    facebookUrl: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'https://www.facebook.com/profile.php?id=100095406271152'>;
    instaUrl: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'https://www.instagram.com/facetkazmajzy?igsh=MXdoMzRhYTc0ZjJuZg=='>;
    title: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Sprawd\u017A moje linki tutaj!'>;
    youtubeUrl: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'https://www.youtube.com/@Facetkazmajzy'>;
  };
}

export interface MenuMenuItem extends Schema.Component {
  collectionName: 'components_menu_menu_items';
  info: {
    description: '';
    displayName: 'MenuItem';
    icon: 'bulletList';
  };
  attributes: {
    category: Attribute.Relation<
      'menu.menu-item',
      'oneToOne',
      'api::category.category'
    >;
    text: Attribute.String & Attribute.Required;
    url: Attribute.String;
  };
}

export interface SharedButton extends Schema.Component {
  collectionName: 'components_shared_buttons';
  info: {
    description: '';
    displayName: 'Button';
    icon: 'server';
  };
  attributes: {
    text: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Po prostu zadzwo\u0144!'>;
    url: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'#contactSection'>;
  };
}

export interface SharedHero extends Schema.Component {
  collectionName: 'components_shared_heroes';
  info: {
    description: '';
    displayName: 'Hero';
    icon: 'layout';
  };
  attributes: {
    button: Attribute.Component<'shared.button'>;
    description: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Nie czekaj, RAZEM damy rad\u0119!'>;
    image: Attribute.Media<'images'> & Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Test \u00F3smoklasisty przyprawia o zawr\u00F3t g\u0142owy? A mo\u017Ce matura ju\u017C za rok, a Ty nie wiesz od czego zacz\u0105\u0107?'>;
  };
}

export interface SharedMetaSocial extends Schema.Component {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
    icon: 'project-diagram';
  };
  attributes: {
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Attribute.Media<'images' | 'files' | 'videos'>;
    socialNetwork: Attribute.Enumeration<['Facebook', 'Twitter']> &
      Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
  };
}

export interface SharedSearch extends Schema.Component {
  collectionName: 'components_shared_searches';
  info: {
    description: '';
    displayName: 'Search';
    icon: 'search';
  };
  attributes: {
    placeholder: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Prosz\u0119 podpowiedz bo nic nie wiem...'>;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    canonicalURL: Attribute.String & Attribute.DefaultTo<'facetkazmajzy.pl'>;
    keywords: Attribute.Text;
    metaDescription: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 160;
        minLength: 50;
      }>;
    metaImage: Attribute.Media<'images' | 'files' | 'videos'>;
    metaRobots: Attribute.String & Attribute.DefaultTo<'nofollow, noindex'>;
    metaSocial: Attribute.Component<'shared.meta-social', true>;
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaViewport: Attribute.String &
      Attribute.DefaultTo<'width=device-width, initial-scale=1'>;
    shortStructuredQuestion: Attribute.Text;
    structuredAnswear: Attribute.Text;
    structuredData: Attribute.JSON;
    structuredQuestion: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blog-post.answer': BlogPostAnswer;
      'blog-post.image': BlogPostImage;
      'blog-post.source': BlogPostSource;
      'blog-post.tex': BlogPostTex;
      'blog-post.video': BlogPostVideo;
      'contact-page.contact-info': ContactPageContactInfo;
      'contact-page.contact-item': ContactPageContactItem;
      'contact-page.pet-item': ContactPagePetItem;
      'contact-page.pets': ContactPagePets;
      'contact-page.social-links': ContactPageSocialLinks;
      'menu.menu-item': MenuMenuItem;
      'shared.button': SharedButton;
      'shared.hero': SharedHero;
      'shared.meta-social': SharedMetaSocial;
      'shared.search': SharedSearch;
      'shared.seo': SharedSeo;
    }
  }
}
