import { techLogos } from '@src/assets/tech-logos'

const tech = {
  react: {
    name: 'React',
    image: techLogos.react,
    inProgress: false,
  },
  typescript: {
    name: 'TypeScript',
    image: techLogos.typescript,
    inProgress: false,
  },
  javascript: {
    name: 'JavaScript',
    image: techLogos.javascript,
    inProgress: false,
  },
  html: {
    name: 'HTML5',
    image: techLogos.html,
    inProgress: false,
  },
  css: {
    name: 'CSS3',
    image: techLogos.css,
    inProgress: false,
  },
  sass: {
    name: 'Sass',
    image: techLogos.sass,
    inProgress: false,
  },
  materialUi: {
    name: 'Material UI',
    image: techLogos.materialUi,
    inProgress: false,
  },
  styledComponents: {
    name: 'Styled Components',
    image: techLogos.styledComponents,
    inProgress: false,
  },
  bootstrap: {
    name: 'Bootstrap',
    image: techLogos.bootstrap,
    inProgress: false,
  },
  gatsby: {
    name: 'Gatsby',
    image: techLogos.gatsby,
    inProgress: false,
  },
  node: {
    name: 'NodeJS',
    image: techLogos.node,
    inProgress: false,
  },
  jest: {
    name: 'Jest',
    image: techLogos.jest,
    inProgress: true,
  },
  aws: {
    name: 'Amazon Web Services',
    image: techLogos.aws,
    inProgress: true,
  },
  google: {
    name: 'Chrome Extensions',
    image: techLogos.chrome,
    inProgress: true,
  },
  salesforce: {
    name: 'Salesforce LWC',
    image: techLogos.salesforce,
    inProgress: true,
  },
  angular: {
    name: 'Angular',
    image: techLogos.angular,
    inProgress: true,
  },
  ionic: {
    name: 'Ionic',
    image: techLogos.ionic,
    inProgress: true,
  },
  git: {
    name: 'Git Flow',
    image: techLogos.git,
    inProgress: true,
  },

};

const design = {
  photoshop: {
    name: 'Abobe Photoshop',
    image: techLogos.photoshop,
    inProgress: false,
  },
  figma: {
    name: 'Figma',
    image: techLogos.figma,
    inProgress: false,
  },
  xd: {
    name: 'Adobe XD',
    image: techLogos.xd,
    inProgress: true,
  },
  illustrator: {
    name: 'Adobe Illustrator',
    image: techLogos.illustrator,
    inProgress: true,
  },
};

export const techList = Object.values({...design, ...tech});

export const projectTech = {
  timeego: [tech.html, tech.css, tech.bootstrap, tech.javascript, tech.firebase, design.figma],
};
