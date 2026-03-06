import React from 'react';

const List = () => {
  return (
    <section className="text-gray-300 body-font font-serif bg-[#030712]">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-white mb-4">
            TechExa Vision - Crafting Digital Excellence
          </h1>
          <p className="text-gray-400 leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            TechExa Vision is a cutting-edge software house committed to transforming ideas into powerful digital solutions. From web design to full-stack development and mobile applications, we deliver tailored software that empowers businesses to grow in the digital era.
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {[
            'Custom Web & Mobile App Development',
            'Modern UI/UX Design',
            'Full-Stack Solutions with Scalable Architecture',
            'E-Commerce Platform Development',
            'Enterprise Software & Admin Dashboards',
            'Reliable Support & Maintenance Services'
          ].map((item, index) => (
            <div key={index} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded flex p-4 h-full items-center border border-white/10 hover:border-blue-500/30 transition-all duration-300">
                <span className="title-font font-medium text-gray-300">{item}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default List;
