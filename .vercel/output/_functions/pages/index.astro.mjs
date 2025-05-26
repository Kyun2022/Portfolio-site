import { a as createComponent, m as maybeRenderHead, r as renderComponent, F as Fragment, d as renderTemplate, u as unescapeHTML } from '../chunks/astro/server_BKl39dFB.mjs';
import 'kleur/colors';
import { g as getCollection } from '../chunks/_astro_content_BV6wWwMN.mjs';
import { a as $$Layout } from '../chunks/Layout_Ca5AaMkF.mjs';
import { $ as $$Hero, a as $$Connect } from '../chunks/Connect_DTS27As6.mjs';
import { $ as $$Heading } from '../chunks/Heading_ByWiBAVu.mjs';
import { $ as $$Projects } from '../chunks/Projects_tIoddxPi.mjs';
import { $ as $$BlogCard } from '../chunks/BlogCard_BYccHdXR.mjs';
export { renderers } from '../renderers.mjs';

const $$Features = createComponent(async ($$result, $$props, $$slots) => {
  const features = await getCollection("features");
  return renderTemplate`${maybeRenderHead()}<section aria-label="Feature section" class="features"> <div> ${renderComponent($$result, "Heading", $$Heading, { "tagName": "h2", "tagSize": "h2" }, { "default": async ($$result2) => renderTemplate`私は、高速で洗練された現代的なウェブサイトを制作しております！` })} <ul role="list"> ${features.map(({ data }) => renderTemplate`<li> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result2) => renderTemplate`${unescapeHTML(data.icon)}` })} ${renderComponent($$result, "Heading", $$Heading, { "tagName": "h3", "tagSize": "h4" }, { "default": async ($$result2) => renderTemplate`${data.title}` })} <p>${data.description}</p> </li>`)} </ul> </div> </section>`;
}, "/Users/kyun/dev/PortfolioSite/src/components/home/Features.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = await getCollection("blog", ({ data }) => !data.isDraft);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Features", $$Features, {})} ${maybeRenderHead()}<section aria-labelledby="#recent-projects" class="container rows"> ${renderComponent($$result2, "Heading", $$Heading, { "tagName": "h2", "tagSize": "h2", "id": "recent-projects" }, { "default": async ($$result3) => renderTemplate`
Recent Projects
` })} ${renderComponent($$result2, "Projects", $$Projects, { "limit": 3, "tagName": "h3" })} </section> ${renderComponent($$result2, "Connect", $$Connect, {})} <section aria-labelledby="#recent-posts" class="container rows"> ${renderComponent($$result2, "Heading", $$Heading, { "tagName": "h2", "tagSize": "h2", "id": "recent-posts" }, { "default": async ($$result3) => renderTemplate`
Latest Blog Posts
` })} <div class="grid-wrapper"> ${posts.sort(
    (a, b) => new Date(b.data.pubDate).getTime() - new Date(a.data.pubDate).getTime()
  ).slice(0, 3).map((post) => renderTemplate`${renderComponent($$result2, "BlogCard", $$BlogCard, { "post": post, "tagName": "h3" })}`)} </div> </section> ` })}`;
}, "/Users/kyun/dev/PortfolioSite/src/pages/index.astro", void 0);

const $$file = "/Users/kyun/dev/PortfolioSite/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
