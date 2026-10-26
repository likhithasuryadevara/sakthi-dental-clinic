
import { Link } from "react-router-dom";

function About() {
  const doctors = [
    {
      name: "Dr. Anupriya",
      role: "Founder",
      image: "/images/doctors/dr-anupriya.jpg",
    },
    {
      name: "Dr. Ananya Iyer",
      role: "Prosthodontist",
      image: "/images/doctors/dr-ananya-iyer.jpg",
    },
    {
      name: "Dr. Meera Subramanian",
      role: "Endodontist",
      image: "/images/doctors/dr-meera-subramanian.jpg",
    },
    {
      name: "Dr. Arvind Kumar",
      role: "Dental Surgeon",
      image: "/images/doctors/dr-arvind-kumar.jpg",
    },
    {
      name: "Dr. Sneha N",
      role: "Orthodontist",
      image: "/images/doctors/dr-sneha-n.jpg",
    },
    {
      name: "Dr. Srinivas Rohit Ramanujam",
      role: "Implantologist",
      image: "/images/doctors/dr-srinivas-rohit-ramanujam.jpg",
    },
    {
      name: "Dr. Balu",
      role: "Laser Surgeon",
      image: "/images/doctors/dr-balu.jpg",
    },
    {
      name: "Dr. Vikram Raj Kishore",
      role: "Aligners Partner",
      image: "/images/doctors/dr-vikram-raj-kishore.jpg",
    },
    {
      name: "Dr. Ajay Jumar",
      role: "Oral & Maxillofacial Surgeon",
      image: "/images/doctors/dr-ajay-jumar.jpg",
    },
  ];

  function handleImageError(event) {
    event.currentTarget.style.display = "none";
  }

  return (
    <div className="about-page">
      {/* 4.1 - Introduction */}
      <section className="about-hero">
        <span className="eyebrow">GET TO KNOW US</span>
        <h1>Get to Know Dr. Anupriya</h1>
        <h2>Your Trusted Partner in Dental Care</h2>
        <p>
          Bringing over 20 years of expertise, Dr. Anupriya is
          dedicated to providing compassionate dental care to
          patients in Hosur.
        </p>
      </section>

      {/* 4.2 - Background, experience and clinic history */}
      <section className="about-story">
        <div>
          <span className="eyebrow">OUR STORY</span>
          <h2>A Journey of Care and Commitment</h2>

          <p>
            Dr. Anupriya began her professional journey after
            graduating in 2000. Her passion for delivering
            exceptional dental care was further nurtured during
            six impactful years at Mathura Clinic, where she
            refined her clinical skills and deepened her
            commitment to patient wellbeing.
          </p>

          <p>
            In 2004, Dr. Anupriya established Sakthi Dental
            Clinic in Hosur with a clear vision to make
            high-quality dental care accessible to all. Her
            dedication extends beyond private practice,
            reflected in her long-standing service with the
            Primary Health Center at Chandara Hospital, where
            she has been a trusted dental consultant for over
            a decade.
          </p>

          <p>
            At Sakthi Dental Clinic, we believe that a healthy
            smile is a gateway to confidence and wellbeing.
            Our clinic aims to combine dental technology with
            a warm, patient-friendly environment so every visit
            feels comfortable and welcoming.
          </p>

          <p>
            Whether you are looking for preventive care,
            cosmetic enhancements, or restorative solutions,
            Dr. Anupriya and her team are committed to
            providing personalized care for your dental needs.
            Here, your smile is not just treated — it is
            celebrated.
          </p>
        </div>

        <div className="about-highlight">
          <span aria-hidden="true">✦</span>
          <h3>Every Smile Matters</h3>
          <p>
            Thoughtful care. Clear communication. A welcoming
            visit.
          </p>
        </div>
      </section>

      {/* 4.3 - Vision and mission */}
      <section className="mission-section">
        <article>
          <span className="eyebrow">WHY WE ARE HERE</span>
          <h2>Our Mission</h2>
          <p>
            At Sakthi Dental Clinic, our mission is to redefine
            oral healthcare by delivering personalized,
            compassionate, and advanced dental services. We
            are committed to creating a welcoming environment
            where patients feel comfortable and confident in
            taking charge of their dental health.
          </p>
          <p>
            By integrating modern dental technology with
            patient-centric care, we aim to provide
            comprehensive solutions, from preventive care to
            complex dental procedures, to promote long-lasting
            oral health.
          </p>
        </article>

        <article>
          <span className="eyebrow">OUR FUTURE</span>
          <h2>Our Vision</h2>
          <p>
            Our vision is to be a leading force in modern
            dentistry, known for setting new standards in
            patient care, innovation, and community engagement.
            We believe that building trust, encouraging
            preventive practices, and fostering a culture of
            excellence are key to making a lasting impact.
          </p>
          <p>
            We aspire to contribute positively to the community
            through awareness initiatives and outreach programs.
            With a focus on holistic care, we are dedicated to
            ensuring that every smile we treat reflects
            confidence, health, and happiness.
          </p>
        </article>
      </section>

      {/* 4.4 and 4.5 - Nine doctors and appropriate images */}
      <section className="team-section">
        <div className="page-heading">
          <span className="eyebrow">OUR DENTAL TEAM</span>
          <h2>Meet Our Doctors</h2>
          <p>
            Meet the dental professionals and specialist
            partners associated with Sakthi Dental Clinic.
          </p>
        </div>

        <div className="doctor-grid">
          {doctors.map((doctor) => (
            <article className="doctor-card" key={doctor.name}>
              <div className="doctor-avatar">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  loading="lazy"
                  onError={handleImageError}
                />
                <span aria-hidden="true">✦</span>
              </div>

              <h3>{doctor.name}</h3>
              <p>{doctor.role}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Contact call to action */}
      <section className="about-cta">
        <h2>We're Here to Help You Smile</h2>
        <p>
          Contact our clinic to learn more about our dental
          services and arrange your visit.
        </p>
        <Link to="/contact" className="light-button">
          Contact Our Clinic
        </Link>
      </section>
    </div>
  );
}

export default About;
