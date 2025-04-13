import React from "react";

function PortfolioItem({ imgUrl, title, stack, desc, iconUrl, iconUrlMac, iconUrlLinux, link }) {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group overflow-hidden rounded-xl shadow-lg transform transition duration-300 hover:scale-[1.02] hover:shadow-2xl"
        >
            {/* Imagen de fondo con zoom en hover */}
            <img
                src={imgUrl}
                alt={title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Capa que aparece al hacer hover */}
            <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center text-white p-4">
                <h3 className="text-xl font-semibold mb-2 text-center">{title}</h3>
                <p className="text-sm mb-2 text-center">{desc}</p>
                <div className="flex flex-wrap gap-2 justify-center text-xs font-medium">
                    {stack.map((tech, index) => (
                        <span key={index} className="bg-white/10 px-2 py-1 rounded">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </a>
    );
}

export default PortfolioItem;
