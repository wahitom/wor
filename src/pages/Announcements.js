import React, { useState, useEffect } from "react";
import { api } from "../utils/utils";

const Announcements = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch announcements
  useEffect(() => {
    api
      .get("announcements")
      .then((response) => {
        setAnnouncements(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError("Error fetching announcements. Please try again later");
        setLoading(false);
        console.error("Error fetching announcements:", error);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Could not find details</div>;
  }

  return (
    <div>
      <div className="announce header">
        <h1 align="center">ANNOUNCEMENTS</h1>
      </div>
      <div className="container">
        <div className="row g-3">
          {announcements.map((announcement) => (
            <div key={announcement.id} className="col-lg-4 col-md-6 col-sm-12">
              <div className="card">
                <img
                  src={announcement.image}
                  className="card-img-top"
                  alt={announcement.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{announcement.title}</h5>
                  <p className="card-text">{announcement.description}</p>
                </div>
              </div>
            </div>
          ))}
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card">
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card">
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card">
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card">
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card">
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Announcements;
