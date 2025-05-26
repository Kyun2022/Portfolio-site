import { c as createAstro, a as createComponent, m as maybeRenderHead, b as addAttribute, r as renderComponent, d as renderTemplate } from './astro/server_BKl39dFB.mjs';
import 'kleur/colors';
import { g as getCollection } from './_astro_content_BV6wWwMN.mjs';
import { $ as $$Heading } from './Heading_ByWiBAVu.mjs';
import { $ as $$Link } from './Layout_Ca5AaMkF.mjs';

const $$Astro$1 = createAstro("https://portfolio-site-self-six.vercel.app/");
const $$ProjectCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ProjectCard;
  const { project, tagName } = Astro2.props;
  const { title, image, href } = project.data;
  return renderTemplate`${maybeRenderHead()}<article${addAttribute(title, "aria-label")} class="project-card"> <img${addAttribute(image.src, "src")}${addAttribute(400, "width")}${addAttribute(225, "height")}${addAttribute(title, "alt")}> <div class="rows"> ${renderComponent($$result, "Heading", $$Heading, { "tagName": tagName, "tagSize": "h3" }, { "default": ($$result2) => renderTemplate`${title}` })} ${renderComponent($$result, "Link", $$Link, { "href": href, "variant": "secondary", "openInNewTab": true }, { "default": ($$result2) => renderTemplate` View Project ` })} </div> </article>`;
}, "/Users/kyun/dev/PortfolioSite/src/components/ProjectCard.astro", void 0);

const $$Astro = createAstro("https://portfolio-site-self-six.vercel.app/");
const $$Projects = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Projects;
  const projects = await getCollection("projects");
  const { limit, tagName } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="grid-wrapper"> ${limit ? projects.slice(0, limit).map((project) => renderTemplate`${renderComponent($$result, "ProjectCard", $$ProjectCard, { "project": project, "tagName": tagName })}`) : projects.map((project) => renderTemplate`${renderComponent($$result, "ProjectCard", $$ProjectCard, { "project": project, "tagName": tagName })}`)} </div>`;
}, "/Users/kyun/dev/PortfolioSite/src/components/home/Projects.astro", void 0);

export { $$Projects as $ };
