import type { APIRoute } from 'astro';
import * as nodemailer from 'nodemailer';
import dotenv from 'dotenv';

// 環境変数を読み込み
dotenv.config();

// サーバーサイドレンダリングを有効にする
export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    // Content-Typeを確認してデータを適切に処理
    const contentType = request.headers.get('content-type');
    let email: string, message: string, name: string;

    if (contentType?.includes('application/json')) {
      const body = await request.json();
      email = body.email;
      message = body.message || '';
      name = body.name || '';
    } else {
      const formData = await request.formData();
      email = formData.get('email') as string;
      message = (formData.get('message') as string) || '';
      name = (formData.get('name') as string) || '';
    }

    // バリデーション
    if (!email) {
      return new Response(JSON.stringify({ error: 'Email is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // 環境変数の確認
    console.log('EMAIL_USER:', process.env.EMAIL_USER ? 'Set' : 'Not set');
    console.log('EMAIL_PASS:', process.env.EMAIL_PASS ? 'Set' : 'Not set');

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error(
        'Environment variables EMAIL_USER or EMAIL_PASS are not set'
      );
      return new Response(
        JSON.stringify({
          error: 'メール設定が正しくありません。管理者にお問い合わせください。',
        }),
        {
          status: 500,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    // メール設定（Gmail SMTPを使用）
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // Googleアプリパスワードを使用
      },
    });

    // 自分宛のメール（お問い合わせ通知）
    const mailToSelf = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `Portfolio Contact Form: ${name || 'Anonymous'} (${email})`,
      html: `
        <h2>新しいお問い合わせがあります</h2>
        <p><strong>送信者:</strong> ${name || 'Anonymous'}</p>
        <p><strong>メールアドレス:</strong> ${email}</p>
        <p><strong>メッセージ:</strong></p>
        <p>${message || 'メッセージなし'}</p>
        <hr>
        <p><small>送信日時: ${new Date().toLocaleString('ja-JP')}</small></p>
      `,
    };

    // 送信者への自動返信メール
    const mailToSender = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'お問い合わせありがとうございます - Portfolio Contact',
      html: `
        <h2>お問い合わせありがとうございます</h2>
        <p>${name || 'お客様'}、</p>
        <p>この度は、お問い合わせいただきありがとうございます。</p>
        <p>内容を確認次第、できるだけ早くご返信させていただきます。</p>
        <br>
        <p>お問い合わせ内容:</p>
        <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px;">
          <p><strong>送信者:</strong> ${name || 'Anonymous'}</p>
          <p><strong>メールアドレス:</strong> ${email}</p>
          <p><strong>メッセージ:</strong></p>
          <p>${message || 'メッセージなし'}</p>
        </div>
        <br>
        <p>今後ともよろしくお願いいたします。</p>
        <hr>
        <p><small>このメールは自動送信されています。</small></p>
      `,
    };

    // メール送信
    await transporter.sendMail(mailToSelf);
    await transporter.sendMail(mailToSender);

    return new Response(
      JSON.stringify({
        success: true,
        message: 'メールが正常に送信されました',
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Email sending error:', error);
    return new Response(
      JSON.stringify({
        error: 'メール送信に失敗しました',
        details: error instanceof Error ? error.message : 'Unknown error',
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
};
