---
title: "All to Myself"
date: "2015-08-17"
layout: '../../layouts/BlogPost.astro'
categories: 
  - "poem"
  - "typography"
---

<div class="atm-section">
  <p>&nbsp;</p>
  <p>I like the world best at 6am<br>because things are quiet<br><span class="atm-jar1">and still</span><br><span class="atm-jar2">and I have the emptiness of the streets</span><br><span class="atm-jar3">all to myself.</span></p>
  <p class="atm-line atm_p2-l1">By 7 the early early commuters are out</p>
  <p class="atm-line atm_p2-l2">eating breakfast with one hand</p>
  <p class="atm-line atm_p2-l3">and narrowly <span class="atm-bigger">avoiding</span><span class="atm-bigger2"> pedestrians</span></p>
  <p class="atm-line atm_p2-l4">with the other</p>
  <p class="atm-line atm_p2-l5">and by 8 the school buses roll</p>
  <p class="atm-line atm_p2-l6">so children can learn the importance</p>
  <p class="atm-line atm_p2-l7">of commuting during <span class="atm-bigger3">high traffic times</span></p>
  <p class="atm-line atm_p2-l8">(the key to conformity is practice),</p>
  <p>I like the world best at 6am<br>when I still have the emptiness<br>all to myself.</p>
</div>


<style>
p.atm-line {
  line-height: 1;
  margin-bottom: 0;
  padding-bottom: 0;
}

p.atm-line.atm_p2-l1 {
  font-size: 110%!important;
  margin-top: 2em;
  position: relative;
  bottom: 1em;
}

p.atm-line.atm_p2-l2 {
  text-indent: -1em;
  color: #888800;
  transform: rotate(-1deg);
  position: relative;
  bottom: .3em;
  text-align: center;
  font-weight: bold;
}

p.atm-line.atm_p2-l3 {
  transform: rotate(3deg) translateY(0.5em);
  text-align: center;
  border-bottom: 1px dotted;
  display: inline-block;
  position: relative;
  left: 14%;
  bottom: 0.4em;
}

span.atm-bigger {
  font-size: 33px !important;
}

span.atm-bigger2 {
  font-size: 21px !important;
  text-transform: uppercase;
}

p.atm-line.atm_p2-l4 {
  font-family: sans-serif !important;
  line-height: 1.3;
}

p.atm-line.atm_p2-l5 {
  transform: translateY(-0.5em);
  text-indent: 2em;
  font-style: italic;
}

p.atm-line.atm_p2-l6 {
  font-size: 43px !important;
  font-weight: 900;
  line-height: .5;
  text-indent: -.5em;
}

p.atm-line.atm_p2-l7 {
  transform: rotate(-2deg);
  position: relative;
  left: 9%;
  z-index: 1000;
  bottom: 0.2em;
}

span.atm-bigger3 {
  text-transform: uppercase;
  transform: rotate(6deg);
  font-size: 115%!important;
  line-height: .2;
  font-family: sans-serif !important;
  color: #ff6a13;
  text-indent: 3em;
  text-decoration: underline;
}

p.atm-line.atm_p2-l8 {
  position: relative;
  left: 6.4em;
  top: 2.5em;
  margin-bottom: 12em;
  font-size: 18px!important;
  font-weight: bold;
  max-width: 65%;
  font-family: monospace !important;
  text-align: right;
}

.atm-section {
  padding-bottom: 10em;
}

span.atm-jar1 {
    position: relative;
    top: 3px;
}

span.atm-jar2 {
    position: relative;
    left: .5em;
}

span.atm-jar3 {
    position: relative;
    top: .6em;
    left: -.4em;
}
</style>