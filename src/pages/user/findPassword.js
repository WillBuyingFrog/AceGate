import "antd/dist/antd.min.css";
import './findPassword.css';
import {
    Typography,
    Layout,
    Menu,
    Avatar,
    Col,
    Row,
    Space,
    Button,
    Divider,
    Tabs,
    List,
    Skeleton,
    Table,
    Spin,
    Image,
    Form, Input, message
} from 'antd';
import {
    UserOutlined,
    HomeOutlined,
    BulbOutlined,
    FormOutlined,
    MailOutlined,
    SolutionOutlined,
    BarChartOutlined
} from '@ant-design/icons';

import React, { useEffect, useState } from 'react';
import {Link, useLocation} from 'react-router-dom'
import axios from "axios";
import findPasswordImg from '../../assets/images/undraw_data_input_fxv2.png'
import {useToast} from "@chakra-ui/react";
const { Header, Content, Footer, Sider } = Layout;
const { Title, Paragraph, Text } = Typography;


async function validateVerifyCode(email, verifyCode) {

    const formData = new FormData();
    formData.append("email", email);
    formData.append("vercode", verifyCode);

    await axios.post("/ConfirmVerCode", formData)
        .then(res => {
            console.log(res.data);
        })
}





const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};



function FindPassword() {
    const [email, setEmail] = useState("");
    const [verified, setVerified] = useState(false);
    const [hasSendCode, setHasSendCode] = useState(0);
    const [verifyCode, setVerifycode] = useState(0);
    const [countdown, setCountdown] = useState(0);

    const toast = useToast();

    const sendVerificationEmail = (email) =>{

        const formData = new FormData()
        formData.append("to", email)
        axios.post('/sendEmail2',formData)
            .then(res => {
                console.log(res.data)
                if(res.data.code === 200){
                    message.success('发送成功')
                    setCountdown(1);
                    setHasSendCode(1);
                    // 必须发送一次验证码
                    setInterval(() => setCountdown(0), 60000);
                }
                else
                    message.error(res.data.message)
                return res.data.code;
            })
    }

    const handleSendVerifyEmail = () => {
        if (!validateEmail(email)) {
            toast({
                title: '请填写合法的邮箱',
                status: 'error',
                position:'top',
                duration: 9000,
                isClosable: true,
            })
            return -1;
        }
        if (countdown === 0) {
            let result =  sendVerificationEmail(email);
        }
    }

    const handleValidateEmail = async e => {
        e.preventDefault();
        await validateVerifyCode(email, verifyCode);
    }



    // console.log(verified);
    const goToSetPassword = () => {

        setVerified(true);
        // console.log(verified);
    }
    const goToLogin = () => {
        window.location.href = "/loginAndRegister";
    }
    let location = useLocation()
    let params = new URLSearchParams(location.search)
    // let RID = params.get('RID')
    return (
        <Layout className="findPassword">
            <Header>
                <div/>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    items={new Array(15).fill(null).map((_, index) => {
                        const key = index + 1;
                        return {
                            key,
                            label: `nav ${key}`,
                        };
                    })}
                />
            </Header>
            <Content
                style={{
                    height: '100vh',
                    transition: '0.5s',
                    padding: '50px 200px 20px 200px',
                    background: 'linear-gradient(180deg,#f7fafc, rgba(158, 171, 196, 0.8))',
                }}
            >
                <div
                    style={{
                        padding: '24px',
                        backgroundColor: 'white',
                        boxShadow: '4px 4px 15px 0 rgba(0,0,0,0.1)',
                        borderRadius: '20px',
                        width: '650px',
                        height: '415px',
                        margin: 'auto',
                        marginTop: '80px',
                        display: verified ? 'none' : 'flex',
                    }}
                >
                    <Row>
                        <Col span={10}>
                            <Image
                                src={findPasswordImg}
                                style={{
                                    margin: 'auto',
                                    marginTop: '50px',
                                }}
                                preview={false}
                            >
                            </Image>
                        </Col>
                        <Divider type="vertical" style={{height: '370px'}}/>
                        <Col span={13}>
                            <Title
                                level={2}
                                style={{
                                    textAlign: 'center',
                                    marginBottom: '25px',
                                    color: '#4A5568',
                                    letterSpacing: '5px',
                                }}
                            >找回密码</Title>
                            <Paragraph
                                style={{
                                    color: '#8e9aaf',
                                    fontSize: '16px',
                                    fontWeight: 'bold',
                                    letterSpacing: '3px',
                                    textAlign: 'center',
                                    margin: '4px',
                                }}
                            >请输入您的邮箱，我们将会发送验证码到您的邮箱。</Paragraph>
                            <Form>
                                <Form.Item
                                    name="email"
                                >
                                    <Input
                                        className={'findPasswordInput'}
                                        autoComplete={'off'}
                                        placeholder="请输入您的邮箱"
                                        type="email"
                                        onChange={e => setEmail(e.target.value)}
                                    />
                                </Form.Item>
                                <Form.Item
                                    name="verifyCode"
                                >
                                    <Input
                                        className={'findPasswordInput'}
                                        autoComplete={'off'}
                                        placeholder="请输入验证码"
                                        type="text"
                                        style={{
                                            width: '55%',
                                        }}
                                    />
                                    <Button
                                        className={'findPasswordButton'}
                                        shape={"round"}
                                        size="large"
                                        style={{
                                            width: '40%',
                                            margin: 'auto',
                                            textAlign: 'center',
                                            marginTop: '10px',
                                            marginBottom: '10px',
                                            letterSpacing: '0',
                                        }}
                                        onClick={handleSendVerifyEmail}
                                        disabled={countdown === 1}
                                    >
                                        发送验证码
                                    </Button>
                                </Form.Item>
                            </Form>
                            <Row>
                                <Button
                                    className={'resetButton'}
                                    shape={"round"}
                                    size="large"
                                    style={{
                                        width: '40%',
                                        margin: 'auto',
                                        textAlign: 'center',
                                        marginTop: '10px',
                                        marginBottom: '10px',
                                        letterSpacing: '3px',
                                    }}
                                    onClick={handleValidateEmail}
                                >重置密码
                                </Button>
                            </Row>
                        </Col>
                    </Row>
                </div>
                <div
                    style={{
                        padding: '24px',
                        backgroundColor: 'white',
                        boxShadow: '4px 4px 15px 0 rgba(0,0,0,0.1)',
                        borderRadius: '20px',
                        width: '650px',
                        height: '415px',
                        margin: 'auto',
                        marginTop: '80px',
                        display: verified ? 'flex' : 'none',
                    }}
                >
                    <Row>
                        <Col span={13}>
                            <Title
                                level={2}
                                style={{
                                    textAlign: 'center',
                                    marginBottom: '25px',
                                    color: '#4A5568',
                                    letterSpacing: '5px',
                                }}
                            >重置密码</Title>
                            <Paragraph
                                style={{
                                    color: '#8e9aaf',
                                    fontSize: '16px',
                                    fontWeight: 'bold',
                                    letterSpacing: '3px',
                                    textAlign: 'center',
                                    margin: '4px',
                                }}
                            >请输入您的新密码。</Paragraph>
                            <Form>
                                <Form.Item
                                    name="newPassword"
                                >
                                    <Input
                                        className={'findPasswordInput'}
                                        autoComplete={'off'}
                                        placeholder="请输入您的新密码"
                                        type="password"
                                        style={{
                                            margin: '20px 15px 0 0px',
                                        }}
                                    />
                                </Form.Item>
                                <Form.Item
                                    name="password2"
                                >
                                    <Input
                                        className={'findPasswordInput'}
                                        autoComplete={'off'}
                                        placeholder="确认密码"
                                        type="password"
                                        style={{
                                            margin: '20px 15px 0 0px',
                                        }}
                                    />
                                </Form.Item>
                            </Form>
                            <Row>
                                <Button
                                    className={'resetButton'}
                                    shape={"round"}
                                    size="large"
                                    style={{
                                        width: '40%',
                                        margin: 'auto',
                                        textAlign: 'center',
                                        marginTop: '10px',
                                        marginBottom: '10px',
                                        letterSpacing: '3px',
                                    }}
                                    onClick={goToLogin}
                                >去登录
                                </Button>
                            </Row>
                        </Col>
                        <Divider type="vertical" style={{height: '370px'}}/>
                        <Col span={10}>
                            <Image
                                src={findPasswordImg}
                                style={{
                                    margin: 'auto',
                                    marginTop: '50px',
                                }}
                                preview={false}
                            >
                            </Image>
                        </Col>
                    </Row>
                </div>
            </Content>
        </Layout>
    );
}
export default FindPassword;
