import isEmpty from 'lodash/isEmpty';
import isObject from 'lodash/isObject';
import {
  BarChart,
  BoxplotChart,
  CandlestickChart,
  CustomChart,
  EffectScatterChart,
  FunnelChart,
  GaugeChart,
  GraphChart,
  HeatmapChart,
  LineChart,
  LinesChart,
  MapChart,
  ParallelChart,
  PictorialBarChart,
  PieChart,
  RadarChart,
  SankeyChart,
  ScatterChart,
  SunburstChart,
  ThemeRiverChart,
  TreeChart,
  TreemapChart,
} from 'echarts/charts';
// 引入提示框，标题，直角坐标系组件，组件后缀都为 Component
import {
  AriaComponent,
  AxisPointerComponent,
  BrushComponent,
  CalendarComponent,
  DataZoomComponent,
  DataZoomInsideComponent,
  DataZoomSliderComponent,
  DatasetComponent,
  GeoComponent,
  GraphicComponent,
  GridComponent,
  GridSimpleComponent,
  LegendComponent,
  LegendPlainComponent,
  LegendScrollComponent,
  MarkAreaComponent,
  MarkLineComponent,
  MarkPointComponent,
  ParallelComponent,
  PolarComponent,
  RadarComponent,
  SingleAxisComponent,
  TimelineComponent,
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  TransformComponent,
  VisualMapComponent,
  VisualMapContinuousComponent,
  VisualMapPiecewiseComponent,
} from 'echarts/components';
// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
import { CanvasRenderer, SVGRenderer } from 'echarts/renderers';
import type { EChartsOption } from 'echarts';

const enableComponentBySeriesType = (series: object | any[], type: any) =>
  isObject(series)
    ? // @ts-ignore
      series?.type === type
    : // @ts-ignore
      series?.length > 0 && !!series?.find((v) => v.type === type);

const enableComponentBySeriesProp = (series: object | any[], prop: any) =>
  isObject(series)
    ? // @ts-ignore
      series?.[prop]
    : // @ts-ignore
      series?.length > 0 && !!series?.map(v.prop);

