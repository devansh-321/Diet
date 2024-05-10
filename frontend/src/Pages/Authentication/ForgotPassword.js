import { useNavigate } from "react-router-dom";
import './style.css'
import { useState } from "react";
import authService from "../../services/axios/auth";
import AuthLayout from "./AuthLayout";
import { toast } from "react-toastify";
import { Input } from "../../Components/Form";

const ForgotPassword=()=>{

    const [payLoad, setPayload] = useState({});
    const [errors,setErrors]=useState(null)
    const [buttonLoading, setButtonLoading] = useState(false)
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

    async function handleForgotPass(){
        setButtonLoading(true)
        authService?.forgotPassword(payLoad)
            .then((resp) => {
                toast.success({type:'success',message:resp?.data?.message})
                navigate('/verify-forgot-otp', {state: {email: payLoad?.email}})
            })
            .catch((err) => {
                if(err?.response?.data?.field_errors){
                    setErrors(err?.response?.data?.field_errors)
                    return false;
                }
                toast.error(err?.response?.data?.message)
            })
            .finally(()=>setButtonLoading(false))
    }
    return <AuthLayout
        pageTitle="Forgot Password?"
        submitBtn={{title: 'Next', onClick: handleForgotPass, variant: 'variant-primary'}}
        bottomText={{linkTitle: "cancel", href: '/login',loading: buttonLoading}}
    >
        <Input
            label="Email"
            name="email"
            value={payLoad?.email}
            error={errors?.email}
            handleChange={handleChange}
        />
    </AuthLayout>

}

export default ForgotPassword;