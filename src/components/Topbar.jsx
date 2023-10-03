
import { MdSearch, MdPerson, MdChat, MdNotifications } from "react-icons/md"
import { Link } from "react-router-dom"

const Topbar = () => {

    return (
        <div className='h-[3.125rem] w-full bg-[#1877f2] flex justify-between items-center sticky top-0 z-50 '>
            {/* topbar left */ }
            <div className="w-3/12 flex">
                <Link to="/">
                    <span className="text-2xl font-bold ml-5 text-white cursor-pointer font-Roboto">Script Socials</span>
                </Link>
            </div>

            {/* topbar center */ }
            <div className="w-5/12 flex">
                <div className="w-full h-8 rounded-3xl bg-white flex items-center space-x-2.5 px-3 py-1.5">
                    <MdSearch className="!text-gray-500 text-xl" />

                    <input type="text" placeholder='search for friends, posts or video' className="border-0 outline-0  focus:outline-0 w-full" />
                </div>
            </div>

            {/* topbar right */ }
            <div className="w-4/12 flex items-center justify-around text-white">
                <div className=" flex space-x-2.5 ">
                    <span className=" text-sm cursor-poniter"> Homepage</span>
                    <span className=" text-sm cursor-poniter"> Timeline</span>
                </div>

                <div className="flex space-x-4">
                    <div className="flex cursor-pointer relative">
                        <MdPerson className=' !text-xl' />
                        <span className="w-4 h-4 bg-red-500 rounded-full text-white absolute -top-1.5 -right-1.5 text-[10px] flex items-center justify-center">2</span>
                    </div>

                    <div className="flex cursor-pointer relative">
                        <MdChat className=' !text-xl' />
                        <span className="w-4 h-4 bg-red-500 rounded-full text-white absolute -top-1.5 -right-1.5 text-[10px] flex items-center justify-center">1</span>
                    </div>

                    <div className="flex cursor-pointer relative">
                        <MdNotifications className=' !text-xl' />
                        <span className="w-4 h-4 bg-red-500 rounded-full text-white absolute -top-1.5 -right-1.5 text-[10px] flex items-center justify-center">2</span>
                    </div>
                </div>

                <Link to="/profile">
                    <span className='h-8 w-8 rounded-full flex cursor-pointer'>
                        <img src="/assets/person/1.jpeg" alt="Script Socials" className="w-full h-full rounded-full object-cover" />
                    </span>
                </Link>
            </div>
        </div>
    )
}


export default Topbar
