import { a as createComponent, r as renderComponent, d as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BKl39dFB.mjs';
import 'kleur/colors';
import { a as $$Layout } from '../chunks/Layout_Ca5AaMkF.mjs';
export { renderers } from '../renderers.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "About | \u30DD\u30FC\u30C8\u30D5\u30A9\u30EA\u30AA" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container mx-auto px-4 py-8"> <div class="canvas-document mb-8"> <h2 class="text-2xl font-semibold mb-4"></h2> <!-- Canvaの埋め込みリンクを使用 --> <div class="canvas-embed mb-6"> <div style="position: relative; width: 100%; height: 0; padding-top: 56.2500%;
 padding-bottom: 0; box-shadow: 0 2px 8px 0 rgba(63,69,81,0.16); margin-top: 1.6em; margin-bottom: 0.9em; overflow: hidden;
 border-radius: 8px; will-change: transform;"> <iframe loading="lazy" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0;margin: 0;" src="https://www.canva.com/design/DAGajahQr0w/H2SNRox2mr-Nn1KjtTED8A/view?embed" allowfullscreen="allowfullscreen" allow="fullscreen">
          </iframe> </div> <a href="https://www.canva.com/design/DAGajahQr0w/H2SNRox2mr-Nn1KjtTED8A/view?utm_content=DAGajahQr0w&utm_campaign=designshare&utm_medium=embeds&utm_source=link" target="_blank" rel="noopener">ポートフォリオ（福石雅尚）</a> </div> </div> <div class="canvas-description mt-6"> <iframe src="https://river-prune-aae.notion.site/ebd/954229081f544e7790bac5515e22bfae" width="100%" height="600" frameborder="0" allowfullscreen></iframe> </div> </div> ` })}`;
}, "/Users/kyun/dev/PortfolioSite/src/pages/about.astro", void 0);

const $$file = "/Users/kyun/dev/PortfolioSite/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
