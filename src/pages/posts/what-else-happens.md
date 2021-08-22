---
title: "What Else Happens"
date: "2015-03-15"
layout: '../../layouts/BlogPost.astro'
categories: 
  - "animation"
  - "design"
  - "poem"
  - "typography"
---

<div id="weh">
  <p class="weh fadein weh-first"> </p>
  <p class="weh fadein weh-1 sc">Think not of the</p>
  <p class="weh fadein weh-2">unpleasantness and stress</p>
  <p class="weh fadein weh-3">that the future may hold.</p>
  <p class="weh fadeInRight weh-break weh-4 weh-second">It's never the future</p>
  <p class="weh fadeInUp weh-second weh-5">you're truly afraid of anyway;</p>
  <p class="weh fadeinleft weh-second weh-6">it’s reliving the past</p>
  <p class="weh fadeInUp weh-second weh-7">that torments you.</p>
  <p class="weh fadeinleft weh-break weh-8 weh-third">But neither what has</p>
  <p class="weh fadeInRight weh-9 weh-third-b">nor what is</p>
  <p class="weh fadeInUp weh-left weh-10">holds </p>
  <p class="weh fadeInUp weh-left weh-10-a">any </p>
  <p class="weh boomDown weh-left weh-10-b">power </p>
  <p class="weh boomDown weh-left weh-10-c">over </p>
  <p class="weh boomDown weh-left weh-10-d"> </p>
  <p class="weh boomDown weh-left weh-10-e">you </p>
  <p class="weh fadeInUp weh-left weh-10-f weh-line">now </p>
  <p class="weh flapDown weh-11">(<em>without your permission</em>).</p>
  <p class="small-weh-divide fadein weh weh-12 weh-fourth"> </p>
  <p class="weh pullUp weh-break weh-13">It's one of those truths</p>
  <p class="weh stretchRight weh-14">that is deeper than it is wide,</p>
  <p class="weh pullDown weh-left weh-15">so easy to say </p>
  <p class="weh surface weh-left weh-15-a">on </p>
  <p class="weh surface weh-left weh-15-b">the </p>
  <p class="weh surface weh-left weh-15-c weh-line">surface </p>
  <p class="weh fadein weh-a weh-left">but </p>
  <p class="weh fadein weh-b weh-left">too </p>
  <p class="weh fadein weh-c weh-left">true </p>
  <p class="weh fadein weh-d weh-left">to </p>
  <p class="weh fadein weh-e weh-left">learn </p>
  <p class="weh fadein weh-f weh-left">all </p>
  <p class="weh fadein weh-g weh-left">at </p>
  <p class="weh fadein weh-h weh-left">once.</p>
  <p class="weh zoomIn weh-break weh-17 weh-fifth">The only time you have,</p>
  <p class="weh zoomIn weh-18">or will ever have</p>
  <p class="weh zoomIn weh-19">is right now.</p>
  <div class="right-align">
    <p class="weh fadein weh-last weh-20">No </p>
    <p class="weh fadein weh-last weh-21">matter </p>
    <p class="weh fadein weh-last weh-22"><strong>what </strong> </p>
    <p class="weh fadein weh-last weh-23">else </p>
    <p class="weh fadein weh-last weh-24 weh-line"><strong>happens</strong>, </p>
    <p class="weh fadein weh-last weh-25">it's </p>
    <p class="weh fadein weh-last weh-26">always </p>
    <p class="weh fadein weh-last weh-27">right </p>
    <p class="weh fadein weh-last weh-28">now. </p>
  </div>
</div>




Think not of the unpleasantness and stress that the future may hold.

It's never the future you're truly afraid of anyway;

it’s reliving the past that torments you.

But neither what has nor what is holds any power over you now (without your permission).


It's one of those truths that is deeper than it is wide,

so easy to say on the surface

but too true to learn all at once.

The only time you have,

or will ever have

is right now.

  

No matter what else happens,
it's always right now.

_

_(Reload the page to restart the animation.)_

_


<style>
#weh {
  padding: 0% 6% 6% 6%;
  position: relative;
  opacity: 0.8;
  display: block;
  background-color: rgba(250, 255, 240, 0.5);
  -moz-box-shadow: 3px 6px 6px 1px rgba(204,204,204,0.7);
  box-shadow: 3px 6px 6px 1px rgba(204,204,204,0.7);
}

#weh::after {
  content: "";
  background-image: url("/images/water-damage.jpg");
  background-size: 100% 100%;
  opacity: 0.2;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
  z-index: -1;   
}

