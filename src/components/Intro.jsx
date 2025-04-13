import React from "react";
import "../styles/tailwind.css";
import Title from "./Title";

function Intro() {
    return (
        <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
        <img src="/profile.jpg" className="w-52 h-52 mb-4 rounded-xl float-in-space-pic" />
        <h1 className="text-4xl md:text-6xl mb-1 md:mb-3 font-bold float-in-space" style={{ fontFamily: 'DM Sans, sans-serif' }}>Joaquín Lucas Nieto</h1>
            
            <p className="text-base md:text-xl mb-3 font-medium" style={{ fontFamily: 'DM Sans, sans-serif' }}>Desarrollador Full Stack Junior</p>
            <p className="text-sm max-w-xl mb-6 font-bold" style={{ fontFamily: 'DM Sans, sans-serif' }}>Soy un desarrollador full-stack de 19 años, residente en Buenos Aires, Argentina. Actualmente, soy estudiante de Ingeniería en Sistemas y cuento con habilidades en Java, JavaScript, HTML, CSS, C++, React, Vite, Spring, AWS, Git y base de datos SQL, 
            y del lado del diseño Adobe Photoshop, DaVinci Resolve y Cinema 4D. Apasionado por el desarrollo de soluciones tecnológicas eficientes, busco oportunidades para contribuir y crecer profesionalmente en un entorno innovador.</p>
            <div className="flex justify-center gap-5">
                <a href="https://www.linkedin.com/in/njoaco" className="bg-gray-700 p-2 rounded-md shadow-md text-white">
                    <i className="fab fa-linkedin fa-lg" aria-hidden="true"></i>
                </a>
                <a href="https://github.com/joacolns" className="bg-gray-700 p-2 rounded-md shadow-md text-white">
                    <i className="fab fa-github fa-lg" aria-hidden="true"></i>
                </a>
                <a href="mailto:joaquinlucasnieto506@gmail.com" className="bg-gray-700 p-2 rounded-md shadow-md text-white">
                    <i className="fas fa-envelope fa-lg" aria-hidden="true"></i>
                </a>
            </div>
            <div className="flex items-center justify-center flex-col text-center pt-7 pb-6">
            <button
                style={{ fontFamily: 'DM Sans, sans-serif' }}
                type="button"
                onClick={() => window.open('/cv.pdf', '_blank')}
                className="relative overflow-hidden inline-block px-8 py-3 text-white text-base font-medium rounded-md bg-gradient-to-r from-gray-800 to-gray-600 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:from-violet-700 hover:to-violet-500 before:absolute before:inset-0 before:bg-white/10 before:opacity-0 hover:before:opacity-10"
                >
                Descargar CV
            </button>
            </div>
            <div className="flex items-center justify-center flex-col text-center pt-5 pb-2">
                <Title>Proyectos Personales</Title>
            </div>
        </div>
    );
}

export default Intro;
