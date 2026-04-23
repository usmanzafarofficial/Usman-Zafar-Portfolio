import { useState, FormEvent } from "react";
import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus("Sent Successfully!");
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setStatus(""), 3000);
  };

  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-info">
            <div className="contact-box">
              <h4>Email</h4>
              <p>
                <a href="mailto:usmanzafar.ue@gmail.com" data-cursor="disable">
                  usmanzafar.ue@gmail.com
                </a>
              </p>
              <h4>Phone</h4>
              <p>
                <a href="tel:+9199999999" data-cursor="disable">
                  +91 99999 99999
                </a>
              </p>
            </div>
            <div className="contact-box social-box">
              <h4>Social</h4>
              <div className="social-links">
                <a
                  href="https://github.com/usmanzafarofficial"
                  target="_blank"
                  data-cursor="disable"
                  className="contact-social"
                >
                  Github <MdArrowOutward />
                </a>
                <a
                  href="https://www.linkedin.com/in/usman-zafar-018887277/"
                  target="_blank"
                  data-cursor="disable"
                  className="contact-social"
                >
                  Linkedin <MdArrowOutward />
                </a>
                <a
                  href="https://x.com/UsmanZafarTech"
                  target="_blank"
                  data-cursor="disable"
                  className="contact-social"
                >
                  Twitter <MdArrowOutward />
                </a>
                <a
                  href="https://www.instagram.com/usman_zafarofficial/"
                  target="_blank"
                  data-cursor="disable"
                  className="contact-social"
                >
                  Instagram <MdArrowOutward />
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
              <div className="form-group">
                <textarea
                  placeholder="Your Message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                ></textarea>
              </div>
              <button type="submit" className="submit-btn" data-cursor="disable">
                {status || (
                  <>
                    Send Message <MdArrowOutward />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        <div className="contact-footer">
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Usman Zafar</span>
            </h2>
            <h5>
              <MdCopyright /> 2037
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
