import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    email: "",
    phone: "",
    job: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "YOUR_WEB3FORMS_ACCESS_KEY",

          name: formData.name,
          location: formData.location,
          email: formData.email,
          phone: formData.phone,
          job: formData.job,
          message: formData.message,

          subject: "New Contact Form Enquiry - Jeena & Company",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("Your enquiry has been submitted successfully! 🎉");

        setFormData({
          name: "",
          location: "",
          email: "",
          phone: "",
          job: "",
          message: "",
        });
      } else {
        setStatus("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.log(error);
      setStatus("Unable to submit the form. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="contact-page">

      {/* ================= HERO ================= */}

      <section className="contact-hero">

        <img
          src="https://t4.ftcdn.net/jpg/03/56/98/81/360_F_356988154_Ndmrm014VTB9y8H7W1PDU2VKuIGR0DSD.jpg"
          alt="Connect With Us"
          className="contact-hero-image"
        />

        <div className="contact-overlay"></div>

        <div className="contact-hero-content">
          <h1>Connect With Us</h1>

          <p>
            Reach Out to Experience
            <br />
            Legacy in Action!
          </p>
        </div>

      </section>


      {/* ================= CONTACT FORM ================= */}

      <section className="contact-form-section">

        {/* LEFT CONTENT */}

        <div className="contact-left">

          <h2>
            Connect with our team
            <br />
            of logistics architects
          </h2>

          <p>
            Whether you’re curious about your cargo’s
            whereabouts or eager to explore our innovative
            solutions, reach out to us. We’re here to turn your
            queries into solutions and your challenges into
            triumphs!
          </p>

          {/* Arrows */}

          <div className="contact-arrows">
            <span className="arrow blue">❯</span>
            <span className="arrow green">❯</span>
          </div>

        </div>


        {/* RIGHT FORM */}

        <div className="contact-form-box">

          <h2>Enquire Now</h2>

          <form onSubmit={handleSubmit}>

            <div className="form-row">

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <input
                type="text"
                name="location"
                placeholder="Location"
                value={formData.location}
                onChange={handleChange}
                required
              />

            </div>


            <div className="form-row">

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone number"
                value={formData.phone}
                onChange={handleChange}
                required
              />

            </div>


            <select
              name="job"
              value={formData.job}
              onChange={handleChange}
              required
            >
              <option value="">Job</option>
              <option value="Import">Import</option>
              <option value="Export">Export</option>
              <option value="Logistics">Logistics</option>
              <option value="Transportation">Transportation</option>
              <option value="Warehousing">Warehousing</option>
              <option value="Other">Other</option>
            </select>


            <textarea
              name="message"
              placeholder="More Information"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>


            <button
              type="submit"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>


            {status && (
              <p className="form-status">
                {status}
              </p>
            )}

          </form>

        </div>

      </section>
      {/* ================= OFFICES IN INDIA ================= */}

<section className="offices-section">

  {/* LEFT CONTENT */}
  <div className="offices-content">

    <h2>Offices in India</h2>

    <p>
      Jeena has its roots across the country with
      strong agent and customer network. We offer
      comprehensive supply chain services to
      customers across the nation.
    </p>

    <div className="office-details">

      <h3>
        <span>📍</span> Corporate Office
      </h3>

      <p>
        Jeena House, Plot No. 170, Om Nagar,<br />
        Off Pipe Line Road, Andheri (E),<br />
        Mumbai – 400099
      </p>

      <p className="contact-info">
        Tel: +91 (22) 62532111 / 62999100
        <br />
        Email: contact@jeena.co.in
      </p>

    </div>

  </div>


  {/* RIGHT MAP IMAGE */}
  <div className="india-map">

    <img
      src="https://jeena.com/wp-content/uploads/2025/02/india_map.svg"
      alt="Jeena Offices in India"
    />

  </div>

</section>


{/* ================= OFFICE LOCATIONS ================= */}

<section className="office-locations">

  <div className="locations-container">

    {/* COLUMN 1 */}
    <div className="location-column">
      <div className="location-item"><span>◆</span> Mumbai</div>
      <div className="location-item"><span>◆</span> Jaipur</div>
      <div className="location-item"><span>◆</span> Punjab</div>
      <div className="location-item"><span>◆</span> Nashik</div>
      <div className="location-item"><span>◆</span> Goa</div>
      <div className="location-item"><span>◆</span> Coimbatore</div>
      <div className="location-item"><span>◆</span> Tuticorin</div>
      <div className="location-item"><span>◆</span> Mysore</div>
    </div>


    {/* COLUMN 2 */}
    <div className="location-column">
      <div className="location-item"><span>◆</span> Kanpur</div>
      <div className="location-item"><span>◆</span> Ahmedabad</div>
      <div className="location-item"><span>◆</span> Aurangabad</div>
      <div className="location-item"><span>◆</span> Hyderabad</div>
      <div className="location-item"><span>◆</span> Gujarat</div>
      <div className="location-item"><span>◆</span> Gandhidham</div>
      <div className="location-item"><span>◆</span> Delhi</div>
      <div className="location-item"><span>◆</span> Uttar Pradesh</div>
    </div>


    {/* COLUMN 3 */}
    <div className="location-column">
      <div className="location-item"><span>◆</span> Gurgaon</div>
      <div className="location-item"><span>◆</span> Kolkata</div>
      <div className="location-item"><span>◆</span> Indore</div>
      <div className="location-item"><span>◆</span> Bangalore</div>
      <div className="location-item"><span>◆</span> Tirupur</div>
      <div className="location-item"><span>◆</span> Madhya Pradesh</div>
      <div className="location-item"><span>◆</span> Agra</div>
      <div className="location-item"><span>◆</span> Mundra</div>
    </div>


    {/* COLUMN 4 */}
    <div className="location-column">
      <div className="location-item"><span>◆</span> Vadodara</div>
      <div className="location-item"><span>◆</span> Pune</div>
      <div className="location-item"><span>◆</span> Chennai</div>
      <div className="location-item"><span>◆</span> Kochi</div>
      <div className="location-item"><span>◆</span> New Delhi</div>
    </div>

  </div>

</section>
{/* ================= OFFICE IN AUSTRALIA ================= */}

<section className="australia-office">

  {/* LEFT - AUSTRALIA MAP */}
  <div className="australia-map">

    <img
      src="https://jeena.com/wp-content/uploads/2025/06/map3.png"
      alt="Office in Australia"
    />

  </div>


  {/* RIGHT - CONTENT */}
  <div className="australia-content">

    <h2>Office in Australia</h2>

    <p className="australia-description">
      Strategically positioned in Australia, Jeena
      Global offers freight and logistics services,
      bridging the gap between continents with
      precision.
    </p>


    {/* OFFICE DETAILS */}

    <div className="australia-details">

      <h3>
        <span className="location-icon">●</span>
        Corporate Office
      </h3>

      <p>
        Level 14, 3 Parramatta Square 153
        <br />
        Macquarie Street Parramatta
        <br />
        NSW 2150
      </p>

      <div className="australia-contact">

        <p>
          Cell No: +61 414 726 098
        </p>

        <p>
          Email: nkatgara@jeena.co.in
        </p>

      </div>

    </div>

  </div>

</section>


{/* ================= TEAM PHOTO ================= */}

<section className="team-photo-section">
  <img
    src="https://images.unsplash.com/photo-1780733066188-6586795a6da7?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    alt="Our Team"
    className="team-photo"
  />
</section>
    </div>
  );
};

export default Contact;