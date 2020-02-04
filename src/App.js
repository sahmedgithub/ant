import React from 'react';
import { Button, Slider, InputNumber, Switch, DatePicker, Select, Form } from './ComponentFactory'
import './App.css';

const { Option } = Select;

const App = () => (
  <>
    <Form style={{ marginTop: 32 }}>
      <Form.Item
        label="Form Input label"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 8 }}
      >
        <InputNumber min={1} max={10} defaultValue={3} />
        <span className="ant-form-text"> From Text</span>
        <a href="https://ant.design">A link</a>
      </Form.Item>
      <Form.Item
        label="Toggle Switch"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 8 }}
      >
        <Switch defaultChecked />
      </Form.Item>
      <Form.Item
        label="Slider"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 8 }}
      >
        <Slider defaultValue={70} />
      </Form.Item>
      <Form.Item
        label="Dropdown"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 8 }}
      >
        <Select defaultValue="lucy" style={{ width: 192 }}>
          <Option value="jack">jack</Option>
          <Option value="lucy">lucy</Option>
          <Option value="disabled" disabled>disabled</Option>
          <Option value="yiminghe">yiminghe</Option>
        </Select>
      </Form.Item>
      <Form.Item
        label="A date picker"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 8 }}
      >
        <DatePicker />
      </Form.Item>
      <Form.Item>
        
      </Form.Item>
      <Form.Item wrapperCol={{ span: 8, offset: 8 }}>
        
        <Button type="primary" htmlType="submit">My Name</Button>

      </Form.Item>
    </Form>
  </>
);

export default App;
