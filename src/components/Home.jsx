import { ArrowDownIcon, XMarkIcon } from '@heroicons/react/20/solid'
import logo from '../img/logo.png'
import react from '../img/skills/react.svg';

function Home({ setCurrentPage }) {
    return (
        <>
            <div className="flex flex-wrap justify-center items-center h-screen">
                <div className="md:pl-20 pl-8 pr-10 w-full md:w-1/2 lg:w1/2 md:mt-0 order-2 md:order-1">
                    <div className="text-light">Hello 👋, I am</div>
                    <h1 className="my-3 text-2xl text-gray-100 md:text-5xl">
                        <span className="relative">
                            <span className="h-20 pb-2 overflow-x-hidden whitespace-nowrap text-brand-accent text-primary font-semibold">
                                Yoga Adi Saputra
                            </span>
                            <span className="cursor absolute -bottom-0 left-0 -top-1 inline-block bg-dark w-full animate-type will-change"></span>
                        </span>
                    </h1>
                    <div className="mt-2 text-light text-sm">Frontend & Backend <span className="font-bold text-primary">Website Developer</span></div>
                    <p className="mt-6 text-light">
                        I am 20 years old from West Java, I started learning about web programming from 2017.
                    </p>
                    <button className="px-6 py-3 text-dark rounded-lg bg-primary mt-10 hover:shadow-yellow-700 hover:shadow-3xl font-medium" onClick={() => setCurrentPage(1)} >Next</button>
                    <button className="arrow-btn ml-3 p-3 text-xl shadow-sm rounded-[50%] text-primary mt-10 shadow-yellow-700 border-b-2 border-primary border-dashed" onClick={() => setCurrentPage(1)} >
                        <ArrowDownIcon className='w-6 h-6 font-bold' />
                    </button>
                </div>
                <div className="md:px-20 px-12 w-full md:w-1/2 lg:w1/2 order-1 md:order-2">
                    <div className='flex justify-start items-center flex-col mt-20 lg:mt-0'>
                        <div className="flex items-center justify-center relative mt-16 lg:mt-0 space-x-6">
                            <div className='flex items-center flex-col space-y-4 lg:flex-row lg:space-y-0 lg:space-x-2'>
                                <img src={logo} className="w-20" id="cover-services" alt='Logo' />
                                <div className='text-2xl text-primary tracking-widest'>Yapp</div>
                            </div>
                            <XMarkIcon className='w-10 h-10' stroke='#facc15' />
                            <div className='flex items-center flex-col mt-[9px] lg:mt-0 space-y-6 lg:flex-row lg:space-y-0 lg:space-x-2'>
                                <img src={react} className="w-20 react-animation" alt="logo" />
                                <div className='text-2xl text-[#61dafb] tracking-widest'>React</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home