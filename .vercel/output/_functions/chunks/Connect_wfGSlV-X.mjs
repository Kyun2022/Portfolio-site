import { c as createAstro, a as createComponent, m as maybeRenderHead, b as addAttribute, r as renderComponent, d as renderTemplate } from './astro/server_BKl39dFB.mjs';
import 'kleur/colors';
import { a as avatar } from './avatar_BTTZUMET.mjs';
import { $ as $$Heading } from './Heading_wjP1vLsY.mjs';
import { $ as $$Link } from './Layout_p0gXUp_r.mjs';
import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { useState, useRef } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const $$Astro = createAstro("https://portfolio-site-self-six.vercel.app/");
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Hero;
  const defaultContent = {
    title: "\u{1F647} \u306F\u3058\u3081\u307E\u3057\u3066\u3001Masanao Fukuishi\u3067\u3059\u3002",
    content: [
      "\u30D5\u30EA\u30FC\u30E9\u30F3\u30B9\u3068\u3057\u3066\u6D3B\u52D5\u3057\u3066\u3044\u307E\u3059\u3002\u4E3B\u306B\u30D5\u30ED\u30F3\u30C8\u30A8\u30F3\u30C9\u306E\u958B\u767A\u3092\u884C\u3063\u3066\u3044\u307E\u3059\u3002"
    ],
    links: [
      {
        href: "https://github.com/Kyun2022",
        name: "my github",
        variant: "secondary"
      },
      {
        href: "#connect",
        name: "Let's connect",
        variant: "primary"
      }
    ]
  };
  const {
    title = defaultContent.title,
    content = defaultContent.content,
    links = defaultContent.links
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section aria-label="Hero section" class="hero"> <img${addAttribute(avatar.src, "src")} alt="Masanao Fukuishi"> ${renderComponent($$result, "Heading", $$Heading, { "tagName": "h1", "tagSize": "h3" }, { "default": ($$result2) => renderTemplate`${title}` })} <p>${content}</p> <div class="columns"> ${links.map((link) => renderTemplate`${renderComponent($$result, "Link", $$Link, { "href": link.href, "variant": link.variant }, { "default": ($$result2) => renderTemplate`${link.name}` })}`)} </div> </section>`;
}, "/Users/kyun/dev/PortfolioSite/src/components/Hero.astro", void 0);

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const formRef = useRef(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    const formData = new FormData(e.currentTarget);
    if (!formData.get("email")) {
      toast.error("Please enter your email");
      setIsSubmitted(false);
      return;
    }
    try {
      const data = {
        email: formData.get("email"),
        message: formData.get("message") || "",
        name: formData.get("name") || ""
      };
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
      const result = await response.json();
      if (response.ok) {
        setIsSuccess(true);
        formRef.current?.reset();
        toast.success(
          "✅ メッセージを送信しました！\n📧 自動返信メールをご確認ください",
          {
            duration: 6e3,
            style: {
              background: "#10B981",
              color: "white",
              fontSize: "14px",
              padding: "16px",
              borderRadius: "8px"
            }
          }
        );
        setTimeout(() => {
          setIsSuccess(false);
        }, 3e3);
      } else {
        toast.error(result.error || "メール送信に失敗しました");
      }
    } catch (error) {
      console.error("Contact form error:", error);
      toast.error("ネットワークエラーが発生しました");
    } finally {
      setIsSubmitted(false);
    }
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("form", { className: "contact-form", ref: formRef, onSubmit: handleSubmit, children: [
      /* @__PURE__ */ jsx("h2", { children: "Let's Connect" }),
      isSuccess ? /* @__PURE__ */ jsxs(
        "div",
        {
          style: {
            background: "linear-gradient(135deg, #10B981, #059669)",
            color: "white",
            padding: "20px",
            borderRadius: "12px",
            textAlign: "center",
            margin: "20px 0",
            animation: "fadeIn 0.5s ease-in-out"
          },
          children: [
            /* @__PURE__ */ jsx("div", { style: { fontSize: "48px", marginBottom: "10px" }, children: "🎉" }),
            /* @__PURE__ */ jsx("h3", { style: { margin: "0 0 8px 0", fontSize: "18px" }, children: "送信完了！" }),
            /* @__PURE__ */ jsxs("p", { style: { margin: "0", fontSize: "14px", opacity: "0.9" }, children: [
              "メッセージありがとうございます。",
              /* @__PURE__ */ jsx("br", {}),
              "自動返信メールをご確認ください。"
            ] })
          ]
        }
      ) : /* @__PURE__ */ jsxs("p", { children: [
        "お問い合わせ、見積もり、",
        /* @__PURE__ */ jsx("br", {}),
        "またはコラボレーションについては",
        /* @__PURE__ */ jsx("br", {}),
        "下記までご連絡ください"
      ] }),
      /* @__PURE__ */ jsxs("label", { children: [
        "your name (optional)",
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            name: "name",
            autoComplete: "name",
            placeholder: "e.g., 田中太郎"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("label", { children: [
        "your email",
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "email",
            name: "email",
            autoComplete: "email",
            placeholder: "e.g., kyundesign2022@gmail.com"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("label", { children: [
        "message (optional)",
        /* @__PURE__ */ jsx(
          "textarea",
          {
            name: "message",
            rows: 4,
            placeholder: "お問い合わせ内容、ご質問、ご要望などをお聞かせください..."
          }
        )
      ] }),
      /* @__PURE__ */ jsx(
        "button",
        {
          className: "link",
          type: "submit",
          disabled: isSubmitted || isSuccess,
          style: {
            background: isSuccess ? "#10B981" : "",
            transform: isSuccess ? "scale(1.05)" : "",
            transition: "all 0.3s ease"
          },
          children: isSubmitted ? /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx("span", { style: { marginRight: "8px" }, children: "📤" }),
            "送信中..."
          ] }) : isSuccess ? /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx("span", { style: { marginRight: "8px" }, children: "✅" }),
            "送信完了"
          ] }) : "Contact Me"
        }
      )
    ] }),
    /* @__PURE__ */ jsx(Toaster, {})
  ] });
};

const $$Connect = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section aria-label="Connect with MasanaoFUkuishi" id="connect"> <div class="form-wrapper"> <div><img${addAttribute(avatar.src, "src")} alt="MasanaoFukuishif"></div> <!-- contact form --> ${renderComponent($$result, "ContactForm", ContactForm, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "@/components/ContactForm", "client:component-export": "default" })} </div> </section>`;
}, "/Users/kyun/dev/PortfolioSite/src/components/Connect.astro", void 0);

export { $$Hero as $, $$Connect as a };
