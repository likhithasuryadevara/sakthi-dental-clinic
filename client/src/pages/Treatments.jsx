
import { Link } from "react-router-dom";

const treatments = [
  {
    name: "Teeth Cleaning & Scaling",
    image: "/images/treatments/Teeth Cleaning.png",
    description:
      "At Sakthi Dental Clinic, we offer advanced, non-surgical gum care using modern LASER technology for precise and effective treatment. Scaling helps remove plaque and tartar buildup, while deeper cleaning procedures may be recommended for more advanced periodontal issues.",
  },
  {
    name: "Tooth Filling",
    image: "/images/treatments/Tooth-Filling.jpg",
    description:
      "We restore teeth affected by cavities, trauma, or wear using appropriate filling materials and techniques. Our goal is to seal damaged areas, help prevent further decay, and preserve natural tooth structure.",
  },
  {
    name: "Tooth Extraction",
    image: "/images/treatments/Teeth Extraction.png",
    description:
      "When a tooth cannot be restored, our dental team assesses the available options and may recommend extraction. We explain the procedure and provide guidance to support patient comfort and recovery.",
  },
  {
    name: "Artificial Complete Denture",
    image: "/images/treatments/Artificial Complete Denture.png",
    description:
      "Complete dentures replace missing teeth in an entire dental arch. Customized dentures are designed to improve appearance, support everyday oral function, and help restore confidence.",
  },
  {
    name: "Dental Implants",
    image: "/images/treatments/Impants.png",
    description:
      "Dental implants are a treatment option for replacing missing teeth. An implant placed in the jawbone can support a replacement tooth or other dental restoration after assessment by a dental professional.",
  },
  {
    name: "Laser Dentistry",
    image: "/images/treatments/Laser-Surgery.png",
    description:
      "Laser dentistry uses specialized technology for selected dental procedures, including certain soft-tissue treatments and gum care. The suitability of laser treatment depends on the patient's condition and procedure.",
  },
  {
    name: "Root Canal Therapy",
    image: "/images/treatments/Root Canal Treatment.png",
    description:
      "Root canal treatment addresses infection or damage inside a tooth. The affected tissue is treated, the inner area is cleaned, and the tooth is sealed to help preserve its structure.",
  },
  {
    name: "Wisdom Tooth Extraction",
    image: "/images/treatments/Wisdom Teeth Removal.png",
    description:
      "Wisdom teeth can sometimes cause pain, impaction, or other oral health problems. A dental assessment determines whether removal is needed, followed by appropriate aftercare guidance.",
  },
  {
    name: "Fixed Partial Denture (Bridge)",
    image: "/images/treatments/Fixed Partial Denture.png",
    description:
      "A fixed dental bridge replaces one or more missing teeth by attaching replacement teeth to supporting natural teeth or dental implants, where appropriate. It can help restore appearance and chewing function.",
  },
  {
    name: "Teeth Whitening (Bleaching)",
    image: "/images/treatments/Bleaching.png",
    description:
      "Professional teeth whitening aims to reduce selected types of tooth discoloration. A dental professional can assess the cause of staining and discuss suitable whitening options.",
  },
  {
    name: "Veneers",
    image: "/images/treatments/Veneer Treatment.jpg",
    description:
      "Dental veneers are thin, custom-made coverings placed on the front surfaces of selected teeth. They may improve the appearance of chips, gaps, or discoloration after a dental assessment.",
  },
  {
    name: "Pediatric Dentistry",
    image: "/images/treatments/Pediatric-dentistry.png",
    description:
      "Pediatric dentistry focuses on children's oral health, from routine check-ups to preventive care. A welcoming approach helps children develop positive dental habits as they grow.",
  },
  {
    name: "Flap Surgery",
    image: "/images/treatments/Flap-surgery.png",
    description:
      "Periodontal flap surgery may be recommended for selected advanced gum conditions. The procedure allows a dental professional to access affected areas for treatment and support gum health.",
  },
  {
    name: "Orthodontic Braces",
    image: "/images/treatments/Orthodonic-Treatment.png",
    description:
      "Orthodontic braces help correct tooth alignment and bite problems. Treatment options may include different types of braces, selected according to individual dental needs.",
  },
  {
    name: "Clear Aligners",
    image: "/images/treatments/Aligner.png",
    description:
      "Clear aligners are removable, transparent trays used for selected orthodontic cases. They gradually move teeth according to a treatment plan prepared by an orthodontic professional.",
  },
];

function TreatmentCard({ treatment }) {
  return (
    <article className="treatment-card" key={treatment.name}>
      <div className="treatment-image">
        <img
          src={treatment.image}
          alt={treatment.name}
          loading="lazy"
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />
      </div>

      <div className="treatment-card-content">
        <h3>{treatment.name}</h3>
        <p>{treatment.description}</p>
        <Link
          to="/contact"
          className="treatment-link"
          aria-label={`Enquire about ${treatment.name}`}
        >
          Enquire about this treatment
        </Link>
      </div>
    </article>
  );
}

function Treatments() {
  return (
    <section className="treatment-page">
      <div className="page-heading">
        <span className="eyebrow">OUR SERVICES</span>
        <h1>Our Dental Treatments</h1>
        <p>
          Explore the dental treatments available at Sakthi Dental
          Clinic. Contact our team to discuss your needs and
          appropriate treatment options.
        </p>
      </div>

      <div className="all-treatments-grid">
        {treatments.map((treatment) => (
          <TreatmentCard
            key={treatment.name}
            treatment={treatment}
          />
        ))}
      </div>

      <section className="about-cta">
        <h2>Need help choosing a treatment?</h2>
        <p>
          Contact Sakthi Dental Clinic to ask a question or arrange
          an appointment.
        </p>
        <Link to="/contact" className="light-button">
          Contact Our Clinic
        </Link>
      </section>
    </section>
  );
}

export default Treatments;
