import { set } from 'astro:schema';
import React, { useRef, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    const formData = new FormData(e.currentTarget);
    if (!formData.get('email')) {
      toast.error('Please enter your email');
      return;
    }
    // hit endpoint
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitted(false);
    toast.success("Thank! I'll be in touch soon.", {
      duration: 4000,
    });
    formRef.current?.reset();
  };

  return (
    <>
      <form className='contact-form' ref={formRef} onSubmit={handleSubmit}>
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
          {isSubmitted ? 'Submitting...' : 'Contact Me'}
        </button>
      </form>
      <Toaster />
    </>
  );
};

export default ContactForm;
