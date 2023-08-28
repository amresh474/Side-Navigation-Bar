import React, { useState } from "react";
import "./applyDoctors.css";
import { Form, Row, Col, Input } from "antd";
export const ApplyDoctors = () => {
  const handleFinish = (values) => {};

  return (
    <>
      <h1 className="text-center">Apply Doctor</h1>
      <Form layout="vertical" onFinish={handleFinish} >
        <Row gutter={20}>
          <h4 className="">Personal Details : </h4>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="First Name"
              name="firstName"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="your name " />
            </Form.Item>
          </Col>

          </Row>

      </Form>
    </>
  );
};
