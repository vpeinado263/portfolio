import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

const TextoAnimado = () => {
    const [mostrarTexto, setMostrarTexto] = useState([])
    const textRefs = useRef([]);

    useEffect(() => {
        let index = 0;

        const mostrar = () => {
            if (index < secciones.length) {
                setMostrarTexto((prev) => [...prev, secciones[index]]);
                setTimeout(() => {
                    const currentIndex = index;
                    if (textRefs.current[currentIndex]) {
                        gsap.fromTo(
                            textRefs.current[currentIndex],
                            { opacity: 0, y: 40},
                            { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out'}
                        );
                    }
                    index++;
                    mostrar();
                }, 200);
            }
        };
        mostrar();

        return () => {
            setMostrarTexto([]);
        };
    }, [secciones]);
  return (
    <div>
      {mostrarTexto.length > 0 &&
        mostrarTexto.map((texto, index) => (
            <div
            key={index}
            ref={(el) => (textRefs.current[index] = el)}
            >
                <h2>{texto.titulo}</h2>
                <p>{texto.contenido}</p>
            </div>
        ))}
    </div>
  );
};

export default TextoAnimado
