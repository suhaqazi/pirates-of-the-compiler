import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

const Invite = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [requests, setRequests] = useState({});

  const usernames = [
    "user123",
    "johndoe",
    "janedoe",
    "peterpan",
    "coding_guru","charlie","kevin","marie","987hibye","whyisthis","tirediam",
  ];

  const filteredUsernames = usernames.filter((username) =>
    username.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSendRequest = (username) => {
    setRequests({
      ...requests,
      [username]: "pending",
    });
  };

  const handleAcceptRequest = (username) => {
    setRequests({
      ...requests,
      [username]: "accepted",
    });
  };

  useEffect(() => {
    const acceptedRequest = Object.entries(requests).find(
      ([username, status]) => status === "accepted"
    );

  }, [requests, navigate]);

  return (
    <div>
      <nav
        style={{
          backgroundColor: "rgba(32, 15, 60, 0.9)",
          padding: "1rem",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Link to="/" style={{ color: "#eeeeee", textDecoration: "none" }}>
          Home
        </Link>
        <Link to="/login" style={{ color: "#eeeeee", textDecoration: "none" }}>
          Login
        </Link>
        <Link to="/signup" style={{color: "#eeeeee", textDecoration:"none"}}>
            SignUp
        </Link>
      </nav>

      <div
        style={{
          margin: 0,
          fontFamily: "Arial, sans-serif",
          backgroundImage: "url('background.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          width: "189vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              backgroundColor: "rgba(32, 15, 60, 0.9)",
              padding: "2rem",
              borderRadius: "12px",
              boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
              width: "80rem",
              height: "40em"
            }}
          >
            <div>
              <h1
                style={{
                  color: "#eeeeee",
                  textAlign: "center",
                  fontSize: "2em",
                  fontWeight: "bold",
                  marginBottom: "1em",
                }}
              >
                Invite your Friend and set your goals straight!!
              </h1>
              <p
                style={{
                  color: "#c9b9f0",
                  textAlign: "center",
                  marginBottom: "2rem",
                }}
              >
                Search for friends and connect:
              </p>
            </div>

            <div
              style={{
                backgroundColor: "rgba(225, 255, 255, 0.1)",
                padding: "1rem",
                borderRadius: "0.5em",
                marginBottom: "1rem",
                height: "27em",
              }}
            >
              <input
                type="text"
                placeholder="Search by username"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: "100%",
                  padding: "8px",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                  boxSizing: "border-box",
                  marginBottom: "10px",
                }}
              />

              <div style={{ maxHeight: "22em", overflow: "auto" }}>
                <ul>
                  {filteredUsernames.map((username) => (
                    <li
                      key={username}
                      style={{
                        color: "#eee",
                        marginBottom: "5px",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      {username}

                      {requests[username] === "pending" ? (
                        <button onClick={() => handleAcceptRequest(username)}>
                          Pending
                        </button>
                      ) : requests[username] === "accepted" ? (
                        <span style={{ color: "green" }}>Accepted</span>
                      ) : (
                        <button onClick={() => handleSendRequest(username)}>
                          Send Request
                        </button>
                      )}
                    </li>
                  ))}
                  
                </ul>
              </div>
            </div>
            <Link to="/money" style={{color: "#eeeeee", textDecorationStyle:"solid"}}>
            Done
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invite;