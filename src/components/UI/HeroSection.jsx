import { FaLongArrowAltRight } from "react-icons/fa";

export const HeroSection = () => {
  return (
    <main className="hero-section main">
      <div className="container grid grid-two-cols">
        <div className="hero-content">
          <h1 className="heading-xl">
            Cancer Awareness & Support
          </h1>
          <p className="paragraph">
            Indian Cancer Society is committed in extending holistic knowledge, treatment and rehabilitation through its “Rise Against Cancer” movement.
          </p>
          <button className="btn btn-darken btn-inline bg-white-box">
            Know more <FaLongArrowAltRight />
          </button>
        </div>
        <div className="hero-image">
          <img
            src="/images/blog.png"
            alt="world is beauty"
            className="banner-image"
          />
        </div>
      </div>
    </main>
  );
};