import {Link} from "react-router-dom";


export default function Header() {
    return (
        <header className="font-sans text-lg md:text-lg bg-headerPurple shadow-md text-black z-50 fixed w-full top-0">
            <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
                <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
                    <div className="flex items-center">
                        <img src="/path/to/logo.png" alt="Logo" className="h-10 mr-2"/>
                    </div>
                </h1>
                <ul className={"flex gap-2 p-3 text-xl md:text-xl"}>
                    <Link to={'/'}>
                        <li className={"sm:inline hover:bg-highLightPurple hover:p-2 hover:text-red rounded-lg py-2 px-2"}>Home</li>
                    </Link>
                    <Link to={'/services'}>
                        <li className={"sm:inline hover:bg-highLightPurple hover:p-2 hover:text-red rounded-lg py-2 px-2"}>Services</li>
                    </Link>
                    <Link to={'/portfolio'}>
                        <li className={"sm:inline hover:bg-highLightPurple hover:p-2 hover:text-red rounded-lg py-2 px-2"}>Portfolio</li>
                    </Link>
                    <Link to={'/about'}>
                        <li className={"sm:inline hover:bg-highLightPurple hover:p-2 hover:text-red rounded-lg py-2 px-2"}>About
                            Us
                        </li>
                    </Link>
                    <Link to={'/contact-us'}>
                        <li className={"sm:inline hover:bg-highLightPurple hover:p-2 hover:text-red rounded-lg py-2 px-2"}>Contact-Us
                        </li>
                    </Link>
                </ul>
                <div>
                    +91 798434312849
                </div>
            </div>
        </header>
    )
}
