import React,{useState} from 'react'
import firebase from '../Firebase'
import { useHistory } from "react-router-dom";


function OTP() {
 const history = useHistory();
  const [formFields, setFormFields] = useState({
		mobile: "",
		otp: ""
	});
   const handleChange = (event, name) =>{
  	console.log("Hello", event.target.value, name)
		const { value } = event.target
		setFormFields({ ...formFields, [name]: value });
  }
  const configureCaptcha = () =>{
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
      'size': 'invisible',
      'callback': (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        onSignInSubmit();
        console.log("Recaptca varified")
      },
      defaultCountry: "IN"
    });
  }
const onSignInSubmit = (e) => {
  const {mobile,otp} = formFields
    e.preventDefault()
    configureCaptcha()
    const phoneNumber = "+91" + mobile
    console.log(phoneNumber)
    const appVerifier = window.recaptchaVerifier;
    firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
        .then((confirmationResult) => {
          // SMS sent. Prompt user to type the code from the message, then sign the
          // user in with confirmationResult.confirm(code).
          window.confirmationResult = confirmationResult;
          console.log("OTP has been sent")
          // ...
        }).catch((error) => {
          // Error; SMS not sent
          // ...
          console.log("SMS not sent",error)
        });
  }
 const  onSubmitOTP = (e) =>{
    e.preventDefault()
    const code = otp
    console.log(code)
    window.confirmationResult.confirm(code).then((result) => {
      // User signed in successfully.
      const user = result.user;
      console.log(JSON.stringify(user))
      alert("User is verified")
      if(user) {
        history.push("Dashboard")
      }
      // ...
    }).catch((error) => {
      // User couldn't sign in (bad verification code?)
      // ...
    });
  }
  const {mobile,otp} = formFields
    return (
      <div>
        <h2>Login Form</h2>
        <form onSubmit={onSignInSubmit}>
          <div id="sign-in-button"></div>
          <input type="number" name="mobile" placeholder="Mobile number" required onChange={(e) =>handleChange(e,"mobile")}/>
          <button type="submit">Submit</button>
        </form>

        <h2>Enter OTP</h2>
        <form onSubmit={onSubmitOTP}>
          <input type="number" name="otp" placeholder="OTP Number" required onChange={(e) =>handleChange(e,"otp")}/>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
export default OTP;
