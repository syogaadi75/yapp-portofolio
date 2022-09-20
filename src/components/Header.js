import { useState } from 'react'
import logo from '../img/logo-text.png'
import fullScreenIcon from '../img/icon/fullscreen.svg'
import { ArrowUpIcon } from '@heroicons/react/24/outline'

function Header({ currentPage, setCurrentPage, handleFullScreen }) {
    const [fullScreenAction, setFullScreenAction] = useState(true)
    const [hamburger, setHamburger] = useState(false)
    const [hamburgerActive, setHamburgerActive] = useState('')
    const [navMenu, setNavMenu] = useState('hidden')
    const [hideFullScreen, setHideFullScreen] = useState('')

    const hamburgerHandle = () => {
        !hamburger ? setHamburgerActive('hamburger-active') : setHamburgerActive('')
        !hamburger ? setNavMenu('') : setNavMenu('hidden')
        setHamburger(!hamburger)
    }

    const changePage = (page) => {
        setCurrentPage(page)
        hamburgerHandle()
    }

    const enterFullScreen = handleFullScreen.enter
    const exitFullScreen = handleFullScreen.exit

    setTimeout(() => {
        setHideFullScreen('opacity-0 translate-x-5')
    }, 5000);

    return (
        <>
            <header className="bg-transparent absolute top-0 left-0 w-full flex items-center z-[99999999]">
                <div className="container">
                    <div className="flex items-center justify-between relative">
                        <div className="ml-4 lg:ml-10">
                            <span className="font-bold text-lg text-primary block py-6">
                                <img className="w-20" src={logo} alt="Logo" />
                            </span>
                        </div>
                        <div className="flex items-center text-light">
                            <button className={`block focus:bg-transparent lg:hidden absolute right-8 outline-none border-none ${hamburgerActive}`} id="hamburger" name="hamburger" onClick={() => hamburgerHandle()}>
                                <span className="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
                                <span className="hamburger-line transition duration-300 ease-in-out"></span>
                                <span className="hamburger-line transition duration-300 ease-in-out origin-bottom-left"></span>
                            </button>

                            <nav id="nav-menu" className={`${navMenu} absolute py-5 bg-dark border-2 border-primary rounded-lg max-w-[250px] w-full right-10 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:border-none`}>
                                <ul className="block pl-6 lg:flex lg:space-x-6">
                                    <li className={currentPage === 0 ? 'group nav-active' : 'group'} onClick={() => changePage(0)}>
                                        <span className="cursor-pointer text-light py-2 flex group-hover:text-primary">Home</span>
                                    </li>
                                    <li className={currentPage === 1 ? 'group nav-active' : 'group'} onClick={() => changePage(1)}>
                                        <span className="cursor-pointer text-light py-2 flex group-hover:text-primary">Services</span>
                                    </li>
                                    <li className={currentPage === 2 ? 'group nav-active' : 'group'} onClick={() => changePage(2)}>
                                        <span className="cursor-pointer text-light py-2 flex group-hover:text-primary">Skills</span>
                                    </li>
                                    <li className={currentPage === 3 ? 'group nav-active' : 'group'} onClick={() => changePage(3)}>
                                        <span className="cursor-pointer text-light py-2 flex group-hover:text-primary">My Projects</span>
                                    </li>
                                    <li className={currentPage === 4 ? 'group nav-active' : 'group'} onClick={() => changePage(4)}>
                                        <span className="cursor-pointer text-light py-2 flex group-hover:text-primary">Contact</span>
                                    </li>
                                </ul>
                            </nav>
                            <div className='relative mr-20 md:mr-0 md:ml-6' onClick={() => setFullScreenAction(!fullScreenAction)}>
                                <button className='px-3 py-2 rounded bg-primary' onClick={fullScreenAction ? enterFullScreen : exitFullScreen}>
                                    <img src={fullScreenIcon} className="w-4 h-4 md:w-6 md:h-6" />
                                </button>
                                <div className={`${hideFullScreen} flex transition-all duration-1000 space-x-2 absolute -left-[100px] lg:-left-[138px] w-[140px] lg:w-[180px] mt-2 bg-primary text-dark py-3 px-2 rounded-lg`}>
                                    <div className='text-xs lg:text-sm duration text-right tracking-tighter'>Fullscreen for better experience</div>
                                    <div>
                                        <ArrowUpIcon className='w-5 h-5 arrow-btn' strokeWidth="3" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header