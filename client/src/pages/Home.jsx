import React from 'react';
import Navbar1 from '../components/Navbar1';
import Footer from '../components/footer';
import Section from '../components/Section';
import Properties from '../components/properties';
import ThreeSixtyViewer from '../components/ThreeSixtyViewer';

const Home = () => {
  return (
    <div>
      <div className="navbar"> 
        <Navbar1 />
      </div>
      
     <div className="section">
      <Section/>
     </div>
     
 
     <div className="properties">
      <Properties/>
     </div>
     <div>
      <ThreeSixtyViewer />
    </div>

      <div className="space-between-sections" style={styles.space}></div>
      <div className="footer-container"> 
        <Footer />
      </div>
    </div>
  );
}

const styles = {
  space: {
    height: '50px', 
  },
};

export default Home;