export const getRegisterComponents = (option: EChartsOption, isCanvas: boolean) => {
  // necessary Component
  let registerComponents = [GridComponent, isCanvas ? CanvasRenderer : SVGRenderer];
  if (option && !isEmpty(option)) {
    // register title component
    const {
      title = {},
      legend = {},
      polar,
      radar,
      dataZoom,
      visualMap,
      tooltip = {},
      axisPointer = {},
      toolbox = {},
      brush,
      geo,
      grid,
      parallel,
      singleAxis,
      timeline = {},
      graphic,
      calendar,
      dataset,
      aria = {},
      series = [],
    } = option ?? {};
    const titleOps = isEmpty(title) ? title[0] ?? {} : title;
    const { show: titleShow = true } = titleOps ?? {};
    if (titleShow) {
      registerComponents = [TitleComponent, ...registerComponents];
    }
    // register legend Component
    const legendOps = isEmpty(legend) ? legend[0] ?? {} : legend;
    const { show: legendShow = true } = legendOps ?? {};
    if (legendShow) {
      registerComponents = [
        LegendComponent,
        LegendPlainComponent,
        LegendScrollComponent,
        ...registerComponents,
      ];
    }
    // register polar Component
    if (
      polar &&
      // @ts-ignore
      ((isObject(series) && series?.coordinateSystem === 'polar') ||
        // @ts-ignore
        (series?.length > 0 && series?.find((v) => v.coordinateSystem === 'polar')))
    ) {
      registerComponents = [PolarComponent, ...registerComponents];
    }
    // register radar Component
    if (radar || enableComponentBySeriesType(series, 'radar')) {
      registerComponents = [RadarChart, RadarComponent, ...registerComponents];
    }
    // register datazoom Component
    if (dataZoom) {
      registerComponents = [
        DataZoomComponent,
        DataZoomSliderComponent,
        DataZoomInsideComponent,
        ...registerComponents,
      ];
    }
    // register visualMap Component
    if (visualMap) {
      registerComponents = [
        VisualMapComponent,
        VisualMapContinuousComponent,
        VisualMapPiecewiseComponent,
        ...registerComponents,
      ];
    }
    // register tooltip Component
    const tooltipOps = isEmpty(tooltip) ? tooltip[0] ?? {} : tooltip;
    const { show: tooltipShow = true } = tooltipOps ?? {};
    if (tooltipShow) {
      registerComponents = [TooltipComponent, ...registerComponents];
    }
    // register axisPointer Component
    const axisPointerOps = isEmpty(axisPointer) ? axisPointer[0] ?? {} : axisPointer;
    const { show: axisPointerShow } = axisPointerOps ?? {};
    if (axisPointerShow) {
      registerComponents = [AxisPointerComponent, ...registerComponents];
    }
    // register toolbox Component
    const toolboxOps = isEmpty(toolbox) ? toolbox[0] ?? {} : toolbox;
    const { show: toolboxShow = true } = toolboxOps ?? {};
    if (toolboxShow) {
      registerComponents = [ToolboxComponent, ...registerComponents];
    }
    // register grid Component
    if (grid) {
      registerComponents = [GridComponent, GridSimpleComponent, ...registerComponents];
    }
    // register brush Component
    if (brush) {
      registerComponents = [BrushComponent, ...registerComponents];
    }
    // register geo Component
    if (
      geo || // @ts-ignore
      (isObject(series) && series?.coordinateSystem === 'geo') ||
      // @ts-ignore
      (series?.length > 0 && series?.find((v) => v.coordinateSystem === 'geo'))
    ) {
      registerComponents = [GeoComponent, ...registerComponents];
    }
    // register parallel Component
    if (
      parallel ||
      enableComponentBySeriesType(series, 'parallel') || // @ts-ignore
      (isObject(series) && series?.coordinateSystem === 'parallel') ||
      // @ts-ignore
      (series?.length > 0 && series?.find((v) => v.coordinateSystem === 'parallel'))
    ) {
      registerComponents = [ParallelChart, ParallelComponent, ...registerComponents];
    }
    // register singleAxis Component
    if (singleAxis) {
      registerComponents = [SingleAxisComponent, ...registerComponents];
    }
    // register timeline Component
    const timelineOps = isEmpty(timeline) ? timeline[0] ?? {} : timeline;
    const { show: timelineShow = true } = timelineOps ?? {};
    if (timelineShow) {
      registerComponents = [TimelineComponent, ...registerComponents];
    }
    // register graphic Component
    if (graphic || enableComponentBySeriesType(series, 'graph')) {
      registerComponents = [GraphChart, GraphicComponent, ...registerComponents];
    }
    // register calendar Component
    if (calendar) {
      registerComponents = [CalendarComponent, ...registerComponents];
    }
    // register dataset Component
    if (dataset) {
      registerComponents = [TransformComponent, DatasetComponent, ...registerComponents];
    }
    // register aria Component
    if (aria?.enabled) {
      registerComponents = [AriaComponent, ...registerComponents];
    }
    // register components by series
    // register line component
    if (enableComponentBySeriesType(series, 'line')) {
      registerComponents = [LinesChart, LineChart, ...registerComponents];
    }
    // register bar component
    if (enableComponentBySeriesType(series, 'bar')) {
      registerComponents = [BarChart, ...registerComponents];
    }
    // register pie component
    if (enableComponentBySeriesType(series, 'pie')) {
      registerComponents = [PieChart, ...registerComponents];
    }
    // register scatter component
    if (enableComponentBySeriesType(series, 'scatter')) {
      registerComponents = [ScatterChart, ...registerComponents];
    }
    // register effectScatter component
    if (enableComponentBySeriesType(series, 'effectScatter')) {
      registerComponents = [EffectScatterChart, ...registerComponents];
    }
    // register tree component
    if (enableComponentBySeriesType(series, 'tree')) {
      registerComponents = [TreeChart, ...registerComponents];
    }
    // register treemap component
    if (enableComponentBySeriesType(series, 'treemap')) {
      registerComponents = [TreemapChart, ...registerComponents];
    }
    // register sunburst component
    if (enableComponentBySeriesType(series, 'sunburst')) {
      registerComponents = [SunburstChart, ...registerComponents];
    }
    // register boxplot component
    if (enableComponentBySeriesType(series, 'boxplot')) {
      registerComponents = [BoxplotChart, ...registerComponents];
    }
    // register candlestick component
    if (enableComponentBySeriesType(series, 'candlestick')) {
      registerComponents = [CandlestickChart, ...registerComponents];
    }
    // register heatmap component
    if (enableComponentBySeriesType(series, 'heatmap')) {
      registerComponents = [HeatmapChart, ...registerComponents];
    }
    // register map component
    if (enableComponentBySeriesType(series, 'map')) {
      registerComponents = [MapChart, ...registerComponents];
    }
    // register lines component
    if (enableComponentBySeriesType(series, 'lines')) {
      registerComponents = [LineChart, LinesChart, ...registerComponents];
    }
    // register sankey component
    if (enableComponentBySeriesType(series, 'sankey')) {
      registerComponents = [SankeyChart, ...registerComponents];
    }
    // register funnel component
    if (enableComponentBySeriesType(series, 'funnel')) {
      registerComponents = [FunnelChart, ...registerComponents];
    }
    // register gauge component
    if (enableComponentBySeriesType(series, 'gauge')) {
      registerComponents = [GaugeChart, ...registerComponents];
    }
    // register pictorialBar component
    if (enableComponentBySeriesType(series, 'pictorialBar')) {
      registerComponents = [PictorialBarChart, ...registerComponents];
    }
    // register themeRiver component
    if (enableComponentBySeriesType(series, 'themeRiver')) {
      registerComponents = [ThemeRiverChart, ...registerComponents];
    }
    // register custom component
    if (enableComponentBySeriesType(series, 'custom')) {
      registerComponents = [CustomChart, ...registerComponents];
    }
    // register markPoint Component
    if (enableComponentBySeriesProp(series, 'markPoint')) {
      registerComponents = [MarkPointComponent, ...registerComponents];
    }
    // register markLine Component
    if (enableComponentBySeriesProp(series, 'markLine')) {
      registerComponents = [MarkLineComponent, ...registerComponents];
    }
    // register markArea Component
    if (enableComponentBySeriesProp(series, 'markArea')) {
      registerComponents = [MarkAreaComponent, ...registerComponents];
    }
  }
  return registerComponents;
};
