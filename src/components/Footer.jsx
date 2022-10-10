import React from "react"

function Footer(){
    const currentYr = new Date().getFullYear()

    return <footer>
        <p>Copyright Core Elevators ⓒ {currentYr}</p>
    </footer>
}

export default Footer