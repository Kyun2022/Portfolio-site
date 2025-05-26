import React, { useRef, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    const formData = new FormData(e.currentTarget);
    if (!formData.get('email')) {
      toast.error('Please enter your email');
      setIsSubmitted(false);
      return;
    }

    try {
      // フォームデータをJSONに変換
      const data = {
        email: formData.get('email') as string,
        message: (formData.get('message') as string) || '',
        name: (formData.get('name') as string) || '',
      };

      // 実際のAPIエンドポイントを呼び出し
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        // 成功状態を設定
        setIsSuccess(true);

        // フォームをクリア
        formRef.current?.reset();

        // 成功メッセージを表示
        toast.success(
          '✅ メッセージを送信しました！\n📧 自動返信メールをご確認ください',
          {
            duration: 6000,
            style: {
              background: '#10B981',
              color: 'white',
              fontSize: '14px',
              padding: '16px',
              borderRadius: '8px',
            },
          }
        );

        // 3秒後に成功状態をリセット
        setTimeout(() => {
          setIsSuccess(false);
        }, 3000);
      } else {
        toast.error(result.error || 'メール送信に失敗しました');
      }
    } catch (error) {
      console.error('Contact form error:', error);
      toast.error('ネットワークエラーが発生しました');
    } finally {
      setIsSubmitted(false);
    }
  };

  return (
    <>
      <form className='contact-form' ref={formRef} onSubmit={handleSubmit}>
        <h2>Let's Connect</h2>
        {isSuccess ? (
          <div
            style={{
              background: 'linear-gradient(135deg, #10B981, #059669)',
              color: 'white',
              padding: '20px',
              borderRadius: '12px',
              textAlign: 'center',
              margin: '20px 0',
              animation: 'fadeIn 0.5s ease-in-out',
            }}
          >
            <div style={{ fontSize: '48px', marginBottom: '10px' }}>🎉</div>
            <h3 style={{ margin: '0 0 8px 0', fontSize: '18px' }}>
              送信完了！
            </h3>
            <p style={{ margin: '0', fontSize: '14px', opacity: '0.9' }}>
              メッセージありがとうございます。
              <br />
              自動返信メールをご確認ください。
            </p>
          </div>
        ) : (
          <p>
            お問い合わせ、見積もり、
            <br />
            またはコラボレーションについては
            <br />
            下記までご連絡ください
          </p>
        )}
        <label>
          your name (optional)
          <input
            type='text'
            name='name'
            autoComplete='name'
            placeholder='e.g., 田中太郎'
          />
        </label>
        <label>
          your email
          <input
            type='email'
            name='email'
            autoComplete='email'
            placeholder='e.g., kyundesign2022@gmail.com'
          />
        </label>
        <label>
          message (optional)
          <textarea
            name='message'
            rows={4}
            placeholder='お問い合わせ内容、ご質問、ご要望などをお聞かせください...'
          />
        </label>
        <button
          className='link'
          type='submit'
          disabled={isSubmitted || isSuccess}
          style={{
            background: isSuccess ? '#10B981' : '',
            transform: isSuccess ? 'scale(1.05)' : '',
            transition: 'all 0.3s ease',
          }}
        >
          {isSubmitted ? (
            <>
              <span style={{ marginRight: '8px' }}>📤</span>
              送信中...
            </>
          ) : isSuccess ? (
            <>
              <span style={{ marginRight: '8px' }}>✅</span>
              送信完了
            </>
          ) : (
            'Contact Me'
          )}
        </button>
      </form>
      <Toaster />
    </>
  );
};

export default ContactForm;
