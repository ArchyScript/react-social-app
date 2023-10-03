import Topbar from "../components/Topbar";
import RightSidebar from "../components/RightSidebar";
import LeftSidebar from "../components/LeftSidebar";
import Feeds from "../components/Feeds";

const Home = () => {
    return (
        <>
            <Topbar />

            <div className="flex ">
                <div className="w-3/12 " >
                    <LeftSidebar />
                </div>

                <div className="w-5/12 p-5">
                    <Feeds />
                </div>

                <div className="w-4/12">
                    <RightSidebar />
                </div>
            </div>
        </>
    )
}





export default Home


