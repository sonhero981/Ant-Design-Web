import { Button, Checkbox, Form, Input } from "antd";
import React from "react";

function AppContact() {
  const [form] = Form.useForm();

  return (
    <div id="contact" className="block contactBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Get in Touch</h2>
          <p>Dolore nam rerum obcaecati fugit odio nobis Molestiae rerum</p>
        </div>
        <Form form={form} name="normal_login" className="login-form">
          <Form.Item
            name="fullName"
            rules={[
              { required: true, message: "Please input your full name!" },
            ]}
          >
            <Input placeholder="Full Name" />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
              {
                required: true,
                message: "Please input your E-mail!",
              },
            ]}
          >
            <Input type="email" placeholder="Email Adress" />
          </Form.Item>

          <Form.Item
            name="telephone"
            rules={[
              { required: true, message: "Please input your phone number!" },
            ]}
          >
            <Input type="number" placeholder="Telephone" />
          </Form.Item>

          <Form.Item
            name="subject"
            rules={[{ required: true, message: "Please input subject!" }]}
          >
            <Input placeholder="Subject" />
          </Form.Item>

          <Form.Item
            name="message"
            rules={[{ required: true, message: "Please input message" }]}
          >
            <Input.TextArea placeholder="Message" showCount maxLength={100} />
          </Form.Item>
          <Form.Item
            name="remember"
            valuePropName="checked"
            rules={[{ required: true, message: "Please checked" }]}
          >
            <Checkbox>I agree with terms and conditions.</Checkbox>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default AppContact;
