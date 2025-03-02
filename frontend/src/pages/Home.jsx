import React from "react";

const Home = () => {
  const handleButtonClick = () => {
    window.location.href = "./login";
  };

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <div style={styles.logoContainer}>
          <img src="commitcoin.png" alt="Commit Coin" style={styles.logo} />
        </div>
        <h1 style={styles.heading}>Welcome to Commit Coin!</h1>
        <button style={styles.button} onClick={handleButtonClick}>
          Begin committing!
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    width: "189vh",
    backgroundImage: "url('your-background-image.jpg')", 
    backgroundSize: "cover",
    backgroundPosition: "center",
    fontFamily: "Avenir ",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "rgba(26, 26, 46, 0.8)", 
    padding: "4rem",
    borderRadius: "12px",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
    backdropFilter: "blur(10px)", 
    height: "900em",
    width:"100em",
  },
  logoContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "2rem",
    animation: "fadeInUp 1s ease", 
  },
  logo: {
    width: "180px",
    height: "180px",
    marginBottom: "-1rem",
    animation: "rotate 2s linear infinite", 
    borderRadius: "10%",
  },
  websiteName: {
    fontSize: "3rem",
    color: "#FFFFFF",
    fontWeight: "bold",
    animation: "fadeInUp 1s ease", 
  },
  heading: {
    fontSize: "4rem",
    color: "#FFFFFF",
    marginBottom: "3rem",
    animation: "fadeInUp 1s ease 0.5s", 
  },
  button: {
    padding: "12px 40px",
    backgroundColor: "#C95B7B",
    color: "white",
    border: "none",
    borderRadius: "6.5px",
    cursor: "pointer",
    fontSize: "1.5rem",
    animation: "fadeInUp 1s ease 1s", 
  },
  // Keyframes for animations
  "@keyframes fadeInUp": {
    "0%": {
      opacity: 0,
      transform: "translateY(20px)",
    },
    "100%": {
      opacity: 1,
      transform: "translateY(0)",
    },
  },
  "@keyframes rotate": {
    "0%": {
      transform: "rotate(0deg)",
    },
    "100%": {
      transform: "rotate(360deg)",
    },
  },
};

export default Home;