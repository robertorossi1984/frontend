import React from "react";
import '../styles/componets/pages/NosotrosPage.css';
const NosotrosPage = (props) =>{
    return(
        <div>
            NosotrosPage
            <section className="holder">
                <div className="historia">
                    <h2>Historia</h2>
                    <p>loremmmmmmmmmmmmmmmmmmmmmmmmmmmmm</p>
                    <p>loremmmmm</p>
                </div>
                <h2>Staff</h2>
                <div className="personas">
                    <div className="persona">
                        <img src="images/nosotros/nosotros1.jpg" width={75} alt="juan"/>
                        <h5>Juan Gomez</h5>
                        <h6>Gerente general</h6>
                        <p>Loremmmmmmmmmm</p>
                    </div>

                </div>
            </section>
        </div>
    );
}
export default NosotrosPage;
