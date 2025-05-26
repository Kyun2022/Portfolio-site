import { c as createAstro, a as createComponent, m as maybeRenderHead, r as renderComponent, d as renderTemplate, b as addAttribute } from '../../chunks/astro/server_BKl39dFB.mjs';
import 'kleur/colors';
import { g as getCollection } from '../../chunks/_astro_content_BjVLjSfh.mjs';
import { $ as $$BlogCard } from '../../chunks/BlogCard_Brsqsm8y.mjs';
import { $ as $$Link, a as $$Layout } from '../../chunks/Layout_p0gXUp_r.mjs';
import { $ as $$Heading } from '../../chunks/Heading_wjP1vLsY.mjs';
import { a as avatar } from '../../chunks/avatar_BTTZUMET.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro$2 = createAstro("https://portfolio-site-self-six.vercel.app/");
const $$Pagination = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Pagination;
  const { prev, next } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="pagination"> ${prev && renderTemplate`${renderComponent($$result, "Link", $$Link, { "href": prev, "variant": "secondary" }, { "default": ($$result2) => renderTemplate` <span>Prev</span> ` })}`} ${next && renderTemplate`${renderComponent($$result, "Link", $$Link, { "href": next, "variant": "secondary" }, { "default": ($$result2) => renderTemplate` <span>Next</span> ` })}`} </div>`;
}, "/Users/kyun/dev/PortfolioSite/src/components/blog/Pagination.astro", void 0);

const $$Astro$1 = createAstro("https://portfolio-site-self-six.vercel.app/");
const $$BlogHero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BlogHero;
  const { currentPage = 1 } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section aria-label="Hero Section" class="blog-hero container"> <img${addAttribute(avatar.src, "src")} alt="MasanaoFukuishi"> <div> ${renderComponent($$result, "Heading", $$Heading, { "tagName": "h1", "tagSize": "h2" }, { "default": ($$result2) => renderTemplate`
My Blog
<span>Page ${currentPage.toString()}</span> ` })} <p>フリーランスとして活動しています。<br>主にフロントエンドの開発を行っています。</p> </div> </section>`;
}, "/Users/kyun/dev/PortfolioSite/src/components/blog/BlogHero.astro", void 0);

const $$Astro = createAstro("https://portfolio-site-self-six.vercel.app/");
const getStaticPaths = async ({ paginate }) => {
  try {
    const posts = await getCollection("blog", ({ data }) => !data.isDraft);
    if (!posts || posts.length === 0) {
      return [
        {
          params: { page: void 0 },
          props: {
            page: {
              data: [],
              currentPage: 1,
              url: { prev: void 0, next: void 0 }
            }
          }
        }
      ];
    }
    return paginate(
      posts.sort(
        (a, b) => new Date(b.data.pubDate).getTime() - new Date(a.data.pubDate).getTime()
      ),
      {
        pageSize: 3
      }
    );
  } catch (error) {
    console.error("Error in getStaticPaths:", error);
    return [
      {
        params: { page: void 0 },
        props: {
          page: {
            data: [],
            currentPage: 1,
            url: { prev: void 0, next: void 0 }
          }
        }
      }
    ];
  }
};
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { page } = Astro2.props;
  if (!page) {
    throw new Error("Page object is undefined");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `My Blog | page ${page.currentPage || 1}` }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "BlogHero", $$BlogHero, { "currentPage": page.currentPage || 1 })} ${maybeRenderHead()}<div class="container"> <section aria-label="Blog Posts" class="grid-wrapper"> ${page.data?.map((post) => renderTemplate`${renderComponent($$result2, "BlogCard", $$BlogCard, { "post": post, "tagName": "h2" })}`) || []} </section> ${renderComponent($$result2, "Pagination", $$Pagination, { "prev": page.url?.prev, "next": page.url?.next })} </div> ` })}`;
}, "/Users/kyun/dev/PortfolioSite/src/pages/blog/[...page].astro", void 0);

const $$file = "/Users/kyun/dev/PortfolioSite/src/pages/blog/[...page].astro";
const $$url = "/blog/[...page]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
