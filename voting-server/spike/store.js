/* For playing around with the store */
import repl from 'repl';

import {store} from '../src'

function initializeContext(context) {
  context.x = {
    store,
  }
}

let r = repl.start('> ');
initializeContext(r.context);
