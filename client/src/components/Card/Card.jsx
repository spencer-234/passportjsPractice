import "./card.scss";
import { Link } from "react-router-dom";

export default function Card({ post }) {
  return (
    <div className="card">
        <span className="title">{post.title}</span>
        <img src={post.img} alt="" className="image" />
        <p className="desc">{post.desc}</p>
        <Link to={`/posts/${post.id}`}>
          <button className="cardButton">Read More</button>
        </Link>
    </div>
  )
}
