import { Form, Input, Button } from "antd";

const FormCustom = () => {
  return (
    <div className="newForm">
      <h4>Información Personal</h4>
      <Form>
        <Form.Item label="Nombre">
          <Input />
        </Form.Item>
        <Button htmlType="submit">Enviar</Button>
      </Form>
    </div>
  );
};
export default FormCustom;
