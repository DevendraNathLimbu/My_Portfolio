import React from "react";
import Card from "./Card";

const cardsData = [
{
    title: "Currency Converter",
    description: "A web application that allows users to convert currencies in real-time. It fetches live exchange rates from a public API and provides a user-friendly interface for seamless currency conversion.",
    techStack: ["HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com/DevendraNathLimbu/Currency-Converter",
    liveLink: "https://currencyconverter777.netlify.app/"
},
{
    title: "Quiz App",
    description: "A web application that allows users to take quiz on web technology. It features a user-friendly interface, real-time score tracker, and question timer to enhance the quiz-taking experience.",
    techStack: ["HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com/DevendraNathLimbu/Quiz-App",
    liveLink: "https://quizapp777.netlify.app/"
}
]

export default function Project(){
    return(
        <>
        <div className="w-full min-h-[100vh] flex flex-col items-center py-5">
        <h2 className="font-['codeFont'] text-white text-3xl md:text-5xl text-center mt-3">PROJECTS</h2>
            <div className="w-full grid gap-6 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 mt-5">
            <Card {...cardsData[0]} />
            <Card {...cardsData[1]} />
        </div>
        </div>
        </>
    )
}