import { a as createComponent, r as renderComponent, d as renderTemplate } from '../chunks/astro/server_BKl39dFB.mjs';
import 'kleur/colors';
import { a as $$Layout } from '../chunks/Layout_p0gXUp_r.mjs';
import { $ as $$Hero, a as $$Connect } from '../chunks/Connect_wfGSlV-X.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "404 | Page Not Found" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "title": "\u{1F602} \u30DA\u30FC\u30B8\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3067\u3057\u305F\u3002", "content": "\u304A\u63A2\u3057\u306E\u30DA\u30FC\u30B8\u306F\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3067\u3057\u305F!", "links": [
    {
      href: "https://github.com/Kyun2022",
      name: "my github",
      variant: "secondary"
    },
    {
      href: "/",
      name: "Go Home",
      variant: "primary"
    }
  ] })} ${renderComponent($$result2, "Connect", $$Connect, {})} ` })}`;
}, "/Users/kyun/dev/PortfolioSite/src/pages/404.astro", void 0);

const $$file = "/Users/kyun/dev/PortfolioSite/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
