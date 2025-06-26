import React, { useState } from 'react';
import { Button, Modal } from 'antd';
const SignIn = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Button type="primary" onClick={showModal} className='ml-2 bg-transparent'>
        Sign In
      </Button> 
      <Modal
        title="Sign In"
        closable={{ 'aria-label': 'Custom Close Button' }}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <input type="email" placeholder='Email...' className='w-full p-2 border border-gray-300 rounded-md outline-none placeholder:tracking-widest ' />
        <input type="password" placeholder='Password...' className='w-full p-2 border border-gray-300 rounded-md outline-none mt-2 placeholder:tracking-widest ' />
      </Modal>
    </>
  );
};
export default SignIn;