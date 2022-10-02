import { z } from 'zod';
import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

const API_URL = 'https://www.alphavantage.co/query';
const API_KEY = 'EVUFAUSD0TZUIPVK';

// https://www.alphavantage.co/documentation/#symbolsearch
const zSymbolsResponse = z.object({
  bestMatches: z.array(
    z.object({
      '1. symbol': z.string(),
      '2. name': z.string(),
      '3. type': z.string(),
      '4. region': z.string(),
      '5. marketOpen': z.string(),
      '6. marketClose': z.string(),
      '7. timezone': z.string(),
      '8. currency': z.string(),
      '9. matchScore': z.string(),
    })
  ),
});

// https://www.alphavantage.co/documentation/#weekly
const zWeeklyResponse = z.object({
  'Weekly Time Series': z.record(
    z.object({
      '1. open': z.string(),
      '2. high': z.string(),
      '3. low': z.string(),
      '4. close': z.string(),
      '5. volume': z.string(),
    })
  ),
});

export interface StockDatum {
  date: Date;
  open: number;
  close: number;
  high: number;
  low: number;
  volume: number;
}

export default class ApplicationController extends Controller {
  @tracked symbol: string = '';
  @tracked missingSymbol: boolean = true;
  @tracked symbolOptions: string[] = [];
  @tracked stockData: StockDatum[] = [];

  @action
  setSymbol(symbol: string) {
    this.symbol = symbol;
    this.missingSymbol = symbol.length === 0;
  }

  @action
  async searchSymbols(keyword: string) {
    const response = await fetch(
      `${API_URL}?function=SYMBOL_SEARCH&keywords=${keyword}&apikey=${API_KEY}`
    );

    const json = await response.json();
    const parsed = zSymbolsResponse.parse(json);
    const symbols = parsed.bestMatches.map((match) => match['1. symbol']);

    this.symbolOptions = symbols;
  }

  @action
  async getStockData(symbol?: string) {
    if (!symbol) return;

    const response = await fetch(
      `${API_URL}?function=TIME_SERIES_WEEKLY&symbol=${symbol}&apikey=${API_KEY}`
    );

    const json = await response.json();
    const parsed = zWeeklyResponse.parse(json);
    const stockData = Object.entries(parsed['Weekly Time Series']).map(
      ([date, datum]) => ({
        date: new Date(date),
        open: Number(datum['1. open']),
        close: Number(datum['4. close']),
        high: Number(datum['2. high']),
        low: Number(datum['3. low']),
        volume: Number(datum['5. volume']),
      })
    );

    console.log(stockData);

    this.stockData = stockData;
  }
}
