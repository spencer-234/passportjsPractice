import "./card.scss";

export default function Card({ post }) {
  return (
    <div className="card">
        <span className="title">{post.title}</span>
        <img src={post.img} alt="" className="image" />
        <p className="desc">{post.desc}</p>
        <button className="cardButton">Read More</button>
    </div>
  )
}
