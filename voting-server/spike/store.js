/* For playing around with the store */
import repl from 'repl';

import makeStore from '../src/store'

const store = makeStore();

function initializeContext(context) {
  context.x = {
    store,
  }
}

let r = repl.start('> ');
initializeContext(r.context);
