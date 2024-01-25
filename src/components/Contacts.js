import React from "react";

// Component for displaying contact information and a contact form
const Contacts = () => {
  return (
    <div>
      <div>
        <h1 align="center">Contact Us</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div>
              <h3>GET IN TOUCH WITH US</h3>
            </div>
            <div>
              <p>
                Incase you want to get to get in touch with us and plan your{" "}
                <b>Workout Plans</b> We are here for you
              </p>
            </div>
            <div>
              <i className="bi bi-telephone-fill text-black m-2"></i>
              <span className="text-black">
                <b>Phone no:</b>
                +254792666307
              </span>
            </div>
            <div>
              <i className="bi bi-map-fill text-black m-2"></i>
              <span className="text-black">
                <b>Email:</b>
                biceps_firry@gmail.com
              </span>
            </div>
            <div>
              <i className="bi bi-instagram text-black m-2"></i>
              <span className="text-black">
                <b>Instagram:</b>
                biceps_firry
              </span>
            </div>
            <div>
              <i className="bi bi-twitter-x text-black m-2"></i>
              <span className="text-black">
                <b>X:</b>
                biceps_firry
              </span>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12">
            <form>
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="mb-2">
                    <label htmlFor="name" className="form-label"></label>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="form-control"
                      id="name"
                      name="firstname"
                      autoComplete="given-name"
                      required
                    />
                    <div className="valid-feedback">Looks good!</div>
                    <div className="invalid-feedback">
                      Please fill in your first name.
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="mb-3">
                    <label htmlFor="number" className="form-label"></label>
                    <input
                      type="number"
                      placeholder="Your number"
                      className="form-control"
                      id="number"
                      required
                    />
                    <div className="valid-feedback">Looks good!</div>
                    <div className="invalid-feedback">
                      Please fill in your number.
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label"></label>
                    <input
                      type="email"
                      placeholder="Your email"
                      className="form-control"
                      id="email"
                      required
                    />
                    <div className="valid-feedback">Looks good!</div>
                    <div className="invalid-feedback">
                      Please fill in the email.
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="mb-3">
                    <label htmlFor="subject" className="form-label"></label>
                    <input
                      type="text"
                      className="form-control"
                      id="subject"
                      placeholder="Subject"
                    />
                  </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <div className="mb-3">
                    <label htmlFor="Textarea" className="form-label"></label>
                    <textarea
                      className="form-control"
                      id="Textarea"
                      rows="3"
                    ></textarea>
                  </div>
                </div>
                <div className="col-12">
                  <div className="sendbtn">
                    <button
                      type="submit"
                      className="btn btn-success text-center"
                    >
                      Submit form
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
