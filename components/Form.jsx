import { Form, Input, Button } from "antd";
import PhoneReapeter from "./repeater";

const FormCustom = (props) => {
  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
      number: "${label} is not a valid number!"
    },
    number: {
      range: "${label} must be between ${min} and ${max}"
    }
  };

  const onSubmitForm = (e) => {
    props.setFinish(true);
    props.setInfo(e);
  };

  return (
    <div className="newForm" style={{ margin: 20 }}>
      <h4>Información Personal</h4>
      <Form
        layout="vertical"
        onFinish={onSubmitForm}
        validateMessages={validateMessages}
      >
        <Form.Item label="Name" name="name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item
          label="Last name"
          name="lastname"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, type: "email" }]}
        >
          <Input />
        </Form.Item>
        <PhoneReapeter />
        <Button htmlType="submit">Enviar</Button>
      </Form>
    </div>
  );
};
export default FormCustom;
