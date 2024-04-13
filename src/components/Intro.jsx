import React from "react";
import "../styles/tailwind.css";
import Title from "./Title";

function Intro() {
    return (
        <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
        <h1 className="text-4xl md:text-6xl mb-1 md:mb-3 font-bold float-in-space" style={{ fontFamily: 'DM Sans, sans-serif' }}>Joaquín Lucas Nieto</h1>
            <p className="text-base md:text-xl mb-3 font-medium" style={{ fontFamily: 'DM Sans, sans-serif' }}>Desarrollador Full Stack Junior</p>
            <p className="text-sm max-w-xl mb-6 font-bold" style={{ fontFamily: 'DM Sans, sans-serif' }}>Soy un desarrollador full-stack de 19 años, residente en Buenos Aires, Argentina. Actualmente, soy estudiante de Ingeniería en Sistemas y poseo habilidades en Java, JavaScript, HTML, CSS, C++, React, Vite, Git y base de datos SQL, 
            y del lado del diseño Adobe Photoshop y DaVinci Resolve. Apasionado por el desarrollo de soluciones tecnológicas eficientes, busco oportunidades para contribuir y crecer profesionalmente en un entorno innovador.</p>
            <div className="flex justify-center gap-5">
                <a href="tel:+541141642145" className="bg-gray-700 p-2 rounded-md shadow-md text-white">
                    <i className="fa fa-phone" aria-hidden="true"></i>
                </a>
                <a href="https://www.linkedin.com/in/tuperfil" className="bg-gray-700 p-2 rounded-md shadow-md text-white">
                    <i className="fab fa-linkedin fa-lg" aria-hidden="true"></i>
                </a>
                <a href="https://github.com/njoaco" className="bg-gray-700 p-2 rounded-md shadow-md text-white">
                    <i className="fab fa-github fa-lg" aria-hidden="true"></i>
                </a>
            </div>
            <div className="flex items-center justify-center flex-col text-center pt-7 pb-6">
            <button style={{ fontFamily: 'DM Sans, sans-serif' }}
                    type="button" 
                    className="text-center inline-block px-6 py-2 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-gray-700 to-gray-500 drop-shadow-md hover:stroke-white">
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
