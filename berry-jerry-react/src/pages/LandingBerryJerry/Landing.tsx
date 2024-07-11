import { useLoadLandingData } from '../../Hooks/useLoadLandingData';
import './Landing.css'
import './LandingLayout.css'


function Landing() {
  const { data, isLoading} = useLoadLandingData();

  if (isLoading) return <div>Loading...</div>;

  const { heroData, servicesData, footerData, customerReviewsData, galleryData } = data;
 
  return (
    <>
      <header>
        <img src={heroData[0].iconBerry} alt="BerryJerryLogo" id="BerryJerry-icon-Id" />
        <button className="nav-toggle" aria-label="toggle navigation">
          <span className="hamburger"></span>
        </button>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#" id="about-us-link">About Us</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="hero fade-in-section" id="section-hero">
          <img src={heroData[0].imageHero} alt="Hero Background" id="background-hero" className="background-img-hero" />
          <div className="hero-overlay"></div>
          <div className="container-hero">
            <img className="container-hero-logo" id="BerryJerry-hero" src={heroData[0].titleHero} alt="Hero Image" />
            <p id="description-hero">{heroData[0].descriptionHero}</p>
            <button className="about-us-button" id="aboutus-hero-id">Our Services!</button>
            <img className="hero-background-png" src={heroData[0].heropng} alt="Hero Background PNG" id="hero-background-png-id" />
          </div>
        </section>

        <section className="services fade-in-section" id="section-services">
          <h1 id="title-services" className="text-focus-in">Services</h1>
          <div className="cards" id="cards-id">
            {servicesData.map((service: any, index: number) => (
              <div key={index} className="card-container">
                <div className="card" id={index === servicesData.length - 1 ? 'last-card' : ''}>
                  <img src={service.imageService} alt={service.titleService} />
                  <h3>{service.titleService}</h3>
                  <p>{service.descriptionService}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="gallery-services fade-in-section">
          <h1 className="gallery-title text-focus-in" id="gallery-title-id">Gallery Services</h1>
          <div className="gallery-wrapper">
            <button id="prev" aria-label="Previous image">&#10094;</button>
            <div className="gallery-img-container" id="gallery-img-container-id">
              {galleryData.map((item: any, index: number) => (
                <img key={index} src={item.url} alt={`Gallery Image ${index + 1}`} className="gallery-img" />
              ))}
            </div>
            <button id="next" aria-label="Next image">&#10095;</button>
          </div>
        </section>

        <section className="customer-reviews fade-in-section" id="customer-reviews-id">
          <h1 className="reviews-title text-focus-in" id="reviews-title-id">Customer reviews</h1>
          <button id="prev-costumer" aria-label="Previous review">&#10094;</button>
          <div className="reviews-container" id="reviews-container-id">
            {customerReviewsData.map((review: any, index: number) => (
              <div key={index} className="customer-card">
                <img id="customer-img" src={review.customerImage} alt={review.customerName} />
                <h3 id="customer-name">{review.customerName}</h3>
                <p id="review-description">{review.customerDescription}</p>
              </div>
            ))}
          </div>
          <button id="next-costumer" aria-label="Next review">&#10095;</button>
        </section>
      </main>

      <footer>
        <div className="info-berryjerry" id="info-berryjerry-id">
          <img src={footerData.iconFooter} alt="Footer Icon" className="footer-icon" id="footer-icon-id" />
          <p className="footer-desc" id="footer-desc-id">{footerData.descriptionFooter}</p>
        </div>

        <div className="useful-links">
          <h1 className="links-title">Useful Links</h1>
          <h2 className="home">Home</h2>
          <h2 className="about-us">About Us</h2>
          <h2 className="services-footer">Services</h2>
        </div>

        <div className="help-support">
          <h1 className="help-title">Help & Support</h1>
          <h2 className="contact">Contact</h2>
          <h2 className="faqs">FAQs</h2>
          <h2 className="terms">Terms & Conditions</h2>
          <h2 className="privacy-policy">Privacy Policy</h2>
        </div>

        <div className="contact-us">
          <h1 className="contact-title">Contact Us</h1>
          <div className="phone">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="phone-icon">
              <path d="M21.384,17.752a2.108,2.108,0,0,1-.522,3.359,7.543,7.543,0,0,1-5.476.642C10.5,20.523,3.477,13.5,2.247,8.614a7.543,7.543,0,0,1,.642-5.476,2.108,2.108,0,0,1,3.359-.522L8.333,4.7a2.094,2.094,0,0,1,.445,2.328A3.877,3.877,0,0,1,8,8.2c-2.384,2.384,5.417,10.185,7.8,7.8a3.877,3.877,0,0,1,1.173-.781,2.092,2.092,0,0,1,2.328.445Z" />
            </svg>
            <h3 className="phone-number" id="phone-number-id">{footerData.phoneFooter}</h3>
          </div>

          <div className="email">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="email-icon">
              <path d="M22 5v4l-10 4L2 9V5a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1zM2 11.154V19a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-7.846l-10 4z" />
            </svg>
            <h3 className="email-address" id="email-address-id">{footerData.emailFooter}</h3>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Landing;