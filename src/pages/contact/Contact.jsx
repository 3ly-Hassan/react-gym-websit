import "./contact.css";
import HeaderImage from "../../images/header_bg_2.jpg";
import Header from "../../components/Header";
import { MdEmail } from "react-icons/md";
import { BsMessenger } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";

const Contact = () => {
  return (
    <>
      <Header title="Get In Touch" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
        reprehenderit officia pariatur impedit, excepturi commodi odio illo, ab
        totam veritatis ducimus fuga inventore aperiam omnis. Aut excepturi at
        aliquid quod?
      </Header>
      <section className="contact">
        <div className="container contact__container">
          <div className="contact__wrapper">
            <a
              href="mailto:alihassan19199@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <MdEmail></MdEmail>
            </a>
            <a
              href="https://m.me/3lyHassanAli"
              target="_blank"
              rel="noreferrer"
            >
              <BsMessenger></BsMessenger>
            </a>
            <a
              href="https://wa.me/+201097606919"
              target="_blank"
              rel="noreferrer"
            >
              <IoLogoWhatsapp />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
