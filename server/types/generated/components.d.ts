import type { Schema, Attribute } from '@strapi/strapi';

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

export interface MenuMenuItem extends Schema.Component {
  collectionName: 'components_menu_menu_items';
  info: {
    displayName: 'MenuItem';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    text: Attribute.String & Attribute.Required;
    url: Attribute.String & Attribute.Required;
  };
}

export interface HomeSearch extends Schema.Component {
  collectionName: 'components_home_searches';
  info: {
    displayName: 'search';
    icon: 'search';
  };
  attributes: {
    placeholder: Attribute.String;
    image: Attribute.Media<'images'> & Attribute.Required;
  };
}

export interface HomeHeader extends Schema.Component {
  collectionName: 'components_home_headers';
  info: {
    displayName: 'header';
    icon: 'layout';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.String & Attribute.Required;
    image: Attribute.Media<'images'> & Attribute.Required;
    button: Attribute.Component<'home.button'> & Attribute.Required;
  };
}

export interface HomeButton extends Schema.Component {
  collectionName: 'components_home_buttons';
  info: {
    displayName: 'button';
    icon: 'layer';
  };
  attributes: {
    text: Attribute.String & Attribute.Required;
    url: Attribute.String & Attribute.Required;
  };
}

export interface BlogPostTex extends Schema.Component {
  collectionName: 'components_blog_post_texes';
  info: {
    displayName: 'TEX';
    icon: 'feather';
  };
  attributes: {
    TEX: Attribute.Text;
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

export interface BlogPageSearch extends Schema.Component {
  collectionName: 'components_blog_page_searches';
  info: {
    displayName: 'Search';
  };
  attributes: {
    placeholder: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'shared.seo': SharedSeo;
      'shared.meta-social': SharedMetaSocial;
      'menu.menu-item': MenuMenuItem;
      'home.search': HomeSearch;
      'home.header': HomeHeader;
      'home.button': HomeButton;
      'blog-post.tex': BlogPostTex;
      'blog-post.source': BlogPostSource;
      'blog-post.image': BlogPostImage;
      'blog-post.answer': BlogPostAnswer;
      'blog-page.search': BlogPageSearch;
    }
  }
}
