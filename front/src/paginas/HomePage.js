import React from "react";
import "../estilos/HomePage.css"
const HomePage = (props) => {
    return(
        <main className="holder">
            <div className="columnas">
                <div className="bienvenidos">
                    <h2>Bienvenidos</h2>
                    <p>Somos una empresa especializada en la venta de productos para la automatización, control, instrumentación, calibración y servicios de elementos y procesos.</p>
                    <p>Representamos en la provincia de Santa Fe a empresas de primer nivel importadoras de elementos para industrias. Además importa directamente productos de países tales como Taiwan, Brasil y EEUU.</p>
                    <p>Contamos con un plantel de amplia experiencia técnica y comercial, que se encuentra calificado para satisfacer las necesidades de nuestros clientes; además de un amplio stock y diversidad de productos para medir en forma fija o portátil variables tales como humedad, temperatura, presión, caudal.</p>
                    <p>Todo esto hace que las industrias Química, Petroquímica, Alimenticia, Celulósica, entre otras, cuenten con un referente al tener que cubrir sus necesidades.</p>
                </div>
                <div className="reseñas">
                    <h2>Reseñas de clientes</h2>
                    <div className="reseña">
                        <span class="cita">Gran variedad en instrumentación y muy buen precio,conseguí todo lo que buscaba</span>
                        <span class="autor">Alejandro Martin - Local Guide de Google</span>
                    </div>
                </div>
            </div>

        </main>
    )
}
export default HomePage;