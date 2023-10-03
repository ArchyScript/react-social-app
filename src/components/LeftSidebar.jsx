import CloseFriends from "./CloseFriends";
import { Users } from "../dummyData";
import { MdSchool, MdRssFeed, MdWorkOutline, MdHelpOutline, MdPlayCircleOutline, MdGroup, MdBookmark, MdMessage, MdEvent } from "react-icons/md";


const LeftSidebar = () => {
    return (
        <div className=" p-5 h-full space-y-4 overflow-y-scroll sticky top-[50px]" style={ customStyle }>
            {/*  */ }
            <ui className="p-0 m-0 list-none space-y-4">
                <li className='flex items-center space-x-3 '>
                    <MdRssFeed className='' />
                    <span>Feeds</span>
                </li>
                <li className='flex items-center space-x-3'>
                    <MdMessage className='' />
                    <span>Chats</span>
                </li>
                <li className='flex items-center space-x-3 '>
                    <MdPlayCircleOutline className='' />
                    <span>Video</span>
                </li>
                <li className='flex items-center space-x-3 '>
                    <MdGroup className='' />
                    <span>Groups</span>
                </li>
                <li className='flex items-center space-x-3 '>
                    <MdBookmark className='' />
                    <span>Bookmoarks</span>
                </li>
                <li className='flex items-center space-x-3 '>
                    <MdHelpOutline className='' />
                    <span>Questions</span>
                </li>
                <li className='flex items-center space-x-3 '>
                    <MdWorkOutline className='' />
                    <span>Jobs</span>
                </li>
                <li className='flex items-center space-x-3 '>
                    <MdEvent className='' />
                    <span>Events</span>
                </li>
                <li className='flex items-center space-x-3 '>
                    <MdSchool className="" />
                    <span>Courses</span>
                </li>
            </ui>


            {/*  */ }
            <button className='border-0 px-6 text-sm py-2.5 rounded-[5px] bg-gray-100 '>
                Show more
            </button>

            <hr className='pb-4' />

            {/* firendlist */ }
            <ui className="list-none space-y-4">
                { Users.map((user, index) => (
                    <CloseFriends key={ user.id } user={ user } />
                )) }
            </ui>
        </div>
    )
}



const customStyle = {
    height: 'calc(100vh - 50px)'

};

export default LeftSidebar
