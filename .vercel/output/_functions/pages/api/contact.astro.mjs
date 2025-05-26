import * as nodemailer from 'nodemailer';
import dotenv from 'dotenv';
export { renderers } from '../../renderers.mjs';

dotenv.config();
const prerender = false;
const POST = async ({ request }) => {
  try {
    const contentType = request.headers.get("content-type");
    let email, message, name;
    if (contentType?.includes("application/json")) {
      const body = await request.json();
      email = body.email;
      message = body.message || "";
      name = body.name || "";
    } else {
      const formData = await request.formData();
      email = formData.get("email");
      message = formData.get("message") || "";
      name = formData.get("name") || "";
    }
    if (!email) {
      return new Response(JSON.stringify({ error: "Email is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    console.log("EMAIL_USER:", "kyundesign2022@gmail.com" ? "Set" : "Not set");
    console.log("EMAIL_PASS:", "kzah xzul ecek gvbl" ? "Set" : "Not set");
    if (false) ;
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "kyundesign2022@gmail.com",
        pass: "kzah xzul ecek gvbl"
        // Googleアプリパスワードを使用
      }
    });
    const mailToSelf = {
      from: "kyundesign2022@gmail.com",
      to: "kyundesign2022@gmail.com",
      subject: `Portfolio Contact Form: ${name || "Anonymous"} (${email})`,
      html: `
        <h2>新しいお問い合わせがあります</h2>
        <p><strong>送信者:</strong> ${name || "Anonymous"}</p>
        <p><strong>メールアドレス:</strong> ${email}</p>
        <p><strong>メッセージ:</strong></p>
        <p>${message || "メッセージなし"}</p>
        <hr>
        <p><small>送信日時: ${(/* @__PURE__ */ new Date()).toLocaleString("ja-JP")}</small></p>
      `
    };
    const mailToSender = {
      from: "kyundesign2022@gmail.com",
      to: email,
      subject: "お問い合わせありがとうございます - Portfolio Contact",
      html: `
        <h2>お問い合わせありがとうございます</h2>
        <p>${name || "お客様"}、</p>
        <p>この度は、お問い合わせいただきありがとうございます。</p>
        <p>内容を確認次第、できるだけ早くご返信させていただきます。</p>
        <br>
        <p>お問い合わせ内容:</p>
        <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px;">
          <p><strong>送信者:</strong> ${name || "Anonymous"}</p>
          <p><strong>メールアドレス:</strong> ${email}</p>
          <p><strong>メッセージ:</strong></p>
          <p>${message || "メッセージなし"}</p>
        </div>
        <br>
        <p>今後ともよろしくお願いいたします。</p>
        <hr>
        <p><small>このメールは自動送信されています。</small></p>
      `
    };
    await transporter.sendMail(mailToSelf);
    await transporter.sendMail(mailToSender);
    return new Response(
      JSON.stringify({
        success: true,
        message: "メールが正常に送信されました"
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" }
      }
    );
  } catch (error) {
    console.error("Email sending error:", error);
    return new Response(
      JSON.stringify({
        error: "メール送信に失敗しました",
        details: error instanceof Error ? error.message : "Unknown error"
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" }
      }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
