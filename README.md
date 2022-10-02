# embega

https://alexburner.github.io/embega/

Testing `ember-cli-typescript` + `vega-lite`

<img width="1440" alt="Screen Shot 2022-10-02 at 1 57 38 PM" src="https://user-images.githubusercontent.com/409114/193476277-e9cbbb9e-2ff8-4cde-a51f-cb1d22f5dd7e.png">

### New tools

- [Ember.js](https://guides.emberjs.com/release/)
- [Ember CLI TypeScript](https://docs.ember-cli-typescript.com/)
- [Vega-Lite](https://vega.github.io/vega-lite/docs/)
- [Vega-Embed](https://github.com/vega/vega-embed)
- [Alpha Vantage Stock Data API](https://www.alphavantage.co/documentation/)

### Code inspo

- Ember
  - Autocomplete input component: [article](https://dtang.dev/building-an-autocomplete-input-in-ember/)
  - Type-safe input element value: [answer](https://discuss.emberjs.com/t/how-to-get-input-value-in-typescript/19533/2)
  - Reacting to component arg updates: [answer](https://stackoverflow.com/a/64954860)
- Vega-Lite
  - Candlestick chart: [example](https://vega.github.io/vega-lite/examples/layer_candlestick.html)
  - Overview/detail brushing: [example](https://vega.github.io/vega-lite/examples/interactive_overview_detail.html)
  - Full-height tooltip hover: [example](https://vega.github.io/vega-lite/examples/interactive_histogram_full_height_hover.html)

### Future work

- Add [Glint](https://typed-ember.gitbook.io/glint) for template type safety
- Add API loading indicators & error states
- Move API from Controller to Service (?)
- Add volume data to vis ([dual y-axis](https://vega.github.io/vega-lite/examples/layer_dual_axis.html)?)
- Add more time resolutions ([daily](https://www.alphavantage.co/documentation/#daily), [weekly](https://www.alphavantage.co/documentation/#weekly))
- Add [Vega-Themes](https://github.com/vega/vega-themes), tune look & feel

<hr />

```
AUTO-GENERATED BELOW THIS LINE
```

## Prerequisites

You will need the following things properly installed on your computer.

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/) (with npm)
- [Ember CLI](https://cli.emberjs.com/release/)
- [Google Chrome](https://google.com/chrome/)

## Installation

- `git clone <repository-url>` this repository
- `cd embega`
- `npm install`

## Running / Development

- `ember serve`
- Visit your app at [http://localhost:4200](http://localhost:4200).
- Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

- `ember test`
- `ember test --server`

### Linting

- `npm run lint`
- `npm run lint:fix`

### Building

- `ember build` (development)
- `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

- [ember.js](https://emberjs.com/)
- [ember-cli](https://cli.emberjs.com/release/)
- Development Browser Extensions
  - [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  - [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
