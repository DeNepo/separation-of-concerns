import {
  CONTAINER_ID,
  MAIN_ID,
  SUMMARY_ID,
  TOGGLE_ID,
} from '../data/constants.js';

import { load } from './listeners/load.js';

import { preventDefaultListener } from './listeners/prevent-default.js';
import { mainText } from './listeners/main-text.js';
import { openClose } from './listeners/open-close.js';
import { summaryText } from './listeners/summary-text.js';

// this file is the program's Entry Point
debugger;

load(document);

preventDefaultListener(document.getElementById(CONTAINER_ID));
mainText(document.getElementById(MAIN_ID));
openClose(document.getElementById(TOGGLE_ID));
summaryText(document.getElementById(SUMMARY_ID));
