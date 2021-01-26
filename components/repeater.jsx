import { Form, Button, Input, Select, Space } from "antd";
const PhonesRepeater = () => {
  const typeSelect = ["Personal", "Office", "Home"];

  return (
    <Form.List name="phones">
      {(fields, { add, remove }) => {
        return (
          <div style={{ width: "100%" }}>
            {fields.map((field) => (
              <Space key={field.key} align="start" style={{ width: "100%" }}>
                <Form.Item
                  {...field}
                  name={[field.name, "phone"]}
                  style={{ width: 200 }}
                  fieldKey={["phone" + field.fieldKey, "phone"]}
                  label="Number phone"
                  rules={[
                    {
                      required: true,
                      message: "Este campo es requerido"
                    }
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  {...field}
                  name={[field.name, "type"]}
                  fieldKey={["type" + field.fieldKey, "type"]}
                  label="Type"
                  style={{ width: 200 }}
                  rules={[
                    {
                      required: true,
                      message: "Este campo es requerido"
                    }
                  ]}
                >
                  <Select>
                    {typeSelect.map((item, idx) => (
                      <Select.Option key={idx} value={item}>
                        {item}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>

                <Button
                  key={field.key + "add"}
                  className="form-item--delete"
                  onClick={() => {
                    remove(field.name);
                  }}
                >
                  Delete
                </Button>
              </Space>
            ))}

            <Form.Item>
              <Button
                type="dashed"
                size="large"
                onClick={() => {
                  add({ studyNow: true });
                }}
              >
                + Add Phone
              </Button>
            </Form.Item>
          </div>
        );
      }}
    </Form.List>
  );
};

export default PhonesRepeater;
