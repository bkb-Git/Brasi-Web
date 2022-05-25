import { MailFilled, SendOutlined } from "@ant-design/icons";
import { Button, Col, Form, Input, Modal, Row, Typography } from "antd";

import style from "./InquiryForm.module.scss";

const InquiryForm = (props) => {
  const { visible, setVisible } = props;

  const { Title } = Typography;
  const { TextArea } = Input;

  const handleOk = () => setVisible(false);

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
      <Form.Item name="email" rules={[{ required: true, message: "Please provide your email address!" }]}>
        <Input placeholder="Email Address" type="email" />
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

  const renderContent = () => {
    return (
      <Col span={20} className={style.modal__content}>
        <Form layout="vertical" className={style.modal__content__form} requiredMark={false}>
          {nameInput()}
          {emailInput()}
          {subjectInput()}
          {descriptionInput()}
        </Form>
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

  return (
    <Modal
      centered
      className={style.modal}
      visible={visible}
      width={1000}
      footer={[
        <Button type="ghost" onClick={handleCancel}>
          Cancel
        </Button>,
        <Button type="primary" icon={<SendOutlined />} onClick={handleOk}>
          Send
        </Button>,
      ]}
    >
      <Row gutter={[0, 36]} justify="center" align="middle">
        {renderHeader()}
        {renderContent()}
      </Row>
    </Modal>
  );
};

export default InquiryForm;
