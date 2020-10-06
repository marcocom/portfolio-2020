import { projectAssets } from '@src/assets/projects'

export const projects = {
  timeego: {
    title: 'Timeego',
    subtitle: 'Studying Web App',
    description: `Timeego is a web app designed to help students track their time spent studying. It allows users to add courses, log their time studying, and view their total study time in each course.`,
    link: '/timeego/',
    image: projectAssets.timeego.image,
    video: projectAssets.timeego.video,
    background: '#10ffcb',
    githubLink: 'https://github.com/antcar112/timeego',
    hostedLink: 'https://timeego-d54c4.firebaseapp.com/',
    devDesc: [
      `Timeego was the result of a four-month project class, in which our team of three conceived, designed and developed a web application. We used an Agile design methodology to build this app. The final project was judged on good UX/UI, complete documentation, and overall functionality.`,
      `The original pitch for this app was to build something that would allow students to log their time studying, and view their total study time in each course. This would help students track, manage and ultimately improve their study habits. I'm proud to say the finished product lives up to this original idea.`,
      `The feature I'm most proud of in this app is the working stopwatch that can be used to track study times. It was built using object-oriented programming, and uses local storage to save it's state. This allows the time to persist across different page loads without the need for a true backend.`,
      `When we started coding, we quickly realized we would have a lot of different JavaScript files. To improve our codes organization, we implemented a Model-View-Controller design pattern. This ultimately made the finished product much easier to navigate.`,
    ],
    features: [
      `A working stopwatch that is able to track times across different page loads.`,
      `Allows users to add, edit and delete courses.`,
      `Displays study times in a graphical format.`,
      `Developed using the Agile design methodology.`,
    ],
  },
};

export const projectList = Object.values(projects);
