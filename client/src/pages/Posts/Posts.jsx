import { useLocation } from "react-router-dom";
import { posts } from "../../dummyData.js";
import "./post.scss";

export default function Posts() {
  const location = useLocation().pathname.split("/")[2];

  const post = posts.find(p => p.id == location);
  console.log(post);

  return (
    <div className="post">
        <img src={post.img} alt="" className="postImg" />
        <h1 className="postTitle">{post.title}</h1>
        <p className="postDesc">{post.desc}</p>
        <p className="postLongDesc">{post.longDesc}</p>
    </div>
  )
}
