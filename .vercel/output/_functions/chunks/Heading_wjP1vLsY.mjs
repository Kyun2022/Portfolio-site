import { c as createAstro, a as createComponent, r as renderComponent, d as renderTemplate, e as renderSlot } from './astro/server_BKl39dFB.mjs';
import 'kleur/colors';
/* empty css                         */

const $$Astro = createAstro("https://portfolio-site-self-six.vercel.app/");
const $$Heading = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Heading;
  const headingOptions = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6"
  };
  const { tagName, tagSize, ...rest } = Astro2.props;
  const Tag = tagName;
  return renderTemplate`${renderComponent($$result, "Tag", Tag, { "class:list": ["default", headingOptions[tagSize]], ...rest, "data-astro-cid-goh2lvqm": true }, { "default": ($$result2) => renderTemplate`${renderSlot($$result2, $$slots["default"])}` })} `;
}, "/Users/kyun/dev/PortfolioSite/src/components/ui/Heading.astro", void 0);

export { $$Heading as $ };
