import React from "react"

function Footer(){
    const currentYr = new Date().getFullYear()

    return <footer id="footer">
        <p>Copyright {currentYr} ⓒ Core Elevators. All Rights Reserved.</p>
    </footer>
}

export default Footer