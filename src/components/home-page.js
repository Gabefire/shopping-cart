import "../styles/home-page.css";
import running from "../assets/running.mp4";
import runningPic from "../assets/poster.jpg";
import { useNavigate } from "react-router-dom";

const HomePage = ({ displayStore }) => {
  const navigate = useNavigate();
  return (
    <>
      <video id="video-home-page" autoPlay loop muted>
        <source src={running} type="video/mp4" />
        {runningPic}
      </video>
      <div className="home-page">
        <div className="home-page-quote">You ARE a Runner</div>
        <p className="home-page-p">
          freestar freestar Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Sed nunc neque, fringilla eget aliquet quis, luctus at nunc.
          Nullam venenatis mauris ultricies augue blandit consectetur.{" "}
        </p>
        <button
          onClick={() => {
            navigate("/store");
          }}
        >
          Shop Now
        </button>
      </div>
    </>
  );
};

export default HomePage;
