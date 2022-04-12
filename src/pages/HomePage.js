import React from "react";
import '../styles/componets/pages/HomePage.css';
const HomePage = (props) => {
    return (
        <div>homePage
            <main className="holder">
                <div className="homeimg">
                    <img src="images/galeria/img01.jpg" alt="avion" />

                </div>
                <div className="columnas">
                    <div className="bienvenidos left">
                        <h2>Bienvenidos</h2>
                        <p>loremmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm</p>
                    </div>
                    <div className="testimonio right">
                        <h2>Testimonios</h2>
                        <div className="testimonio">
                            <span className="cita">Simplemente excelente</span>
                            <span className="autor">Juan Perez</span>

                        </div>
                    </div>
                </div>
            </main>
        </div>


    );
}
export default HomePage;
