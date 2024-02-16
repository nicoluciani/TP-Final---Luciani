import React from "react";
import "../estilos/NosotrosPage.css"
const NosotrosPage = (props) => {
    return(
        <main className="holder">
            <div className="historia">
                <h2>Historia</h2>
                <p>Lu-Gar Suministros Industriales inició sus actividades en el año 1989. Desde 1991 cuenta con oficina comercial y depósito en Jujuy 2072 de la ciudad de Rosario.</p>
            </div>
            <div className="plantel">
                <h2>Plantel</h2>
                <div className="personas">
                    <div className="persona">
                        <img src="images/nosotros1.jpg" alt="Osvaldo Luciani" width="100px" height="100px"/>
                        <h5>Juan Pérez</h5>
                        <h6>Gerente General</h6>
                        <p>Fundador de Lu-Gar y actual gerente</p>
                    </div>
                    <div className="persona">
                        <img src="images/nosotros2.jpg" alt="Esteban Rodríguez" width="100px" height="100px" />
                        <h5>Esteban Rodríguez</h5>
                        <h6>Ventas</h6>
                        <p>Encargado del área de ventas</p>
                    </div>
                    <div className="persona">
                        <img src="images/nosotros3.jpg" alt="Julian Martínez" width="100px" height="100px"/>
                        <h5>Julian Martínez</h5>
                        <h6>Ventas</h6>
                        <p>Empleado del área de ventas</p>
                    </div>
                    <div className="persona">
                        <img src="images/nosotros4.jpg" alt="Carlos Rivero" width="100px" height="100px" />
                        <h5>Carlos Rivero</h5>
                        <h6>Depósito</h6>
                        <p>Encargado del depósito</p>
                    </div>
                    <div className="persona">
                        <img src="images/nosotros5.jpg" alt="Analia Tello"  width="100px" height="100px"/>
                        <h5>Analia Tello</h5>
                        <h6>Contadora</h6>
                        <p>Encargada del área contable</p>
                    </div>
                    <div className="persona">
                        <img src="images/nosotros6.jpg" alt="Federica Recoba" width="100px" height="100px" />
                        <h5>Federica Recoba</h5>
                        <h6>Administrativa</h6>
                        <p>Encargada del área administrativa</p>
                    </div>

                </div>
            </div>


        </main>
    )
}
export default NosotrosPage;