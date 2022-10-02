import Component from '@glimmer/component';
import { restartableTask, timeout } from 'ember-concurrency';
import { guidFor } from '@ember/object/internals';
import { assert } from '@ember/debug';

interface S {
  options: string[];
  onInput: (value: string) => void;
  search: (value: string) => Promise<void>;
}

// Via https://github.com/iamdtang/autocomplete-input/blob/main/app/components/autocomplete-input.js
export default class AutocompleteInputComponent extends Component<S> {
  listId = guidFor(this);

  wasOptionSelected(value: string) {
    return this.args.options.includes(value);
  }

  @restartableTask
  *onInputTask(event: InputEvent) {
    // Via https://discuss.emberjs.com/t/how-to-get-input-value-in-typescript/19533/2
    assert(
      'onInputTask must be bound to an input element',
      event.target instanceof HTMLInputElement
    );

    const { value } = event.target;

    this.args.onInput(value);

    if (this.wasOptionSelected(value)) {
      return;
    }

    const debounce = 250;
    yield timeout(debounce);

    if (value) {
      this.args.search(value);
    }
  }
}
