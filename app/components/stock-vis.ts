import Component from '@glimmer/component';
import { StockDatum } from 'embega/controllers/application';
import embed from 'vega-embed';

interface S {
  stockData: StockDatum[];
}

export default class StockVis extends Component<S> {
  // did-update via https://stackoverflow.com/a/64954860
  onUpdate(element: HTMLElement, [stockData]: [StockDatum[]]) {
    const elementWidth = element.offsetWidth;
    const yAxisWidth = 50;
    const chartWidth = elementWidth - yAxisWidth;
    // spec via:
    // - https://vega.github.io/vega-lite/examples/layer_candlestick.html
    // - https://vega.github.io/vega-lite/examples/interactive_overview_detail.html
    // - https://vega.github.io/vega-lite/examples/interactive_histogram_full_height_hover.html
    embed(element, {
      $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
      data: { values: stockData },
      transform: [{ calculate: 'datum.close - datum.open', as: 'delta' }],
      vconcat: [
        {
          width: chartWidth,
          height: 600,
          encoding: {
            x: {
              field: 'date',
              type: 'temporal',
              title: '',
              scale: { domain: { param: 'brush' } },
            },
          },
          layer: [
            {
              params: [
                {
                  name: 'hover',
                  select: {
                    type: 'point',
                    on: 'mouseover',
                    clear: 'mouseout',
                  },
                },
              ],
              mark: {
                type: 'bar',
                color: '#eee',
                tooltip: true,
              },
              encoding: {
                y: { value: 600 },
                y2: { value: 0 },
                opacity: {
                  condition: {
                    test: { param: 'hover', empty: false },
                    value: 0.5,
                  },
                  value: 0,
                },
                tooltip: [
                  { field: 'date', type: 'temporal' },
                  { field: 'open', type: 'quantitative', format: '$,.2f' },
                  { field: 'close', type: 'quantitative', format: '$,.2f' },
                  { field: 'delta', type: 'quantitative', format: '+$,.2f' },
                  { field: 'high', type: 'quantitative', format: '$,.2f' },
                  { field: 'low', type: 'quantitative', format: '$,.2f' },
                  { field: 'volume', type: 'quantitative', format: ',~r' },
                ],
              },
            },
            {
              mark: 'rule',
              encoding: {
                y: {
                  field: 'low',
                  type: 'quantitative',
                  axis: { title: 'Price' },
                },
                y2: { field: 'high' },
                color: {
                  condition: {
                    test: 'datum.open < datum.close',
                    value: '#06982d',
                  },
                  value: '#ae1325',
                },
              },
            },
            {
              mark: 'bar',
              encoding: {
                y: {
                  field: 'open',
                  type: 'quantitative',
                  axis: { title: 'Price' },
                },
                y2: { field: 'close' },
                color: {
                  condition: {
                    test: 'datum.open < datum.close',
                    value: '#06982d',
                  },
                  value: '#ae1325',
                },
              },
            },
          ],
        },
        {
          width: chartWidth,
          height: 60,
          encoding: {
            x: {
              field: 'date',
              type: 'temporal',
              title: 'Date',
            },
            y: {
              type: 'quantitative',
              axis: { title: '', grid: false },
            },
            color: {
              condition: {
                test: 'datum.open < datum.close',
                value: '#06982d',
              },
              value: '#ae1325',
            },
          },
          layer: [
            {
              mark: 'rule',
              encoding: {
                y: { field: 'low' },
                y2: { field: 'high' },
              },
              params: [
                {
                  name: 'brush',
                  select: { type: 'interval', encodings: ['x'] },
                },
              ],
            },
            {
              mark: 'bar',
              encoding: {
                y: { field: 'open' },
                y2: { field: 'close' },
              },
            },
          ],
        },
      ],
    });
  }
}
