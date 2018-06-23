import React from 'react';

import { createStore, Provider, Subscribe } from '../../src';

class Store extends createStore() {
  state = {
    counter: 0,

    inc: () => this.setState(state => ({ counter: state.counter + 1 })),
    dec: () => this.setState(state => ({ counter: state.counter - 1 }))
  };
}

const Counter = () => (
  <Subscribe store>
    {store => (
      <div>
        <input data-shape="small" type="text" value={store.counter} disabled />

        <div>
          <button data-shape="square" onClick={store.inc}>
            +
          </button>

          <button data-shape="square" onClick={store.dec}>
            -
          </button>
        </div>
      </div>
    )}
  </Subscribe>
);

const App = () => (
  <Provider store={Store}>
    <Counter />
  </Provider>
);

export default App;
