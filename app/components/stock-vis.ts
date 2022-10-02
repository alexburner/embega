import Component from '@glimmer/component';
import { StockDatum } from 'embega/controllers/application';
import embed from 'vega-embed';

interface S {
  stockData: StockDatum[];
}

export default class StockVis extends Component<S> {
  // did-update via https://stackoverflow.com/a/64954860
  onUpdate(element: HTMLElement, data: [StockDatum[]]) {
    const [stockData] = data;
    embed(element, {
      $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
      data: { values: stockData },
      mark: 'bar',
      encoding: {
        x: { field: 'date', timeUnit: 'day', type: 'ordinal' },
        y: { field: 'high', type: 'quantitative' },
      },
    });
  }
}
