import { useNavigate, useSearchParams } from "react-router-dom";
import './style.css'
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getSignup } from "../../store/authSlice";
import AuthLayout from "./AuthLayout";
import { Input } from "../../Components/Form";
import { toast } from "react-toastify";

const SingUp=()=>{

    const [payLoad, setPayload] = useState({});
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const [errors,setErrors]=useState(null)
    let [searchParams, setSearchParams] = useSearchParams();
    const returnTo =searchParams.get('returnTo') || '';
    
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

    async function handleSignup(){
        setLoading(true)
        dispatch(getSignup(payLoad))
            .then((resp) => {
                if(resp?.response?.status === 400){
                    console.log("ERRRRRRRRRR",resp)
                    setErrors(resp?.response?.data?.field_errors)
                    return false
                }
                toast.success(resp?.data?.message)
                navigate('/login', {state: {email: payLoad?.email}})
            })
            .catch((err) => {
                toast.error(err?.message)
                console.log("ERRRRRRRRRR",err)
                setErrors(err?.response?.data?.errors)
            })
            .finally(()=>setLoading(false))
    }
    return <AuthLayout
        pageTitle="Sign Up"
        submitBtn={{title: 'Sign Up', onClick: handleSignup, variant: 'variant-primary',loading: loading}}
        bottomText={{title: "Already have an accoutn?",linkTitle: "Login Here", href: '/login'}}
    >
        <Input
            label="Full Name"
            name="username"
            value={payLoad?.username}
            error={errors?.username}
            handleChange={handleChange}
        />
        <Input
            label="Mobile"
            name="mobile"
            value={payLoad?.mobile}
            error={errors?.mobile}
            handleChange={handleChange}
        />
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

export default SingUp;