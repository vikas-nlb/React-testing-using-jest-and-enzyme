import React from 'react'

function Header(props){
    return(
        <header data-test="header">
            <div className="wrap">
                <div className="logo">
                    <h2 data-test="writeup">Learning about test driven development</h2>
                </div>
            </div>
        </header>
    )
}

export default Header