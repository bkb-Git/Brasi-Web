import { useEffect } from "react";
import { CheckCircleOutlined, MailFilled, SendOutlined } from "@ant-design/icons";
import { Alert, Button, Col, Form, Input, Modal, Result, Row, Typography } from "antd";

import { useAppContext } from "src/context/app";
import { FETCH_STATUS } from "src/helpers/api";

import style from "./InquiryForm.module.scss";

const { Title } = Typography;
const { TextArea } = Input;

const InquiryForm = (props) => {
  const { visible, setVisible } = props;

  const appContext = useAppContext();
  const [form] = Form.useForm();

  useEffect(() => {
    if (appContext.sendEmailState.fetchStatus === FETCH_STATUS.SUCCESS) {
      setTimeout(() => {
        // Delay the closing of the modal to display success message
        setVisible(false);
        appContext.resetSendEmailState();
      }, 3000);
    }
  }, [appContext, appContext.sendEmailState.fetchStatus, setVisible]);

  const handleOk = () => {
    form.validateFields().then((values) => appContext.sendEmail(values));
  };

  const handleCancel = () => {
    appContext.resetSendEmailState();
    setVisible(false);
  };

  const nameInput = () => {
    return (
      <Form.Item label="Your Full Name" name="name" rules={[{ required: true, message: "Please provide your name!" }]}>
        <Input placeholder="Name" />
      </Form.Item>
    );
  };

  const emailInput = () => {
    return (
      <Form.Item
        label="Your Email"
        name="email"
        rules={[{ required: true, message: "Please provide your email address!", type: "email" }]}
      >
        <Input placeholder="eg. john.rawlings@email.com" />
      </Form.Item>
    );
  };

  const subjectInput = () => {
    return (
      <Form.Item label="Email subject" name="subject">
        <Input placeholder="Subject" />
      </Form.Item>
    );
  };

  const descriptionInput = () => {
    return (
      <Form.Item name="content" rules={[{ required: true, message: "Please provide a message!" }]}>
        <TextArea rows={5} placeholder="Your inquiry here..." />
      </Form.Item>
    );
  };

  const customizedFooter = () => {
    return (
      <>
        <Button
          type="ghost"
          onClick={handleCancel}
          disabled={appContext.sendEmailState.fetchStatus === FETCH_STATUS.LOADING}
        >
          Cancel
        </Button>
        <Button
          loading={appContext.sendEmailState.fetchStatus === FETCH_STATUS.LOADING}
          disabled={appContext.sendEmailState.fetchStatus === FETCH_STATUS.SUCCESS}
          type="primary"
          icon={<SendOutlined />}
          onClick={handleOk}
          htmlType="submit"
        >
          Send
        </Button>
      </>
    );
  };

  const renderAlert = () => {
    if (appContext.sendEmailState.fetchStatus === FETCH_STATUS.LOADING || !appContext.sendEmailState.error) {
      return null;
    }

    return <Alert type="error" message={appContext.sendEmailState.error} />;
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
          {renderAlert()}
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
          title="Thank you for reaching out!"
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
    if (appContext.sendEmailState.fetchStatus === FETCH_STATUS.SUCCESS) {
      return renderSuccess();
    }

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
