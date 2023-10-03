import { MdPermMedia, MdLabel, MdRoom, MdEmojiEmotions } from "react-icons/md";

const Share = () => {

    return (
        <>
            <div className="w-full h-[170px] rounded-lg p-2.5 shadow-md">
                <div className="flex items-center space-x-2.5">
                    <span className="h-[3.175rem] w-[3.175rem] rounded-full">
                        <img src="assets/person/1.jpeg" alt="" className='object-cover w-full h-full rounded-full' />
                    </span>

                    <input type="text" placeholder='What are you thinking?' className='focus:outline-0  flex-1 border-0' />
                </div>

                <hr className='m-5' />

                <div className="flex items-center  space-x-6 px-5">
                    <div className="flex items-center justify-between flex-1 ">
                        <div className="flex">
                            <div className="flex items-center space-x-2 cursor-pointer">
                                <MdPermMedia className="!text-lg text-[tomato]" />
                                <span className="text-sm font-medium">Photo or Video</span>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="flex items-center space-x-2 cursor-pointer">
                                <MdLabel className="!text-lg text-blue-500" />
                                <span className="text-sm font-medium">Tags</span>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="flex items-center space-x-2 cursor-pointer">
                                <MdRoom className="!text-lg text-green-500 " />
                                <span className="text-sm font-medium">Location</span>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="flex items-center space-x-2 cursor-pointer">
                                <MdEmojiEmotions className="!text-lg text-[goldenrod]" />
                                <span className="text-sm font-medium">Feelings</span>
                            </div>
                        </div>
                    </div>

                    <button className="border-0 py-1.5 px-2 rounded-[5px] bg-green-500 font-medium  cursor-pointer text-xs text-white">Share</button>
                </div>
            </div>
        </>
    )
}



export default Share
