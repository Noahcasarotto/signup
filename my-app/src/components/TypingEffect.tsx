import React from "react";
import Typewriter from "typewriter-effect";

const TypingEffect = () => {
  return (
    <div>
      <Typewriter
        options={{
          delay: 20,
          cursor: "",
        }}
        onInit={(typewriter) => {
          typewriter
          .typeString(`
          <p><strong>Welcome to the first iteration of our new software tailored for students!</strong> By October, our app will be connected to major university systems, including McGill, ConU, UdeM, and NYU, allowing you to access all your course materials in one place. Currently, it's connected to the files you upload, but soon you'll be able to ask it questions like:</p>
          
          <p><strong> Hey Arvo, what homework do I have this week?</strong></p>
          
          <p><strong>Arvo;</strong> <br />
          (Icon and link to assignment) You have a COMP 552 assignment on the traveling salesman problem, <br />
          (Icon and link to date in calendar) PHYS 340 midterm on Thursday covering Lagrangian multipliers and non-relativistic space, <br />
          and a FACC 300 quiz on basic accounting principles.</p>
          
          <p><strong>COMP 552 - Here’s your first question:</strong></p>
          <p>Arvo pulls a summary or the first problem question for you.</p>
          
          <p><strong>PHYS 340 - Topics Covered:</strong></p>
          <p>Arvo outlines topics and lectures with relevant materials, homework, and tutorials for each.</p>
          
          <p><strong>FACC 300 - Quiz Material:</strong></p>
          <p>Arvo gathers material related to your quiz topic.</p>
          
          <p><strong> What should I focus on?</strong></p>
          
          <p><strong>Arvo;</strong> Based on your performance, COMP 552 and PHYS 340 are above average, but your FACC 300 performance is below average, with a projected final grade of B-.</p>
          
          <p><strong> Let’s prep for the FACC quiz.</strong></p>
          
          <p><strong>Arvo;</strong> Sounds good! Arvo then asks questions about content from past lectures and prompts you to answer. Afterward, it cites the correct answers.</p>
          
          <p><strong>Arvo;</strong> Arvo asks if you'd like to take the quiz. Since it’s connected to your university’s platform, it pulls quiz questions and cites relevant material to help you answer them. Imagine GPT-4, but connected directly to your school’s resources!</p>
          
          <p>This app is evolving into a complete life management system for students, with future development focused on automating data management and data-driven decision-making. Your feedback is invaluable as we continue to improve. We hope you enjoy using Arvo!</p>
          `)
          
            .start();
        }}
      />
    </div>
  );
};

export default TypingEffect;
