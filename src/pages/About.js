import React from "react";

function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-3xl text-center transition-all duration-500 hover:scale-105">
        <h2 className="text-4xl font-bold text-blue-600 mb-4">About This App</h2>
        <p className="text-lg text-gray-700 mb-4">
          The Grade Calculator helps students calculate their semester grades 
          and provides career recommendations based on their performance. Our goal is to 
          help students understand their academic progress and explore future career opportunities.
        </p>

        <img 
          src="https://source.unsplash.com/800x400/?education,students" 
          alt="Students Learning" 
          className="rounded-lg shadow-md mb-6"
        />

        <p className="text-lg text-gray-600 italic">
          "Education is the most powerful weapon which you can use to change the world." 
          <br /> – Nelson Mandela
        </p>

        <div className="mt-6">
          <p className="text-lg font-semibold text-blue-500">
            Ready to calculate your grades? <a href="/" className="underline hover:text-blue-700">Go back to Home</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
