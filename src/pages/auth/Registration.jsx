import React from 'react';
import { Button, Form, Input, Select } from 'antd';
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const { Option } = Select;
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};
const onFinish = values => {
  console.log(values);
};
const prefixSelector = (
  <Select defaultValue="+998" className="w-20">
    <Option value="+998">+998</Option>
    <Option value="+1">+1</Option>
    <Option value="+44">+44</Option>
  </Select>
);
const App = () => (
  <div className='w-full h-screen border border-black flex justify-center items-center'>
      <div className="register w-[400px] h-[500px] rounded-2xl flex justify-center items-center flex-col gap-6 bg-gray-100 shadow-[0px_0px_20px_#817878]">
        <h1 className='text-2xl font-bold text-gray-800 font-sans tracking-wider'>Registration</h1>
        <Form
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        style={{ maxWidth: 600 }}
        validateMessages={validateMessages}
      >
        <Form.Item name={['user', 'first_name']} label="First Name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name={['user', 'last_name']} label="Last Name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name={['user', 'email']} label="Email" rules={[{ type: 'email', min: 0, max: 99 }]}>
          <Input />
        </Form.Item>
        <Form.Item name={['user', 'password']} label="Password" rules={[{ type: 'password', min: 0, max: 99 }]}>
          <Input.Password />
        </Form.Item>
        <Form.Item name={['user', 'phone']} label="Phone" rules={[{ required: true }]}>
          <Input
            addonBefore={prefixSelector}
            placeholder="90 123 45 67"
            maxLength={13}
          />
        </Form.Item>
        <Form.Item label={null} className='flex justify-center'>
          <Button type="primary" htmlType="submit">
            register
          </Button>
        </Form.Item>
      </Form>
    </div>
  </div>
);
export default App;