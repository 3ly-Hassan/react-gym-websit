import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_5.jpg";
import { trainers } from "../../data";
import Trainer from "../../components/Trainer";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import "./trainers.css";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const Trainers = () => {
  return (
    <>
      <Header title="Our Trainers" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At, incidunt
        praesentium mollitia quisquam nobis voluptatibus expedita ullam
        quibusdam ab cum voluptatem optio placeat. Nobis mollitia provident
        temporibus ipsum similique vel.
      </Header>
      <div className="trainers">
        <div className="container trainers__container">
          {trainers.map(({ id, image, name, job, socials }, index) => {
            return (
              <Trainer
                image={image}
                job={job}
                name={name}
                socials={[
                  { icon: <BsInstagram />, link: socials[0] },
                  { icon: <AiOutlineTwitter />, link: socials[1] },
                  { icon: <FaFacebookF />, link: socials[2] },
                  { icon: <FaLinkedinIn />, link: socials[3] },
                ]}
              ></Trainer>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Trainers;
