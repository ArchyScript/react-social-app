
const Online = ({ user }) => {
    return (
        <li className='flex items-center space-x-2.5' >
            <div className="flex items-center space-x-2 relative">
                <span className="h-10 w-10 rounded-full">
                    <img src={ user.profilePicture } alt="" className='object-cover w-full h-full rounded-full' />
                </span>
                <span className='h-2.5 w-2.5 bg-green-500 absolute top-0 right-0 rounded-full border-[2px] border-white '></span>
            </div>

            <span className="font-medium ">{ user.username }</span>
        </li>
    )
}

export default Online
