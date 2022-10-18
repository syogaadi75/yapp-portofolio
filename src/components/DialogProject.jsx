import { ArrowLeftIcon, ArrowRightIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

function DialogProject({ data, show, setShow }) {

    const handleClick = () => {
        setShow(false)
    }
    return (
        <>
            <div className='w-full px-3 lg:w-[700px] flex flex-col items-center'>
                <div className='flex mb-4 items-center justify-between w-full px-3 lg:w-[700px]'>
                    <h1 className='text-base lg:text-xl font-semibold text-primary'>{data.title}</h1>
                    <div onClick={() => handleClick()} className="cursor-pointer py-2 rounded-lg font-bold flex items-center space-x-2 hover:shadow-yellow-700 hover:shadow-3xl px-3 bg-primary text-dark transition-all duration-300 ease-in-out">
                        <ArrowLeftIcon className='w-3' strokeWidth={3} />
                        <span className='font-semibold text-sm'>Back</span>
                    </div>
                </div>

                <p className='text-justify mb-4 font-light text-light text-xs lg:text-sm w-full px-3 lg:w-[700px]'>{data.description}</p>
                <div className='flex flex-wrap gap-2 justify-center mb-4 space-x-2 w-full px-3 lg:w-[700px]'>
                    {data.skills.map((skill, i) => (
                        <div key={i} className='flex items-center mb-2 bg-dark p-2 lg:p-3 text-primary rounded-lg space-x-2'>
                            <img className='w-4' src={skill.svg} alt={skill.text} />
                            <span className='text-sm font-semibold'>{skill.text}</span>
                        </div>
                    ))}
                </div>
                <div className='flex mb-4 items-center justify-between w-full px-3 lg:w-[700px]'>
                    <h1 className='text-lg lg:text-xl font-semibold text-primary'>
                        {data.auth ? 'Auth' : 'No Auth'}
                    </h1>
                    <div className='flex space-x-2'>
                        {data.mobile_link && (
                            <a target="_blank" rel="noreferrer" href={data.mobile_link} className='py-2 text-xs lg:text-sm rounded-lg font-bold flex items-center space-x-2 px-3 bg-dark text-primary transition-all duration-300 ease-in-out'>
                                <span className='text-sm'>Mobile Demo</span>
                                <ArrowRightIcon className='w-3' strokeWidth={3} />
                            </a>
                        )}
                        <a target="_blank" rel="noreferrer" href={data.link} className='cursor-pointer py-2 rounded-lg font-bold flex items-center space-x-2 hover:shadow-yellow-700 hover:shadow-3xl px-3 bg-primary text-dark transition-all duration-300 ease-in-out'>
                            <span className='text-sm'>View Demo</span>
                            <ArrowRightIcon className='w-3' strokeWidth={3} />
                        </a>
                    </div>
                </div>
                {data.auth && (
                    <div className='text-xs lg:text-sm flex justify-center w-full px-3 lg:w-[700px]'>
                        <table className='w-full text-gray-300'>
                            <thead>
                                <tr>
                                    <td className='font-bold pl-3 pb-1'>User Level</td>
                                    <td className='font-bold pl-3 pb-1'>Username / Email</td>
                                    <td className='font-bold pl-3 pb-1'>Password</td>
                                </tr>
                            </thead>
                            <tbody>
                                {data.auth?.map((role, i) => (
                                    <tr key={i}>
                                        <td className='pl-3 pb-1'>{role.level}</td>
                                        <td className='pl-3 pb-1'>{role.username}</td>
                                        <td className='pl-3 pb-1'>{role.password}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </>
    )
}

export default DialogProject