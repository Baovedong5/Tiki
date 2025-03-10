import type { FormProps } from "antd";
import { Button, Divider, Form, Input } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";

type FieldType = {
  fullName: string;
  password: string;
  email: string;
  phone: string;
};

const RegisterPage = () => {
  const [isLoading, setIsLoading] = useState(false);

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
  };

  console.log(import.meta.env.VITE_BACKEND_URL);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f1f5f9]">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 ">Đăng Ký Tài Khoản</h1>
        <Divider />

        <Form name="form-register" onFinish={onFinish} autoComplete="off">
          <Form.Item<FieldType>
            labelCol={{ span: 24 }} //whole column
            label="Họ tên"
            name="fullName"
            rules={[{ required: true, message: "Họ tên không được để trống!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            labelCol={{ span: 24 }} //whole column
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Email không được để trống!" },
              { type: "email", message: "Email không đúng định dạng" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            labelCol={{ span: 24 }} //whole column
            label="Mật khẩu"
            name="password"
            rules={[
              { required: true, message: "Mật khẩu không được để trống!" },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item<FieldType>
            labelCol={{ span: 24 }} //whole column
            label="Số điện thoại"
            name="phone"
            rules={[
              { required: true, message: "Số điện thoại không được để trống!" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" loading={isLoading}>
              Đăng ký
            </Button>
          </Form.Item>

          <Divider>Or</Divider>

          <div className="text-center mt-2">
            <p className="text-black text-base">
              Đã có tài khoản ? &nbsp;
              <span>
                <Link to="/login" className="text-base">
                  Đăng nhập
                </Link>
              </span>
            </p>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default RegisterPage;
