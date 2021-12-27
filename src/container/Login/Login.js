import React, { useEffect, useState } from 'react'
import InputField from '../../component/Input/InputField'
import ButtonComponent from "../../component/Button/Button"
import "../Login/Login.css"
import { Typography, Form, Checkbox } from "antd";
import { useHistory } from "react-router-dom";
import firebase from '../../Firebase'
function Login() {
	const history = useHistory();
	const { Title, Link } = Typography;
	const [formFields, setFormFields] = useState({
		email: "",
		password: "",
		phone: "",
		otp: ""
	});

	useEffect(()=>{
		const msg=firebase.messaging();
		msg.requestPermission().then(()=>{
			return msg.getToken();
		}).then((data)=>{
			console.warn("token",data)
		})
	})
	const handleInputChange = (event, name) => {
		console.log("Hello", event.target.value, name)
		const { value } = event.target
		setFormFields({ ...formFields, [name]: value });
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		const { email, passowrd } = formFields
		const data = firebase.auth().signInWithEmailAndPassword(email, password)
			.then(() => {
				history.push("Dashboard")
			})
			.catch(error => {
				console.log("Error during Sign In", error.message)
			})
		if (data) {
			setFormFields({
				email: "",
				password: "",
			})
		}
	}
	const LoginWithGoogle = () => {
		var provider = new firebase.auth.GoogleAuthProvider();
		firebase.auth()
			.signInWithPopup(provider)
			.then((result) => {
				var credential = result.credential;

				// This gives you a Google Access Token. You can use it to access the Google API.
				var token = credential.accessToken;
				// The signed-in user info.
				var user = result.user;
				var token = credential.accessToken;
				if (token) {
					history.push("Dashboard")
				}
				console.log("Result===>", result.user.name)
			}).catch((error) => {
				console.log("Result===>", error)
			});

	}
	const LoginWithFacebook = () => {
		var provider = new firebase.auth.FacebookAuthProvider();
		firebase.auth()
			.signInWithPopup(provider)
			.then((result) => {
				console.log("Result===>", result)
				var credential = result.credential;
				var user = result.user;
				var accessToken = credential.accessToken;
				if (accessToken) {
					history.push("Dashboard")
				}
			})
			.catch((error) => {
				console.log("Error===>", error)
				var errorCode = error.code;
				var errorMessage = error.message;
				var email = error.email;
				var credential = error.credential;
			});
	}

	const { email, password } = formFields
	return (
		<div className="main">
			<div className="loginBox">
				<Title className="login" level={3}>
					Sign In
				</Title>
				<Form   className="form">
				
                   <div id="sign-in-button"> </div>
					<Title level={3}>
						Email
					</Title>
					<InputField
						placeholder="Enter Email"
						onChange={(e) => handleInputChange(e, "email")}
						value={email}
					/>
					<Title level={3}>
						Password
					</Title>
					<InputField
						placeholder="Enter Password"
						onChange={(e) => handleInputChange(e, "password")}
						value={password}
					/>
					<Checkbox className="checkBox" >
						Remember me
					</Checkbox>
					<ButtonComponent
						Button="Login"
						className="blue_btn"
						onClick={(e) => handleSubmit()}
					/>
					<div className="forgot">
						<Link href="forgot" target="_blank">
							Forgot password
						</Link>
						<Title onClick={() => history.push("/SignUp")} className="signup_link" level={5}>
							Signup
						</Title>
					</div>
					<ButtonComponent
						Button="LoginWithGoogle"
						// className="blue_btn"
						onClick={(e) => LoginWithGoogle(e)}
					/>
					<ButtonComponent
						Button="LoginWithFacebook"
						// className="blue_btn"
						onClick={(e) => LoginWithFacebook(e)}
					/>
					<ButtonComponent
						Button="LoginWithMobile"
						// className="blue_btn"
						onClick={() =>history.push('otp')}
					/>
				</Form>
				
			</div>

		</div>
	);
}
export default Login;
