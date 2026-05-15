import "../Hero/Hero.css";

const Cont = () => {
  return (
    <section className="section-block contact-section" id="Cont">
      <div className="container">
        <h2 className="section-title text-center">Contact</h2>
        <div className="row align-items-center g-4 mt-2">
          <div className="col-12 col-lg-5 text-center">
            <img
              className="contact-image"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm4UC87GK8NcYW-_7wkw06stFE3NXH2BBe3g&s"
              alt="Contact"
            />
          </div>

          <div className="col-12 col-lg-7">
            <form
              className="contact-form"
              action="https://formsubmit.co/dp7878038@gmail.com"
              method="POST"
            >
              <input type="hidden" name="_subject" value="New Portfolio Contact Form Message" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />

              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" name="name" required />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" name="email" required />
              </div>

              <div className="mb-3">
                <label htmlFor="phone" className="form-label">Phone</label>
                <input type="tel" className="form-control" id="phone" name="phone" required />
              </div>

              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea className="form-control" id="message" name="message" rows="4" required />
              </div>

              <button type="submit" className="btn accent-outline w-100">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cont;
