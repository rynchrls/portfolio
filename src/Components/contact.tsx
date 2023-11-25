import { forwardRef, useState, useRef } from "react";
import "../App.scss";
import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface dark {
  darkMode: boolean;
}

const Contact = forwardRef<HTMLDivElement, dark>(({ darkMode }, ref) => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const sendRef = useRef<HTMLButtonElement>(null)

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    const serviceId = "service_0mahpwd";
    const templateId = "template_48u1czm";
    const publicKey = "1VxhCGJQQKtHC_tsk";

    const data = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: {
        from_name: name,
        from_email: email,
        to_name: "Rydevs.io ",
        message: message,
      },
    };

    try {
      const res = await axios.post(
        "https://api.emailjs.com/api/v1.0/email/send",
        data
      );
      console.log(res.data)
      if(darkMode) {
        toast.success('Email Sent Successfully!', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: '',
          theme: "light",
          });
      }else {
        toast.success('Email Sent Successfully!', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: '',
          theme: "dark",
          });

      }
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error(error);
    }

    setTimeout(() => {
      if(sendRef.current) {
        sendRef.current.blur()
      }
    }, 1000)
  };

  return (
    <section
      className={`contact-section section ${darkMode ? "contact-section-dark" : ""}`}
      ref={ref}
      id="contact"
    >
      <h2 className="h1-light">Get In Touch</h2>
      <form onSubmit={handleSubmit}>
        <div className="name-email-wrapper">
          <div className="name">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="What's your name?"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="email">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="What's your email?"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="textarea">
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            placeholder="Do you have anything to say?"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <button type="submit" ref={sendRef}>Send Message</button>
      </form>
      <p className="p-light">© Made by Ryan Charles Alcaraz 2023.</p>
      {darkMode ? (
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      ) : (
        <ToastContainer position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light" />
      )}
    </section>
  );
});

export default Contact;
