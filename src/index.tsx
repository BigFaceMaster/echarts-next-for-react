import type { FC } from 'react';
import React, { useEffect, useRef } from 'react';
import classNames from 'classnames';
import isFunction from 'lodash/isFunction';
import isEmpty from 'lodash/isEmpty';
import isString from 'lodash/isString';
import { bind, clear } from 'size-sensor';
import { useMount, useUnmount } from 'react-use';
// echarts
// 引入 echarts 核心模块，核心模块提供了 echarts 使用必须要的接口。
// Import the echarts core module, which provides the necessary interfaces for using echarts.
import type { EChartsOption } from 'echarts';
import * as echarts from 'echarts/core';

import { getRegisterComponents } from '@/utils';

export type EChartsNextForReactCoreProps = {
  option: EChartsOption;
  notMerge?: boolean;
  replaceMerge?: string | string[];
  lazyUpdate?: boolean;
  silent?: boolean;
  style?: React.CSSProperties;
  className?: string;
  theme?: string | Record<string, unknown>;
  opts?: {
    renderer?: 'canvas' | 'svg';
    devicePixelRatio?: number;
    width?: number;
    height?: number;
    locale?: string | any;
  };
  showLoading?: boolean;
  onChartReady?: (arg0: any) => void;
  onEvents?: Record<string, unknown>;
  renderType?: 'canvas' | 'svg';
};

const EChartsNextForReactCore: FC<EChartsNextForReactCoreProps> = (props) => {
  const {
    style,
    className,
    theme,
    opts,
    option,
    notMerge,
    lazyUpdate,
    showLoading,
    onChartReady,
    onEvents,
    renderType = 'canvas',
  } = props;

  const isCanvas = renderType === 'canvas';

  // necessary Component
  const useOps = getRegisterComponents(option, isCanvas);

  useEffect(() => {
    echarts.use(useOps);
  }, []);

  const chartRefElements = useRef<HTMLDivElement>(null);

  const getChartInstance = () => {
    if (chartRefElements?.current) {
      return (
        echarts.getInstanceByDom(chartRefElements?.current) ??
        echarts.init(chartRefElements?.current, theme, opts)
      );
    }
    return undefined;
  };

  const getChartDom = () => {
    const chartObj = getChartInstance();
    if (chartObj) {
      chartObj.setOption(option, notMerge ?? false, !!lazyUpdate ?? false);
      if (showLoading) {
        chartObj.showLoading();
      } else {
        chartObj.hideLoading();
      }
      return chartObj;
    }
    return undefined;
  };

  const bindEvents = () => {
    const chartElms = getChartDom();
    if (!isEmpty(onEvents) && chartElms) {
      // @ts-ignore
      // eslint-disable-next-line no-restricted-syntax
      for (const [key, func] of Object.entries(onEvents)) {
        if (
          Object.prototype.hasOwnProperty.call(onEvents, key) &&
          isString(key) &&
          isFunction(func)
        ) {
          chartElms.on(key, (param: any) => {
            func(param, chartElms);
          });
        }
      }
    }
  };

  const renderChart = () => {
    const chartObj = getChartDom();
    bindEvents();
    if (chartObj) {
      if (isFunction(onChartReady)) {
        onChartReady(chartObj);
      } else if (chartRefElements) {
        bind(chartRefElements?.current, () => {
          try {
            chartObj?.resize();
          } catch (e) {
            console.error(e);
          }
        });
      }
    }
  };

  const disposeCurrentChart = () => {
    if (chartRefElements?.current) {
      clear(chartRefElements?.current);
      echarts.dispose(chartRefElements?.current);
    }
  };

  useMount(() => {
    renderChart();
  });

  useEffect(() => {
    disposeCurrentChart();
    renderChart();
  }, [theme, opts, onEvents]);

  useEffect(() => {
    const chartDom = getChartDom();
    // @ts-ignore
    if (chartDom?._dom) {
      // @ts-ignore
      bind(chartDom._dom, () => {
        try {
          chartDom?.resize();
        } catch (e) {
          console.error(e);
        }
      });
    }
  }, [style, className, showLoading]);

  useUnmount(() => {
    disposeCurrentChart();
  });

  return (
    <div
      ref={chartRefElements}
      style={{
        height: 360,
        ...style,
      }}
      className={classNames('echarts-next-for-react', className)}
    />
  );
};

EChartsNextForReactCore.defaultProps = {
  notMerge: false,
  lazyUpdate: false,
  showLoading: false,
};

export default EChartsNextForReactCore;
