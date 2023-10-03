import { Users } from "../dummyData";
import Online from "./Online";



const RightSidebar = ({ profile }) => {
    const HomeRightbar = () => {
        return (
            <div className="pt-5 pr-5 space-y-4">
                <div className="flex items-center   space-x-2.5 ">
                    <span className="h-8 w-8 rounded-full">
                        <img src="assets/gift.png" alt="" className='object-cover w-full h-full rounded-full' />
                    </span>

                    <span className="font-light text-sm flex items-center"> <b>Script</b>  and <b>3 others</b> have their birthdady today</span>
                </div>


                <div className="rounded-md">
                    <img src="assets/ad.png" alt="" className='object-contain w-full h-full rounded-md ' />
                </div>

                <div className="space-y-4">
                    <h4>Online Friends</h4>

                    <ul className="list-none space-y-3 p-0 m-0">
                        { Users.map((user, index) => (
                            <Online key={ user.id } user={ user } />
                        )) }
                    </ul>
                </div>
            </div>
        )
    }

    const ProfileRightbar = () => {
        return (
            <div className="space-y-4">
                <div className="space-y-1.5">

                    <h4 className="text-xl font-medium ">User Information </h4>

                    <div className="space-y-0.5">
                        <div className="flex items space-x-1.5 text-lg pb-0.5">
                            <span className="font-medium text-gray-500">City:</span>
                            <span className="font-light">New york</span>
                        </div>
                        <div className="flex items space-x-1.5 text-lg pb-0.5">
                            <span className="font-medium text-gray-500">City:</span>
                            <span className="font-light">New york</span>
                        </div>
                        <div className="flex items space-x-1.5 text-lg pb-0.5">
                            <span className="font-medium text-gray-500">City:</span>
                            <span className="font-light">New york</span>
                        </div>
                    </div>
                </div>

                <div>
                    <h4 className="text-xl font-medium ">User Friends </h4>

                    <div className="flex flex-wrap">
                        <div className="px-1 mr-1.5 mb-1.5 py-1 flex flex-col space-y-1 items-center">
                            <img src="assets/person/7.jpeg" alt="" className="object-cover w-full  h-24 w-24 rounded-md border border-gray-200" />
                            <span className="text-sm font-medium text-gray-500">ArchyScript</span>
                        </div>
                        <div className="px-1 mr-1.5 mb-1.5 py-1 flex flex-col space-y-1 items-center">
                            <img src="assets/person/7.jpeg" alt="" className="object-cover w-full  h-24 w-24 rounded-md border border-gray-200" />
                            <span className="text-sm font-medium text-gray-500">ArchyScript</span>
                        </div>
                        <div className="px-1 mr-1.5 mb-1.5 py-1 flex flex-col space-y-1 items-center">
                            <img src="assets/person/7.jpeg" alt="" className="object-cover w-full  h-24 w-24 rounded-md border border-gray-200" />
                            <span className="text-sm font-medium text-gray-500">ArchyScript</span>
                        </div>
                        <div className="px-1 mr-1.5 mb-1.5 py-1 flex flex-col space-y-1 items-center">
                            <img src="assets/person/2.jpeg" alt="" className="object-cover w-full  h-24 w-24 rounded-md border border-gray-200" />
                            <span className="text-sm font-medium text-gray-500">ArchyScript</span>
                        </div>
                        <div className="px-1 mr-1.5 mb-1.5 py-1 flex flex-col space-y-1 items-center">
                            <img src="assets/person/4.jpeg" alt="" className="object-cover w-full  h-24 w-24 rounded-md border border-gray-200" />
                            <span className="text-sm font-medium text-gray-500">ArchyScript</span>
                        </div>
                        <div className="px-1 mr-1.5 mb-1.5 py-1 flex flex-col space-y-1 items-center">
                            <img src="assets/person/8.jpeg" alt="" className="object-cover w-full  h-24 w-24 rounded-md border border-gray-200" />
                            <span className="text-sm font-medium text-gray-500">ArchyScript</span>
                        </div>
                        <div className="px-1 mr-1.5 mb-1.5 py-1 flex flex-col space-y-1 items-center">
                            <img src="assets/person/8.jpeg" alt="" className="object-cover w-full  h-24 w-24 rounded-md border border-gray-200" />
                            <span className="text-sm font-medium text-gray-500">ArchyScript</span>
                        </div>
                        <div className="px-1 mr-1.5 mb-1.5 py-1 flex flex-col space-y-1 items-center">
                            <img src="assets/person/8.jpeg" alt="" className="object-cover w-full  h-24 w-24 rounded-md border border-gray-200" />
                            <span className="text-sm font-medium text-gray-500">ArchyScript</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <>
            { profile ? <ProfileRightbar /> : <HomeRightbar /> }

        </>
    )
}


export default RightSidebar
