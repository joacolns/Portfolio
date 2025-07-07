import "../styles/tailwind.css";
import Title from "./Title";
import React from "react";

function Intro() {
    return (
        <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
            <img src="/profile.jpg" className="w-52 h-52 mb-4 rounded-xl float-in-space-pic" />
            <h1 className="text-4xl md:text-6xl mb-1 md:mb-3 font-bold float-in-space" style={{ fontFamily: 'DM Sans, sans-serif' }}>Joaquín Lucas Nieto</h1>
            <p className="text-base md:text-xl mb-3 font-medium" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                Desarrollador Full Stack orientado a .NET. Apasionado por aprender, trabajar en equipo y aportar soluciones innovadoras.
            </p>
            <div className="flex justify-center gap-5">
                <a
                    href="https://www.linkedin.com/in/njoaco"
                    className="bg-gray-700 p-2 rounded-md shadow-md text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="fab fa-linkedin fa-lg" aria-hidden="true"></i>
                </a>
                <a
                    href="https://github.com/joacolns"
                    className="bg-gray-700 p-2 rounded-md shadow-md text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="fab fa-github fa-lg" aria-hidden="true"></i>
                </a>
                <a
                    href="mailto:joaquinlucasnieto506@gmail.com"
                    className="bg-gray-700 p-2 rounded-md shadow-md text-white"
                >
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
            {/* Sección de Stacks */}
            <div className="flex flex-col items-center justify-center pt-7 pb-6">
                <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'DM Sans, sans-serif' }}>Stacks</h2>
                <div className="flex flex-wrap justify-center gap-6">
                    <div className="flex flex-col items-center">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" alt="C#" className="w-12 h-12" />
                        <span className="mt-2 text-sm">C#</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" alt="C" className="w-12 h-12" />
                        <span className="mt-2 text-sm">C</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-12 h-12" />
                        <span className="mt-2 text-sm">JavaScript</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-12 h-12" />
                        <span className="mt-2 text-sm">React</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src="https://cdn-icons-png.flaticon.com/512/3161/3161158.png" alt="SQL" className="w-12 h-12" />
                        <span className="mt-2 text-sm">SQL</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" alt="Vue" className="w-12 h-12" />
                        <span className="mt-2 text-sm">Vue + Vite</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src="https://cdn.creazilla.com/icons/3256562/file-type-expo-icon-lg.png" alt="Vue" className="w-12 h-12" />
                        <span className="mt-2 text-sm">Expo</span>
                    </div>

                </div>
            </div>
            {/* Sección de Herramientas */}
            <div className="flex flex-col items-center justify-center pt-2 pb-6">
                <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'DM Sans, sans-serif' }}>Herramientas</h2>
                <div className="flex flex-wrap justify-center gap-6">
                    <div className="flex flex-col items-center">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2048px-Git_icon.svg.png" alt="Git" className="w-12 h-12" />
                        <span className="mt-2 text-sm">Git</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swagger/swagger-original.svg" alt="Swagger" className="w-12 h-12" />
                        <span className="mt-2 text-sm">Swagger</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQLWorkbench" className="w-12 h-12" />
                        <span className="mt-2 text-sm">MySQL Workbench</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webstorm/webstorm-original.svg" alt="WebStorm" className="w-12 h-12" />
                        <span className="mt-2 text-sm">WebStorm</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg" alt="Visual Studio" className="w-12 h-12" />
                        <span className="mt-2 text-sm">Visual Studio</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" className="w-12 h-12" />
                        <span className="mt-2 text-sm">Docker</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rabbitmq/rabbitmq-original.svg" alt="RabbitMQ" className="w-12 h-12" />
                        <span className="mt-2 text-sm">RabbitMQ</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src="https://sofa1.at/wp-content/uploads/2023/03/SignalR-Logo.png" alt="SignalR" className="w-12 h-12 bg-white rounded" />
                        <span className="mt-2 text-sm">SignalR</span>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center flex-col text-center pt-5 pb-2">
                <Title>Proyectos Personales</Title>
            </div>
        </div>
    );
}

export default Intro;