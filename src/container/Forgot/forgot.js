import React, { useState } from 'react'
import InputField from '../../component/Input/InputField'
import ButtonComponent from "../../component/Button/Button"
import "../Login/Login.css"
import { Typography, Form, Checkbox } from "antd";
import { useHistory } from "react-router-dom";
import firebase from '../../Firebase'
function Forgot() {
	const history = useHistory();
	const { Title, Link } = Typography;
	const [formFields, setFormFields] = useState({
		email: "",
		password: ""
	});
	const handleInputChange = (event, name) => {
		console.log("Hello", event.target.value, name)
		const { value } = event.target
		setFormFields({ ...formFields, [name]: value });
	}
	const handleSubmit = (e) => {
		e.preventDefault()
		const { email } = formFields
		firebase.auth().sendPasswordResetEmail(email)
			.then(() => {
				alert("Email has been sent to you, please check and verify it.")
			})
			.catch(error => {
				console.log("error during Sign In", error.message)
			})
	}
	const { email } = formFields
	return (
		<div>
			<div className="main">
				<div className="loginBox">
					<Form className="form">
						<Title level={3}>
							Email
						</Title>
						<InputField
							placeholder="Enter Email"
							onChange={(e) => handleInputChange(e, "email")}
							value={email}
						/>
						<ButtonComponent
							Button="Login"
							className="blue_btn"
							onClick={(e) => handleSubmit(e)}
						/>
					</Form>
				</div>
			</div>
		</div>
	);
}
export default Forgot;
