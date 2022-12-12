import "antd/dist/antd.min.css";
import {
    Layout,
    message,
    Upload,
    Row,
    Button,
    Form, Input,
    Menu,
} from 'antd';
import { LoadingOutlined, PlusOutlined, CheckCircleOutlined, RollbackOutlined} from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
import {Link, useLocation} from 'react-router-dom'
import axios from "axios";
import {Select } from 'antd';

const { Header, Content, Footer, Sider } = Layout;


const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
};

const beforeUpload = (file) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
        message.error('请上传JPG/PNG格式的文件!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('图片必须小于2MB!');
    }
    return isJpgOrPng && isLt2M;
};

const layout = {
    labelCol: {
        span: 6,
    },
    wrapperCol: {
        span: 16,
    },
};

const validateMessages = {
    required: '${label}为必填项',
    types: {
        email: '请输入有效的${label}!',
        number: '${label} is not a valid number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};

function Edit() {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [imageUrl, setImageUrl] = useState();
    const [size] = useState('middle');

    let location = useLocation()
    let params = new URLSearchParams(location.search)
    // let RID = params.get('RID')

    const getData = ()=>{
        axios({
            method: "post",
            url: "https://mock.apifox.cn/m1/1955876-0-default/personInfo",
            data: {
                UID: params.get('UID'),
            }
        })
            .then(res => {
                    setData(res.data)
                }
            )
    }

    const [form] = Form.useForm();
    const Uavatar = Form.useWatch('Uavatar', form);
    const Uname = Form.useWatch('Uname', form);
    let Uinterest = [];
    let Ufield = [];
    // const pushData = ()=>{
    //     axios({
    //         method: "post",
    //         url: "https://mock.apifox.cn/m1/1955876-0-default/editPortal2",
    //         data: {
    //             RID: params.get('RID'),
    //             Ravatar: Ravatar,
    //             Rinstitute: Rinstitute,
    //             Rcontact: Rcontact,
    //             Rconcepts: Rconcepts,
    //             RpersonalPage: RpersonalPage,
    //             Rgateinfo: Rgateinfo,
    //         }
    //     })
    //         .then(res => {
    //                 console.log(res.data)
    //             }
    //         )
    // }

   

    const changeInfo = () =>{
        axios({
          method: 'POST',
          url: 'https://mock.apifox.cn/m1/1955876-0-default/personInfo/edit',
          data:{
            UID : params.get('UID'),
            Uavatar : Uavatar,
            Uname : Uname,
            Uinterest: Uinterest,
            Ufield : Ufield,
          }
        }).then(response =>{
        });
      }

    useEffect(() => {
        getData();
    }, [])

    const handleChange = (info) => {
        if (info.file.status === 'uploading') {
            setLoading(true);
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, (url) => {
                setLoading(false);
                setImageUrl(url);
            });
        }
    };
    const uploadButton = (
        <div>
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div
                style={{
                    marginTop: 8,
                }}
            >
                Upload
            </div>
        </div>
    );

    const onFinish = (values) => {
        
    };

    // save button hover style
    const [saveIsHover, setSaveIsHover] = useState(false)
    const handleMouseEnterSave = () => {
        setSaveIsHover(true)
    }
    const handleMouseLeaveSave = () => {
        setSaveIsHover(false);
    }
    const saveStyle = {
        backgroundColor: saveIsHover ? '#5bc28b' : '#50af78',
        border: 'none',
        boxShadow: '4px 4px 15px 0 rgba(0,0,0,0.2)',
    }

    const optionValue = ['人工智能', '机器学习', '计算机网络',
    '神经网络', '深度学习', '植物泛基因研究',
    '生态与环境科学', '地球科学', '马克思主义', 
    '生物科学领域', '电磁波吸收材料', '化学与材料科学',
    '物理学', '人文社科', '天文学与天体物理学',
    '数学'];
    const optionValue2 = ['中国式现代化', '文献综述', '人工智能',
    '共同富裕', '数字化转型', '作业设计', '课程思政', '粮食安全', '自然辩证法',
    '经济研究', '文化自信', '人类命运共同体', '劳动教育', '管理世界', '绿色金融',
    '盈利能力分析', '工程伦理']
    const optionTest = `111\u00A0\u00A0222\u00A0\u00A0333`;
    const optionTest2 = optionTest.split("\u00A0\u00A0");
    const options = [];
    const options2 = [];
    for (let i = 10; i < 26; i++) {
    options.push({
        value: optionValue[i-10],
        label: optionValue[i-10]
    });
    options2.push({
        value: optionValue2[i-10],
        label: optionValue2[i-10]
    });
    }
    const handleChange2 = (value) => {
        Ufield = value.join(`\u00A0\u00A0`);
    };
    const handleChange3 = (value) => {
        Uinterest = value.join(`\u00A0\u00A0`);
    };
    return (
        <Layout className="layout">
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
                    padding: '50px 200px 20px 200px',
                    backgroundColor: 'rgb(230,235,247)',
                }}
            >
                <div
                    style={{
                        padding: '50px 50px 30px 50px',
                        Height: '200px',
                        backgroundColor: 'white',
                        boxShadow: '4px 4px 15px 0 rgba(0,0,0,0.1)',
                        borderRadius: '10px',
                    }}
                >
                    
                    <Form
                        {...layout}
                        form={form}
                        onFinish={onFinish}
                        validateMessages={validateMessages}
                        style={{
                            padding: '20px 0 0 0',
                        }}
                    >
                        <Form.Item
                            name="Uavatar"
                            label="头像"
                            rules={[
                                {
                                    required: false,
                                },
                            ]}
                            style={{
                                padding: '10px',
                            }}
                        >
                            <Upload
                                name="avatar"
                                listType="picture-card"
                                className="avatar-uploader"
                                showUploadList={false}
                                action="https://mock.apifox.cn/m1/1955876-0-default/personInfo/account"
                                beforeUpload={beforeUpload}
                                onChange={handleChange}
                            >
                                {imageUrl ? (
                                    <img
                                        src={imageUrl}
                                        alt="avatar"
                                        style={{
                                            width: '100%',
                                        }}
                                    />
                                ) : (
                                    uploadButton
                                )}
                            </Upload>
                        </Form.Item>
                        <Form.Item
                             name="Ufield"
                             label="研究领域"
                             initialValue={optionTest2}
                             style={{
                                padding: '10px',
                            }}
                        >
                            <Select
                                mode="tags"
                                size={size}
                                placeholder="请选择你的研究领域"
                                onChange={handleChange2}
                                style={{
                                width: '100%',
                                }}
                                options={options}
                            />
                        </Form.Item>
                        <Form.Item
                             name="Uinterest"
                             label="我的兴趣词"
                             initialValue={optionTest2}
                             style={{
                                padding: '10px',
                            }}
                        >
                            <Select
                                mode="tags"
                                size={size}
                                placeholder="请选择你的兴趣词"
                                onChange={handleChange3}
                                style={{
                                width: '100%',
                                }}
                                options={options2}
                            />
                        </Form.Item>
                    </Form>
                    
                    <Row
                        style={{
                            padding: '8px 0 0 0',
                        }}
                    >
                        <Link
                            to={{
                                pathname: '/personInfo',
                            }}
                            style={{
                                margin: "auto",
                            }}
                        >
                            <Button
                                type={"primary"}
                                icon={<CheckCircleOutlined />}
                                size="large"
                                shape={"round"}
                                style={saveStyle}
                                onMouseEnter={handleMouseEnterSave}
                                onMouseLeave={handleMouseLeaveSave}
                                onClick={changeInfo}
                            >
                                保存
                            </Button>
                            <Button className="button2" 
                                icon = {<RollbackOutlined/>}
                                type="primary"
                                size="large"
                                shape={"round"}
                                style={{
                                    margin: '25px 40px 16px 30px',
                                    border: 'none',
                                    boxShadow: '4px 4px 15px 0 rgba(0,0,0,0.3)',
                                }}
                            >
                                取消
                            </Button>
                        </Link>
                    </Row>
                </div>
            </Content>
            <Footer
                style={{
                    textAlign: 'center',
                    backgroundColor: 'rgb(230,235,247)'
                }}
            >
                AceGate ©2022 Beihang University
            </Footer>
        </Layout>
    );
}
export default Edit;