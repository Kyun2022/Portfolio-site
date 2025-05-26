import { c as createAstro, a as createComponent, m as maybeRenderHead, b as addAttribute, d as renderTemplate } from './astro/server_BKl39dFB.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://portfolio-site-self-six.vercel.app/");
const $$FormattedDate = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FormattedDate;
  const { pubDate } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<time${addAttribute(pubDate.toISOString(), "datetime")}> <strong> ${pubDate.toLocaleDateString(void 0, {
    dateStyle: "long"
  })} </strong> </time>`;
}, "/Users/kyun/dev/PortfolioSite/src/components/ui/FormattedDate.astro", void 0);

export { $$FormattedDate as $ };
