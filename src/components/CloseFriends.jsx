
const CloseFriends = ({ user }) => {
    return (
        <li className='flex items-center space-x-2.5 '>
            <span className="h-8 w-8 rounded-full">
                <img src={ user.profilePicture } alt="" className='object-cover w-full h-full rounded-full' />
            </span>
            <span className=''>{ user.username }</span>
        </li>
    )
}

export default CloseFriends
