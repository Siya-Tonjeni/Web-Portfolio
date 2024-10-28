import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import profileImg from '../assets/profile picture.jpg';

const AboutPage = () => {
  return (
    <>
    <Navbar/>
    <div className="font-sans">
      <section className="bg-pink-100 p-8">
        <div className="max-w-3xl mx-auto flex items-start">
          <div className="mr-6">
            <img
              src= {profileImg}
              alt="My Portfolio"
              className="object-cover rounded"
            />
          </div>
          <div>
            <h1 className="text-xl font-semibold">Siyamtanda Tonjeni</h1>
            <h2 className="text-gray-700">Web Developer & UX/UI Designer</h2>
            <div className="mt-4">
              <h3 className="font-semibold">Bio:</h3>
              <p className="text-gray-700 mt-1">
              A creative with over 2 years of experience in building visually appealing and user-focused websites. My expertise lies in front-end development with React, Tailwind CSS, and responsive design principles, ensuring seamless, high-quality digital experiences across all devices. Alongside web development, I also focus on thoughtful UI/UX design, combining user research, wireframing, and prototyping to create intuitive interfaces that elevate the user journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 px-8">
        <div className="max-w-4xl mx-auto">
          <p className="text-2xl text-gray-800">
            I consider myself as a well-organized person, problem solver and some may say I am OCD but I have a high attention to detail. 
          </p>
        </div>
      </section>

      <section className="bg-white py-12 px-8">
        <div className="max-w-4xl mx-auto grid gap-4">
          <div className="bg-green-700 text-white p-4 rounded">
            <p><span className="font-semibold">I’m a passionate baker!</span> When I’m not coding, you might find me experimenting with recipes and whipping up new treats in the kitchen.</p>
          </div>
          <div className="bg-green-700 text-white p-4 rounded">
            <p>I won a hackathon with my team, where we designed an AI-powered solution to address youth unemployment.</p>
          </div>
          <div className="bg-green-700 text-white p-4 rounded">
            <p>I recently built an artist portfolio for Falco Holmz, showcasing my ability to develop personalized and visually engaging websites.</p>
          </div>
          <div className="bg-white text-gray-800 border border-gray-300 p-4 rounded">
            <p>
              I am always in the lookout for excitement and inspiration. I seek for professional development and I am a very proactive person with a sense of responsibility.
            </p>
          </div>
        </div>
      </section>
    </div>
    <Footer/>
    </>
  );
};

export default AboutPage;
