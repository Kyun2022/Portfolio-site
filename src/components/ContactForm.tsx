import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    const formData = new FormData(e.currentTarget);
    if (!formData.get('email')) {
      toast.error('Please enter your email');
      setIsSubmitted(false);
      return;
    }

    // モックアップ - 実際のメール送信機能はここに実装
    setTimeout(() => {
      toast.success('Message sent successfully!');
      setIsSubmitted(false);
      // フォームをリセット
      e.currentTarget.reset();
    }, 2000);
  };

  return (
    <>
      <form className='contact-form' onSubmit={handleSubmit}>
        <h2>Let's Connect</h2>
        <p>
          お問い合わせ、見積もり、
          <br />
          またはコラボレーションについては
          <br />
          下記までご連絡ください
        </p>
        <label>
          your email
          <input
            type='email'
            name='email'
            autoComplete='email'
            placeholder='e.g., kyundesign2022@gmail.com'
          />
        </label>
        <button className='link' type='submit' disabled={isSubmitted}>
          {isSubmitted ? 'Sending...' : 'Contact Me'}
        </button>
      </form>
      <Toaster />
    </>
  );
};

export default ContactForm;
