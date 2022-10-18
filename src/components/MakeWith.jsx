
function MakeWith({src, text}) {
  return (
    <>
        <div className='flex space-x-2 items-center '>
            <img className='w-4' src={src} alt={text}/> 
            <span className='text-xs'>{text}</span>
        </div>
    </>
  )
}

export default MakeWith