.weh {
  line-height: 1.6em;
  padding: 0px;
  opacity: 0;
}

.weh-last {
  text-align: right;
  display: inline;
  margin-right: 0px;
  line-height: 1.6em;
  font-size: 1.5em;
}

.weh-left {
  text-align: left;
  opacity: 0;
  display: inline;
}

.weh-line:after {
  content:"\a";
  white-space: pre;
}

.right-align {
  text-align: right;
  margin-top: 4rem;
}

.weh-first {
  padding-top: 1.6em;
}

.weh-first::after {
  content: "Think not of the unpleasantness and stress that the future may hold. It's never the future you're truly afraid of anyway; it’s reliving the past that torments you. But neither what has gone before nor what is yet to be holds any power over you now (without your permission).";
  font-size: 4.8em;
  line-height: 1em;
  opacity: 0.07;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
  z-index: -1;   
  max-width: 100%;
  overflow: hidden;
  color: #aaaa00;
  font-style: italic;
}

.weh-third::after {
  content: " gone before";
  opacity: 0;
  position: relative;
  animation: fadeinleft 1.8s;
  animation-delay: 10.2s;
  animation-fill-mode: forwards;
}

.weh-third-b::after {
  content: " yet to be";
  opacity: 0;
  position: relative;
  animation: fadeInRight 1.8s;
  animation-delay: 11.5s;
  animation-fill-mode: forwards;
}

.weh-break {
  margin-top: 1em;
}

.small-weh-divide {
  margin: 48px 0px 24px 0px !important;
  border-bottom: 1px solid #63666A;
  max-width: 260px;
}


.fadein{
  animation: fadein 2s;
  animation-fill-mode: forwards;
}

.fadeinleft {
  animation: fadeinleft 1.8s;
  animation-fill-mode: forwards;
}

.fadeInRight {
  animation: fadeInRight 1.8s;
  animation-fill-mode: forwards;
}

.fadeInUp {
  animation: fadeInUp 1.5s;
  animation-fill-mode: forwards;
}

.pullUp {
  animation: pullUp 2s;
  animation-fill-mode: forwards;
}

.stretchRight {
  animation: stretchRight 2s;
  animation-fill-mode: forwards;
  transform-origin: left;
  overflow: hidden;
}

.pullDown {
  animation: pullDown 3s;
  animation-fill-mode: forwards;
}

.stretchLeft {
  animation: stretchLeft 2.3s;
  animation-fill-mode: forwards;
}

.expandOpen {
  animation: stretchLeft 2s;
  animation-fill-mode: forwards;
}

.zoomIn {
  animation: zoomIn 2s;
  animation-fill-mode: forwards;
}

.flapDown {
  animation: flapDown 2s;
  animation-fill-mode: forwards;
  transform-origin: top;
}

.boomDown {
  animation: boomDown 1.4s;
  animation-fill-mode: forwards;
  transform-origin: top;
}

.surface {
  animation: surface 1.6s;
  animation-fill-mode: forwards;
  transform-origin: bottom;
}




@keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

@keyframes fadeinleft {
  0% {
    opacity: 0;
    -ms-transform: translate3d(-10%, 0, 0);
    transform: translate3d(-10%, 0, 0);
  }

  100% {
    opacity: 1;
    -ms-transform: none;
    transform: none;
  }
}

@keyframes fadeInRight {
  0% {
    opacity: 0;
    -ms-transform: translate3d(10%, 0, 0);
    transform: translate3d(10%, 0, 0);
  }

  100% {
    opacity: 1;
    -ms-transform: none;
    transform: none;
  }
}

@keyframes pullUp {
	0% {
		opacity: 0;
		transform: scaleY(0.1);
	}
	40% {
		transform: scaleY(1.02);
	}
	60% {
		transform: scaleY(0.98);
	}
	80% {
		transform: scaleY(1.01);
	}
	100% {
		transform: scaleY(0.98);
    opacity: 1;
	}									
}

@keyframes stretchRight {
	0% {
		opacity: 0;
		transform: scaleX(3);
	}
	100% {
		opacity: 1;
		transform: scaleX(1);
	}							
}

