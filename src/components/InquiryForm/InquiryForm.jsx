import { useState, useEffect } from "react";
import { CheckCircleOutlined, MailFilled, SendOutlined } from "@ant-design/icons";
import { Button, Col, Form, Input, Modal, Result, Row, Typography } from "antd";

import style from "./InquiryForm.module.scss";

const { Title } = Typography;
const { TextArea } = Input;

const InquiryForm = (props) => {
  const { visible, setVisible } = props;
  const [formState, setFormState] = useState({ loading: false, submited: false });

  const [form] = Form.useForm();

  useEffect(() => {
    if (formState.submited) {
      setTimeout(() => {
        setVisible(false);
        setFormState({ submited: false });
      }, 1000);
    }
  }, [formState.submited]);

  const handleOk = () => {
    // e.preventDefault();
    setFormState({ loading: true });

    const postEmail = async (payload) => {
      const endpoint = "/api/form";
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      };

      const response = await fetch(endpoint, options);
      return response.json();
    };

    form
      .validateFields()
      .then(async (values) => {
        const response = await postEmail(values);
        console.log(response);
        form.resetFields();
      })
      .catch((info) => {
        console.log("Validate Failed:", info);
        setFormState({ loading: false });
      });
  };

  const handleCancel = () => setVisible(false);

  const nameInput = () => {
    return (
      <Form.Item name="name" rules={[{ required: true, message: "Please provide your name!" }]}>
        <Input placeholder="Name" />
      </Form.Item>
    );
  };

  const emailInput = () => {
    return (
      <Form.Item
        name="email"
        rules={[{ required: true, message: "Please provide your email address!", type: "email" }]}
      >
        <Input placeholder="Email Address" />
      </Form.Item>
    );
  };

  const subjectInput = () => {
    return (
      <Form.Item name="subject">
        <Input placeholder="Subject" />
      </Form.Item>
    );
  };

  const descriptionInput = () => {
    return (
      <Form.Item name="message" rules={[{ required: true, message: "Please provide a message!" }]}>
        <TextArea rows={5} placeholder="What do you want to know" />
      </Form.Item>
    );
  };

  const customizedFooter = () => {
    if (formState.submited) return null;
    return (
      <>
        <Button type="ghost" onClick={handleCancel}>
          Cancel
        </Button>
        ,
        <Button loading={formState.loading} type="primary" icon={<SendOutlined />} onClick={handleOk} htmlType="submit">
          Send
        </Button>
      </>
    );
  };

  const renderForm = () => {
    return (
      <Col span={20} className={style.modal__content}>
        <Form
          form={form}
          preserve={false}
          layout="vertical"
          className={style.modal__content__form}
          requiredMark={false}
        >
          {nameInput()}
          {emailInput()}
          {subjectInput()}
          {descriptionInput()}
        </Form>
      </Col>
    );
  };

  const renderSuccess = () => {
    return (
      <Col span={20}>
        <Result
          icon={<CheckCircleOutlined style={{ fill: "#023059 !important" }} />}
          status="success"
          title="Thank you for speaking to us!"
        />
      </Col>
    );
  };

  const renderHeader = () => {
    return (
      <Col span={12} className={style.modal__header}>
        <Row gutter={[16, 0]} justify="center" align="middle">
          <Col className={style.modal__header__icon}>
            <MailFilled />
          </Col>
          <Col>
            <Title level={4} className={style.modal__header__title}>
              Inquire Now
            </Title>
          </Col>
        </Row>
      </Col>
    );
  };

  const renderContent = () => {
    if (formState.submited) return renderSuccess();

    return renderForm();
  };

  return (
    <Modal
      centered
      className={style.modal}
      visible={visible}
      destroyOnClose
      width={600}
      onCancel={handleCancel}
      onOk={handleOk}
      footer={[customizedFooter()]}
    >
      <Row gutter={[0, 36]} justify="center" align="middle">
        {renderHeader()}
        {renderContent()}
      </Row>
    </Modal>
  );
};

export default InquiryForm;
