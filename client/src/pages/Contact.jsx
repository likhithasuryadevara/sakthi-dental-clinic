
import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setErrors((previous) => ({
      ...previous,
      [name]: "",
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (isSubmitting) return;

    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())
    ) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter your phone number.";
    } else if (!/^[+()\d\s-]{7,20}$/.test(formData.phone.trim())) {
      newErrors.phone = "Please enter a valid phone number.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    setIsSubmitting(true);

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          message: formData.message.trim(),
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Failed to send enquiry.");
      }

      alert(result.message || "Your enquiry was received successfully.");

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
      setErrors({});
    } catch (error) {
      alert(
        error.message ||
          "Unable to connect to the server. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="contact-page">
      <div className="page-heading">
        <span className="eyebrow">GET IN TOUCH</span>
        <h1>Contact Our Clinic</h1>
        <p>
          Have a question about your dental care? We'd be happy to hear
          from you.
        </p>
      </div>

      <div className="contact-layout">
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <h2>We would love to hear from you</h2>

          <label htmlFor="name">Name *</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            autoComplete="name"
            required
          />
          {errors.name && (
            <p id="name-error" className="form-error" role="alert">
              {errors.name}
            </p>
          )}

          <label htmlFor="email">Email *</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            value={formData.email}
            onChange={handleChange}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            autoComplete="email"
            required
          />
          {errors.email && (
            <p id="email-error" className="form-error" role="alert">
              {errors.email}
            </p>
          )}

          <label htmlFor="phone">Phone Number *</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handleChange}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            autoComplete="tel"
            required
          />
          {errors.phone && (
            <p id="phone-error" className="form-error" role="alert">
              {errors.phone}
            </p>
          )}

          <label htmlFor="message">Your Message (Optional)</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="How can we help you?"
            value={formData.message}
            onChange={handleChange}
          />

          <button
            type="submit"
            className="primary-button"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>

        <div className="contact-details">
          <h2>Reach us</h2>
          <p>Reach out to Sakthi Dental Clinic using the details below.</p>

          <div className="contact-detail">
            <span aria-hidden="true">📍</span>
            <div>
              <h3>Address</h3>
              <p>
                B2/8, SBM Layout, Anthivadi, Hosur, Tamil Nadu 635109, India
              </p>
            </div>
          </div>

          <div className="contact-detail">
            <span aria-hidden="true">✉</span>
            <div>
              <h3>Email</h3>
              <p>
                <a href="mailto:info@sakthidentalclinic.in">
                  info@sakthidentalclinic.in
                </a>
              </p>
            </div>
          </div>

          <div className="contact-detail">
            <span aria-hidden="true">☎</span>
            <div>
              <h3>Phone</h3>
              <p>
                <a href="tel:+919862890897">+91 9862890897</a>
              </p>
              <p>
                <a href="tel:+919363298118">+91 9363298118</a>
              </p>
            </div>
          </div>

          <div className="contact-detail">
            <span aria-hidden="true">🕘</span>
            <div>
              <h3>Timings</h3>
              <p>
                <strong>Sunday to Saturday: 9 AM to 7 PM</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
