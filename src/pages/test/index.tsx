import { Button, Col, Form, Input, Row } from "antd";
import "./test.less";

export default () => {
  const test = (va: object) => {
    console.log("va", va);
  };

  return (
    <div className="test_box" style={{ width: "100%" }}>
      <Form onFinish={test} layout="inline">
        <Row gutter={24} wrap={false} justify={"space-between"}>
          <Col span={10}>
            <Form.Item label="姓名" name="sa" style={{ width: "100%" }}>
              <Input />
            </Form.Item>
          </Col>

          <Col span={10}>
            <Form.Item label="性别" name="sx" style={{ width: "100%" }}>
              <Input />
            </Form.Item>
          </Col>

          <Col span={4} push={2}>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                搜索
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
};
