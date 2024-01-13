import type { Schema, Attribute } from '@strapi/strapi';

export interface MiniCompQuestions extends Schema.Component {
  collectionName: 'components_mini_comp_questions';
  info: {
    displayName: 'questions';
    icon: 'question';
  };
  attributes: {
    question: Attribute.String;
    answer: Attribute.Text;
  };
}

export interface MiniCompReportFiles extends Schema.Component {
  collectionName: 'components_mini_comp_report_files';
  info: {
    displayName: 'reportFiles';
    icon: 'filePdf';
  };
  attributes: {
    description: Attribute.String & Attribute.Required;
    asset: Attribute.Media & Attribute.Required;
  };
}

export interface MiniCompReportTab extends Schema.Component {
  collectionName: 'components_mini_comp_report_tabs';
  info: {
    displayName: 'reportTab';
    icon: 'calendar';
  };
  attributes: {
    tabTitle: Attribute.String & Attribute.Required;
    reportFiles: Attribute.Component<'mini-comp.report-files', true>;
    questions: Attribute.Component<'mini-comp.questions', true>;
  };
}

export interface PageCompReports extends Schema.Component {
  collectionName: 'components_page_comp_reports';
  info: {
    displayName: 'reports';
    icon: 'folder';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    image: Attribute.Media & Attribute.Required;
    reportTab: Attribute.Component<'mini-comp.report-tab', true> &
      Attribute.SetMinMax<{
        min: 3;
        max: 3;
      }>;
  };
}

export interface SharedMetaSocial extends Schema.Component {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
  };
  attributes: {
    socialNetwork: Attribute.Enumeration<['facebook', 'twitter', 'linkedin']>;
    title: Attribute.String;
    description: Attribute.Text;
    image: Attribute.Media & Attribute.Required;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'server';
  };
  attributes: {
    metaTitle: Attribute.String;
    metaDescription: Attribute.String;
    metaImage: Attribute.Media;
    metaSocial: Attribute.Component<'shared.meta-social', true>;
    keywords: Attribute.String;
    metaRobots: Attribute.String;
    structuredData: Attribute.JSON;
    metaViewport: Attribute.String;
    canonicalURL: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'mini-comp.questions': MiniCompQuestions;
      'mini-comp.report-files': MiniCompReportFiles;
      'mini-comp.report-tab': MiniCompReportTab;
      'page-comp.reports': PageCompReports;
      'shared.meta-social': SharedMetaSocial;
      'shared.seo': SharedSeo;
    }
  }
}
