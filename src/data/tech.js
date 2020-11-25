import { techLogos } from '@src/assets/tech-logos'

const tech = {
  react: {
    name: 'React',
    image: techLogos.react,
  },
  typescript: {
    name: 'TypeScript',
    image: techLogos.typescript,
  },
  javascript: {
    name: 'JavaScript',
    image: techLogos.javascript,
  },
  html: {
    name: 'HTML5',
    image: techLogos.html,
  },
  css: {
    name: 'CSS3',
    image: techLogos.css,
  },
  sass: {
    name: 'Sass',
    image: techLogos.sass,
  },
  materialUi: {
    name: 'Material UI',
    image: techLogos.materialUi,
  },
  styledComponents: {
    name: 'Styled Components',
    image: techLogos.styledComponents,
  },
  bootstrap: {
    name: 'Bootstrap',
    image: techLogos.bootstrap,
  },
  gatsby: {
    name: 'Gatsby',
    image: techLogos.gatsby,
  },
  node: {
    name: 'NodeJS',
    image: techLogos.node,
  },
  jest: {
    name: 'Jest',
    image: techLogos.jest,
  },
  aws: {
    name: 'Amazon Web Services',
    image: techLogos.aws,
  },
  google: {
    name: 'Chrome Extensions',
    image: techLogos.chrome,
  },
  salesforce: {
    name: 'Salesforce LWC',
    image: techLogos.salesforce,
  },
  angular: {
    name: 'Angular',
    image: techLogos.angular,
  },
  ionic: {
    name: 'Ionic',
    image: techLogos.ionic,
  },
  git: {
    name: 'Git Flow',
    image: techLogos.git,
  },
  googleDisplay: {
    name: 'Google Display and Video',
    image: techLogos.googleDisplay,
  },
  dart: {
    name: 'Dart JS',
    image: techLogos.dart,
  },
  backbone: {
    name: 'Backbone JS',
    image: techLogos.backbone,
  },
  vue: {
    name: 'Vue JS',
    image: techLogos.vue,
  },
  msoffice: {
    name: 'MS Office 360',
    image: techLogos.msoffice,
  },
  lambda: {
    name: 'AWS Lambda',
    image: techLogos.lambda,
  },
  linux: {
    name: 'Linux OS / Bash',
    image: techLogos.linux,
  },
  intellij: {
    name: 'IntelliJ IDEA / Webstorm',
    image: techLogos.intellij,
  },
  postman: {
    name: 'Postman REST Analyzer',
    image: techLogos.postman,
  },
  vim: {
    name: 'Vim Editor',
    image: techLogos.vim,
  },
};

const design = {
  photoshop: {
    name: 'Abobe Photoshop',
    image: techLogos.photoshop,
  },
  figma: {
    name: 'Figma',
    image: techLogos.figma,
  },
  xd: {
    name: 'Adobe XD',
    image: techLogos.xd,
  },
  illustrator: {
    name: 'Adobe Illustrator',
    image: techLogos.illustrator,
  },
  zeplin: {
    name: 'Zeplin',
    image: techLogos.zeplin,
  },
  sketch: {
    name: 'Sketch',
    image: techLogos.sketch,
  },
  invision: {
    name: 'Invision',
    image: techLogos.invision,
  },
  premiere: {
    name: 'Adobe Premiere',
    image: techLogos.premiere,
  },
  apple: {
    name: 'Apple OS / XCode',
    image: techLogos.apple,
  },
  acrobat: {
    name: 'Adobe Acrobat',
    image: techLogos.acrobat,
  },
};

export const techList = Object.values({...design, ...tech});
