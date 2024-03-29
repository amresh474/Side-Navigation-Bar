import { Link, useNavigate } from "react-router-dom";
import { Form, Input, Button,message } from "antd";
import axios from "axios"
import "./Login.css";
export const Login = () => {
  const navigate = useNavigate();
  const onfinishHandler = async (values) => {
    try {
      const res = await axios.post("/api/auth/login",values);
      console.log("res------>",res)
      localStorage.setItem("token",res.data.token)
      message.success("Login Successfully")
      navigate("/");
     } catch (error) {
      console("res------>",error)
      message.error("Something Went Wrong ")
     }
  
  };
  return (
    <div className="form-container">
      <Form layout="vertical" onFinish={onfinishHandler} className="login-form">
        <h3>Login From </h3>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your Email!",
            },
          ]}
        >
          <Input type="email" required />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input type="password" required />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          Not a member? <Link to="/singup">Signup</Link>
        </Form.Item>
      </Form>
    </div>
  );
};
