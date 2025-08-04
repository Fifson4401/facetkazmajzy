import type { Schema, Struct } from '@strapi/strapi';

export interface BlogPostAnswer extends Struct.ComponentSchema {
  collectionName: 'components_blog_post_answers';
  info: {
    description: '';
    displayName: 'Answer';
    icon: 'lightbulb';
  };
  attributes: {
    image: Schema.Attribute.Component<'blog-post.image', false>;
    TEX: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface BlogPostImage extends Struct.ComponentSchema {
  collectionName: 'components_blog_post_images';
  info: {
    description: '';
    displayName: 'image';
    icon: 'landscape';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files'>;
    type: Schema.Attribute.Enumeration<['image']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'image'>;
  };
}

export interface BlogPostSource extends Struct.ComponentSchema {
  collectionName: 'components_blog_post_sources';
  info: {
    description: '';
    displayName: 'source';
    icon: 'oneWay';
  };
  attributes: {
    text: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'\u0179r\u00F3d\u0142o:'>;
    url: Schema.Attribute.Enumeration<
      [
        'https://cke.gov.pl/egzamin-osmoklasisty/arkusze/',
        'https://cke.gov.pl/egzamin-maturalny/egzamin-maturalny-w-formule-2015/arkusze/',
        'https://cke.gov.pl/egzamin-maturalny/egzamin-w-starej-formule/arkusze/',
      ]
    >;
  };
}

export interface BlogPostTex extends Struct.ComponentSchema {
  collectionName: 'components_blog_post_texes';
  info: {
    description: '';
    displayName: 'TEX';
    icon: 'feather';
  };
  attributes: {
    TEX: Schema.Attribute.Text;
    type: Schema.Attribute.Enumeration<['tex']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'tex'>;
  };
}

export interface BlogPostVideo extends Struct.ComponentSchema {
  collectionName: 'components_blog_post_videos';
  info: {
    description: '';
    displayName: 'video';
  };
  attributes: {
    embedURL: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Hej! Mo\u017Ce rozwi\u0105\u017Cemy to razem?'>;
  };
}

export interface ContactPageContactInfo extends Struct.ComponentSchema {
  collectionName: 'components_contact_page_contact_infos';
  info: {
    description: '';
    displayName: 'ContactInfo';
  };
  attributes: {
    contactItem: Schema.Attribute.Component<'contact-page.contact-item', true>;
    mapUrl: Schema.Attribute.Text;
  };
}

export interface ContactPageContactItem extends Struct.ComponentSchema {
  collectionName: 'components_contact_page_contact_items';
  info: {
    description: '';
    displayName: 'ContactItem';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<['hours', 'email', 'phone']> &
      Schema.Attribute.Required;
  };
}

export interface ContactPagePetItem extends Struct.ComponentSchema {
  collectionName: 'components_contact_page_pet_items';
  info: {
    displayName: 'PetItem';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    text: Schema.Attribute.String;
  };
}

export interface ContactPagePets extends Struct.ComponentSchema {
  collectionName: 'components_contact_page_pets';
  info: {
    description: '';
    displayName: 'Pets';
  };
  attributes: {
    petItems: Schema.Attribute.Component<'contact-page.pet-item', true>;
    title: Schema.Attribute.String;
  };
}

export interface ContactPageSocialLinks extends Struct.ComponentSchema {
  collectionName: 'components_contact_page_social_links';
  info: {
    description: '';
    displayName: 'SocialLinks';
    icon: 'cursor';
  };
  attributes: {
    facebookUrl: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'https://www.facebook.com/profile.php?id=100095406271152'>;
    instaUrl: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'https://www.instagram.com/facetkazmajzy?igsh=MXdoMzRhYTc0ZjJuZg=='>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Sprawd\u017A moje linki tutaj!'>;
    youtubeUrl: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'https://www.youtube.com/@Facetkazmajzy'>;
  };
}

export interface MenuMenuItem extends Struct.ComponentSchema {
  collectionName: 'components_menu_menu_items';
  info: {
    description: '';
    displayName: 'MenuItem';
    icon: 'bulletList';
  };
  attributes: {
    category: Schema.Attribute.Relation<'oneToOne', 'api::category.category'>;
    text: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String;
  };
}

export interface SharedButton extends Struct.ComponentSchema {
  collectionName: 'components_shared_buttons';
  info: {
    description: '';
    displayName: 'Button';
    icon: 'server';
  };
  attributes: {
    text: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Po prostu zadzwo\u0144!'>;
    url: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'#contactSection'>;
  };
}

export interface SharedHero extends Struct.ComponentSchema {
  collectionName: 'components_shared_heroes';
  info: {
    description: '';
    displayName: 'Hero';
    icon: 'layout';
  };
  attributes: {
    button: Schema.Attribute.Component<'shared.button', false>;
    description: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Nie czekaj, RAZEM damy rad\u0119!'>;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Test \u00F3smoklasisty przyprawia o zawr\u00F3t g\u0142owy? A mo\u017Ce matura ju\u017C za rok, a Ty nie wiesz od czego zacz\u0105\u0107?'>;
  };
}

export interface SharedMetaSocial extends Struct.ComponentSchema {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
    icon: 'project-diagram';
  };
  attributes: {
    description: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
    socialNetwork: Schema.Attribute.Enumeration<['Facebook', 'Twitter']> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
  };
}

export interface SharedSearch extends Struct.ComponentSchema {
  collectionName: 'components_shared_searches';
  info: {
    description: '';
    displayName: 'Search';
    icon: 'search';
  };
  attributes: {
    placeholder: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Prosz\u0119 podpowiedz bo nic nie wiem...'>;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    canonicalURL: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'facetkazmajzy.pl'>;
    keywords: Schema.Attribute.Text;
    metaDescription: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 160;
        minLength: 50;
      }>;
    metaImage: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
    metaRobots: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'nofollow, noindex'>;
    metaSocial: Schema.Attribute.Component<'shared.meta-social', true>;
    metaTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaViewport: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'width=device-width, initial-scale=1'>;
    shortStructuredQuestion: Schema.Attribute.Text;
    structuredAnswear: Schema.Attribute.Text;
    structuredData: Schema.Attribute.JSON;
    structuredQuestion: Schema.Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
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
