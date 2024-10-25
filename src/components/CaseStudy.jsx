import React from 'react';
import { useParams } from 'react-router-dom';
import CaseStudyHeader from './CaseStudyHeader';
import CaseStudyOverview from './CaseStudyOverview';
import CaseStudyGoals from './CaseStudyGoals';
import cartImageHeader from '../assets/laptop.png';
import guardsImageHeader from '../assets/laptop - 1.png';
import fundImageHeader from '../assets/project-4.png';
import falcoImageHeader from '../assets/laptop - 3.png';
import liveImageHeader from '../assets/laptop - 2.png';
import fantaImageHeader from '../assets/laptop - 5.png';
import Icon1 from '../assets/icon-1.png';
import Icon2 from '../assets/icon-2.png';
import Icon3 from '../assets/icon-3.png';
import react from '../assets/react.png';
import tailwind from '../assets/tailwind.png';
import css from '../assets/css.png';
import node from '../assets/node.png';
import javascript from '../assets/javascript.png';
import figma from '../assets/Figma.png';
import html from '../assets/html.png';


const caseStudyData = {
  'shopping-cart': {
    title: 'Shopping Cart',
    description: 'A web application for an e-commerce platform allowing users to add items to their cart and checkout.',
    tools: [html, css, javascript ],
    overviewText: 'The Shopping Cart project is an e-commerce solution designed to enhance the online shopping experience through a simple and intuitive interface.',
    problemText: 'Online shoppers often face confusion and frustration due to poorly designed shopping carts with complex or slow user interfaces. Many carts do not reflect real-time updates, leading to user dissatisfaction.',
    goals: [
      {
        icon: Icon1,
        description: 'Provide users with an easy checkout process, improving conversion rates.'
      },
      {
        icon: Icon2,
        description: 'Develop a user-friendly shopping cart interface that allows users to view and manage items seamlessly.'
      },
      {
        icon: Icon3,
        description: 'Enable real-time updates to the cart as users add, remove, or change the quantity of items.'
      }
    ],
    problems: [
      "Difficulty tracking and adjusting items in the cart while shopping.",
      "Inability to update quantities or view total prices in real-time.",
      "Poor mobile shopping experience due to unresponsive design.",
    ],
    challenges: 'Implementing dynamic cart updates and payment integration.',
    results: 'Successfully deployed with real-time cart updates and smooth checkout experience.',
    imageHeader: cartImageHeader,
  },
  'yellow-guards': {
    title: 'Yellow Guards - Security Company',
    description: 'A security solutions company website showcasing services, and enabling contact and quotation requests.',
    tools: [html, css, javascript],
    overviewText: 'Yellow Guards is a website developed for a security company that provides residential and commercial security solutions.',
    problemText: 'Many small security companies struggle to differentiate themselves online due to poorly designed websites that fail to convey trust and professionalism. Yellow Guards needed a platform that would not only showcase their services effectively but also build credibility with potential clients.',
    goals: [
      {
        icon: Icon1,
        description: 'Ensure the website is optimized for search engines (SEO) to attract more traffic.'
      },
      {
        icon: Icon2,
        description: 'Create a secure, professional website to represent the Yellow Guards security company'
      },
      {
        icon: Icon3,
        description: 'Provide clear information on services and contact details to potential clients.'
      }
    ],
    problems: [
      "Lack of trust due to poor online presence and lack of a professional website.",
      "Difficulty finding relevant service information and how to contact the company.",
      "Inconsistent user experience on mobile devices.",
    ],
    challenges: 'Optimizing for SEO and responsiveness across devices.',
    results: 'Increased client inquiries by 30% after launch.',
    imageHeader: guardsImageHeader,
  },
  'funda-nam': {
    title: 'Fund Nam - Educational App',
    description: 'An educational app designed for personalized learning experiences for students.',
    tools: [figma],
    overviewText: 'Funda Nam is an educational platform designed to provide personalized learning experiences for students.',
    problemText: 'In the realm of digital education, students often face a one-size-fits-all approach that fails to address their individual learning needs. Many platforms are too rigid, lacking adaptability in how they present content and interact with students.',
    goals: [
      {
        icon: Icon1,
        description: 'Provide easy-to-use tools for teachers to monitor and assess student progress.'
      },
      {
        icon: Icon2,
        description: 'Design an intuitive platform for personalized learning experiences tailored to students’ needs.'
      },
      {
        icon: Icon3,
        description: 'Encourage students to engage more with their learning materials through a user-friendly interface.'
      }
    ],
    problems: [
      "Lack of a personalized learning platform tailored to individual student needs.",
      "Difficulty for students to stay engaged with their learning materials.",
      "Accessibility issues for students with different abilities or learning needs.",
    ],
    challenges: 'Designing for accessibility and intuitive navigation for different age groups.',
    results: 'Boosted student engagement through a seamless and enjoyable learning platform.',
    imageHeader: fundImageHeader,
  },
  'livefeed': {
    title: 'LiveFeed - Real Time App List',
    description: 'A real-time task management app allowing users to create and share lists with others.',
    tools: [react, tailwind, node],
    overviewText: 'LiveFeed is a real-time list-sharing application that allows users to generate lists of tasks, ideas, or any other content and share them instantly via short URLs.',
    problemText: 'Many collaborative apps require user accounts, which can deter potential users due to privacy concerns or time-consuming sign-ups. Additionally, organizing tasks in real time without using dedicated project management tools can be challenging.',
    goals: [
      {
        icon: Icon1,
        description: 'Implement real-time syncing so that changes appear instantly across users’ devices.'
      },
      {
        icon: Icon2,
        description: 'Build a real-time list-sharing application that allows users to create and share lists via a short URL.'
      },
      {
        icon: Icon3,
        description: 'Ensure users can collaborate on lists without needing an account.'
      }
    ],
    problems: [
      "Inconvenience caused by apps that require accounts for collaboration.",
      "Delay in real-time updates makes collaboration harder.",
      "Complex user interfaces that slow down the list-sharing process.",
    ],
    challenges: 'Real-time synchronization between users without requiring accounts.',
    results: 'Enabled seamless list-sharing and task management in real-time.',
    imageHeader: liveImageHeader,
  },
  'falco-holmz': {
    title: 'Falco Holmz - Artist Portfolio',
    description: 'A portfolio website for an artist to showcase their work and biography.',
    tools: [html, css, javascript],
    overviewText: 'The Falco Holmz Artist Portfolio was developed as an interactive, non-e-commerce website that showcases the works of artist Falco Holmz.',
    problemText: 'Many artists struggle to showcase their work effectively due to budget constraints and limited technical knowledge. Falco Holmz needed a personalized digital portfolio to help increase visibility and attract new clients. ',
    goals: [
      {
        icon: Icon1,
        description: 'Provide a contact page for potential clients to get in touch with the artist.'
      },
      {
        icon: Icon2,
        description: 'Create a visually engaging portfolio website to showcase the artist’s work.'
      },
      {
        icon: Icon3,
        description: 'Ensure the portfolio is easy to navigate, with a focus on displaying artwork prominently.'
      }
    ],
    problems: [
      "Difficulty in showcasing and accessing the artist’s work through traditional methods.",
      "Potential clients struggle to contact the artist due to a lack of online presence.",
      "Lack of visual appeal in existing platforms to present the artist’s work professionally.",
    ],
    challenges: 'Building an aesthetic, mobile-responsive website on a limited budget.',
    results: 'The artist’s work was presented beautifully, attracting more portfolio views.',
    imageHeader: falcoImageHeader,
  },
  'fanta': {
    title: 'Fanta - Product Page',
    description: 'A product page designed for Fanta’s new range of flavors.',
    tools: [figma],
    overviewText: 'The Fanta Product Page project is a UX/UI design concept aimed at enhancing the user engagement of Fantas online presence.',
    problemText: 'Many beverage brands struggle to create engaging online experiences that resonate with their target audience, often leading to low user interaction and brand engagement. Fanta needed a product page design that could capture its playful and energetic brand spirit while providing a smooth, informative browsing experience.',
    goals: [
      {
        icon: Icon1,
        description: 'Improve user engagement through gamification or interactive elements.'
      },
      {
        icon: Icon2,
        description: 'Design a visually appealing and interactive product page for Fanta that aligns with brand identity.'
      },
      {
        icon: Icon3,
        description: 'Enhance the overall user experience to drive product awareness and conversions.'
      }
    ],
    problems: [
      "Lack of engagement with existing product pages, leading to lower user interaction.",
      "Users find it hard to access product information or engage with the brand.",
      "Inconsistent branding and visual design, reducing the appeal of the product.",
    ],
    challenges: 'Designing a visually captivating page while maintaining simplicity for users.',
    results: 'Enhanced customer engagement with a user-friendly product page.',
    imageHeader: fantaImageHeader,
  }
};

function CaseStudy() {
  const { slug } = useParams();
  const project = caseStudyData[slug];

  if (!project) {
    return <div>Case study not found!</div>;
  }

  return (
    <div>
       <CaseStudyHeader 
        title={project.title}
        description={project.description}
        tools={project.tools}
        imageHeader={project.imageHeader}
      />
      <CaseStudyOverview
        overviewText={project.overviewText}
        problemText={project.problemText}
      />
      <CaseStudyGoals 
        goals={project.goals}
        problems={project.problems}
      />
      <p>{project.challenges}</p>
      <p>{project.results}</p>

    </div>
  );
}

export default CaseStudy;
