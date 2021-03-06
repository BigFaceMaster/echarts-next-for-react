import { defineConfig } from 'dumi';

const isProduction = process.env.NODE_ENV === 'production';

export default defineConfig({
  title: 'Echarts next for React',
  favicon: 'https://echarts.apache.org/zh/images/favicon.png?_v_=20200710_1',
  logo:
    'https://raw.githubusercontent.com/BigFaceMaster/echarts-next-for-react/master/docs/assets/logo.png',
  outputPath: 'docs-dist',
  // more config: https://d.umijs.org/config
  locales: [
    ['en-US', 'English'],
    ['zh-CN', '中文'],
  ],
  base: '/echarts-next-for-react',
  publicPath: './',
  analytics: isProduction
    ? {
        ga: 'UA-154123333-1',
      }
    : false,
  esbuild: {},
});
