import React from "react";
import '../styles/componets/pages/ContactoPage.css'
const ContactoPage = (props) => {
    return (
        <div>
            ContactoPage
            <main className="holder">
                <div className="columna contacto">
                    <h2>Complete el siguiente formulario</h2>
                    <form action="" method="" className="formulario">
                        <p>
                            <label>Nombre</label>
                            <input type="text" name="nombre" />
                        </p>
                        <p>
                            <label>Email</label>
                            <input type="text" name="email" />


                        </p>
                        <p>
                            <label>Teléfono</label>
                            <input type="text" name="telefono" />
                        </p>
                        <p>
                            <label>Comentario</label>
                            <textarea name="mensaje"></textarea>
                        </p>
                        <p className="centrar"><input type="submit"
                            value="Enviar" />

                        </p>
                    </form>
                </div>
                <div className="columna datos">
                    <h2>Otras vias de contacto</h2>
                    <p>También puede contactarse con nosotros usando los siguientes medios:</p>
                    <ul>
                        <li>Teléfono:123456</li>
                        <li>Email:</li>
                        <li>facebook</li>
                        <li>Skype</li>
                        <li>Instagram</li>
                        <li>Twitter</li>
                    </ul>
                </div>
            </main>
        </div>
    );
}
export default ContactoPage;
