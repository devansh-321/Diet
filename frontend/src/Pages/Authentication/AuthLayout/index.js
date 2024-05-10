import './style.css';
import {ReactComponent as AuthIcon} from '../../../Assets/svg/auth.svg'
import { useNavigate } from 'react-router-dom';
import { MdOutlineClear } from "react-icons/md";
import Button from '../../../Components/Button';

const AuthLayout = ({children, pageTitle, forgotPass, bottomText, submitBtn}) => {
    
    const navigate = useNavigate();
    
    return<>
        <div className="auth-layout-section">
            <div className="auth-layout-inner-section">
                <div className="auth-layout-left-section">
                    <div className="auth-layout-abs-div">
                        <AuthIcon />
                        <h3>Discover Limitless Diet Plans: Login for Exclusive Access!</h3>
                        <p style={{color: 'black'}}>Welcome to our Dietician's Portal! Unlock personalized nutrition plans, track your progress, and embark on your journey to a healthier lifestyle. Your wellness starts here!</p>
                    </div>
                </div>
                <div className="auth-layout-right-section">
                    <div className="auth-layout-abs-section"></div>
                    <div className="auth-layout-close-btn"><MdOutlineClear onClick={()=>navigate('/')}/></div>
                    <h2>{pageTitle}</h2>

                    <div className="auth-layout-right-section-content">
                        {children}
                    </div>
                    
                    {forgotPass && <div className="auth-layout-forgot-div"><span className="auth-layout-forgot-pass" onClick={()=>navigate(forgotPass?.href)}>{forgotPass?.title}</span></div>}

                    <Button
                        title={submitBtn?.title}
                        variant={submitBtn?.variant}
                        onClick={submitBtn?.onClick}
                        loading={submitBtn?.loading}
                    />

                    <div className="auth-layout-or-div">
                        <hr/>
                        <span>or</span>
                        <hr/>
                    </div>

                    {bottomText && <p style={{textAlign: 'center'}}>{bottomText?.title}<span className="auth-layout-bottom-text" onClick={()=>navigate(bottomText?.href)}> {bottomText?.linkTitle}</span></p>}
                </div> 
            </div>
        </div>
    </>
}

export default AuthLayout