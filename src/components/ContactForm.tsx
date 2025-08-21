import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;
    const name = formData.get('name') as string;

    // バリデーション
    if (!email) {
      toast.error('Please enter your email');
      setIsSubmitted(false);
      return;
    }

    if (!message) {
      toast.error('Please enter your message');
      setIsSubmitted(false);
      return;
    }

    try {
      // APIエンドポイントにメール送信を依頼
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success('Message sent successfully!');
        e.currentTarget.reset();
      } else {
        toast.error(result.error || 'Failed to send message');
      }
    } catch (error) {
      console.error('Submit error:', error);
      toast.error('Network error. Please try again.');
    } finally {
      setIsSubmitted(false);
    }
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
          your name (optional)
          <input
            type='text'
            name='name'
            autoComplete='name'
            placeholder='e.g., Tanaka Taro'
          />
        </label>
        <label>
          your email
          <input
            type='email'
            name='email'
            autoComplete='email'
            placeholder='e.g., kyundesign2022@gmail.com'
            required
          />
        </label>
        <label>
          your message
          <textarea
            name='message'
            rows={4}
            placeholder='お問い合わせ内容をご記入ください...'
            required
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
