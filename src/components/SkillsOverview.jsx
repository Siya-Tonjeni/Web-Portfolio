import React from "react";
import uxImage from "../assets/design.png";
import webDevImage from "../assets/web-developer.png";

const SkillsOverview = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* CARD 1 */}
          <div className="backdrop-blur-xl bg-white/40 border border-white/30 shadow-xl rounded-3xl p-10 text-center transition-transform hover:-translate-y-2">
            <img src={uxImage} alt="UX/UI Design" className="w-32 mx-auto mb-6" />
            <h3 className="text-2xl font-bold mb-3">UX/UI Design</h3>
            <p className="text-gray-700 leading-relaxed">
              Crafting intuitive, user-centered interfaces that create seamless and enjoyable digital experiences.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="backdrop-blur-xl bg-white/40 border border-white/30 shadow-xl rounded-3xl p-10 text-center transition-transform hover:-translate-y-2">
            <img src={webDevImage} alt="Web Development" className="w-32 mx-auto mb-6" />
            <h3 className="text-2xl font-bold mb-3">Web Development</h3>
            <p className="text-gray-700 leading-relaxed">
              Developing responsive, high-performance websites using modern frameworks and best practices.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default SkillsOverview;
