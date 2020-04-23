import _ from 'lodash';
import {homeTab} from './homeTab';
import {article} from './homeTab';
import {menuTab} from './handleTab';
import {handler} from './handleTab';

const container = document.querySelector('#content');

article(container);
homeTab(container); 


menuTab(15,container);
const nav = document.querySelector(".nav-item");
nav.addEventListener("click", handler);

const menuStuff = document.getElementById("menu");
menuStuff
function myFunction() {
    var x = document.querySelector(".menu-grid");
    if (x.style.visibility === "hidden") {
        x.style.visibility = "visible";
    } else {
        x.style.visibility = "hidden";
    }
  } 

  menuStuff.addEventListener("click", myFunction);