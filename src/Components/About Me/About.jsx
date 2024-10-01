import React from "react";

const About = () => {
  return (
    <div className="flex justify-center flex-wrap gap-24 bg-white-100">
      <div>
        <img className="w-96" src="./assets/imgs/about.svg" alt="" />
      </div>

      <div className="flex flex-col w-96 gap-10 text-2xl ">
        <h1 className="text-3xl font-bold">About Me</h1>
        <p>
          A Passionate Frontend Web Developer 🚀 having an experience of
          building Web Development with HTML / CSS / JavaScript / TypeScript /
          React JS / Next JS / PWA / Firebase and some other cool libraries and
          frameworks.
        </p>
      </div>
    </div>
  );
};

export default About;
