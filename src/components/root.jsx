import { useEffect, useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
// import '../assets/css/root.css'


export default function Root() {
    const [screenWidth, setscreenWidth] = useState(window.innerWidth)
    const handleChanges = () => {
        setscreenWidth(window.innerWidth)
    }
    useEffect(() => {
        window.addEventListener('resize', handleChanges);

        return () => {
            window.removeEventListener("resize", handleChanges)
        }
    }, [])

    return (
        <>
            <div id="appContainer">
                {screenWidth}
                <Outlet />
            </div>
        </>
    );
}