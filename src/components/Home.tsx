import { useEffect, useState } from "react"

const Home = () => {
    const [activePage, setActivePage] = useState('home')

    useEffect(() => {
        window.addEventListener("message", (e) => {
            if (e.data.activePage) setActivePage(e.data.activePage)
        })

        // const openMenu = () => {
        //     window.postMessage({
        //         closeMenu: false,
        //         openMenu: true
        //     }, window.origin);
        //     document.body.style.overflow = 'hidden';
        // };

        // const closeMenu = () => {
        //     document.body.style.overflow = 'visible';
        // }

        // document.getElementById('hamburger')?.addEventListener('click', openMenu);
        // document.getElementById('products')?.addEventListener('click', openMenu);

    })

    return (
        <>
            <div>{activePage}</div>
        </>
    )
}

export default Home
