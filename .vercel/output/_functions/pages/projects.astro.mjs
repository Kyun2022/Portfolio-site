import { a as createComponent, r as renderComponent, d as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BKl39dFB.mjs';
import 'kleur/colors';
import { a as $$Layout } from '../chunks/Layout_Ca5AaMkF.mjs';
import { $ as $$Projects$1 } from '../chunks/Projects_tIoddxPi.mjs';
import { $ as $$Heading } from '../chunks/Heading_ByWiBAVu.mjs';
export { renderers } from '../renderers.mjs';

const $$Projects = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "My Recent Projects" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container rows"> ${renderComponent($$result2, "Heading", $$Heading, { "tagName": "h1", "tagSize": "h1" }, { "default": ($$result3) => renderTemplate` Latest Projects ` })} ${renderComponent($$result2, "ProjectWrapper", $$Projects$1, { "tagName": "h2" })} </div> ` })}`;
}, "/Users/kyun/dev/PortfolioSite/src/pages/projects.astro", void 0);

const $$file = "/Users/kyun/dev/PortfolioSite/src/pages/projects.astro";
const $$url = "/projects";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Projects,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
