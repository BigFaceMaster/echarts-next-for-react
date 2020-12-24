# echarts-next-for-react

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
