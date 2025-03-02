const Home = () => {

  const handleButtonClick = () => {
    window.location.href = './login'; 
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome to Hot Plates!</h1>
      <button style={styles.button} onClick={handleButtonClick}>
        Begin !
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '189vh',
    backgroundColor: '#1A1A2E',
  },
  heading: {
    fontSize: '4rem',
    color: '#FFFFFF',
    marginBottom: '35px',
  },
  button: {
    padding: '12px 40px',
    backgroundColor: '#C95B7B',
    color: 'white',
    border: 'white',
    borderRadius: '6.5px',
    cursor: 'pointer',
    fontSize: '1.5rem',
  },
};

export default Home;
