import { Link } from "react-router-dom";

function Home() {
  const treatments = [
    {
      name: "Tooth Extraction",
      image: "/images/treatments/Teeth Extraction.png",
      description: "Gentle care for teeth that need to be removed.",
    },
    {
      name: "Artificial Complete Denture",
      image: "/images/treatments/Artificial Complete Denture.png",
      description: "Solutions to restore your smile and chewing comfort.",
    },
    {
      name: "Tooth Filling",
      image: "/images/treatments/Tooth-Filling.jpg",
      description: "Restore teeth affected by cavities and minor damage.",
    },
    {
      name: "Teeth Cleaning & Scaling",
      image: "/images/treatments/Teeth Cleaning.png",
      description: "Keep your teeth clean and your gums healthy.",
    },
    {
      name: "Teeth Whitening",
      image: "/images/treatments/Bleaching.png",
      description: "Explore options to brighten your smile.",
    },
    {
      name: "Orthodontic Treatment",
      image: "/images/treatments/Orthodonic-Treatment.png",
      description: "Treatment options to improve tooth alignment.",
    },
  ];

  const amenities = [
    {
      title: "Central Location",
      description: "Conveniently located in Hosur.",
      image: "/images/amenities/Icon-city-center.png",
    },
    {
      title: "Experienced Doctors",
      description: "Care from a team of dental professionals.",
      image: "/images/amenities/Icon-doctors.png",
    },
    {
      title: "Parking",
      description: "Parking facilities for clinic visitors.",
      image: "/images/amenities/Icon-parking.png",
    },
    {
      title: "Pickup & Drop-off",
      description: "Pickup and drop-off support for patients.",
      image: "/images/amenities/Icon-pickup.png",
    },
    {
      title: "Wheelchair Access",
      description: "Accessibility support for clinic visitors.",
      image: "/images/amenities/Icon-wheel-chair.png",
    },
  ];

  const pricingOptions = [
    {
      title: "General Dental Care",
      description:
        "For routine checkups, teeth cleaning, fillings, and everyday dental concerns.",
      icon: "🦷",
      button: "Contact Us for Pricing",
    },
    {
      title: "Restorative Treatments",
      description:
        "Explore options for damaged or missing teeth, including dentures and dental implants.",
      icon: "✦",
      button: "Request a Consultation",
    },
    {
      title: "Smile Enhancement",
      description:
        "Discuss teeth whitening, veneers, braces, and other smile enhancement options.",
      icon: "✨",
      button: "Contact Us for Pricing",
    },
  ];

  return (
    <div className="home-page">
      {/* 1. Hero section */}
      <section className="hero">
        <div className="hero-content">
          <span className="eyebrow">YOUR SMILE, OUR PRIORITY</span>

          <h1>
            Specialized Dental Care for
            <span> Women, Children & Families</span>
          </h1>

          <p>
            Experience compassionate, expert-led dental services
            tailored to your needs, all in a modern and welcoming
            environment.
          </p>

          <div className="hero-buttons">
            <a href="#appointment" className="primary-button">
              Fix an Appointment
            </a>

            <a href="#contact-info" className="secondary-button">
              Contact Our Clinic
            </a>
          </div>

          <div className="hero-note">
            <span>✓</span> Compassionate care
            <span>✓</span> Family-friendly service
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-circle">
            <img
              src="/images/banners/Banner_img_2.jpg"
              alt="Sakthi Dental Clinic treatment room"
              className="hero-dental-image"
            />

            <div className="hero-tooth-badge">🦷</div>
            <div className="hero-sparkle-badge">✦</div>

            <div className="floating-card">
              Healthy smiles
              <br />
              start here
            </div>
          </div>
        </div>
      </section>

      {/* 2. Welcome banner */}
      <section className="welcome-banner">
        <div className="welcome-content">
          <span className="eyebrow">WELCOME TO OUR CLINIC</span>
          <h2>You are always in safe hands.</h2>
          <p>We are ready to help, anytime.</p>
        </div>

        <div className="welcome-image">
          <img
            src="/images/banners/Banner_img_1.jpg"
            alt="Welcome to Sakthi Dental Clinic"
            loading="lazy"
          />
        </div>
      </section>

      {/* 3. Why choose us */}
      <section className="why-section">
        <span className="eyebrow">WHY CHOOSE US</span>
        <h2>Your comfort comes first</h2>

        <p className="section-description">
          Thoughtful dental care in a modern, welcoming environment.
        </p>

        <div className="feature-grid">
          <article className="feature-card">
            <span className="feature-icon">♡</span>
            <h3>All-in-One Care</h3>
            <p>A range of dental treatments for the whole family.</p>
          </article>

          <article className="feature-card">
            <span className="feature-icon">✦</span>
            <h3>Experienced Doctors</h3>
            <p>Care from a team of dental professionals.</p>
          </article>

          <article className="feature-card">
            <span className="feature-icon">☻</span>
            <h3>Patient-Centric Approach</h3>
            <p>Your comfort and needs guide your dental care.</p>
          </article>

          <article className="feature-card">
            <span className="feature-icon">✚</span>
            <h3>Modern Technology</h3>
            <p>Technology-supported dental services.</p>
          </article>
        </div>
      </section>

      {/* 4. Featured treatments */}
      <section className="treatment-section">
        <span className="eyebrow">OUR SERVICES</span>
        <h2>Dental care for every smile</h2>

        <div className="treatment-grid">
          {treatments.map((treatment) => (
            <article className="treatment-card" key={treatment.name}>
              <div className="treatment-image">
                <img
                  src={treatment.image}
                  alt={treatment.name}
                  loading="lazy"
                />
              </div>

              <h3>{treatment.name}</h3>
              <p>{treatment.description}</p>
            </article>
          ))}
        </div>

        <Link to="/treatments" className="primary-button">
          View Full List of Treatments
        </Link>
      </section>

      {/* 5. Pricing section */}
      <section className="pricing-section">
        <span className="eyebrow">OUR PRICING</span>
        <h2>Dental Care That Fits Your Needs</h2>

        <p className="section-description">
          Every smile is different. Contact our clinic to discuss
          your treatment options and receive pricing information.
        </p>

        <div className="pricing-grid">
          {pricingOptions.map((option) => (
            <article className="pricing-card" key={option.title}>
              <div className="pricing-icon">{option.icon}</div>
              <h3>{option.title}</h3>
              <p>{option.description}</p>

              <Link to="/contact" className="primary-button">
                {option.button}
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* 6. Patient testimonials */}
      <section className="testimonials-section">
        <span className="eyebrow">PATIENT EXPERIENCES</span>
        <h2>What Our Patients Say</h2>

        <p className="section-description">
          We're grateful to be part of our patients' smile journeys.
        </p>

        <div className="testimonial-grid">
          <article className="testimonial-card">
            
            <p>
              “The doctors are extremely kind and attentive. My braces
              treatment is progressing really well. 5/5.”
            </p>
            <h3>Manisha M</h3>
          </article>

          <article className="testimonial-card">
            
            <p>
              “I got my teeth cleaned and whitened here, and the results
              were amazing. The staff is so humble and professional.
              I've recommended Sakthi Dental Clinic to my entire family.”
            </p>
            <h3>Arun Kumar</h3>
          </article>

          <article className="testimonial-card">
            
            <p>
              “Their attention to detail is outstanding. My daughter
              needed braces and the entire process from consultation
              to regular follow ups has been so smooth. Really grateful
              for their care.”
            </p>
            <h3>Mrs. Revathi S.</h3>
          </article>
        </div>
      </section>

      {/* 7. Clinic amenities */}
      <section className="amenities-section">
        <span className="eyebrow">YOUR COMFORT MATTERS</span>
        <h2>Clinic Facilities</h2>

        <p className="section-description">
          We want every visit to feel convenient and welcoming.
        </p>

        <div className="amenities-grid">
          {amenities.map((amenity) => (
            <article className="amenity-card" key={amenity.title}>
              <div className="amenity-icon">
                <img
                  src={amenity.image}
                  alt=""
                  loading="lazy"
                />
              </div>

              <h3>{amenity.title}</h3>
              <p>{amenity.description}</p>
            </article>
          ))}

          <article className="amenity-card">
            <span className="amenity-emoji">🕘</span>
            <h3>Clinic Opening Hours</h3>
            <p>
              Sunday to Saturday: <strong>9 AM – 7 PM</strong>
            </p>
          </article>
        </div>
      </section>

      {/* 8. Call to action */}
      <section className="appointment-section" id="appointment">
        <h2>Ready to care for your smile?</h2>
        <p>Contact our clinic to discuss your dental care needs.</p>

        <Link to="/contact" className="light-button">
          Contact Us
        </Link>
      </section>

      {/* 9. Clinic contact information */}
      <section id="contact-info" className="home-contact">
        <h2>Visit Sakthi Dental Clinic</h2>
        <p>
          B2/8, SBM Layout, Anthivadi, Hosur, Tamil Nadu 635109, India
        </p>
        <p>Phone: +91 9862890897 / +91 9363298118</p>
        <p>Email: info@sakthidentalclinic.in</p>
      </section>
    </div>
  );
}

export default Home;