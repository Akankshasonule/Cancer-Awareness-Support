import React from "react";

export const Contact = () => {
  const [success, setSuccess] = React.useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formInputData = Object.fromEntries(formData.entries());
    console.log(formInputData);
    setSuccess(true);
    e.target.reset();
  };

  const inputStyle = {
    width: "100%",
    padding: "12px 14px",
    color: "#ce5dae",
    margin: "10px 0",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "1.5rem",
    fontFamily: "'DM Serif Text', serif",
    
  };

  const textareaStyle = {
    width: "100%",
    padding: "12px 14px",
    margin: "10px 0",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "1rem",
    fontFamily: "'DM Serif Text', serif",
    fontWeight: "400",
    fontStyle: "normal",
    resize: "vertical",
  };

  const buttonStyle = {
    padding: "14px 24px",
    marginTop: "15px",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#ce5dae",
    color: "#fff",
    fontSize: "1rem",
    cursor: "pointer",
    transition: "background 0.3s",
  };

  return (
    <section style={{ backgroundColor: "#f9f9f9", minHeight: "100vh" }}>

      <div style={{ padding: "50px 20px" }}>
        <h1 style={{ textAlign: "center", marginBottom: "10px", color: "#ce5dae" }}> Spreading Hope, One Helping Hand at a Time. </h1>
        <br />
        <h2 style={{ textAlign: "center", marginBottom: "40px", color: "#ce5dae" }}>
          Contact Us
        </h2>

        <div
          style={{
            maxWidth: "600px",
            margin: "0 auto",
            background: "#fff",
            padding: "40px",
            borderRadius: "12px",
            boxShadow: "0 6px 25px rgba(0,0,0,0.1)",
          }}
        >
          <form onSubmit={handleFormSubmit}>

            <input
              type="text"
              name="username"
              placeholder="Enter your Name"
              required
              style={inputStyle}
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              required
              style={inputStyle}
            />

            <input
              type="email"
              name="email"
              placeholder="Enter your e-mail"
              required
              style={inputStyle}
            />

            <select name="urgency" required style={inputStyle}>
              <option value="">Urgency Level</option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>

            <select name="category" required style={inputStyle}>
              <option value="">Select a Category</option>
              <option value="Medical Support">Medical Support</option>
              <option value="Volunteer">Volunteer Request</option>
              <option value="Event">Awareness Event Registration</option>
              <option value="General">General Query</option>
            </select>

            <textarea
              name="message"
              rows="6"
              placeholder="Enter your message"
              required
              style={textareaStyle}
            ></textarea>


            <button
              type="submit"
              style={buttonStyle}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#ce5dae")}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#ce5dae")}
            >
              Send
            </button>

            {success && (
              <p style={{ color: "green", marginTop: "15px", textAlign: "center", fontWeight: "500" }}>
                Thank you! Your message has been sent.
              </p>
            )}
          </form>
        </div>
      </div>



      <h2 style={{ textAlign: "center", marginBottom: "40px", color: "#ce5dae" }}> Every act of kindness grows the spirit.</h2>

    </section>
  );
};
