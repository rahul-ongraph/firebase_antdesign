import React,{useState} from 'react'
import InputField from '../../component/Input/InputField'
import ButtonComponent from "../../component/Button/Button"
import "../Signup/Signup.css"
import { Typography, Form, Checkbox } from "antd";
import { useHistory } from "react-router-dom";
import  firebase from '../../Firebase'
function Signup() {
	const history = useHistory();
	const { Title } = Typography;
	// const defaultForm = {
	// 	firstname :'',
	// 	lastName:'',
	// 	email:'',
	// 	phoneNumber:'',
	// 	password:''
	// }
const [formFields,setFormFields] = useState({
	firstname:"",
	email:"",
	password:""
});

const handleInputChange = (event,name) => {
	console.log("Hello",event.target.value,name)
	const {value} = event.target
setFormFields({ ...formFields, [name]: value });
}
console.log("this========>",formFields)
 const handleSubmit = (e) => {
	 console.log("this========>",formFields)
	 e.preventDefault()
	const {firstname,email,passowrd} = formFields
	 firebase.auth().createUserWithEmailAndPassword(email, password)
					.then(userCredentials => {
						console.log("Hello=======>",userCredentials)
							var uname = userCredentials.user.uname
							const data = {
								firstname,email,password
							};
							firebase.firestore().collection('hello').add(
							data).then((docRef) => {
								console.log("Hello=======>")
							})
							.catch((error) => {
								console.error("Error adding document: ", error);
							});
							// firebase.database().ref("Data/").push(data)
							// return userCredentials.user.updateProfile({
							// 		name:uname,
							// 		displayName:firstname ,
							// 		// phoneNumber: phoneNumber
							// })
					})
					.catch(error => {
							console.log("Error========>", error.message)
					})

}
// const handleSubmit = async (e) => {
// 	e.preventDefault()
// 		const {firstname,lastname,email,phoneNumber,passowrd} = formFields
//   const result = await 	auth.createUserWithEmailAndpassowrd(firstname,lastname,email,phoneNumber,passowrd)
// }
const {firstname,email,password} = formFields
	return (
		<div className="main">
			<div className="signupBox">
				<Title className="signup" level={3}>
					Sign Up </Title>
				<Form  className="form_signup">
					<Title level={3}>
						First Name
					</Title>
					<InputField
						placeholder="Enter First Name"
						value={firstname} onChange={(e)=>handleInputChange(e,"firstname")} name="firstname"
					/>
					{/* <Title level={3}>
						Last Name
					</Title>
					<InputField
						placeholder="Enter Last Name"
						value={formFields.lastName} onChange={handleInputChange} name="lastName"
					/> */}
					<Title level={3}>
						Email
					</Title>
					<InputField
						placeholder="Enter Email"
						value={email} onChange={(e)=>handleInputChange(e,"email")} name="email"
					/>
					{/* <Title level={3}>
						Phone Number
					</Title>
					<InputField
						placeholder="Enter Phone number"
						value={formFields.phoneNumber} onChange={handleInputChange} name="phoneNumber"
					/> */}
					<Title level={3}>
						Password
					</Title>
					<InputField
						placeholder="Enter Password"
						value={password} onChange={(e)=>handleInputChange(e,"password")} name="password"
					/>
					<ButtonComponent
						Button="Register"
						className="blue_btn"
						onClick={(e) =>handleSubmit(e) }
					/>
					<div className="forgot">
						<Title level={5}>
						</Title>
						<Title onClick={() => history.push("/")} className="Login_link" level={5}>
							Login
						</Title>
					</div>
				</Form>
			</div>
		</div>
	);
}
export default Signup;