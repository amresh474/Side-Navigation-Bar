import { Link ,useNavigate} from "react-router-dom";
import axios from "axios"
import { Form, Input, Button ,message} from "antd";
import "./Singup.css";
export const Singup = () => {
  const navigate = useNavigate();
  const onfinishHandler = async (values) => {
   try {
    const res = await axios.post("/api/auth/register",values);
    navigate("/login")
   } catch (error) {
    message.error("Something Went Wrong ")
   }
  };
  return (
    <div className="form-container">
      <Form
        layout="vertical"
        onFinish={onfinishHandler}
        className="singup-form"
      >
        <h3>Register From </h3>
        <Form.Item
          label="Name"
          name="name"
          rules={[
            {
              required: true,
              message: "Please input your name!",
            },
          ]}
        >
          <Input type="text" required />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your name!",
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
          <Link to="/" className="m-2">
            Already user login here{" "}
          </Link>
        </Form.Item>
      </Form>
    </div>
  );
};
