
export const Contact = () => {

    const handleFormSubmit=(formData)=>{
    
        const formInputData = Object.fromEntries(formData.entries());
        console.log(formInputData);
    };

    const textareaStyle = {
        fontFamily: "'DM Serif Text', serif",
        fontWeight: "400",
        fontStyle: "normal",
        color: "#fff",
           };

    return (
        <section className="section-contact">
            <h2 className="container-title">Contact Us</h2>

            <div className="contact-wrapper container">

            <form action={handleFormSubmit}>

                <input type="text"
                    required
                    autoComplete="false"
                    placeholder="Enter your Name"
                    name="username"
                />

                <input type="email"
                    className="form-control"
                    required
                    autoComplete="false"
                    placeholder="Enter your e-mail"
                    name="email"
                />

                < textarea
                style={textareaStyle}
                    className="form-control"
                    rows="10"
                    required
                    autoComplete="false"
                    placeholder="Enter your message "
                    name="message"
                ></textarea>

                <button type="submit" value="send" >Send</button>

            </form>

            </div>

        </section>
    )
};