import { useState } from 'react';
import './Navigation.css';

const NavigationBar = () => {
    const [isActive, setIsactive] = useState('home')

    const homeActive = (menu) => {
        setIsactive(isActive === menu ? '' : menu)
    }
    const servicesActive = (menu) => {
        setIsactive(isActive === menu ? '' : menu)
    }
    const aboutActive = (menu) => {
        setIsactive(isActive === menu ? '' : menu)
    }
    const skillsActive = (menu) => {
        setIsactive(isActive === menu ? '' : menu)
    }
    const projectActive = (menu) => {
        setIsactive(isActive === menu ? '' : menu)
    }
    const contactActive = (menu) => {
        setIsactive(isActive === menu ? '' : menu)
    }


    const navOption = <>
        <li><a

            onClick={() => homeActive('home')} className={`${isActive === "home" ? 'active-border' : ''}`} href="#home"

        >Home</a></li>
        <li><a onClick={() => servicesActive('services')} className={`${isActive === 'services' ? 'active-border' : ''}`} href="#services">Services</a> </li>
        <li><a
            onClick={() => aboutActive('about')} className={`${isActive === 'about' ? 'active-border' : ''}`}
            href="#about"

        >About</a></li>
        <li><a
            onClick={() => skillsActive('skills')} className={`${isActive === 'skills' ? 'active-border' : ''}`}
            href="#skill"
        >Skills</a></li>
        <li><a
            onClick={() => projectActive('projects')} className={`${isActive === 'projects' ? 'active-border' : ''}`}
            href="#project"
        >Project</a></li>
        <li><a
            onClick={() => contactActive('contact')} className={`${isActive === 'contact' ? 'active-border' : ''}`}
            href="#contact"
        >Contact</a></li>
    </>

    return (
        <div className=" fixed top-0 left-0 z-10 navbar bg-[#e91e63] text-white ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 bg-black">
                        {navOption}
                    </ul>
                </div>
                <a className="text-3xl uppercase"> <span className="lowercase text-2xl">i</span>smail</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navOption}
                </ul>
            </div>
            <div className="navbar-end">
            </div>
        </div>
    );
};

export default NavigationBar;