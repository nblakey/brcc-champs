import { useEffect, useState } from "react"

const Menu = () => {
    const [activePage, setActivePage] = useState('home')

    useEffect(() => {
        const deactivatedPage = document.getElementsByClassName('active')[0].id
        document.getElementById(deactivatedPage)?.classList.remove('active')
        document.getElementById(activePage)?.classList.add('active')

        window.postMessage({
            activePage: activePage,
            deactivatedPage: deactivatedPage
        }, window.origin);

    }, [activePage])

    return (
        <div className="mt-8 md:mt-14 flex flex-col text-2xl md:text-4xl text-theme-primary gap-8 md:gap-10">
            <button id="home" className="active" onClick={() => setActivePage('home')}>Home</button>
            <a href="https://bluerivercc.com" target="_blank" id="venue">Venue</a>
            <button id="meet" onClick={() => setActivePage('meet')}>Meet Information</button>
            <button id="directions" onClick={() => setActivePage('directions')}>Directions</button>
            <button id="visitors" onClick={() => setActivePage('visitors')}>Visitor's Guide</button>
            <button id="emergency" onClick={() => setActivePage('emergency')}>Emergency Info</button>
        </div>
    )
}

export default Menu
