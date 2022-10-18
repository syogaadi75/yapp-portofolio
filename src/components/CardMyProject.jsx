import { ArrowRightIcon } from '@heroicons/react/24/outline'
import MakeWith from './MakeWith'

function CardMyProject({ project, setDataDialog, setShow }) {
    return (
        <div key={project.title} className='w-[340px] lg:w-[400px] flex space-x-5 px-5 py-4 bg-dark text-light rounded-2xl shadow-2xl relative mb-2'>
            <div className='w-[200px]'>
                <div className='text-xs font-semibold text-primary border-b-2 border-primary pb-1 mb-2 lg:mb-4'>Made With </div>
                <div className='flex justify-center flex-col space-y-2 lg:space-y-4'>
                    {project.skills.slice(0, 2).map(skill => (
                        <MakeWith src={skill.svg} text={skill.text} />
                    ))}
                    <div className='flex space-x-2 items-center text-primary'>
                        <span className='w-4 text-center text-xs'>{project.skills.length - 2}</span>
                        <span className='text-xs'>More</span>
                    </div>
                </div>
            </div>
            <div>
                <h1 className='text-sm font-semibold text-primary mb-2 lg:mb-4'>{project.title}</h1>
                <p className='text-xs md:text-xs mb-2 lg:mb-4'>
                    {project.simple_description}
                </p>
                <div className='text-xs'>
                    <button onClick={() => { setDataDialog(project); setShow(true) }} className='py-2 rounded-lg font-bold flex items-center space-x-2 hover:shadow-yellow-700 hover:shadow-3xl px-3 bg-primary text-dark transition-all duration-300 ease-in-out'>
                        <span>View Demo & More</span>
                        <ArrowRightIcon className='w-3' strokeWidth={3} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CardMyProject