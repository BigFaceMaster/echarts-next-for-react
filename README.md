# echarts-next-for-react

[![npm](https://img.shields.io/npm/v/echarts-next-for-react.svg)](https://www.npmjs.com/package/echarts-next-for-react)

English | [中文](https://github.com/BigFaceMaster/echarts-next-for-react/blob/master/README.zh-CN.md)

[Apache ECharts (incubating (v5.x | next))](https://github.com/apache/incubator-echarts) components for react.

> Refer to the [echarts-for-react](https://github.com/hustcc/echarts-for-react)

# 1. install

```sh
npm install echarts-next-for-react -s
```

Or

```sh
yarn add echarts-next-for-react
```

# 2. Code

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

# 3. Params

see [Apache ECharts](https://echarts.apache.org/en/index.html).

## LICENSE

MIT
