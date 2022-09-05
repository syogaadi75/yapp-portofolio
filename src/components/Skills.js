import logoSvg from '../img/logo.svg'
import htmlSvg from '../img/skills/html.svg'
import cssSvg from '../img/skills/css.svg'
import nodeSvg from '../img/skills/node.svg'
import firebaseSvg from '../img/skills/firebase.svg'
import mongodbSvg from '../img/skills/mongodb.svg'
import mysqlSvg from '../img/skills/mysql.svg'
import pgsqlSvg from '../img/skills/pgsql.svg'
import vueSvg from '../img/skills/vue.svg'
import reactSvg from '../img/skills/react.svg'
import githubSvg from '../img/skills/github.svg'
import ciSvg from '../img/skills/ci.svg'
import laravelSvg from '../img/skills/laravel.svg'

function Skills() {
  return (
    <>
        <div className="absolute h-screen w-full flex items-center justify-center -z-10 mt-72 md:mt-64"> 
            <img src={logoSvg} className="w-10 md:w-16" id="cover-services" alt='Logo' />
            <span className="text-primary text-base font-semibold ml-2 md:text-xl flex space-x-1 uppercase">
                <span>S</span>
                <span>k</span>
                <span>i</span>
                <span>l</span>
                <span>l</span>
                <span>s</span>
            </span>
        </div>
        <div className="flex flex-wrap justify-center items-center h-screen lg:mx-20"> 
            <div className="grid grid-cols-3 lg:grid-cols-6 gap-8 gap-y-10">
                <div className="group skill-card relative"> 
                    <img className="group-hover:-translate-y-[30px] transition-all duration-300" src={htmlSvg} alt="Skills" /> 
                    <div className="text-xs lg:text-base absolute bottom-0 text-transparent flex items-center justify-center rounded-b-md w-full p-1  group-hover:bg-[#EA5928] group-hover:text-white transition-all duration-300">
                        HTML 5
                    </div>
                </div>  
                <div className="group skill-card relative"> 
                    <img className="group-hover:-translate-y-[30px] transition-all duration-300" src={cssSvg} alt="Skills" /> 
                    <div className="text-xs lg:text-base absolute bottom-0 text-transparent flex items-center justify-center rounded-b-md w-full p-1 group-hover:text-white group-hover:bg-[#33A9DC] transition-all duration-300">
                    CSS 3
                    </div>
                </div>
                <div className="group skill-card relative"> 
                    <img className="group-hover:-translate-y-[30px] transition-all duration-300" src={nodeSvg} alt="Css" /> 
                    <div className="text-xs lg:text-base absolute bottom-0 text-transparent flex items-center justify-center rounded-b-md w-full p-1 group-hover:text-white group-hover:bg-[#71A962] transition-all duration-300">
                    Node Js
                    </div>
                </div>  
                <div className="group skill-card relative"> 
                    <img className="group-hover:-translate-y-[30px] transition-all duration-300" src={firebaseSvg} alt="Skills" /> 
                    <div className="text-xs lg:text-base absolute bottom-0 text-transparent flex items-center justify-center rounded-b-md w-full p-1 group-hover:text-dark group-hover:bg-[#FCCA3F] transition-all duration-300">
                    Firebase
                    </div>
                </div>  
                <div className="group skill-card relative"> 
                    <img className="group-hover:-translate-y-[30px] transition-all duration-300" src={mongodbSvg} alt="Skills" /> 
                    <div className="text-xs lg:text-base absolute bottom-0 text-transparent flex items-center justify-center rounded-b-md w-full p-1 group-hover:text-white group-hover:bg-[#4BA74B] transition-all duration-300">
                    MongoDB
                    </div>
                </div>  
                <div className="group skill-card relative"> 
                    <img className="group-hover:-translate-y-[30px] transition-all duration-300" src={mysqlSvg} alt="Skills" /> 
                    <div className="text-xs lg:text-base absolute bottom-0 text-transparent flex items-center justify-center rounded-b-md w-full p-1 group-hover:text-white group-hover:bg-[#00546B] transition-all duration-300">
                    MySQL
                    </div>
                </div>   
                <div className="group skill-card relative"> 
                    <img className="group-hover:-translate-y-[30px] transition-all duration-300" src={pgsqlSvg} alt="Css" /> 
                    <div className="text-xs lg:text-base absolute bottom-0 text-transparent flex items-center justify-center rounded-b-md w-full p-1 group-hover:text-white group-hover:bg-[#336791] transition-all duration-300">
                    PostgreSQL
                    </div>
                </div>   
                <div className="group skill-card relative"> 
                    <img className="group-hover:-translate-y-[30px] transition-all duration-300" src={vueSvg} alt="Css" /> 
                    <div className="text-xs lg:text-base absolute bottom-0 text-transparent flex items-center justify-center rounded-b-md w-full p-1 group-hover:text-white group-hover:bg-[#41B883] transition-all duration-300">
                    Vue Js
                    </div>
                </div> 
                <div className="group skill-card relative"> 
                    <img className="group-hover:-translate-y-[30px] transition-all duration-300" src={reactSvg} alt="Css" /> 
                    <div className="text-xs lg:text-base absolute bottom-0 text-transparent flex items-center justify-center rounded-b-md w-full p-1 group-hover:text-dark group-hover:bg-[#00D8FF] transition-all duration-300">
                    React Js
                    </div>
                </div>     
                <div className="group skill-card relative"> 
                    <img className="group-hover:-translate-y-[30px] transition-all duration-300" src={githubSvg} alt="Css" /> 
                    <div className="text-xs lg:text-base absolute bottom-0 text-transparent flex items-center justify-center rounded-b-md w-full p-1 group-hover:text-white group-hover:bg-[#000000] transition-all duration-300">
                    Github
                    </div>
                </div>   
                <div className="group skill-card relative"> 
                    <img className="group-hover:-translate-y-[30px] transition-all duration-300" src={ciSvg} alt="Css" /> 
                    <div className="text-xs lg:text-base absolute bottom-0 text-transparent flex items-center justify-center rounded-b-md w-full p-1 group-hover:text-white group-hover:bg-[#EE4323] transition-all duration-300">
                    Codeigniter
                    </div>
                </div>     
                <div className="group skill-card relative"> 
                    <img className="group-hover:-translate-y-[30px] transition-all duration-300" src={laravelSvg} alt="Css" /> 
                    <div className="text-xs lg:text-base absolute bottom-0 text-transparent flex items-center justify-center rounded-b-md w-full p-1 group-hover:text-white group-hover:bg-[#FF2D20] transition-all duration-300">
                    Laravel
                    </div>
                </div>       
            </div>  
        </div>
    </>
  )
}

export default Skills