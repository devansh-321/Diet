import { useState } from "react"
import { Input, Popup } from "../../../Components/Form"
import './style.css'
import Button from "../../../Components/Button";
import authService from "../../../services/axios/auth";
import { toast } from "react-toastify";


const BmiSection = () => {

    const [payload, setPayload] = useState({});
    const [trigger, setTrigger] = useState(false);
    const [dietPlan, setDietPlan] = useState({})
    const handleChange = (name, value) => {
        if(name === "height"){
            const meters = value * 0.3048;
            payload.meter = meters?.toFixed(2);
        }
        setPayload({...payload, [name]: value})
        console.log(name, value)
    }

    const handleCalculate = () => {
        authService?.dietPlanCalculating({
            height: payload?.meter,
            weight: payload?.weight
        })
            .then((res)=>{
                console.log(res)
                toast.success(res?.data?.message)
                setTrigger(true)
                setDietPlan(res?.data?.response?.detail)
            })
            .catch((err)=>{
                console.log(err)
                toast.error(err?.response?.data?.message)
            })
    }

    console.log("PAYLOAD", payload)

    return<>
        <div className="bmi-section">
            <div className="bmi-abs-section"></div>
            <div className="bmi-inner-section">
                <span className="highlight-txt">
                    Check your diet plan
                </span>
                <h2 className="heading-text">YOUR BMI</h2>
                <br/>
                <div className="bmi-form-section">
                    <Input 
                        label="Height (feets)"
                        name="height"
                        value={payload?.height}
                        handleChange={handleChange}
                    />
                    <Input 
                        label="Weight (kg)"
                        name="weight"
                        value={payload?.weight}
                        handleChange={handleChange}
                    />
                    <Button 
                        title="Calculate"
                        variant="variant-primary"
                        onClick={handleCalculate}
                    />
                </div>
            </div>
        </div>

        <Popup
            trigger={trigger}
            setTrigger={()=>setTrigger(prev=>!prev)}
        >
            <div className="diet-plan-section">
                <div className="diet-plan-abs-section"></div>
                <div className="diet-plan-text-section">
                    <span
                        style={{
                            color: dietPlan?.code === "OVERWEIGHT" ? "red" : 
                                    dietPlan?.code === "MODERATE" ? "green" :
                                    dietPlan?.code === "UNDERWEIGHT" ? "purple": "black"
                        }}
                    >{dietPlan?.code}</span>
                    <p>
                        {dietPlan?.code === "OVERWEIGHT" ? "Transform your journey from overwhelmed to empowered with personalized nutrition guidance. Together, we'll sculpt a healthier, happier you, one balanced bite at a time!":
                        dietPlan?.code === "MODERATE" ? "Discover the beauty of moderation. Let's embark on a journey where balance is key, guiding you towards a healthier and happier you!": 
                        dietPlan?.code === "UNDERWEIGHT" ? "Fuel your body's potential with nourishing choices. Together, we'll build a roadmap to strength and vitality, unlocking the vibrant energy you deserve.": ""}
                    </p>
                    <p>Here is your Daily Diet Plan:</p>
                    
                    <div className="diet-plan-chart">
                        <h3>Breakfast: </h3>
                        <p>Diet: {dietPlan?.diet_plan?.breakfast?.diet}</p>
                        <p>Time: {dietPlan?.diet_plan?.breakfast?.time}</p>
                    </div>
                    
                    <div className="diet-plan-chart">
                        <h3>Mid Meal: </h3>
                        <p>Diet: {dietPlan?.diet_plan?.midmeal?.diet}</p>
                        <p>Time: {dietPlan?.diet_plan?.midmeal?.time}</p>
                    </div>

                    <div className="diet-plan-chart">
                        <h3>Lunch: </h3>
                        <p>Diet: {dietPlan?.diet_plan?.lunch?.diet}</p>
                        <p>Time: {dietPlan?.diet_plan?.lunch?.time}</p>
                    </div>

                    <div className="diet-plan-chart">
                        <h3>Evening: </h3>
                        <p>Diet: {dietPlan?.diet_plan?.evening?.diet}</p>
                        <p>Time: {dietPlan?.diet_plan?.evening?.time}</p>
                    </div>

                    <div className="diet-plan-chart">
                        <h3>Dinner: </h3>
                        <p>Diet: {dietPlan?.diet_plan?.dinner?.diet}</p>
                        <p>Time: {dietPlan?.diet_plan?.dinner?.time}</p>
                    </div>
                </div>
                

            </div>
        </Popup>
    </>
}

export default BmiSection