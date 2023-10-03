
import { MdMoreVert, MdThumbUp, MdFavorite, } from "react-icons/md";
import { Users } from "../dummyData";
import { useState } from "react";


const Post = ({ post }) => {
    const [like, setLike] = useState(post.like);
    const [isLiked, setIsLiked] = useState(false);

    const user = Users.filter(user => user.id === post.userId);
    const { profilePicture, username } = user[0]


    const likeHandler = () => {
        const newLikeNumber = isLiked ? like - 1 : like + 1;
        setLike(newLikeNumber);
        setIsLiked(!isLiked);
    }

    return (
        <div className="">
            <div className="shadow-md rounded-lg w-full my-4 space-y-4 p-4 !pt-2">
                {/* top */ }
                <div className="flex items-center justify-between space-x-3 px-4">
                    <div className=" flex flex-1 items-center space-x-2.5">
                        <span className='h-8 w-8 rounded-full flex cursor-pointer'>
                            <img src={ profilePicture } alt={ username } className="w-full h-full rounded-full object-cover" />
                        </span>

                        <span className="text-sm font-medium ">{ username }</span>
                        <span className="text-xs ">{ post?.date }</span>
                    </div>

                    <div className="cursor-pointer h-6 w-6 bg-gray-50 justify-center items-center flex rounded-full">
                        <MdMoreVert />
                    </div>
                </div>

                {/* center */ }
                <div className="space-y-2.5 ">
                    <span className="text-sm font-medium ">{ post?.desc } </span>

                    <img src={ post?.photo } alt="" className="w-full h-full max-h-[400px] object-contain" />
                </div>

                {/* bottom */ }
                <div className=" flex justify-between items-center space-x-3">
                    <div className="flex items-center justify-center space-x-1.5">
                        <span className=" h-6 w-6 text-sm rounded-full flex items-center justify-center bg-blue-500 text-white cursor-pointer" onClick={ () => likeHandler() }>
                            <MdThumbUp />
                        </span>
                        <span className=" h-6 w-6 text-sm rounded-full flex items-center justify-center bg-red-500 text-white cursor-pointer " onClick={ () => likeHandler() } >
                            <MdFavorite />
                        </span>

                        <span className="text-sm "> { like } people like this </span>
                    </div>

                    <div className="flex items-center justify-start">
                        <span className="text-sm border-b border-dashed border-gray-500">{ post?.comment } { post?.comment > 1 ? 'comments' : 'comment' }</span>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Post