@keyframes pullDown {
	0% {
	  opacity: 0;
		transform: scaleY(0.1);
	}
	40% {
		transform: scaleY(1.02);
	}
	60% {
		transform: scaleY(0.98);
	}
	80% {
		transform: scaleY(1.01);
	}
	100% {
		transform: scaleY(0.98);
	}				
	80% {
		transform: scaleY(1.01);
	}
	100% {
	  opacity: 1;
		transform: scaleY(1);
	}								
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    -ms-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }
  100% {
    opacity: 1;
    -ms-transform: none;
    transform: none;
  }
}

@keyframes zoomIn {
  0% {
    opacity: 0;
    transform: scale3d(.95, .95, .95);
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
}

@keyframes flapDown {
	0% {
	  opacity: 0;
		transform: scaleY(0) translateY(-3em);
	}
	40% {
	  opacity: 0;
		transform: scaleY(-1.1) translateY(.6em);
	}
	70% {
  	opacity: .5;
		transform: scaleY(.8) translateY(.1em);
	}
	100% {
	  opacity: 1;
		transform: scaleY(1) translateY(0em);
	}			
}

@keyframes boomDown {
	0% {
    opacity: 0;
    transform: scale(1.1) translateY(-0.7em);
	}		
	100% {
    opacity: 1;
    transform: scale(1) translateY(0em);
	}		
}

@keyframes surface {
	0% {
	  opacity: 0;
  	transform: scaleY(0) translateY(1em);
	}	

	100% {
	  opacity: 1;
	  transform: scaleY(1) translateY(0);
	}		
}


.weh-1 {
    animation-delay: 1.5s;
}
.weh-2 {
    animation-delay: 2s;
}
.weh-3 {
    animation-delay: 3s;
}
.weh-4 {
    animation-delay: 4.5s;
}
.weh-5 {
    animation-delay: 5.2s;
}
.weh-6 {
    animation-delay: 6.7s;
}
.weh-7 {
    animation-delay: 7.5s;
}
.weh-8 {
    animation-delay: 9.7s;
}
.weh-9 {
    animation-delay: 11s;
}
.weh-10 {
    animation-delay: 12.5s;
}
.weh-10-a {
    animation-delay: 12.7s;
}
.weh-10-b {
    animation-delay: 12.9s;
}
.weh-10-c {
    animation-delay: 13.1s;
}
.weh-10-d {
    animation-delay: 13.3s;
}
.weh-10-e {
    animation-delay: 13.5s;
}
.weh-10-f {
    animation-delay: 13.7s;
}

.weh-11 {
    animation-delay: 13.9s;
}
.weh-12 {
    animation-delay: 16s;
}
.weh-13 {
    animation-delay: 17s;
}
.weh-14 {
    animation-delay: 17.7s;
}
.weh-15 {
    animation-delay: 19.5s;
}
.weh-15-a {
    animation-delay: 19.7s;
}
.weh-15-b {
      animation-delay: 19.9s;
}
  .weh-15-c {
    animation-delay: 20.1s;
}

.weh-16 {
    animation-delay: 20.2s;
}
.weh-a {
    animation-delay: 22.1s;
}
.weh-b {
    animation-delay: 23.1s;
}
.weh-c {
    animation-delay: 22.7s;
}
.weh-d {
    animation-delay: 23.5s;
}
.weh-e {
    animation-delay: 23.3s;
}
.weh-f {
    animation-delay: 22.3s;
}
.weh-g {
    animation-delay: 22.9s;
}
.weh-h {
    animation-delay: 22.5s;
}

.weh-17 {
    animation-delay: 25.5s;
}
.weh-18 {
    animation-delay: 26.5s;
}
.weh-19 {
    animation-delay: 28s;
}
.weh-20 {
    animation-delay: 31.5s;
}
.weh-21 {
    animation-delay: 31.7s;
}
.weh-22 {
    animation-delay: 32.5s;
}
.weh-23 {
    animation-delay: 32.7s;
}
.weh-24 {
    animation-delay: 33s;
}
.weh-25 {
    animation-delay: 35s;
}
.weh-26 {
    animation-delay: 35.3s;
}
.weh-27 {
    animation-delay: 35.9s;
}
.weh-28 {
    animation-delay: 36.4s;
}


@media only screen and (max-width: 767px) {
  #weh {
    padding: 0px 20px 32px 20px;
    overflow: hidden;
  }

  .weh-first::after {
    font-size: 4.3em;
  }

  .weh-last {
    font-size: 1.9em;
  }

  .weh-first {
    padding-top: .2em;
  }
}



@media only screen and (max-width: 469px) {
  .weh {
    font-size: 16px;
  }

  .weh-first::after {
    font-size: 3.5em;
  }
}
</style>