import React from "react";
import Title from "./Title";

function Contact(){
    return(
        <div className="flex flex-col mb-10 mx-auto">
            <div className="flex justify-center items-center">
            
                <form 
                action="https://getform.io/f/lakmpkxa"
                method="POST"
                className="flex flex-col w-full md:w-7/12"
                >
                    <Title>Contáctame</Title>
                    <input style={{ fontFamily: 'DM Sans, sans-serif' }}
                        type="text"
                        name="name"
                        placeholder="Nombre"
                        className="my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none" 
                    />

                    <input style={{ fontFamily: 'DM Sans, sans-serif' }}
                        type="text"
                        name="email"
                        placeholder="Correo"
                        className="my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none" 
                    />

                    <textarea style={{ fontFamily: 'DM Sans, sans-serif' }}
                        name="message"
                        placeholder="Mensaje"
                        rows="10"
                        className="p-2 mb-4 my-2 bg-transparent border-2 rounded-md focus-outline-none"
                    />

                    <button style={{ fontFamily: 'DM Sans, sans-serif' }}
                    type="submit" 
                    className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-gray-700 to-gray-500 drop-shadow-md hover:stroke-white">
                    Contacta conmigo
                    </button>

                </form>
            </div>
        </div>
    )
}

export default Contact;