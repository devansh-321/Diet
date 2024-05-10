import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import './style.css'
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getLogin } from "../../store/authSlice";
import AuthLayout from "./AuthLayout";
import { toast } from "react-toastify";
import { Input } from "../../Components/Form";

const Login=()=>{
    const location = useLocation()
    const [payLoad, setPayload] = useState({email: location?.state?.email || ""});
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const [errors,setErrors]=useState(null)
    let [searchParams, setSearchParams] = useSearchParams();
    const returnTo =searchParams.get('returnTo') || '';
    
    const navigate = useNavigate();

    const handleChange = (name,value) => {
        setPayload({
            ...payLoad,
            [name]: value,
        })
        setErrors({
            ...errors,
            [name]:null
        })
    }

    async function handleLogin(){
        setLoading(true)
        dispatch(getLogin(payLoad,navigate))
            .then((resp) => {
                if(resp?.status === 200){
                    toast.success({type:'success',message:"Logged in successfully"})
                    if(returnTo!=''){
                        window.location.href=`/`+returnTo
                    }else{
                        window.location.href='/'
                    }
                }else{
                    toast.error({message: resp?.response?.data?.message})
                }
            })
            .catch((err) => {
                toast.error(err?.response?.data?.message)
                setLoading(false)
                console.log("errorjjj : ",err?.response?.data)
                setErrors(err?.response?.data?.errors)
            })
            .finally(()=>setLoading(false))
    }
    return <AuthLayout
        pageTitle="Login"
        // forgotPass={{title: 'forgot Password?', href: '/forgot-password'}}
        submitBtn={{title: 'Login', onClick: handleLogin, variant: 'variant-primary', loading: loading}}
        bottomText={{title: "did'nt have an account yet?",linkTitle: "Register Here", href: '/signup'}}
    >
        <Input
            label="Email"
            name="email"
            value={payLoad?.email}
            error={errors?.email}
            handleChange={handleChange}
        />
        <Input 
            label="Password"
            password
            name="password"
            value={payLoad?.password}
            error={errors?.password}
            handleChange={handleChange}
        />
    </AuthLayout>

}

export default Login;