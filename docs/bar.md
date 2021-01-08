# Bar

## Simple

```tsx
import React from 'react';
import EChartsNextForReactCore from 'echarts-next-for-react';

export default () => {
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
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar',
      },
    ],
  };

  return <EChartsNextForReactCore option={option} />;
};
```

## Polar

```tsx
import React from 'react';
import EChartsNextForReactCore from 'echarts-next-for-react';

export default () => {
  const option = {
    angleAxis: {},
    radiusAxis: {
      type: 'category',
      data: ['周一', '周二', '周三', '周四'],
      z: 10,
    },
    polar: {},
    series: [
      {
        type: 'bar',
        data: [1, 2, 3, 4],
        coordinateSystem: 'polar',
        name: 'A',
        stack: 'a',
      },
      {
        type: 'bar',
        data: [2, 4, 6, 8],
        coordinateSystem: 'polar',
        name: 'B',
        stack: 'a',
      },
      {
        type: 'bar',
        data: [1, 2, 3, 4],
        coordinateSystem: 'polar',
        name: 'C',
        stack: 'a',
      },
    ],
    legend: {
      show: true,
      data: ['A', 'B', 'C'],
    },
  };

  return <EChartsNextForReactCore lazyUpdate={true} option={option} />;
};
```

## More

See [Apache Echarts Demo](https://echarts.apache.org/examples/en/index.html#chart-type-bar)
