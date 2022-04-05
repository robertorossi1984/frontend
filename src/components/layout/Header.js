import React from 'react';
const Header = (props) => {
    return (
        
        <header>
            <div>Header</div>
            <div className='holder'>
                <div className='logo'>
                    <img src="images/logo.png" width={100}
                    alt='Transportes x'/>
                    <h1>Transportes x
                    </h1>
                </div>
            </div>
        </header>
    );
}
export default Header