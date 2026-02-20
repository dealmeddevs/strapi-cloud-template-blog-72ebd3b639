import type { Schema, Struct } from '@strapi/strapi';

export interface AdminApiToken extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_api_tokens';
  info: {
    description: '';
    displayName: 'Api Token';
    name: 'Api Token';
    pluralName: 'api-tokens';
    singularName: 'api-token';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    accessKey: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Schema.Attribute.DefaultTo<''>;
    encryptedKey: Schema.Attribute.Text &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    expiresAt: Schema.Attribute.DateTime;
    lastUsedAt: Schema.Attribute.DateTime;
    lifespan: Schema.Attribute.BigInteger;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::api-token'> &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'admin::api-token-permission'
    >;
    publishedAt: Schema.Attribute.DateTime;
    type: Schema.Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'read-only'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_api_token_permissions';
  info: {
    description: '';
    displayName: 'API Token Permission';
    name: 'API Token Permission';
    pluralName: 'api-token-permissions';
    singularName: 'api-token-permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::api-token-permission'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    token: Schema.Attribute.Relation<'manyToOne', 'admin::api-token'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminPermission extends Struct.CollectionTypeSchema {
  collectionName: 'admin_permissions';
  info: {
    description: '';
    displayName: 'Permission';
    name: 'Permission';
    pluralName: 'permissions';
    singularName: 'permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<{}>;
    conditions: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<[]>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::permission'> &
      Schema.Attribute.Private;
    properties: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<{}>;
    publishedAt: Schema.Attribute.DateTime;
    role: Schema.Attribute.Relation<'manyToOne', 'admin::role'>;
    subject: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminRole extends Struct.CollectionTypeSchema {
  collectionName: 'admin_roles';
  info: {
    description: '';
    displayName: 'Role';
    name: 'Role';
    pluralName: 'roles';
    singularName: 'role';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    code: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::role'> &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Schema.Attribute.Relation<'oneToMany', 'admin::permission'>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    users: Schema.Attribute.Relation<'manyToMany', 'admin::user'>;
  };
}

export interface AdminSession extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_sessions';
  info: {
    description: 'Session Manager storage';
    displayName: 'Session';
    name: 'Session';
    pluralName: 'sessions';
    singularName: 'session';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
    i18n: {
      localized: false;
    };
  };
  attributes: {
    absoluteExpiresAt: Schema.Attribute.DateTime & Schema.Attribute.Private;
    childId: Schema.Attribute.String & Schema.Attribute.Private;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    deviceId: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Private;
    expiresAt: Schema.Attribute.DateTime &
      Schema.Attribute.Required &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::session'> &
      Schema.Attribute.Private;
    origin: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    sessionId: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Private &
      Schema.Attribute.Unique;
    status: Schema.Attribute.String & Schema.Attribute.Private;
    type: Schema.Attribute.String & Schema.Attribute.Private;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    userId: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Private;
  };
}

export interface AdminTransferToken extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_transfer_tokens';
  info: {
    description: '';
    displayName: 'Transfer Token';
    name: 'Transfer Token';
    pluralName: 'transfer-tokens';
    singularName: 'transfer-token';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    accessKey: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Schema.Attribute.DefaultTo<''>;
    expiresAt: Schema.Attribute.DateTime;
    lastUsedAt: Schema.Attribute.DateTime;
    lifespan: Schema.Attribute.BigInteger;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminTransferTokenPermission
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    description: '';
    displayName: 'Transfer Token Permission';
    name: 'Transfer Token Permission';
    pluralName: 'transfer-token-permissions';
    singularName: 'transfer-token-permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token-permission'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    token: Schema.Attribute.Relation<'manyToOne', 'admin::transfer-token'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminUser extends Struct.CollectionTypeSchema {
  collectionName: 'admin_users';
  info: {
    description: '';
    displayName: 'User';
    name: 'User';
    pluralName: 'users';
    singularName: 'user';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    blocked: Schema.Attribute.Boolean &
      Schema.Attribute.Private &
      Schema.Attribute.DefaultTo<false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    email: Schema.Attribute.Email &
      Schema.Attribute.Required &
      Schema.Attribute.Private &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    firstname: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    isActive: Schema.Attribute.Boolean &
      Schema.Attribute.Private &
      Schema.Attribute.DefaultTo<false>;
    lastname: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::user'> &
      Schema.Attribute.Private;
    password: Schema.Attribute.Password &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    preferedLanguage: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    registrationToken: Schema.Attribute.String & Schema.Attribute.Private;
    resetPasswordToken: Schema.Attribute.String & Schema.Attribute.Private;
    roles: Schema.Attribute.Relation<'manyToMany', 'admin::role'> &
      Schema.Attribute.Private;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    username: Schema.Attribute.String;
  };
}

export interface ApiAboutServicesSectionAboutServicesSection
  extends Struct.CollectionTypeSchema {
  collectionName: 'about_services_sections';
  info: {
    description: 'Imported from Contentful type aboutServicesSection';
    displayName: 'Page Content Section 10';
    pluralName: 'about-services-sections';
    singularName: 'about-services-section';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    contentful_id: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::about-services-section.about-services-section'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    services: Schema.Attribute.JSON & Schema.Attribute.Required;
    text: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    version: Schema.Attribute.String;
  };
}

export interface ApiAboutServicesSectionserviceAboutServicesSectionservice
  extends Struct.CollectionTypeSchema {
  collectionName: 'about_services_sectionservices';
  info: {
    description: 'Imported from Contentful type aboutServicesSectionservices';
    displayName: 'Page Content Section 10/Services';
    pluralName: 'about-services-sectionservices';
    singularName: 'about-services-sectionservice';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    altImageText: Schema.Attribute.String & Schema.Attribute.Required;
    contentful_id: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::about-services-sectionservice.about-services-sectionservice'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    text: Schema.Attribute.RichText & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiAboutWarehouseSectionAboutWarehouseSection
  extends Struct.CollectionTypeSchema {
  collectionName: 'about_warehouse_sections';
  info: {
    description: 'Imported from Contentful type aboutWarehouseSection';
    displayName: 'Page Content Section 11';
    pluralName: 'about-warehouse-sections';
    singularName: 'about-warehouse-section';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    contentful_id: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    identifier: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::about-warehouse-section.about-warehouse-section'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    textOne: Schema.Attribute.RichText & Schema.Attribute.Required;
    textTwo: Schema.Attribute.RichText;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    version: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ApiBannerBanner extends Struct.CollectionTypeSchema {
  collectionName: 'banners';
  info: {
    description: 'Imported from Contentful type banner';
    displayName: 'Banner';
    pluralName: 'banners';
    singularName: 'banner';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    bannerImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    > &
      Schema.Attribute.Required;
    bannerTitle: Schema.Attribute.String & Schema.Attribute.Required;
    companyName: Schema.Attribute.String & Schema.Attribute.Required;
    contentful_id: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::banner.banner'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiCategoryBulletPointCategoryBulletPoint
  extends Struct.CollectionTypeSchema {
  collectionName: 'category_bullet_points';
  info: {
    description: 'Imported from Contentful type categoryBulletPoint';
    displayName: 'Category Bullet Point';
    pluralName: 'category-bullet-points';
    singularName: 'category-bullet-point';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    contentful_id: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    displayText: Schema.Attribute.RichText & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::category-bullet-point.category-bullet-point'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiCategoryContentPageCategoryContentPage
  extends Struct.CollectionTypeSchema {
  collectionName: 'category_content_pages';
  info: {
    description: 'Imported from Contentful type categoryContentPage';
    displayName: 'Category Content Page';
    pluralName: 'category-content-pages';
    singularName: 'category-content-page';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    contentful_id: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    contentTabs: Schema.Attribute.Relation<
      'manyToMany',
      'api::category-content-tab.category-content-tab'
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.Text;
    featuredBrands: Schema.Attribute.Relation<
      'oneToOne',
      'api::category-featured-brand-group.category-featured-brand-group'
    >;
    frequentlyAskedQuestions: Schema.Attribute.Relation<
      'manyToMany',
      'api::category-faq.category-faq'
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::category-content-page.category-content-page'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiCategoryContentTabCategoryContentTab
  extends Struct.CollectionTypeSchema {
  collectionName: 'category_content_tabs';
  info: {
    description: 'Imported from Contentful type categoryContentTab';
    displayName: 'Category Content Tab';
    pluralName: 'category-content-tabs';
    singularName: 'category-content-tab';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    bulletPoints: Schema.Attribute.Relation<
      'manyToMany',
      'api::category-bullet-point.category-bullet-point'
    > &
      Schema.Attribute.Required;
    contentful_id: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    image: Schema.Attribute.Media<'images'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::category-content-tab.category-content-tab'
    > &
      Schema.Attribute.Private;
    mainHeader: Schema.Attribute.String & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    secondaryHeader: Schema.Attribute.Text & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiCategoryFaqCategoryFaq extends Struct.CollectionTypeSchema {
  collectionName: 'category_faqs';
  info: {
    description: 'Imported from Contentful type categoryFaq';
    displayName: 'Category FAQ';
    pluralName: 'category-faqs';
    singularName: 'category-faq';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    answer: Schema.Attribute.RichText;
    contentful_id: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::category-faq.category-faq'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    question: Schema.Attribute.Text & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiCategoryFeaturedBrandGroupCategoryFeaturedBrandGroup
  extends Struct.CollectionTypeSchema {
  collectionName: 'category_featured_brand_groups';
  info: {
    description: 'Imported from Contentful type categoryFeaturedBrands';
    displayName: 'Category Featured Brands';
    pluralName: 'category-featured-brand-groups';
    singularName: 'category-featured-brand-group';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    categoryName: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    contentful_id: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.Text;
    featuredBrands: Schema.Attribute.Relation<
      'manyToMany',
      'api::category-featured-brand.category-featured-brand'
    > &
      Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::category-featured-brand-group.category-featured-brand-group'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiCategoryFeaturedBrandCategoryFeaturedBrand
  extends Struct.CollectionTypeSchema {
  collectionName: 'category_featured_brands';
  info: {
    description: 'Imported from Contentful type categoryFeaturedBrand';
    displayName: 'Category Featured Brand';
    pluralName: 'category-featured-brands';
    singularName: 'category-featured-brand';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    bannerImage: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    contentful_id: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::category-featured-brand.category-featured-brand'
    > &
      Schema.Attribute.Private;
    manufacturerName: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiContactPageContactPage extends Struct.CollectionTypeSchema {
  collectionName: 'contact_pages';
  info: {
    description: 'Imported from Contentful type contactPage';
    displayName: 'Page Content Section 16';
    pluralName: 'contact-pages';
    singularName: 'contact-page';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    contactEmail: Schema.Attribute.String & Schema.Attribute.Required;
    contactNumber: Schema.Attribute.String & Schema.Attribute.Required;
    contactTitle: Schema.Attribute.String & Schema.Attribute.Required;
    contentful_id: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    faxNumber: Schema.Attribute.String & Schema.Attribute.Required;
    faxTitle: Schema.Attribute.String & Schema.Attribute.Required;
    header: Schema.Attribute.Text & Schema.Attribute.Required;
    hoursText: Schema.Attribute.String & Schema.Attribute.Required;
    hoursTextShort: Schema.Attribute.String & Schema.Attribute.Required;
    hoursTitle: Schema.Attribute.String & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::contact-page.contact-page'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    text1: Schema.Attribute.RichText & Schema.Attribute.Required;
    text2: Schema.Attribute.RichText & Schema.Attribute.Required;
    title1: Schema.Attribute.String & Schema.Attribute.Required;
    title2: Schema.Attribute.String & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    version: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ApiContentPageContentPage extends Struct.CollectionTypeSchema {
  collectionName: 'content_pages';
  info: {
    description: 'Imported from Contentful type contentPages';
    displayName: 'Content Pages';
    pluralName: 'content-pages';
    singularName: 'content-page';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    contentful_id: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::content-page.content-page'
    > &
      Schema.Attribute.Private;
    pages: Schema.Attribute.JSON & Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    version: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ApiContentTextSectionContentTextSection
  extends Struct.CollectionTypeSchema {
  collectionName: 'content_text_sections';
  info: {
    description: 'Imported from Contentful type contentTextSection';
    displayName: 'Page Content Section 18';
    pluralName: 'content-text-sections';
    singularName: 'content-text-section';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    contentful_id: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    header: Schema.Attribute.String & Schema.Attribute.Required;
    headerText: Schema.Attribute.RichText;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::content-text-section.content-text-section'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    subheader: Schema.Attribute.RichText;
    textSections: Schema.Attribute.JSON;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiFeaturedCategoriesCarouselFeaturedCategoriesCarousel
  extends Struct.CollectionTypeSchema {
  collectionName: 'featured_categories_carousels';
  info: {
    description: 'Imported from Contentful type featuredCategoriesCarousel';
    displayName: 'Page Content Section 13';
    pluralName: 'featured-categories-carousels';
    singularName: 'featured-categories-carousel';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    contentful_id: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::featured-categories-carousel.featured-categories-carousel'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    version: Schema.Attribute.String;
  };
}

export interface ApiFooterLinkColumnLinkFooterLinkColumnLink
  extends Struct.CollectionTypeSchema {
  collectionName: 'footer_link_column_links';
  info: {
    description: 'Imported from Contentful type footerLinkColumnLink';
    displayName: 'Footer Link Column Link';
    pluralName: 'footer-link-column-links';
    singularName: 'footer-link-column-link';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    contentful_id: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    linkTitle: Schema.Attribute.String & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::footer-link-column-link.footer-link-column-link'
    > &
      Schema.Attribute.Private;
    pathlink: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiFooterLinkColumnFooterLinkColumn
  extends Struct.CollectionTypeSchema {
  collectionName: 'footer_link_columns';
  info: {
    description: 'Imported from Contentful type footerLinkColumn';
    displayName: 'Footer Link Column';
    pluralName: 'footer-link-columns';
    singularName: 'footer-link-column';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    columnLinks: Schema.Attribute.Relation<
      'manyToMany',
      'api::footer-link-column-link.footer-link-column-link'
    >;
    contentful_id: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    header: Schema.Attribute.String & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::footer-link-column.footer-link-column'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiFooterFooter extends Struct.CollectionTypeSchema {
  collectionName: 'footers';
  info: {
    description: 'Imported from Contentful type footer';
    displayName: 'Footer';
    pluralName: 'footers';
    singularName: 'footer';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    addressLine1: Schema.Attribute.String;
    addressLine2: Schema.Attribute.String;
    addressLine3: Schema.Attribute.String;
    contactEmail: Schema.Attribute.Email;
    contactNumber: Schema.Attribute.String;
    contentful_id: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    daysOpen: Schema.Attribute.String;
    footerTopSlogan: Schema.Attribute.Text;
    footerTopSubmitButtonText: Schema.Attribute.String;
    footerTopText: Schema.Attribute.Text;
    footerTopTitle: Schema.Attribute.String;
    helpTitle: Schema.Attribute.String;
    hoursOpen: Schema.Attribute.String;
    linkColumns: Schema.Attribute.Relation<
      'manyToMany',
      'api::footer-link-column.footer-link-column'
    >;
    linkedInLink: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::footer.footer'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    slogan: Schema.Attribute.Text;
    twitterLink: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    version: Schema.Attribute.String;
    youtubeLink: Schema.Attribute.String;
  };
}

export interface ApiGeneralContentPageGeneralContentPage
  extends Struct.CollectionTypeSchema {
  collectionName: 'general_content_pages';
  info: {
    description: 'Imported from Contentful type generalContentPage';
    displayName: 'General Content Page';
    pluralName: 'general-content-pages';
    singularName: 'general-content-page';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    contentful_id: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.Text;
    helmetTitle: Schema.Attribute.String;
    keywords: Schema.Attribute.String & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::general-content-page.general-content-page'
    > &
      Schema.Attribute.Private;
    pageSections: Schema.Attribute.JSON & Schema.Attribute.Required;
    path: Schema.Attribute.String & Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiHomeAboutAboutItemsDataHomeAboutAboutItemsData
  extends Struct.CollectionTypeSchema {
  collectionName: 'home_about_about_items_datas';
  info: {
    description: 'Imported from Contentful type HomeAboutAboutItemsData';
    displayName: 'Page Content Section 08/AboutItemsData';
    pluralName: 'home-about-about-items-datas';
    singularName: 'home-about-about-items-data';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    contentful_id: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    icon: Schema.Attribute.String & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::home-about-about-items-data.home-about-about-items-data'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    text: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiHomeAboutHomeAbout extends Struct.CollectionTypeSchema {
  collectionName: 'home_abouts';
  info: {
    description: 'Imported from Contentful type homeAbout';
    displayName: 'Page Content Section 08';
    pluralName: 'home-abouts';
    singularName: 'home-about';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    aboutItems: Schema.Attribute.JSON & Schema.Attribute.Required;
    backgroundImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    > &
      Schema.Attribute.Required;
    contentful_id: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    details: Schema.Attribute.String & Schema.Attribute.Required;
    header: Schema.Attribute.String & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::home-about.home-about'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    slogan: Schema.Attribute.String & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    version: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ApiHomeAlertBannerHomeAlertBanner
  extends Struct.CollectionTypeSchema {
  collectionName: 'home_alert_banners';
  info: {
    description: 'Imported from Contentful type homeAlertBanner';
    displayName: 'Page Banner Section 05 (Alerts)';
    pluralName: 'home-alert-banners';
    singularName: 'home-alert-banner';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    contentful_id: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::home-alert-banner.home-alert-banner'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    text: Schema.Attribute.RichText;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    version: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ApiHomeBusinessHomeBusiness
  extends Struct.CollectionTypeSchema {
  collectionName: 'home_businesses';
  info: {
    description: 'Imported from Contentful type homeBusiness';
    displayName: 'Page Content Section 09';
    pluralName: 'home-businesses';
    singularName: 'home-business';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    > &
      Schema.Attribute.Required;
    buttonText: Schema.Attribute.String & Schema.Attribute.Required;
    contentful_id: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::home-business.home-business'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    slogan: Schema.Attribute.String & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    version: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ApiHomePageHomePage extends Struct.CollectionTypeSchema {
  collectionName: 'home_pages';
  info: {
    description: 'Imported from Contentful type homePage';
    displayName: 'HomePage';
    pluralName: 'home-pages';
    singularName: 'home-page';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    contentful_id: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    helmetDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    helmetKeywords: Schema.Attribute.Text & Schema.Attribute.Required;
    helmetTitle: Schema.Attribute.String & Schema.Attribute.Required;
    homepageSections: Schema.Attribute.JSON;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::home-page.home-page'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    version: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ApiHomeSmallBannerHomeSmallBanner
  extends Struct.CollectionTypeSchema {
  collectionName: 'home_small_banners';
  info: {
    description: 'Imported from Contentful type homeSmallBanner';
    displayName: 'Page Banner Section 04';
    pluralName: 'home-small-banners';
    singularName: 'home-small-banner';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    contentful_id: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::home-small-banner.home-small-banner'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    text: Schema.Attribute.String;
    title: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    version: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ApiHomeValueSolutionsAccordionDataHomeValueSolutionsAccordionData
  extends Struct.CollectionTypeSchema {
  collectionName: 'home_value_solutions_accordion_datas';
  info: {
    description: 'Imported from Contentful type homeValueSolutionsAccordionData';
    displayName: 'Page Content Section 05/AccordionData';
    pluralName: 'home-value-solutions-accordion-datas';
    singularName: 'home-value-solutions-accordion-data';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    accordionImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    > &
      Schema.Attribute.Required;
    accordionText: Schema.Attribute.String & Schema.Attribute.Required;
    accordionTitle: Schema.Attribute.String & Schema.Attribute.Required;
    accordionUrl: Schema.Attribute.String & Schema.Attribute.Required;
    contentful_id: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::home-value-solutions-accordion-data.home-value-solutions-accordion-data'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiHomeWeServeServiceListDataHomeWeServeServiceListData
  extends Struct.CollectionTypeSchema {
  collectionName: 'home_we_serve_service_list_datas';
  info: {
    description: 'Imported from Contentful type HomeWeServeServiceListData';
    displayName: 'Page Content Section 06/ServiceListData';
    pluralName: 'home-we-serve-service-list-datas';
    singularName: 'home-we-serve-service-list-data';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    contentful_id: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    icon: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::home-we-serve-service-list-data.home-we-serve-service-list-data'
    > &
      Schema.Attribute.Private;
    pdfDownload: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    > &
      Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    text: Schema.Attribute.String & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiHomeWeServeHomeWeServe extends Struct.CollectionTypeSchema {
  collectionName: 'home_we_serves';
  info: {
    description: 'Imported from Contentful type homeWeServe';
    displayName: 'Page Content Section 06';
    pluralName: 'home-we-serves';
    singularName: 'home-we-serve';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    contentful_id: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    header: Schema.Attribute.String & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::home-we-serve.home-we-serve'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    serviceList: Schema.Attribute.JSON & Schema.Attribute.Required;
    slogan: Schema.Attribute.String & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    version: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ApiHomeaccountHomeaccount extends Struct.CollectionTypeSchema {
  collectionName: 'homeaccounts';
  info: {
    description: 'Imported from Contentful type homeaccount';
    displayName: 'Page Content Section 07';
    pluralName: 'homeaccounts';
    singularName: 'homeaccount';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    buttonText: Schema.Attribute.String & Schema.Attribute.Required;
    contentful_id: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    details: Schema.Attribute.Text & Schema.Attribute.Required;
    header: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::homeaccount.homeaccount'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    version: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ApiHomecategoriesDataHomecategoriesData
  extends Struct.CollectionTypeSchema {
  collectionName: 'homecategories_datas';
  info: {
    description: 'Imported from Contentful type homecategoriesData';
    displayName: 'Page Content Section 03/categoriesData';
    pluralName: 'homecategories-datas';
    singularName: 'homecategories-data';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    bannerImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    > &
      Schema.Attribute.Required;
    categoryImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    > &
      Schema.Attribute.Required;
    categoryName: Schema.Attribute.String & Schema.Attribute.Required;
    categoryText: Schema.Attribute.Text & Schema.Attribute.Required;
    categoryTitle: Schema.Attribute.String & Schema.Attribute.Required;
    contentful_id: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::homecategories-data.homecategories-data'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiHomecategoryHomecategory
  extends Struct.CollectionTypeSchema {
  collectionName: 'homecategories';
  info: {
    description: 'Imported from Contentful type homecategories';
    displayName: 'Page Content Section 03';
    pluralName: 'homecategories';
    singularName: 'homecategory';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    bannerButtonText: Schema.Attribute.String & Schema.Attribute.Required;
    categoriesData: Schema.Attribute.JSON & Schema.Attribute.Required;
    contentful_id: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    header: Schema.Attribute.String & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::homecategory.homecategory'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    version: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ApiHomeheroHomehero extends Struct.CollectionTypeSchema {
  collectionName: 'homeheros';
  info: {
    description: 'Imported from Contentful type homehero';
    displayName: 'Page Banner Section 02';
    pluralName: 'homeheros';
    singularName: 'homehero';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    > &
      Schema.Attribute.Required;
    buttonColor: Schema.Attribute.String;
    buttonFontColor: Schema.Attribute.String;
    buttonText: Schema.Attribute.String & Schema.Attribute.Required;
    contentful_id: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    detail: Schema.Attribute.String & Schema.Attribute.Required;
    detailColor: Schema.Attribute.String;
    detailFontSize: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::homehero.homehero'
    > &
      Schema.Attribute.Private;
    playButtonDisplayed: Schema.Attribute.Boolean;
    publishedAt: Schema.Attribute.DateTime;
    slogan: Schema.Attribute.String & Schema.Attribute.Required;
    sloganColor: Schema.Attribute.String;
    sloganFontSize: Schema.Attribute.String;
    sloganLine2: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    version: Schema.Attribute.String & Schema.Attribute.Required;
    videoLink: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ApiHomerunProfitablyHomerunProfitably
  extends Struct.CollectionTypeSchema {
  collectionName: 'homerun_profitablies';
  info: {
    description: 'Imported from Contentful type homerunProfitably';
    displayName: 'Page Content Section 04';
    pluralName: 'homerun-profitablies';
    singularName: 'homerun-profitably';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    accordions: Schema.Attribute.JSON & Schema.Attribute.Required;
    contentful_id: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    header: Schema.Attribute.String & Schema.Attribute.Required;
    linkText: Schema.Attribute.String & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::homerun-profitably.homerun-profitably'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    version: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ApiHomerunProfitablyaccordionHomerunProfitablyaccordion
  extends Struct.CollectionTypeSchema {
  collectionName: 'homerun_profitablyaccordions';
  info: {
    description: 'Imported from Contentful type homerunProfitablyaccordions';
    displayName: 'Page Content Section 04/AccordionData';
    pluralName: 'homerun-profitablyaccordions';
    singularName: 'homerun-profitablyaccordion';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    accordionImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    > &
      Schema.Attribute.Required;
    accordionText: Schema.Attribute.String & Schema.Attribute.Required;
    accordionTitle: Schema.Attribute.String & Schema.Attribute.Required;
    contentful_id: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::homerun-profitablyaccordion.homerun-profitablyaccordion'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiHomevalueSolutionHomevalueSolution
  extends Struct.CollectionTypeSchema {
  collectionName: 'homevalue_solutions';
  info: {
    description: 'Imported from Contentful type homevalueSolutions';
    displayName: 'Page Content Section 05';
    pluralName: 'homevalue-solutions';
    singularName: 'homevalue-solution';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    accordions: Schema.Attribute.JSON & Schema.Attribute.Required;
    contentful_id: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    header: Schema.Attribute.String & Schema.Attribute.Required;
    linkText: Schema.Attribute.String & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::homevalue-solution.homevalue-solution'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    slogan: Schema.Attribute.String & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    version: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ApiIndustryInsightsSectionDataIndustryInsightsSectionData
  extends Struct.CollectionTypeSchema {
  collectionName: 'industry_insights_section_datas';
  info: {
    description: 'Imported from Contentful type industryInsightsSectionData';
    displayName: 'Page Content Section 15/SectionData';
    pluralName: 'industry-insights-section-datas';
    singularName: 'industry-insights-section-data';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    contentful_id: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::industry-insights-section-data.industry-insights-section-data'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    text: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiIndustryInsightsSectionIndustryInsightsSection
  extends Struct.CollectionTypeSchema {
  collectionName: 'industry_insights_sections';
  info: {
    description: 'Imported from Contentful type industryInsightsSection';
    displayName: 'Page Content Section 15';
    pluralName: 'industry-insights-sections';
    singularName: 'industry-insights-section';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    contentful_id: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    industryInsightsData: Schema.Attribute.JSON & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::industry-insights-section.industry-insights-section'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    twitterUsername: Schema.Attribute.String & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    version: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ApiMainNavigationDropdownMainNavigationDropdown
  extends Struct.CollectionTypeSchema {
  collectionName: 'main_navigation_dropdowns';
  info: {
    description: 'Imported from Contentful type mainNavigationDropdown';
    displayName: 'MainNavigationDropdown';
    pluralName: 'main-navigation-dropdowns';
    singularName: 'main-navigation-dropdown';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    contentful_id: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::main-navigation-dropdown.main-navigation-dropdown'
    > &
      Schema.Attribute.Private;
    pages: Schema.Attribute.JSON & Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    version: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ApiMainNavigationMainNavigation
  extends Struct.CollectionTypeSchema {
  collectionName: 'main_navigations';
  info: {
    description: 'Imported from Contentful type mainNavigation';
    displayName: 'MainNavigation';
    pluralName: 'main-navigations';
    singularName: 'main-navigation';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    contentful_id: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::main-navigation.main-navigation'
    > &
      Schema.Attribute.Private;
    navigationSections: Schema.Attribute.JSON & Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    version: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ApiMedSupplyContentBannerMedSupplyContentBanner
  extends Struct.CollectionTypeSchema {
  collectionName: 'med_supply_content_banners';
  info: {
    description: 'Imported from Contentful type medSupplyContentBanner';
    displayName: 'Page Banner Section 01';
    pluralName: 'med-supply-content-banners';
    singularName: 'med-supply-content-banner';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    background: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    contentful_id: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::med-supply-content-banner.med-supply-content-banner'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    text: Schema.Attribute.Text;
    title: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    version: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ApiMedSupplyContentHeadingDistributionCardMedSupplyContentHeadingDistributionCard
  extends Struct.CollectionTypeSchema {
  collectionName: 'med_supply_content_heading_distribution_cards';
  info: {
    description: 'Imported from Contentful type medSupplyContentHeadingDistributionCard';
    displayName: 'Page Content Section 01/Distribution Card';
    pluralName: 'med-supply-content-heading-distribution-cards';
    singularName: 'med-supply-content-heading-distribution-card';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    contentful_id: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::med-supply-content-heading-distribution-card.med-supply-content-heading-distribution-card'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    text: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiMedSupplyContentHeadingMedSupplyContentHeading
  extends Struct.CollectionTypeSchema {
  collectionName: 'med_supply_content_headings';
  info: {
    description: 'Imported from Contentful type medSupplyContentHeading';
    displayName: 'Page Content Section 01';
    pluralName: 'med-supply-content-headings';
    singularName: 'med-supply-content-heading';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    contentful_id: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    distributionCards: Schema.Attribute.JSON & Schema.Attribute.Required;
    icon: Schema.Attribute.String;
    iconBanner: Schema.Attribute.Boolean & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::med-supply-content-heading.med-supply-content-heading'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    subtitle: Schema.Attribute.String & Schema.Attribute.Required;
    text: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    version: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ApiMedSupplyContentSectionMedSupplyContentSection
  extends Struct.CollectionTypeSchema {
  collectionName: 'med_supply_content_sections';
  info: {
    description: 'Imported from Contentful type medSupplyContentSection';
    displayName: 'Page Content Section 02';
    pluralName: 'med-supply-content-sections';
    singularName: 'med-supply-content-section';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    contentful_id: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    icon: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    items: Schema.Attribute.JSON & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::med-supply-content-section.med-supply-content-section'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    subtitle: Schema.Attribute.String & Schema.Attribute.Required;
    text: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    version: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ApiMedSupplycontentSectionitemMedSupplycontentSectionitem
  extends Struct.CollectionTypeSchema {
  collectionName: 'med_supplycontent_sectionitems';
  info: {
    description: 'Imported from Contentful type medSupplycontentSectionitem';
    displayName: 'Page Content Section 02/Item';
    pluralName: 'med-supplycontent-sectionitems';
    singularName: 'med-supplycontent-sectionitem';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    content: Schema.Attribute.RichText & Schema.Attribute.Required;
    contentful_id: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    icon: Schema.Attribute.String & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::med-supplycontent-sectionitem.med-supplycontent-sectionitem'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiNavBarNavBar extends Struct.CollectionTypeSchema {
  collectionName: 'nav_bars';
  info: {
    description: 'Imported from Contentful type navBar';
    displayName: 'NavBar';
    pluralName: 'nav-bars';
    singularName: 'nav-bar';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    contentful_id: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::nav-bar.nav-bar'
    > &
      Schema.Attribute.Private;
    navBarSections: Schema.Attribute.JSON & Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    version: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ApiPageContentSection18TextSectionPageContentSection18TextSection
  extends Struct.CollectionTypeSchema {
  collectionName: 'page_content_section18text_sections';
  info: {
    description: 'Imported from Contentful type pageContentSection18textSection';
    displayName: 'Page Content Section 18/TextSection';
    pluralName: 'page-content-section18text-sections';
    singularName: 'page-content-section18text-section';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    contentful_id: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::page-content-section18text-section.page-content-section18text-section'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    text: Schema.Attribute.RichText;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiPdfDisplayPdfDisplay extends Struct.CollectionTypeSchema {
  collectionName: 'pdf_displays';
  info: {
    description: 'Imported from Contentful type pdfDisplay';
    displayName: 'Page Content Section 17';
    pluralName: 'pdf-displays';
    singularName: 'pdf-display';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    contentful_id: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    document: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::pdf-display.pdf-display'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiResourcesSideBySideResourcesSideBySide
  extends Struct.CollectionTypeSchema {
  collectionName: 'resources_side_by_sides';
  info: {
    description: 'Imported from Contentful type resourcesSideBySide';
    displayName: 'Page Content Section 14';
    pluralName: 'resources-side-by-sides';
    singularName: 'resources-side-by-side';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    contentful_id: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    leftButtonText: Schema.Attribute.String & Schema.Attribute.Required;
    leftItemText: Schema.Attribute.Text & Schema.Attribute.Required;
    leftItemTitle: Schema.Attribute.String & Schema.Attribute.Required;
    leftPdf: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::resources-side-by-side.resources-side-by-side'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    rightButtonText: Schema.Attribute.String & Schema.Attribute.Required;
    rightItemText: Schema.Attribute.Text;
    rightItemTitle: Schema.Attribute.String & Schema.Attribute.Required;
    rightPdf: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    version: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ApiWebsiteContentWebsiteContent
  extends Struct.CollectionTypeSchema {
  collectionName: 'website_contents';
  info: {
    description: 'Imported from Contentful type websiteContent';
    displayName: 'WebsiteContent';
    pluralName: 'website-contents';
    singularName: 'website-content';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    contentful_id: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::website-content.website-content'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    version: Schema.Attribute.String;
    websiteContentData: Schema.Attribute.JSON & Schema.Attribute.Required;
  };
}

export interface ApiWhoWeServeHeaderHeroWhoWeServeHeaderHero
  extends Struct.CollectionTypeSchema {
  collectionName: 'who_we_serve_header_heros';
  info: {
    displayName: 'Page Banner Section 03';
    pluralName: 'who-we-serve-header-heros';
    singularName: 'who-we-serve-header-hero';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    altImageText: Schema.Attribute.String & Schema.Attribute.Required;
    contentful_id: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
    imageMobile: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    > &
      Schema.Attribute.Required;
    layouttype: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::who-we-serve-header-hero.who-we-serve-header-hero'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    text: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    version: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ApiWhoWeServeMarketsServedServiceWhoWeServeMarketsServedService
  extends Struct.CollectionTypeSchema {
  collectionName: 'who_we_serve_markets_served_services';
  info: {
    description: 'Imported from Contentful type whoWeServeMarketsServedServices';
    displayName: 'Page Content Section 12';
    pluralName: 'who-we-serve-markets-served-services';
    singularName: 'who-we-serve-markets-served-service';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    contentful_id: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::who-we-serve-markets-served-service.who-we-serve-markets-served-service'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    services: Schema.Attribute.JSON & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    version: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ApiWhoWeServePageWhoWeServePage
  extends Struct.CollectionTypeSchema {
  collectionName: 'who_we_serve_pages';
  info: {
    description: 'Imported from Contentful type whoWeServePage';
    displayName: 'WhoWeServePage';
    pluralName: 'who-we-serve-pages';
    singularName: 'who-we-serve-page';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    contentful_id: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::who-we-serve-page.who-we-serve-page'
    > &
      Schema.Attribute.Private;
    pageSections: Schema.Attribute.JSON & Schema.Attribute.Required;
    path: Schema.Attribute.String & Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    version: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ApiWhoWeServemarketsServedServicesserviceWhoWeServemarketsServedServicesservice
  extends Struct.CollectionTypeSchema {
  collectionName: 'who_we_servemarkets_served_servicesservices';
  info: {
    displayName: 'Page Content Section 12/Service';
    pluralName: 'who-we-servemarkets-served-servicesservices';
    singularName: 'who-we-servemarkets-served-servicesservice';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    activeStatus: Schema.Attribute.String & Schema.Attribute.Required;
    altImageText: Schema.Attribute.String & Schema.Attribute.Required;
    buttonText: Schema.Attribute.String & Schema.Attribute.Required;
    contentful_id: Schema.Attribute.String & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    descriptionOne: Schema.Attribute.Text & Schema.Attribute.Required;
    descriptionTwo: Schema.Attribute.Text;
    iconImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    > &
      Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::who-we-servemarkets-served-servicesservice.who-we-servemarkets-served-servicesservice'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    tabCatId: Schema.Attribute.String & Schema.Attribute.Required;
    tabId: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginContentReleasesRelease
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_releases';
  info: {
    displayName: 'Release';
    pluralName: 'releases';
    singularName: 'release';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    actions: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release-action'
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    releasedAt: Schema.Attribute.DateTime;
    scheduledAt: Schema.Attribute.DateTime;
    status: Schema.Attribute.Enumeration<
      ['ready', 'blocked', 'failed', 'done', 'empty']
    > &
      Schema.Attribute.Required;
    timezone: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginContentReleasesReleaseAction
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_release_actions';
  info: {
    displayName: 'Release Action';
    pluralName: 'release-actions';
    singularName: 'release-action';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    contentType: Schema.Attribute.String & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    entryDocumentId: Schema.Attribute.String;
    isEntryValid: Schema.Attribute.Boolean;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release-action'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    release: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::content-releases.release'
    >;
    type: Schema.Attribute.Enumeration<['publish', 'unpublish']> &
      Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginI18NLocale extends Struct.CollectionTypeSchema {
  collectionName: 'i18n_locale';
  info: {
    collectionName: 'locales';
    description: '';
    displayName: 'Locale';
    pluralName: 'locales';
    singularName: 'locale';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    code: Schema.Attribute.String & Schema.Attribute.Unique;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::i18n.locale'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.SetMinMax<
        {
          max: 50;
          min: 1;
        },
        number
      >;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginReviewWorkflowsWorkflow
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_workflows';
  info: {
    description: '';
    displayName: 'Workflow';
    name: 'Workflow';
    pluralName: 'workflows';
    singularName: 'workflow';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    contentTypes: Schema.Attribute.JSON &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'[]'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    publishedAt: Schema.Attribute.DateTime;
    stageRequiredToPublish: Schema.Attribute.Relation<
      'oneToOne',
      'plugin::review-workflows.workflow-stage'
    >;
    stages: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow-stage'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginReviewWorkflowsWorkflowStage
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_workflows_stages';
  info: {
    description: '';
    displayName: 'Stages';
    name: 'Workflow Stage';
    pluralName: 'workflow-stages';
    singularName: 'workflow-stage';
  };
  options: {
    draftAndPublish: false;
    version: '1.1.0';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    color: Schema.Attribute.String & Schema.Attribute.DefaultTo<'#4945FF'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow-stage'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String;
    permissions: Schema.Attribute.Relation<'manyToMany', 'admin::permission'>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    workflow: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::review-workflows.workflow'
    >;
  };
}

export interface PluginUploadFile extends Struct.CollectionTypeSchema {
  collectionName: 'files';
  info: {
    description: '';
    displayName: 'File';
    pluralName: 'files';
    singularName: 'file';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    alternativeText: Schema.Attribute.Text;
    caption: Schema.Attribute.Text;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    ext: Schema.Attribute.String;
    folder: Schema.Attribute.Relation<'manyToOne', 'plugin::upload.folder'> &
      Schema.Attribute.Private;
    folderPath: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    formats: Schema.Attribute.JSON;
    hash: Schema.Attribute.String & Schema.Attribute.Required;
    height: Schema.Attribute.Integer;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::upload.file'
    > &
      Schema.Attribute.Private;
    mime: Schema.Attribute.String & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    previewUrl: Schema.Attribute.Text;
    provider: Schema.Attribute.String & Schema.Attribute.Required;
    provider_metadata: Schema.Attribute.JSON;
    publishedAt: Schema.Attribute.DateTime;
    related: Schema.Attribute.Relation<'morphToMany'>;
    size: Schema.Attribute.Decimal & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    url: Schema.Attribute.Text & Schema.Attribute.Required;
    width: Schema.Attribute.Integer;
  };
}

export interface PluginUploadFolder extends Struct.CollectionTypeSchema {
  collectionName: 'upload_folders';
  info: {
    displayName: 'Folder';
    pluralName: 'folders';
    singularName: 'folder';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    children: Schema.Attribute.Relation<'oneToMany', 'plugin::upload.folder'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    files: Schema.Attribute.Relation<'oneToMany', 'plugin::upload.file'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::upload.folder'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    parent: Schema.Attribute.Relation<'manyToOne', 'plugin::upload.folder'>;
    path: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    pathId: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginUsersPermissionsPermission
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_permissions';
  info: {
    description: '';
    displayName: 'Permission';
    name: 'permission';
    pluralName: 'permissions';
    singularName: 'permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.permission'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    role: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_roles';
  info: {
    description: '';
    displayName: 'Role';
    name: 'role';
    pluralName: 'roles';
    singularName: 'role';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.role'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    publishedAt: Schema.Attribute.DateTime;
    type: Schema.Attribute.String & Schema.Attribute.Unique;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    users: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.user'
    >;
  };
}

export interface PluginUsersPermissionsUser
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_users';
  info: {
    description: '';
    displayName: 'User';
    name: 'user';
    pluralName: 'users';
    singularName: 'user';
  };
  options: {
    draftAndPublish: false;
    timestamps: true;
  };
  attributes: {
    blocked: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    confirmationToken: Schema.Attribute.String & Schema.Attribute.Private;
    confirmed: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    email: Schema.Attribute.Email &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.user'
    > &
      Schema.Attribute.Private;
    password: Schema.Attribute.Password &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    resetPasswordToken: Schema.Attribute.String & Schema.Attribute.Private;
    role: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    username: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ContentTypeSchemas {
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::permission': AdminPermission;
      'admin::role': AdminRole;
      'admin::session': AdminSession;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'admin::user': AdminUser;
      'api::about-services-section.about-services-section': ApiAboutServicesSectionAboutServicesSection;
      'api::about-services-sectionservice.about-services-sectionservice': ApiAboutServicesSectionserviceAboutServicesSectionservice;
      'api::about-warehouse-section.about-warehouse-section': ApiAboutWarehouseSectionAboutWarehouseSection;
      'api::banner.banner': ApiBannerBanner;
      'api::category-bullet-point.category-bullet-point': ApiCategoryBulletPointCategoryBulletPoint;
      'api::category-content-page.category-content-page': ApiCategoryContentPageCategoryContentPage;
      'api::category-content-tab.category-content-tab': ApiCategoryContentTabCategoryContentTab;
      'api::category-faq.category-faq': ApiCategoryFaqCategoryFaq;
      'api::category-featured-brand-group.category-featured-brand-group': ApiCategoryFeaturedBrandGroupCategoryFeaturedBrandGroup;
      'api::category-featured-brand.category-featured-brand': ApiCategoryFeaturedBrandCategoryFeaturedBrand;
      'api::contact-page.contact-page': ApiContactPageContactPage;
      'api::content-page.content-page': ApiContentPageContentPage;
      'api::content-text-section.content-text-section': ApiContentTextSectionContentTextSection;
      'api::featured-categories-carousel.featured-categories-carousel': ApiFeaturedCategoriesCarouselFeaturedCategoriesCarousel;
      'api::footer-link-column-link.footer-link-column-link': ApiFooterLinkColumnLinkFooterLinkColumnLink;
      'api::footer-link-column.footer-link-column': ApiFooterLinkColumnFooterLinkColumn;
      'api::footer.footer': ApiFooterFooter;
      'api::general-content-page.general-content-page': ApiGeneralContentPageGeneralContentPage;
      'api::home-about-about-items-data.home-about-about-items-data': ApiHomeAboutAboutItemsDataHomeAboutAboutItemsData;
      'api::home-about.home-about': ApiHomeAboutHomeAbout;
      'api::home-alert-banner.home-alert-banner': ApiHomeAlertBannerHomeAlertBanner;
      'api::home-business.home-business': ApiHomeBusinessHomeBusiness;
      'api::home-page.home-page': ApiHomePageHomePage;
      'api::home-small-banner.home-small-banner': ApiHomeSmallBannerHomeSmallBanner;
      'api::home-value-solutions-accordion-data.home-value-solutions-accordion-data': ApiHomeValueSolutionsAccordionDataHomeValueSolutionsAccordionData;
      'api::home-we-serve-service-list-data.home-we-serve-service-list-data': ApiHomeWeServeServiceListDataHomeWeServeServiceListData;
      'api::home-we-serve.home-we-serve': ApiHomeWeServeHomeWeServe;
      'api::homeaccount.homeaccount': ApiHomeaccountHomeaccount;
      'api::homecategories-data.homecategories-data': ApiHomecategoriesDataHomecategoriesData;
      'api::homecategory.homecategory': ApiHomecategoryHomecategory;
      'api::homehero.homehero': ApiHomeheroHomehero;
      'api::homerun-profitably.homerun-profitably': ApiHomerunProfitablyHomerunProfitably;
      'api::homerun-profitablyaccordion.homerun-profitablyaccordion': ApiHomerunProfitablyaccordionHomerunProfitablyaccordion;
      'api::homevalue-solution.homevalue-solution': ApiHomevalueSolutionHomevalueSolution;
      'api::industry-insights-section-data.industry-insights-section-data': ApiIndustryInsightsSectionDataIndustryInsightsSectionData;
      'api::industry-insights-section.industry-insights-section': ApiIndustryInsightsSectionIndustryInsightsSection;
      'api::main-navigation-dropdown.main-navigation-dropdown': ApiMainNavigationDropdownMainNavigationDropdown;
      'api::main-navigation.main-navigation': ApiMainNavigationMainNavigation;
      'api::med-supply-content-banner.med-supply-content-banner': ApiMedSupplyContentBannerMedSupplyContentBanner;
      'api::med-supply-content-heading-distribution-card.med-supply-content-heading-distribution-card': ApiMedSupplyContentHeadingDistributionCardMedSupplyContentHeadingDistributionCard;
      'api::med-supply-content-heading.med-supply-content-heading': ApiMedSupplyContentHeadingMedSupplyContentHeading;
      'api::med-supply-content-section.med-supply-content-section': ApiMedSupplyContentSectionMedSupplyContentSection;
      'api::med-supplycontent-sectionitem.med-supplycontent-sectionitem': ApiMedSupplycontentSectionitemMedSupplycontentSectionitem;
      'api::nav-bar.nav-bar': ApiNavBarNavBar;
      'api::page-content-section18text-section.page-content-section18text-section': ApiPageContentSection18TextSectionPageContentSection18TextSection;
      'api::pdf-display.pdf-display': ApiPdfDisplayPdfDisplay;
      'api::resources-side-by-side.resources-side-by-side': ApiResourcesSideBySideResourcesSideBySide;
      'api::website-content.website-content': ApiWebsiteContentWebsiteContent;
      'api::who-we-serve-header-hero.who-we-serve-header-hero': ApiWhoWeServeHeaderHeroWhoWeServeHeaderHero;
      'api::who-we-serve-markets-served-service.who-we-serve-markets-served-service': ApiWhoWeServeMarketsServedServiceWhoWeServeMarketsServedService;
      'api::who-we-serve-page.who-we-serve-page': ApiWhoWeServePageWhoWeServePage;
      'api::who-we-servemarkets-served-servicesservice.who-we-servemarkets-served-servicesservice': ApiWhoWeServemarketsServedServicesserviceWhoWeServemarketsServedServicesservice;
      'plugin::content-releases.release': PluginContentReleasesRelease;
      'plugin::content-releases.release-action': PluginContentReleasesReleaseAction;
      'plugin::i18n.locale': PluginI18NLocale;
      'plugin::review-workflows.workflow': PluginReviewWorkflowsWorkflow;
      'plugin::review-workflows.workflow-stage': PluginReviewWorkflowsWorkflowStage;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
    }
  }
}
