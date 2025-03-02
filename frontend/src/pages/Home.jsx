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
          <h1 style={styles.websiteName}>Commit Coin</h1>
        </div>
        <h1 style={styles.heading}>Welcome to Hot Plates!</h1>
        <button style={styles.button} onClick={handleButtonClick}>
          Begin !
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
    backgroundImage: "url('your-background-image.jpg')", // Replace with your background image
    backgroundSize: "cover",
    backgroundPosition: "center",
    fontFamily: "Avenir ",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "rgba(26, 26, 46, 0.8)", // Semi-transparent background for content
    padding: "4rem",
    borderRadius: "12px",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
    backdropFilter: "blur(10px)", // Add a subtle blur effect
    height: "900em",
    width:"100em",
  },
  logoContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "3rem",
    animation: "fadeInUp 1s ease", 
  },
  logo: {
    width: "150px",
    height: "150px",
    marginBottom: "1rem",
    animation: "rotate 2s linear infinite", 
    borderRadius: "10%",
  },
  websiteName: {
    fontSize: "2.5rem",
    color: "#FFFFFF",
    fontWeight: "bold",
    animation: "fadeInUp 1s ease", // Add a fade-in-up animation
  },
  heading: {
    fontSize: "4rem",
    color: "#FFFFFF",
    marginBottom: "2rem",
    animation: "fadeInUp 1s ease 0.5s", // Add a delayed fade-in-up animation
  },
  button: {
    padding: "12px 40px",
    backgroundColor: "#C95B7B",
    color: "white",
    border: "none",
    borderRadius: "6.5px",
    cursor: "pointer",
    fontSize: "1.5rem",
    animation: "fadeInUp 1s ease 1s", // Add a delayed fade-in-up animation
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