import { PaperAirplaneIcon } from "@heroicons/react/24/outline"
import { TextField } from "@mui/material"
import gmailLogo from '../img/contact/gmail.svg'
import phoneLogo from '../img/contact/phone.svg'

function Contact() {
  return (
    <div className="flex flex-wrap justify-center items-center h-screen text-light -mt-20">
        <div className="p-8 pb-20 lg:p-16 w-full lg:w-1/2 bg-primary lg:rounded-xl z-50">
          <div className="flex mb-4 lg:space-x-6 space-y-3 flex-col lg:flex-row lg:space-y-0">
            <div className="flex items-center space-x-3">
              <img src={phoneLogo} className="w-6 h-6" alt="Phone" />
              <span className="text-dark font-bold">+62 877 5656 0881</span>
            </div>
            <div className="flex items-center space-x-3">
              <img src={gmailLogo} className="w-6 h-6" alt="Phone" />
              <span className="text-dark font-bold">yoaasaputra@gmail.com</span>
            </div>
          </div>

          <hr className="mb-6 border-dark border" />

          <h1 className="text-dark mb-8 text-lg lg:text-2xl">Contact Me / Give Me a Suggestion</h1>

          <form>
            <div className="mb-4">
              <TextField type="text" fullWidth color="warning" label="Your Name" variant="outlined" />
            </div>
            <div className="mb-4">
              <TextField type="email" fullWidth color="warning" label="Your Email" variant="outlined" />
            </div>
            <div className="mb-4">
              <TextField type="text" multiline rows={4} fullWidth color="warning" label="Write Message for Me...." variant="outlined" />
            </div>
            <button target="_blank" rel="noreferrer" href="" className='py-2 text-sm rounded-lg font-bold flex items-center space-x-2 shadow-yellow-700 shadow-3xl px-3 bg-dark text-primary transition-all duration-300 ease-in-out'>
                <span>Send Message</span>
                <PaperAirplaneIcon className='w-3' strokeWidth={3} />
            </button>
          </form>
        </div>
    </div> 
  )
}

export default Contact