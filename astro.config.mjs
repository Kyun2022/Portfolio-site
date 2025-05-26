// @ts-check
import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';

import sitemap from '@astrojs/sitemap';

import react from '@astrojs/react';

import vercel from '@astrojs/vercel';

// 環境変数を読み込み
const env = loadEnv(process.env.NODE_ENV, process.cwd(), '');

// https://astro.build/config
export default defineConfig({
  site: 'https://portfolio-site-self-six.vercel.app/',
  output: 'server', // サーバーサイドレンダリングを有効にする
  integrations: [sitemap(), react()],
  adapter: vercel({}),
  vite: {
    define: {
      'process.env.EMAIL_USER': JSON.stringify(env.EMAIL_USER),
      'process.env.EMAIL_PASS': JSON.stringify(env.EMAIL_PASS),
    },
  },
});
