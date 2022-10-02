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

export default class ApplicationController extends Controller {
  @tracked symbol: string = '';
  @tracked symbols: string[] = [];

  @action
  setSymbol(symbol: string) {
    this.symbol = symbol;
  }

  @action
  async searchSymbols(search: string) {
    const response = await fetch(
      `${API_URL}?function=SYMBOL_SEARCH&keywords=${search}&apikey=${API_KEY}`
    );

    const json = await response.json();
    const parsed = zSymbolsResponse.parse(json);
    const symbols = parsed.bestMatches.map((match) => match['1. symbol']);

    this.symbols = symbols;
  }
}
