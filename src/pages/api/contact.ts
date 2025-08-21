import type { APIRoute } from 'astro';
import { Resend } from 'resend';

const resend = new Resend(import.meta.env.RESEND_API_KEY || process.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ request }) => {
  try {
    const formData = await request.formData();
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;
    const name = formData.get('name') as string;

    // バリデーション
    if (!email || !message) {
      return new Response(
        JSON.stringify({ error: 'Email and message are required' }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    }

    // メール送信
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <noreply@yourdomain.com>',
      to: ['kyundesign2022@gmail.com'], // あなたのメールアドレス
      subject: `Portfolio Contact from ${name || email}`,
      html: `
        <h2>新しいお問い合わせ</h2>
        <p><strong>送信者:</strong> ${name || 'Unknown'}</p>
        <p><strong>メールアドレス:</strong> ${email}</p>
        <p><strong>メッセージ:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return new Response(
        JSON.stringify({ error: 'Failed to send email' }),
        {
          status: 500,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    }

    return new Response(
      JSON.stringify({ message: 'Email sent successfully', id: data?.id }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    console.error('API error:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
};