import React, { useState, useEffect } from "react";
import { api } from "../utils/utils";

// State to store announcements data
const Announcements = () => {
  const [announcements, setAnnouncements] = useState([]);

  // Fetch announcements from the API
  useEffect(() => {
    api.get("announcements")
      .then((response) => {
        setAnnouncements(response.data);
      })
      .catch((error) => {
        console.error("Error fetching announcements:", error);
      });
  }, []);

  return (
    <div>
      <div className="announce header">
        <h1 align="center">ANNOUNCEMENTS</h1>
      </div>
      <div className="container">
        <div className="row g-3">
          {announcements.length > 0 ? (
            announcements.map((announcement) => (
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
            ))
          ) : (
            <div>No announcements found</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Announcements;