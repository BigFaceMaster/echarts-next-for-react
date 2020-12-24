import { IBundleOptions } from 'father';

const options: IBundleOptions = {
  cjs: 'rollup',
  esm: 'rollup',
  // @ts-ignore
  doc: {
    typescript: true,
  },
};

export default options;
