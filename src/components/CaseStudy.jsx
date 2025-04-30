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
import CaseStudySolution from './CaseStudySolution';
import cartVid from '../assets/shopping-cart.mp4';
import guardVid from '../assets/yellow-guards.mp4';
import fundVid from '../assets/funda-nam.mp4';
import liveVid from '../assets/live-feed.mp4';
import falcoVid from '../assets/falco-holmz.mp4';
import fantaVid from '../assets/fanta.mp4';
import cart1 from '../assets/cart-1.png';
import cart2 from '../assets/cart-2.png';
import guard1 from '../assets/guard-1.png';
import guard2 from '../assets/guard-2.png';
import live1 from '../assets/live-1.png';
import live2 from '../assets/live-2.png';
import falco1 from '../assets/falco-1.png';
import falco2 from '../assets/falco-2.png';
import CaseStudyDevice from './CaseStudyDevice';
import CaseStudyLearning from './CaseStudyLearning';
import fanta1 from '../assets/work-1.png';
import fanta2 from '../assets/work-1-2.JPG';
import fund1 from '../assets/work-3-2.JPG';
import fund2 from '../assets/work-3-3.JPG';
import delfCover from '../assets/deflf-cover.png';
import delf1 from '../assets/delf-device1.png';
import delf2 from '../assets/delf-device2.png';
import delfVid from '../assets/delf-vid.mp4';
import kingCover from '../assets/kingsley.png';
import king1 from '../assets/king-2.png';
import king2 from '../assets/king-3.png';
import kingVid from '../assets/kingsley-vid.mp4';
import mixieCover from '../assets/mixie.png';
import mixie1 from '../assets/mixie-2.png';
import mixie2 from '../assets/mixie-3.png';
import mixieVid from '../assets/mixie-vid.mp4';

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
    solutions: [
      { textBefore: 'Include ', emphasis: 'quantity control buttons', textAfter:' (plus and minus) for each cart item to easily adjust quantities.' },
      { textBefore: 'Provide ', emphasis: 'dynamic total price updates', textAfter:' as the user adjusts item quantities.'  },
    ],
    videoDemo: cartVid,
    imageDevice: [cart1, cart2],
    challenges: 'Implementing dynamic cart updates and payment integration.',
    learning: 'Building a fully functional shopping cart helped me understand complex state management in JavaScript, including how to efficiently handle quantity changes and update pricing in real time. I gained valuable experience in integrating front-end functionality for a smooth user shopping experience',
    imageHeader: cartImageHeader,
    link: 'https://mood-cart.netlify.app/'
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
    solutions: [
      { textBefore: 'Implement a ', emphasis: 'clear service offering section', textAfter:' to educate visitors about security options.'},
      { textBefore: 'Provide a ', emphasis: 'responsive layout', textAfter:' to ensure users on all devices can navigate the site easily.'},
      { textBefore: 'Implement ', emphasis: 'search engine optimization (SEO)', textAfter:' strategies to improve the sites visibility.'},
    ],
    videoDemo: guardVid,
    imageDevice: [guard1, guard2],
    challenges: 'Optimizing for SEO and responsiveness across devices.',
    learning: 'Developing for a security company emphasized the need for clear, direct communication through design. I learned how to prioritize information architecture, ensuring that the most important services and details were easily accessible. The project also taught me how to effectively collaborate with the owner to meet specific business needs.',
    imageHeader: guardsImageHeader,
    link: 'https://yellowguards.netlify.app/'
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
    solutions: [
      { textBefore: 'Implement a ', emphasis: 'personalized dashboard', textAfter:' where students can track their learning progress.'},
      { textBefore: 'Offer ', emphasis: 'gamified learning experiences', textAfter:' to keep students motivated and engaged with their goals.'},
      { textBefore: 'Provide ', emphasis: 'adaptive learning paths', textAfter:' based on student performance and preferences.'},
      { textBefore: 'Design a ', emphasis: 'simplified, intuitive interface', textAfter:' that caters to various learning speeds and styles.'},
    ],
    videoDemo: fundVid,
    imageDevice: [fund1, fund2],
    challenges: 'Designing for accessibility and intuitive navigation for different age groups.',
    learning: 'Creating an educational platform requires a deep understanding of user behavior, particularly for young users or those unfamiliar with technology. I learned how to use user feedback to improve usability, ensuring that the design is both intuitive and engaging. Prototyping were crucial for aligning the stakeholders expectations with the technical and design constraints.',
    imageHeader: fundImageHeader,
    link: 'https://marvelapp.com/prototype/86f9aj6/screen/90780968'
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
    solutions: [
      { textBefore: 'Provide users the ability to ', emphasis: 'share lists in real-time', textAfter:' via unique URLs without requiring accounts.'},
      { textBefore: 'Implement ', emphasis: 'real-time synchronization', textAfter:' so users can see updates made to the list instantly.'},
      { textBefore: 'Allow users to ', emphasis: 'categorize and filter', textAfter:' list items for better organization.'},
    ],
    videoDemo: liveVid,
    imageDevice: [live1, live2],
    challenges: 'Real-time synchronization between users without requiring accounts.',
    learning: 'STILL IN PROGRESS',
    imageHeader: liveImageHeader,
    link: 'https://livefeed.netlify.app/'
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
    solutions: [
      { textBefore: 'Create a ', emphasis: 'minimalist and modern gallery layout', textAfter:' that emphasizes the artwork with minimal distractions.'},
      { textBefore: 'Implement ', emphasis: 'responsive design', textAfter:' that adjusts seamlessly across different device sizes.'},
      { textBefore: 'Offer a ', emphasis: 'contact form', textAfter:' that allows potential buyers to get in touch with the artist directly.'},
      { textBefore: 'Integrate ', emphasis: 'social media sharing options', textAfter:' to increase the artist’s visibility and reach.'},
    ],
    videoDemo: falcoVid,
    imageDevice: [falco1, falco2],
    challenges: 'Building an aesthetic, mobile-responsive website on a limited budget.',
    learning: 'Designing for artists involves balancing aesthetics with functionality. I learned how to work within a limited budget while maintaining a high standard of design and user experience. Additionally, I improved my skills in customizing portfolio pages to reflect the uniqueness of the artist, focusing on responsiveness and visual storytelling.',
    imageHeader: falcoImageHeader,
    link: 'https://falcoholmz.netlify.app/'
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
    solutions: [
      { textBefore: 'Design a ', emphasis: 'interactive product page', textAfter:' with eye-catching visuals and animations to engage users.'},
      { textBefore: 'Provide ', emphasis: 'customization options', textAfter:' for users to select different flavors or package sizes.'},
      { textBefore: 'Implement ', emphasis: 'smooth transitions and animations', textAfter:' to enhance the overall user experience.'},
    ],
    videoDemo: fantaVid,
    imageDevice: [fanta1,fanta2],
    challenges: 'Designing a visually captivating page while maintaining simplicity for users.',
    learning: 'For a branded product page, maintaining consistency with the brand’s identity while enhancing user interaction was key. I learned how to balance corporate design guidelines with creativity, focusing on improving user engagement through interactive design elements.',
    imageHeader: fantaImageHeader,
    link: 'https://www.figma.com/proto/QTTQZrahH595LtvOIuPLYs/Fanta?type=design&node-id=23-45&t=9m9y44H8DSFa9ix2-1&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=23%3A106&show-proto-sidebar=1'
  },
  'mixie': {
    title: 'Mixie - Baking AI',
    description: 'A conceptual AI-powered food recommendation platform that tailors meal suggestions based on user preferences, dietary needs, and real-time mood detection.',
    tools: [figma ],
    overviewText: 'Mixie is a concept design for an AI-powered food recommendation platform that customizes suggestions based on users’ dietary needs, taste preferences, and mood detection. I led the end-to-end UX/UI design for a responsive mobile-first experience.',
    problemText: 'People often struggle to decide what to eat based on how they feel or what’s available. Existing apps rarely personalize recommendations with emotional or health context.',
    goals: [
      {
        icon: Icon1,
        description: 'Design a user-friendly interface that makes food discovery easy and fun'
      },
      {
        icon: Icon2,
        description: 'Explore AI-driven personalization in a UX-friendly way'
      },
      {
        icon: Icon3,
        description: 'Prioritize accessibility and simplicity in the flow'
      }
    ],
    problems: [
      "I don't know what I feel like eating.",
      "Meal apps don’t consider how I’m feeling or my dietary needs.",
      "Too many apps are cluttered or overwhelming.",
    ],
    solutions: [
      { textBefore: 'A ', emphasis: 'Mood-selector', textAfter:' onboarding and filters' },
      { textBefore: 'AI tag-based ', emphasis: 'food matches ', textAfter:' with contextual suggestions'  },
      { textBefore: 'Minimal, ', emphasis: 'calming UI', textAfter:' with large imagery and swipes'  },
    ],
    videoDemo: mixieVid,
    imageDevice: [mixie1, mixie2],
    challenges: 'One major challenge was defining how mood and emotion could be realistically integrated without overwhelming the user. Designing flows that felt personal but not intrusive required careful UX decisions. Another hurdle was ensuring the app remained lightweight and clean while including rich options.',
    learning: 'Designing Mixie taught me how emotional context can influence user experience. I explored mood-based UX strategies and learned how to simplify decision-heavy processes with intuitive navigation and visual storytelling. I also deepened my understanding of accessibility and how to reduce cognitive load, especially for mobile users. This project highlighted how crucial it is to align user needs with elegant, purposeful UI choices.',
    imageHeader: mixieCover,
    link: 'https://www.figma.com/proto/E2ZUUWP75dIXzO0QyDEyMF/Mixie?node-id=1-3&t=zGJ51Sp4xeBCiDnF-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1'
  },
  'kingsley': {
    title: 'Kingsley - Drinks Company',
    description: 'A modern redesign for Kingsley, a local beverage brand, focusing on enhancing brand personality and product discoverability.',
    tools: [figma],
    overviewText: 'Kingsley is a local drinks brand. This redesign project focused on elevating the user experience and aligning the website with a bold, youthful brand image. I redesigned key pages and components.',
    problemText: 'The original website lacked visual appeal and modern usability, making it hard for users to explore products or understand the brand.',
    goals: [
      {
        icon: Icon1,
        description: 'Redesign homepage and product pages'
      },
      {
        icon: Icon2,
        description: 'Reflect the bold, vibrant brand personality'
      },
      {
        icon: Icon3,
        description: 'Make mobile experience smooth and attractive'
      }
    ],
    problems: [
      "The website looks outdated and clunky.",
      "I can’t find product information easily.",
      "It doesn’t work well on my phone.",
    ],
    solutions: [
      { textBefore: 'A ', emphasis: 'Product-focused', textAfter:' hero section and categories'},
      { textBefore: 'Simplified navigation and ', emphasis: 'better layout', textAfter:' spacing'},
      { textBefore: 'A ', emphasis: 'Mobile-first design', textAfter:' principles applied throughout'},
    ],
    videoDemo: kingVid,
    imageDevice: [king1, king2],
    challenges: 'Working within a limited color scheme while keeping the design fresh required creative thinking. It was also challenging to prioritize content hierarchy with a heavy emphasis on visuals. Ensuring legibility and brand consistency across devices took multiple iterations.',
    learning: 'The Kingsley redesign project reinforced the value of branding in UX design. I learned how small details—like consistent typography, white space, and button styling—can dramatically affect user trust and brand perception. This project also improved my ability to translate brand guidelines into functional, attractive components, and sharpened my skill in presenting clear user flows that guide visitors through a bold yet clean interface.',
    imageHeader: kingCover,
    link: 'https://www.figma.com/proto/PoQZhrazOWIvbBr7LDvnlQ/Kingsley-Beverages-Website-Redesign?node-id=58-1039&t=0BtQdxusxoNKIbT9-1&scaling=min-zoom&content-scaling=fixed&page-id=2%3A5'
  },
  'deft': {
    title: 'Deft.Co - Social Media Data Collector',
    description: 'A responsive dashboard web app that consolidates analytics from various social platforms (Instagram, Twitter/X, TikTok, etc.) into one clean interface for users to monitor their social growth.',
    tools: [react, tailwind, node],
    overviewText: 'Deft.co is a social media management web app that helps users view insights across different platforms in one dashboard. I developed the frontend using React and Tailwind CSS with interactive charts and components.',
    problemText: 'Content creators and businesses struggle to track their social performance due to switching between multiple platforms with inconsistent interfaces.',
    goals: [
      {
        icon: Icon1,
        description: 'Build a clean dashboard UI for unified analytics'
      },
      {
        icon: Icon2,
        description: 'Make it responsive and user-friendly'
      },
      {
        icon: Icon3,
        description: 'Visualize data using engaging charts'
      }
    ],
    problems: [
      "It's hard to track my growth across platforms.",
      "Analytics tools are either too complex or limited.",
      "I need to manage and view everything in one place.",
    ],
    solutions: [
      { textBefore: 'One dashboard for ', emphasis: 'all platforms', textAfter:' (Instagram, X, TikTok, etc.)'},
      { textBefore: 'Simple data ', emphasis: 'cards + visual charts', textAfter:' for key metrics'},
      { textBefore: 'Login system to ', emphasis: 'save and revisit', textAfter:' data'},
    ],
    videoDemo: delfVid,
    imageDevice: [delf1, delf2],
    challenges: 'Integrating dynamic chart components without bloating the UI was challenging. Balancing performance with interactivity, especially on smaller screens, meant optimizing both logic and layout. Testing responsiveness across multiple breakpoints was key to success.',
    learning: 'While building Deft.co, I expanded my knowledge of frontend development best practices, especially around handling dynamic data and designing with scalability in mind. Working with charts taught me the importance of clean data visualization and accessibility, while responsive grid systems pushed me to think carefully about layout behavior on different devices. I also became more comfortable using Tailwind CSS utilities to streamline development without sacrificing design consistency.',
    imageHeader: delfCover,
    link: 'https://deftco.netlify.app/'
  },
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
        link={project.link}
      />
      <CaseStudyOverview
        overviewText={project.overviewText}
        problemText={project.problemText}
      />
      <CaseStudyGoals 
        goals={project.goals}
        problems={project.problems}
      />
      <CaseStudySolution solutions={project.solutions}/>

      <CaseStudyDevice 
        videoDemo={project.videoDemo}
        imageDevice={project.imageDevice}
      />
      <CaseStudyLearning
        challenges={project.challenges}
        learning={project.learning}
      />

    </div>
  );
}

export default CaseStudy;
