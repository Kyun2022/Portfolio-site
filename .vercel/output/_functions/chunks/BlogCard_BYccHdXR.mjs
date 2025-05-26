import { c as createAstro, a as createComponent, m as maybeRenderHead, b as addAttribute, r as renderComponent, d as renderTemplate } from './astro/server_BKl39dFB.mjs';
import 'kleur/colors';
import { $ as $$Heading } from './Heading_ByWiBAVu.mjs';
import { $ as $$Link } from './Layout_Ca5AaMkF.mjs';
import { $ as $$FormattedDate } from './FormattedDate_BfZJku5X.mjs';

const $$Astro = createAstro("https://portfolio-site-self-six.vercel.app/");
const $$BlogCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BlogCard;
  const { post, tagName, maxTitleLength = 13, maxDescLength = 100 } = Astro2.props;
  const { title, image, slug, description, pubDate, author } = post.data;
  const truncatedDescription = description.length > maxDescLength ? description.substring(0, maxDescLength) + "..." : description;
  const truncatedTitle = title.length > maxTitleLength ? title.substring(0, maxTitleLength) + "..." : title;
  return renderTemplate`${maybeRenderHead()}<article${addAttribute(title, "aria-label")} class="blog-card"> <img${addAttribute(image.src, "src")}${addAttribute(400, "width")}${addAttribute(225, "height")}${addAttribute(title, "alt")}> <div class="rows"> ${renderComponent($$result, "Heading", $$Heading, { "tagName": tagName, "tagSize": "h4" }, { "default": async ($$result2) => renderTemplate`${truncatedTitle}` })} <div class="columns"> ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "pubDate": pubDate })} <!-- {author && <small>by {author.data.name}</small>} --> ${renderTemplate`<small>by ${author.id} (AI)</small>`} </div> <div class="description-container"> <p>${truncatedDescription}</p> </div> ${renderComponent($$result, "Link", $$Link, { "href": `/blog/${slug}`, "openInNewTab": true }, { "default": async ($$result2) => renderTemplate` Read Post ` })} </div> </article>`;
}, "/Users/kyun/dev/PortfolioSite/src/components/blog/BlogCard.astro", void 0);

export { $$BlogCard as $ };
