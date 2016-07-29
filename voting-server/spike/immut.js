/* Useful for playing around with immutable.js */
import repl from 'repl';

import {List, Map} from 'immutable';

const full = Map({
  vote: Map({
    pair: List.of('Trainspotting', '28 Days Later'),
    tally: Map({
      'Trainspotting': 3,
      '28 Days Later': 2
    })
  }),
  entries: List.of('Sunshine', 'Millions', '127 Hours')
});

const empty = Map({
  vote: Map({
    pair: List.of('Trainspotting', '28 Days Later')
  }),
  entries: List.of('Sunshine', 'Millions', '127 Hours')
});

function initializeContext(context) {
  context.x = {
    full,
    empty
  }
}

let r = repl.start('> ');
initializeContext(r.context);
r.on('reset', initializeContext);
