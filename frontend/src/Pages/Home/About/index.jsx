import { IconCertified, IconHonor, IconStar } from '../../../Assets/Icons'
import Button from '../../../Components/Button'
import './style.css'
import Img from '../../../Assets/images/617.jpg'

const About = () =>{

    return<>
        <div className="about-section">
            <div className="about-inner-section">
                <div className="about-image-section">
                    <div className="about-image-abs-section">
                        <img src={Img} />
                    </div>
                </div>
                <div className="about-text-content-section">
                    <span className="highlight-txt">
                        About Nutrition
                    </span>

                    <h2 className="heading-text">Improving By The Inspir Healthy Living</h2>

                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>

                    <div className="about-icon-text-content-section">
                        <div className="about-icon-text-content-section-card">
                            <IconStar color='var(--primary-color)'/>
                            <p>One of the finest  Nutrition Agency In India</p>
                        </div>
                        <div className="about-icon-text-content-section-card">
                            <IconCertified color='var(--primary-color)'/>
                            <p>Ranked Top 20 Agency Of The Decade</p>
                        </div>
                        <div className="about-icon-text-content-section-card">
                            <IconHonor color='var(--primary-color)'/>
                            <p>Honor Of Working With Fortune 400</p>
                        </div>
                    </div>
                    
                    <div className="">
                        <Button 
                            title="More About"
                            variant="variant-primary"
                            onClick={()=>{}}
                        />
                    </div>
                    
                </div>
            </div>
        </div>
    </>
}

export default About