import React,{useEffect, useState} from 'react'
import ButtonComponent from '../component/Button/Button'
import axios from 'axios';
function Api() {
	const [data,setData] = useState({});
		const fetchData = async () => {
			const response = await axios.get(
				'https://reqres.in/api/users?page=2'
			);
			setData(response.data);
			console.log("response===",response)
		};

	return (
		<div>
			<ButtonComponent
				Button="show Data"
				className="api_btn"
			onClick={fetchData}
			/>
		{
			data.data && data.data.map((item,index) => {
				return (
					<div style={{}}>
					<tr key={index}>
					<td>{item.id}</td>
					<td>{item.email}</td>
					<td>{item.first_name}</td>
					<td>{item.last_name}</td>
				</tr>
				</div>
				)
			})
		}
		</div>
	);
}
export default Api;
