import { ArrowRightIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

function DialogProject({data, show, setShow}) {
    const [status, setstatus] = useState(null)

    if(!show) {
        return null
    } else {
        setTimeout(() => {
            setstatus('show-dialog-project')
        }, 50);
    }


    const handleClick = () => {
        setstatus('hide-dialog-project')
        setShow(false)
    }
  return (
    <>
        <div className={`opacity-0 h-screen w-full bg-primary text-dark px-4 py-10 lg:p-10 rounded-t-2xl lg:px-60 absolute z-10 mt-80 lg:mt-[19rem] ${status} `}>
            <div className='flex items-center justify-center relative'>
                <div onClick={() => handleClick() } className='h-12 w-12 bg-dark rounded-full absolute -top-14 flex justify-center items-center border-2 border-primary cursor-pointer'>
                    <XMarkIcon className='w-8 h-8' stroke='#facc15' strokeWidth={1.5} />
                </div>
            </div>
            <div className='text-center mb-4'>
                <h1 className='text-lg lg:text-xl font-semibold'>{data.title}</h1>
            </div>
            <p className='text-sm text-justify mb-4 lg:text-base'>{data.description}</p>
            <div className='flex flex-wrap gap-2 justify-center mb-4 space-x-2'>
                {data.skills.map((skill, i) => (
                    <div key={i} className='flex items-center mb-2 bg-dark p-2 lg:p-3 text-primary rounded-lg space-x-2'>
                        <img className='w-6' src={skill.svg} alt={skill.text}/> 
                        <span className='text-sm font-semibold lg:text-base'>{skill.text}</span>
                    </div>
                ))}
            </div>
            <div className='border-b-2 border-dark mb-4'></div>
            <div className='flex justify-between mb-4 items-center'>
                <h1 className='text-lg font-semibold lg:text-xl'>Auth</h1>
                <div className='flex space-x-2'>
                    <a target="_blank" rel="noreferrer" href={data.link} className='py-2 rounded-lg text-xs lg:text-sm font-bold flex items-center space-x-2 shadow-yellow-700 shadow-3xl px-3 bg-dark text-primary transition-all duration-300 ease-in-out'>
                        <span>View Demo</span>
                        <ArrowRightIcon className='w-3' strokeWidth={3} />
                    </a>
                    {data.mobile_link && (
                        <a target="_blank" rel="noreferrer" href={data.mobile_link} className='py-2 text-xs lg:text-sm rounded-lg font-bold flex items-center space-x-2 shadow-yellow-700 shadow-3xl px-3 bg-dark text-primary transition-all duration-300 ease-in-out'>
                            <span>View Mobile Demo</span>
                            <ArrowRightIcon className='w-3' strokeWidth={3} />
                        </a>
                    )}
                </div>
            </div>
            <div className='text-xs lg:text-sm flex justify-center'>
                <table className='table-auto'>
                    <thead>
                        <tr>
                            <td className='font-bold pl-3 pb-1'>User Level</td>
                            <td className='font-bold pl-3 pb-1'>Username / Email</td>
                            <td className='font-bold pl-3 pb-1'>Password</td>
                        </tr>
                    </thead>
                    <tbody>
                        {data.auth.map((role, i) => (
                            <tr key={i}>
                                <td className='pl-3 pb-1'>{role.level}</td>
                                <td className='pl-3 pb-1'>{role.username}</td>
                                <td className='pl-3 pb-1'>{role.password}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </>
  )
}

export default DialogProject