import NavBar from "../../components/NavBar/NavBar";
import VideoSection from '../../components/VideoSection/VideoSection';
import Banner from '../../components/Banner/Banner';
import Footer from '../../components/Footer/Footer';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <NavBar />
      <Banner />
      <VideoSection section="Video Juegos" title="Video Juegos" />
      <VideoSection section="Ciencia" title="Ciencia" />
      <VideoSection section="Paranormal" title="Paranormal" />
      <Footer />
    </div>
  );
};

export default HomePage;
