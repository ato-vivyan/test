import Vue from 'vue';

import { gsap } from 'gsap';
const ScrollTrigger = process.browser ? require('gsap/ScrollTrigger') : undefined;

gsap.registerPlugin(ScrollTrigger);

Vue.use(gsap);
