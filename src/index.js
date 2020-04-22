import _ from 'lodash';
import {homeTab} from './homeTab';
import {article} from './homeTab';

import handler from './handleTab';

const container = document.querySelector('#content');

article(container);
homeTab(container);

const nav = document.querySelector(".nav-item");
nav.addEventListener("click", handler);