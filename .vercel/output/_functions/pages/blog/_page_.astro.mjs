import { a as createComponent, m as maybeRenderHead, b as addAttribute, r as renderComponent, d as renderTemplate, c as createAstro } from '../../chunks/astro/server_BKl39dFB.mjs';
import 'kleur/colors';
import { $ as $$Link, a as $$Layout } from '../../chunks/Layout_p0gXUp_r.mjs';
import { $ as $$FormattedDate } from '../../chunks/FormattedDate_BfZJku5X.mjs';
import { $ as $$Heading } from '../../chunks/Heading_wjP1vLsY.mjs';
import { a as avatar } from '../../chunks/avatar_BTTZUMET.mjs';
import { r as renderEntry, g as getCollection } from '../../chunks/_astro_content_BjVLjSfh.mjs';
export { renderers } from '../../renderers.mjs';

const $$AuthorCard = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section aria-label="Connect with MasanaoFukuishi" class="blog-bio container"> <img${addAttribute(avatar.src, "src")} alt="MasanaoFukuishi"> <div> ${renderComponent($$result, "Heading", $$Heading, { "tagName": "h3", "tagSize": "h3" }, { "default": ($$result2) => renderTemplate` 👋 Hello, I'm Masanao Fukuishi` })} <p>フリーランスとして活動しています。<br>主にフロントエンドの開発を行っています。</p> ${renderComponent($$result, "Link", $$Link, { "href": "/#connect" }, { "default": ($$result2) => renderTemplate`Let's Connect` })} </div> </section>`;
}, "/Users/kyun/dev/PortfolioSite/src/components/blog/AuthorCard.astro", void 0);

const $$Astro = createAstro("https://portfolio-site-self-six.vercel.app/");
const getStaticPaths = async () => {
  const posts = await getCollection("blog", ({ data }) => !data.isDraft);
  return posts.map((post) => ({
    params: {
      page: post.data.slug
    },
    props: {
      post
    }
  }));
};
const $$page = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$page;
  const { post } = Astro2.props;
  const { Content } = await renderEntry(post);
  const { title, description, pubDate, image, author } = post.data;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section aria-label="Blog metadata" class="blog-metadata"> <header> ${renderComponent($$result2, "FormattedDate", $$FormattedDate, { "pubDate": pubDate })} ${renderComponent($$result2, "Heading", $$Heading, { "tagName": "h1", "tagSize": "h2" }, { "default": async ($$result3) => renderTemplate`${title}` })} <!-- {author && <small>by {author.data.name}</small>} --> ${renderTemplate`<small>by ${author.id} (AI)</small>`} <p>${description}</p> </header> <img${addAttribute(image.src, "src")}${addAttribute(title, "alt")}> </section> <section aria-label="Blog content" class="blog-content"> ${renderComponent($$result2, "Content", Content, {})} </section> ${renderComponent($$result2, "AuthorCard", $$AuthorCard, {})} ` })}`;
}, "/Users/kyun/dev/PortfolioSite/src/pages/blog/[page].astro", void 0);

const $$file = "/Users/kyun/dev/PortfolioSite/src/pages/blog/[page].astro";
const $$url = "/blog/[page]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$page,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
