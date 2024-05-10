import './style.css'
import ImgDesktop from "../../../Assets/images/44073.jpg"
import ImgMobile from "../../../Assets/images/44073.jpg"
import Button from '../../../Components/Button'
import { useEffect, useState } from 'react';
const Carousel = () => {
    const [containerWidth, setContainerWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setContainerWidth(window.innerWidth);
        };

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Remove event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return<>
        <div className="carousel-section">
            <div className="carousel-section-abs-div">
                <img src={containerWidth > 900 ? ImgDesktop : ImgMobile} />
            </div>
            <div className="carousel-overlay-section">
                <div className="carousel-text-transparent"></div>
                <div className="carousel-text-section">
                    <span className="highlight-txt"> EXPERIENCED  NUTRITIONIST</span>

                    <h2 className="heading-text">Healthy Nutrition makes healthy body</h2>

                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    
                    <div className="carousel-button-section">
                        <Button 
                            title="Read More"
                            variant="variant-primary"
                            onClick={()=>{}}
                        />

                        <Button 
                            title="Contact Us"
                            variant="variant-secondary"
                            onClick={()=>{}}
                        />
                    </div>
                </div>
            </div>
            
        </div>
    </>
}

export default Carousel