import _ from 'lodash';
import {homeTab} from './homeTab';
import {article} from './homeTab';
import {menuTab} from './handleTab';
import {handler} from './handleTab';
import contact from './contactTab';
import about from './aboutTab'

const containers = document.querySelector('#content');
const container = document.createElement('div');

containers.appendChild(container);
article(container);
homeTab(container); 


menuTab(15,container);
const nav = document.querySelector(".nav-item");
nav.addEventListener("click", handler);

const menuStuff = document.getElementById("menu");

function myFunction() {
    var x = document.querySelector(".menu-grid") || document.querySelector(".form");
    if (x.style.visibility === "hidden") {
        x.style.visibility = "visible";
    } else {
        x.style.visibility = "hidden";
    }
  };

about();
contact();

function myFunction1() {
    var x = document.querySelector(".form");
    if (x.style.visibility === "hidden") {
        x.style.visibility = "visible";
    } else {
        x.style.visibility = "hidden";
    }
  };

const contactForm = document.getElementById("contact");

contactForm.addEventListener("click", myFunction1);
  
menuStuff.addEventListener("click", myFunction);