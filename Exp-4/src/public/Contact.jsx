import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name</label>
      <input type="text" name="name" placeholder="Enter your name" />

      <label>Email</label>
      <input type="email" name="email" placeholder="Enter your email" />

      <label>Message</label>
      <textarea name="message" placeholder="Enter your message"></textarea>

      <button type="submit">Send Message</button>
    </form>
  );
}

export default Contact;
