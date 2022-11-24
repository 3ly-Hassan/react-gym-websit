import React from "react";
import Logo from "../images/logo.png";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="container footer__container">
        <article>
          <Link to="/" className="logo">
            <img src={Logo} alt="logo" />
          </Link>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto vero
            illo beatae ullam ea. Ex, non. Aut, recusandae doloribus ratione
            obcaecati consequatur laborum nemo, facere nesciunt, nisi magnam
            repudiandae corrupti.
          </p>
          <div className="footer__socials">
            <a
              href="https://www.linkedin.com/"
              target="_"
              rel="noreferrer nonopener"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_"
              rel="noreferrer nonopener"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.twitter.com/"
              target="_"
              rel="noreferrer nonopener"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_"
              rel="noreferrer nonopener"
            >
              <FaInstagram />
            </a>
          </div>
        </article>
        <article>
          <h4>PermaLinks</h4>
          <Link to="/about">About</Link>
          <Link to="/plans">Plans</Link>
          <Link to="/trainers">Trainers</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact">Contact</Link>
        </article>
        <article>
          <h4>Insights</h4>
          <Link to="/s">Blog</Link>
          <Link to="/s">Case Studies</Link>
          <Link to="/s">Events</Link>
          <Link to="/s">Communities</Link>
          <Link to="/s">FAQs</Link>
        </article>
        <article>
          <h4>Get In Touch</h4>
          <Link to="/contact">Contact</Link>
          <Link to="/s">Support</Link>
        </article>
      </div>
      <div className="footer__copyright">
        <small>2022 Ali Hassan &copy; </small>
      </div>
    </footer>
  );
};

export default Footer;
