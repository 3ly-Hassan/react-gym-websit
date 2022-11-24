import "./about.css";
import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_1.jpg";
import StoryImage from "../../images/about1.jpg";
import VisionImage from "../../images/about2.jpg";
import MissionImage from "../../images/about3.jpg";
import "./about.css";

const About = () => {
  return (
    <>
      <Header title="About US" image={HeaderImage}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
          obcaecati aliquid a molestias recusandae aliquam natus inventore,
          labore sint fuga odio commodi quis voluptatem adipisci, autem
          provident culpa dolorem magni!
        </p>
      </Header>
      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt="story" />
          </div>
          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A ipsum
              adipisci dolore esse iste, culpa repellat perspiciatis. Ullam
              reiciendis, fuga aliquid a pariatur, odio molestiae dicta
              recusandae repudiandae, quis inventore.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A ipsum
              adipisci dolore esse iste, culpa repellat perspiciatis. Ullam
              reiciendis, fuga aliquid a pariatur, odio molestiae dicta
              recusandae repudiandae, quis inventore.
            </p>
            <p>
              fuga aliquid a pariatur, odio molestiae dicta recusandae
              repudiandae, quis inventore.
            </p>
          </div>
        </div>
      </section>

      <section className="about__vision">
        <div className="container about__vision-container">
          <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A ipsum
              adipisci dolore esse iste, culpa repellat perspiciatis. Ullam
              reiciendis, fuga aliquid a pariatur, odio molestiae dicta
              recusandae repudiandae, quis inventore.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A ipsum
              adipisci dolore esse iste, culpa repellat perspiciatis. Ullam
              reiciendis, fuga aliquid a pariatur, odio molestiae dicta
              recusandae repudiandae, quis inventore.
            </p>
          </div>
          <div className="about__section-image">
            <img src={VisionImage} alt="vision" />
          </div>
        </div>
      </section>

      <section className="about__mission">
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img src={MissionImage} alt="mission" />
          </div>
          <div className="about__section-content">
            <h1>Our Mssion</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A ipsum
              adipisci dolore esse iste, culpa repellat perspiciatis. Ullam
              reiciendis, fuga aliquid a pariatur, odio molestiae dicta
              recusandae repudiandae, quis inventore.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A ipsum
              adipisci dolore esse iste, culpa repellat perspiciatis. Ullam
              reiciendis, fuga aliquid a pariatur, odio molestiae dicta
              recusandae repudiandae, quis inventore.
            </p>
            <p>
              fuga aliquid a pariatur, odio molestiae dicta recusandae
              repudiandae, quis inventore.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
