# echarts-next-for-react

[![Basic CI](https://github.com/BigFaceMaster/echarts-next-for-react/workflows/Basic%20CI/badge.svg)](https://github.com/BigFaceMaster/echarts-next-for-react/actions) [![Publish CI](https://github.com/BigFaceMaster/echarts-next-for-react/workflows/Publish%20CI/badge.svg)](https://bigfacemaster.cn/echarts-next-for-react/) [![Deploy Site](https://github.com/BigFaceMaster/echarts-next-for-react/workflows/Deyloy%20Site/badge.svg)](https://bigfacemaster.cn/echarts-next-for-react/) [![npm](https://img.shields.io/npm/v/echarts-next-for-react.svg)](https://www.npmjs.com/package/echarts-next-for-react) [![ docs by dumi](https://img.shields.io/badge/docs%20by-dumi-blue)](https://d.umijs.org/) [![Build With father](https://img.shields.io/badge/build%20with-father-028fe4.svg)](https://github.com/umijs/father/) [![npm](https://img.shields.io/npm/l/echarts-for-react.svg)](https://www.npmjs.com/package/echarts-next-for-react) [![echarts supported](https://img.shields.io/badge/echarts-v3%20%7C%7C%20v4%20%7C%7C%20v5-blue) ](https://echarts.apache.org/zh/index.html) [![react supported](https://img.shields.io/badge/React-v15%20%7C%7C%20v16%20%7C%7C%20v17-brightgreen)](https://zh-hans.reactjs.org/)

[English](https://github.com/BigFaceMaster/echarts-next-for-react/blob/master/README.md) | 中文

[Apache ECharts (incubating (v5.x | next))](https://github.com/apache/incubator-echarts) components for react.

> 参考借鉴 [echarts-for-react](https://github.com/hustcc/echarts-for-react)

> [Demo || 示例](https://bigfacemaster.cn/echarts-next-for-react/)

# 1. 安装

```sh
npm install echarts-next-for-react -s
```

Or

```sh
yarn add echarts-next-for-react
```

# 2. 编码

```tsx
import EChartsNextForReactCore from 'echarts-next-for-react';

const demo = () => {
  const option = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
      },
    ],
  };

  return <EChartsNextForReactCore option={option} />;
};

export default demo();
```

# 3. 参数

查看 [Apache ECharts](https://echarts.apache.org/en/index.html).

## LICENSE

MIT
