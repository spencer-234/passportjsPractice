import "./home.scss";
import { posts } from "../../dummyData.js";
import Card from "../../components/Card/Card.jsx";

export default function Home() {
  return (
    <div className="home">
        {posts.map(post => (
            <Card key={post.id} post={post} />
        ))}
    </div>
  )
}
