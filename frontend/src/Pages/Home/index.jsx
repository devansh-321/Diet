import { useSelector } from 'react-redux';
import About from './About';
import BmiSection from './BmiSection';
import Carousel from './Carousel';
import Contact from './Contact';
import Footer from './Footer';
import Header from './Header';
import './style.css'

const Home = () => {
    return<>
        <Header />
        <Carousel />
        <About />
        <BmiSection />
        <Contact />
        <Footer />
    </>
}

export default Home;