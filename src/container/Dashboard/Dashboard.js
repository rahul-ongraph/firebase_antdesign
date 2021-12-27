import React, { useEffect } from 'react'
import {
	Typography, Layout, Input, Menu, Slider, Checkbox,
	Carousel, Switch, Statistic, Card, Row, Col, Progress,
	DatePicker, Space, TimePicker
} from "antd";
import moment from 'moment';
import "../Dashboard/Dashboard.css"
import {
	MenuOutlined, SearchOutlined, MailOutlined
	, AppstoreOutlined, SettingOutlined, LogoutOutlined,
	ArrowUpOutlined, ArrowDownOutlined,BellTwoTone,HomeTwoTone
}
	from "@ant-design/icons"
	import { useHistory } from "react-router-dom";
	import SpeechRecognition from "react-speech-recognition";
	import firebase from '../../Firebase';
function Login() {
	const history = useHistory();
	const { Title } = Typography
	const { RangePicker } = DatePicker;
	const { Header, Footer, Sider, Content } = Layout;
	const { SubMenu } = Menu;

	// const {
	// 	listening,
	// 	transcript,
	// 	interimTranscript,
	// 	browserSupportsSpeechRecognition
	//   } = props;
  
	//   const handleListen = event => {
	// 	props.startListening();
	// 	if (listening) {
	// 	  props.abortListening();
	// 	}
	// 	event.target.classList.toggle("record");
	//   };
  
	//   const resetListen = () => {
	// 	props.resetTranscript();
	//   };
  
	//   if (!browserSupportsSpeechRecognition) {
	// 	return null;
	//   }
	return (
		<Layout>
			<Header className="header">
				<MenuOutlined className="menu_icon" />
				<Input.Group className="serachbar">
					<Input
						className="input"
						size="large"
						placeholder="Search product  Name..."
						prefix={<SearchOutlined style={{ fontSize: 20 }} />}
					/>
				</Input.Group>
				
				<LogoutOutlined className="menu_icon"
				 handleClick ={() =>history.push("/") } />
			</Header>
			<Layout>
				<Sider className="sidebar">
					<Menu
						style={{ width: 256 }}
						defaultSelectedKeys={['1']}
						defaultOpenKeys={['sub1']}
						mode="inline"
					>
						<SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
							<Menu.ItemGroup key="g1" title="Item 1">
								<Menu.Item key="1">Option 1</Menu.Item>
								<Menu.Item key="2">Option 2</Menu.Item>
								<Menu.Item key="1">Option 3</Menu.Item>
								<Menu.Item key="2">Option 4</Menu.Item>
							</Menu.ItemGroup>
						</SubMenu>
						<SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
							<Menu.Item key="5">Option 5</Menu.Item>
							<Menu.Item key="6">Option 6</Menu.Item>
						</SubMenu>
						<SubMenu title="sub_Navigation Two">
							<Menu.Item key="5">Option 7</Menu.Item>
							<Menu.Item key="6">Option 8</Menu.Item>
						</SubMenu>
						<SubMenu key="sub4" icon={<SettingOutlined />} title="Navigation Three">
							<Menu.Item key="9">Option 9</Menu.Item>
							<Menu.Item key="10">Option 10</Menu.Item>
						</SubMenu>
					</Menu>
				</Sider>
				<div className="first">
					<Slider style={{ width: "25%" }} range defaultValue={[20, 50]} />
					<Checkbox value={101}>Electronic</Checkbox> <br />
					<Checkbox value={102}>Grocerya</Checkbox> <br />
					<Checkbox value={103}>Furniture</Checkbox> <br />
					<Checkbox value={103}>Hotelsaa</Checkbox> <br />
					<div style={{ width: 170, marginLeft: 100 }}>
						<Progress percent={30} size="small" />
						<Progress percent={50} size="small" status="active" />
						<Progress percent={70} size="small" status="exception" />
						<Progress percent={100} size="small" />
					</div>
				</div>
				<div className="second">
					<Carousel autoplay>
						<div>
							<h3 className="contentStyle">1</h3>
						</div>
						<div>
							<h3 className="contentStyle">2</h3>
						</div>
						<div>
							<h3 className="contentStyle">3</h3>
						</div>
						<div>
							<h3 className="contentStyle">4</h3>
						</div>
					</Carousel>
					<Switch defaultChecked />
					<div className="site-statistic-demo-card">
						<Row gutter={16}>
							<Col span={12}>
								<Card>
									<Statistic
										title="Active"
										value={11.28}
										precision={2}
										valueStyle={{ color: '#3f8600' }}
										prefix={<ArrowUpOutlined />}
										suffix="%"
									/>
								</Card>
							</Col>
							<Col span={12}>
								<Card>
									<Statistic
										title="Idle"
										value={9.3}
										precision={2}
										valueStyle={{ color: '#cf1322' }}
										prefix={<ArrowDownOutlined />}
										suffix="%"
									/>
								</Card>
							</Col>
						</Row>
					</div>
					<div style={{ display: 'flex' }}>
						<Space direction="vertical" size={12}>
							<RangePicker />
							<RangePicker showTime />
							<RangePicker picker="week" />
							<RangePicker picker="month" />
							<RangePicker picker="year" />
						</Space>
						<TimePicker defaultValue={moment('12:08:23', 'HH:mm:ss')} size="large" />
					</div>
					<div style={{marginTop:10}}>
					<Progress type="circle" percent={75} />
					<Progress type="circle" percent={70} status="exception" />
					<Progress type="circle" percent={100} />
					</div>
				</div>
			</Layout>
			<Footer className="footer">
				<div style={{display:'flex', justifyContent:'space-evenly'}}>
			<Title className="footer_text"  level={3}>
					This is Footer
        </Title>
				<div>
				<BellTwoTone className="menu_icon" />
				<HomeTwoTone className="menu_icon" />
				</div>
				</div>
		{/* <div className="container">
        <p>Red button to start/stop recording your voice.</p>
        Black button to Reset.
        <div className="wrapper">
          <button className="button start" onClick={handleListen} />
          <button className="button reset" onClick={resetListen} />
          <div id="interim" className="interim">
            {interimTranscript}
          </div>
          <div id="final" className="final">
            {transcript}
          </div>
        </div>
        <p>Note: This Voice Recognition only supports Google Chrome.</p>
      </div> */}
			</Footer>
		</Layout>

	);
}
export default Login;