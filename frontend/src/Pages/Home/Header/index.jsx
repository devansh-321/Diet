import { NavLink, useNavigate } from "react-router-dom"
import { DATA } from "../../../Config"
import Button from "../../../Components/Button"
import './style.css'
import { IconClear, IconMenu } from "../../../Assets/Icons"
import { useDispatch, useSelector } from "react-redux"
import { getLogout } from "../../../store/authSlice"
import { useState } from "react"

const Header = () => {
    const navigate = useNavigate()
    const {auth, isLoggedIn} = useSelector(store=>store.auth)
    const dispatch = useDispatch()
    console.log(auth)
    const [open, setOpen] = useState(false)
    return<>
        <div style={{
            height: '4em'
        }}></div>
        <div className="header-section">
            <div className="header-inner-section">
                <div className="header-logo-section">
                    <h1>{DATA.websiteName}</h1>
                </div>
                <div className="header-menu-section">
                    <ul>
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/'>Plans</NavLink></li>
                        <li><NavLink to='/'>About</NavLink></li>
                        <li><NavLink to='/'>Contact</NavLink></li>
                    </ul>
                </div>
                <div className="header-auth-section">
                    {
                        isLoggedIn ?
                        <Button 
                            title="Logout"
                            variant="variant-primary"
                            onClick={()=>{dispatch(getLogout())}}
                        />
                        :<Button 
                        title="Login"
                        variant="variant-primary"
                        onClick={()=>{navigate('/login')}}
                    />
                    }
                </div>
                <div className="header-hamburger-section">
                    {open ? <IconClear color="var(--primary-color)" onClick={()=>{setOpen(prev=>!prev)}}/>
                    :<IconMenu color="var(--primary-color)" onClick={()=>{setOpen(prev=>!prev)}}/>
                    }
                    
                </div>

                <div className={`header-menu-section-mobile ${open && "menu-animation"}`}>
                    {isLoggedIn && <p style={{paddingTop: '1em'}}>Welcome, {auth?.response?.detail?.email}</p>}
                    <ul>
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/'>Plans</NavLink></li>
                        <li><NavLink to='/'>About</NavLink></li>
                        <li><NavLink to='/'>Contact</NavLink></li>
                        <li>{
                            isLoggedIn ?
                                <p
                                    onClick={()=>{dispatch(getLogout())}}
                                >Logout</p>
                                // <Button 
                                //     title="Logout"
                                //     variant="variant-primary"
                                //     onClick={()=>{dispatch(getLogout())}}
                                // />
                                :<p
                                    onClick={()=>navigate('/login')}
                                >Login</p>
                        }</li>
                    </ul>
                </div>
            </div>
        </div>
    </>
}

export default Header