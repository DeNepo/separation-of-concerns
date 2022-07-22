import { initListener, removeCharactersListener } from './listeners.js';

debugger; // once when the module is loaded

initListener(document);

removeCharactersListener(document.getElementById('removable'));

debugger;
