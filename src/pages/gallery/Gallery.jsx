import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_3.jpg";
import "./gallery.css";
const Gallery = () => {
  const galleryLength = 15;
  const images = [];
  for (let i = 0; i < galleryLength; i++) {
    images.push(require(`../../images/gallery${i + 1}.jpg`));
  }
  return (
    <>
      <Header title="Our Gallery" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, at
        officiis vitae dignissimos voluptate sequi quo error qui fugiat,
        quisquam commodi ipsa, quaerat accusamus ea et. Suscipit nemo ducimus
        doloremque?
      </Header>
      <section className="gallery">
        <div className="container gallery__container">
          {images.map((image, index) => {
            return (
              <article key={index}>
                <img src={image} alt="Gallery item" />
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Gallery;
