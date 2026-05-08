import { useState } from "react";
import "../Hero/Hero.css";

const Cont = () => {
  const [user, setUser] = useState({});

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
            <form className="contact-form">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={user.name || ""}
                  onChange={(e) => setUser({ ...user, name: e.target.value })}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" />
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">Phone</label>
                <input type="tel" className="form-control" id="phone" />
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
