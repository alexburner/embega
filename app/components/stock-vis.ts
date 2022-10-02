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
    embed(element, {
      $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
      data: { values: stockData },
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
            y: {
              type: 'quantitative',
              axis: { title: 'Price' },
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
              axis: { title: '' },
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
