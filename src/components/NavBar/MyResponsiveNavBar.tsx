import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import { NavBarReact } from './NavBarReact';


const MyResponsiveNavBar = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);

        // Limpieza del event listener cuando el componente se desmonta
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            {isMobile ? <NavBarReact /> : <NavBar />}
        </>
    );
};

export default MyResponsiveNavBar;
