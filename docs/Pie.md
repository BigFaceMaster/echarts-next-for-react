# Pie

## Pie label alignTo

```tsx
import React from 'react';
import EChartsNextForReactCore from "echarts-next-for-react";

export default () => {
  const data = [{
    name: 'Apples',
    value: 70
  }, {
    name: 'Strawberries',
    value: 68
  }, {
    name: 'Bananas',
    value: 48
  }, {
    name: 'Oranges',
    value: 40
  }, {
    name: 'Pears',
    value: 32
  }, {
    name: 'Pineapples',
    value: 27
  }, {
    name: 'Grapes',
    value: 18
  }];

  const option = {
    title: [{
      text: 'Pie label alignTo'
    }, {
      subtext: 'alignTo: "none" (default)',
      left: '16.67%',
      top: '75%',
      textAlign: 'center'
    }, {
      subtext: 'alignTo: "labelLine"',
      left: '50%',
      top: '75%',
      textAlign: 'center'
    }, {
      subtext: 'alignTo: "edge"',
      left: '83.33%',
      top: '75%',
      textAlign: 'center'
    }],
    series: [{
      type: 'pie',
      radius: '25%',
      center: ['50%', '50%'],
      data: data,
      animation: false,
      label: {
        position: 'outer',
        alignTo: 'none',
        bleedMargin: 5
      },
      left: 0,
      right: '66.6667%',
      top: 0,
      bottom: 0
    }, {
      type: 'pie',
      radius: '25%',
      center: ['50%', '50%'],
      data: data,
      animation: false,
      label: {
        position: 'outer',
        alignTo: 'labelLine',
        bleedMargin: 5
      },
      left: '33.3333%',
      right: '33.3333%',
      top: 0,
      bottom: 0
    }, {
      type: 'pie',
      radius: '25%',
      center: ['50%', '50%'],
      data: data,
      animation: false,
      label: {
        position: 'outer',
        alignTo: 'edge',
        margin: 20
      },
      left: '66.6667%',
      right: 0,
      top: 0,
      bottom: 0
    }],
  };


  return <EChartsNextForReactCore option={option} />;
}
```

## Pie Rose Type 
```tsx
import React from 'react';
import EChartsNextForReactCore from "echarts-next-for-react";

export default () => {
    const option = {
      title: {
        text: '南丁格尔玫瑰图',
        subtext: '纯属虚构',
        left: 'center'
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
      },
      legend: {
        left: 'center',
        top: 'bottom',
        data: ['rose1', 'rose2', 'rose3', 'rose4', 'rose5', 'rose6', 'rose7', 'rose8']
      },
      toolbox: {
        show: true,
        feature: {
          mark: {show: true},
          dataView: {show: true, readOnly: false},
          magicType: {
            show: true,
            type: ['pie', 'funnel']
          },
          restore: {show: true},
          saveAsImage: {show: true}
        }
      },
      series: [
        {
          name: '半径模式',
          type: 'pie',
          radius: [20, 110],
          center: ['25%', '50%'],
          roseType: 'radius',
          label: {
            show: false
          },
          emphasis: {
            label: {
              show: true
            }
          },
          data: [
            {value: 10, name: 'rose1'},
            {value: 5, name: 'rose2'},
            {value: 15, name: 'rose3'},
            {value: 25, name: 'rose4'},
            {value: 20, name: 'rose5'},
            {value: 35, name: 'rose6'},
            {value: 30, name: 'rose7'},
            {value: 40, name: 'rose8'}
          ]
        },
        {
          name: '面积模式',
          type: 'pie',
          radius: [30, 110],
          center: ['75%', '50%'],
          roseType: 'area',
          data: [
            {value: 10, name: 'rose1'},
            {value: 5, name: 'rose2'},
            {value: 15, name: 'rose3'},
            {value: 25, name: 'rose4'},
            {value: 20, name: 'rose5'},
            {value: 35, name: 'rose6'},
            {value: 30, name: 'rose7'},
            {value: 40, name: 'rose8'}
          ],
        },
      ],
    };
    
    return <EChartsNextForReactCore option={option} />;
}
```
