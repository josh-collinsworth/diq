---
title: "Before I Can Give You My Heart"
date: "2015-07-27"
layout: "../../layouts/BlogPost.astro"
number: 33
categories: 
  - "animation"
  - "humorous"
  - "illustration"
  - "joshs-favorite"
  - "poem"
---

<div id="parallax-holder" aria-hidden="true" role="img" alt="">
  <img class="heart-bubble" src="/assets/images/heartbubble.png" alt="" /><br /><img class="zom-layer-one" src="/assets/images/Front-Layer.png" alt="" /><br /><img class="zom-layer-two" src="/assets/images/Second-Layer.png" alt="" /><br /><img class="zom-layer-three" src="/assets/images/Third-Layer.png" alt="" />

  <h4 class="braintext btx1">Don't let them eat your brains</h4>
  <h4 class="braintext btx2">before I can give you my heart.</h4>
</div>

<p class="caption">(Refresh your browser to restart the animation.)</p>

<p>It was your brown eyes<br />that first caught my attention,<br />and the symphonies of your voice<br />that held me there,<br />and I hope you won’t<br />take it personal<br />that I ran away.</p>
<p>It’s not fear of commitment<br />nor is there some other girl;<br />truth be told,<br />I was worried about my brains.<br />You see it’s just really bad timing,<br />what with the swarm of zombies<br />and the collapse of all civilization.<br />If you have not been eaten yet<br />then somewhere beneath the apocalypse moon<br />maybe you too are looking skyward<br />and thinking of what almost was.</p>
<p>Don’t let them eat your brains<br />before I can give you my heart.</p>


<style>
#parallax-holder {
    margin: 0;
    padding: 0;
    width: 100vw;
    margin-left: calc(50% - 50vw);
    height: 52vw;
    padding: 26% 0;
    background-color: #15153E;
    background-image: url('/assets/images/Back-Layer.png');
    background-size: 100%;
    background-position: top;
    background-repeat: no-repeat;
    overflow: hidden;
    background-attachment: fixed;
    position: relative;
}

@media (min-width: 960px) {
  #parallax-holder {
    height: 1px;
    width: 100%;
    margin-left: 0;
    transform: scale(1.4);
    transform-origin: top;
    margin-bottom: 8rem;
  }
}

@media (min-width: 1200px) {
  #parallax-holder {
    transform: scale(1.6);
    margin-bottom: 13rem;
  }
}

@media (min-width: 1600px) {
  #parallax-holder {
    transform: scale(1.8);
    margin-bottom: 16rem;
  }
}

.zom-layer-three, .zom-layer-two, .zom-layer-one {
    margin: 0;
    padding: 0;
    padding-top: 100%;
    width: 100%;
    max-width: 100%;
    height: auto;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}

.zom-layer-three {
    z-index: 1;
    margin-top: 2%;
}

.zom-layer-two {
    z-index: 2;
    margin-top: 1%;
}

.zom-layer-one {
    z-index: 3;
    margin-top: -4%;
}

.heart-bubble {
    z-index: 4;
    position: absolute;
    width: 8%;
    height: auto;
    margin: 0;
    top: 30%;
    left: 30%;
    animation: pulse 2.5s cubic-bezier(.53,.01,.26,1) infinite;
    animation-direction: linear;
}

.zom-layer-three {
    animation: slowest-rise 4s cubic-bezier(.53,.01,.26,1);
    animation-fill-mode: forwards;
    animation-delay: 2s;
}

.zom-layer-two {
    animation: slowest-rise 5s cubic-bezier(.53,.01,.26,1);
    animation-fill-mode: forwards;
    animation-delay: 1s;
}

.zom-layer-one {
    animation: slowest-rise 6s cubic-bezier(.53,.01,.26,1);
    animation-fill-mode: forwards;
}

.braintext {
    color: #fff;
    position: absolute;
    right: 10%;
    font-size: 18px;
    z-index: 5;
    font-weight: bold;
    font-family: "Courier New", Courier, monospace!important;
    animation: textappear 3s ease;
    opacity: 0;
    animation-fill-mode: forwards;
    background-color: rgba(0,0,0,.4);
}

@media (min-width: 960px) {
  .braintext {
    font-size: 0.9rem;
  }
}

.btx1 {
    bottom: 60px;
    -webkit-animation-delay: 7s;
    animation-delay: 7s;
}

.btx2 {
    bottom: 30px;
    -webkit-animation-delay: 9s;
    animation-delay: 9s;
}

@keyframes slowest-rise {
    0% {
        padding-top: 100%;
    }
    100% {
        padding-top: 0%;
    }
}

@keyframes pulse {
    0% {
        transform: scale(1);
        opacity: .8;
    }
    50% {
        transform: scale(1.2);
        opacity: 1;
    }
    100% {
        transform: scale(1);
        opacity: .8;
    }
}

@keyframes textappear {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}


</style>