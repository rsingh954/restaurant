import _ from 'lodash';
import {homeTab} from './homeTab';
import {article} from './homeTab';

const container = document.querySelector('#content');
const head = document.querySelector('#head');



homeTab(container);
article(container);