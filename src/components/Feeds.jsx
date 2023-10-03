import Share from "./Share";
import Post from "./Post";
import { Posts } from "../dummyData";


const Feeds = () => {

    return (
        <div>
            <Share />

            { Posts.map((post) => (
                <Post key={ post.id } post={ post } />
            )) }
        </div>
    )
}



export default Feeds
