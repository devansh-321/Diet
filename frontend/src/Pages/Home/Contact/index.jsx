import './style.css'
import Img from '../../../Assets/images/img3.jpg'
import { FormField, FormGroup, Input} from '../../../Components/Form'
import { useState } from 'react';
import Button from '../../../Components/Button';

const Contact = () => {
    const [payload, setPayload] = useState({});

    const handleChange = (name, value) => {
        setPayload({...payload, [name]: value})
    }

    return<>
        <div className="contact-section">
            <div className="contact-inner-section">
                <div className="contact-image-section">
                    <div className="contact-image-abs-section">
                        <img src={Img} />
                    </div>
                </div>
                <div className="contact-form-section">
                    <span className="highlight-txt">CONSULTATION</span>
                    <h2 className="heading-text">Make Consultation</h2>

                    <FormGroup>
                        <FormField>
                            <Input 
                                label="Name"
                                name="name"
                                value={payload?.name}
                                handleChange={handleChange}
                            />
                        </FormField>
                        <FormField>
                            <Input 
                                label="Phone"
                                name="phone"
                                value={payload?.phone}
                                handleChange={handleChange}
                            />
                        </FormField>
                        <FormField>
                            <Input 
                                label="Email"
                                name="email"
                                value={payload?.email}
                                handleChange={handleChange}
                            />
                        </FormField>
                        <FormField>
                            <Input 
                                label="Subject"
                                name="subject"
                                value={payload?.subject}
                                handleChange={handleChange}
                            />
                        </FormField>
                    </FormGroup>
                    <FormGroup>
                        <FormField>
                            <p style={{
                                marginBottom: '0.4em',
                                color: 'black'
                            }}>Message</p>
                            <textarea className="contact-textarea" rows={5}></textarea>
                        </FormField>
                    </FormGroup>

                    <Button 
                        title="Submit"
                        variant="variant-primary"
                        onClick={()=>{}}
                    />
                </div>
            </div>
        </div>
    </>
}

export default Contact