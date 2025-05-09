import { Outlet } from 'react-router-dom';
import Navbar from './navbar';

const App = () => {
  return (
    <div style={styles.container}>
      <Navbar />
      <div style={styles.content}>
        <Outlet />
      
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundImage: "url('/canva.png')", // Replace with actual image path
    display: 'flex',
    flexDirection: 'column',
    backgroundSize: 'cover',  // Ensures the image covers the entire background
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    width: '100%',  // Full width of the viewport
    height: '100vh', // Full height of the viewport
    alignItems: 'center',
    justifyContent: 'center',
  },
};

export default App;
