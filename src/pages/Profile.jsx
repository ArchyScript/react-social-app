import Topbar from "../components/Topbar";
import RightSidebar from "../components/RightSidebar";
import Feeds from "../components/Feeds";
import LeftSidebar from "../components/LeftSidebar";

const Profile = () => {
    return (
        <>
            <Topbar />

            <div className="flex ">
                <div className="w-3/12 sticky top-[50px]" >
                    <LeftSidebar />
                </div>

                <div className="w-9/12 p-5 space-y-6">
                    <div className="flex-col jsutify-center items-center">
                        <div className="relative ">
                            <img src="assets/post/3.jpeg" alt="" className="object-cover w-full h-60 " />
                            <img src="assets/person/7.jpeg" alt="" className="object-cover w-full  absolute -bottom-8 left-1/2 -ml-16 h-28 w-28 rounded-full border-4 border-white" />
                        </div>

                        <div className="flex flex-col justify-center items-center mt-8">
                            <h4 className="text-2xl font-semibold text-gray-500">ArchyScript</h4>
                            <span className=" text-gray-500">Test me ore meji</span>
                        </div>
                    </div>

                    <div className="flex flex-1 space-x-4 w-full">
                        <div className="w-[56%]">
                            <Feeds />
                        </div>
                        <div className="w-[44%]">
                            <RightSidebar profile={ true } />
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Profile
