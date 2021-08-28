---
title: "The Things We Orbit"
date: "2015-05-25"
layout: '../../layouts/BlogPost.astro'
categories: 
  - "design"
  - "micahs-favorite"
  - "photo"
  - "poem"
  - "typography"
---

<div id="week-24-bg">
  <img src="/assets/images/Week-24.jpg" alt="">
  <img src="/assets/images/Week-24a.jpg" alt="">
  <div class="spacer"></div>
  <p>steady glow of the moon
  <br />veiled by clouds of tonight
  <br />you are how I feel</p>
  <br>
  <p>do you even notice us crowded poets
  <br />slaving to describe you
  <br />in ways abstract and beautiful
  <br />so recent our arrival
  <br />and the vapors of our ecosystem
  <br />not the only clouds
  <br />over our heads
  <br />we too go largely unnoticed
  <br />except by the things we orbit
  <br />the universe is us
  <br />and let us never forget
  <br />as we pen our sonnets about the stars
  <br />that beautiful as the night is
  <br />between the clouds
  <br />there is even more starlight during the day
  <br />although it too
  <br />must sometimes struggle
  <br />through the clouds</p>
  <div class="spacer"></div>
</div>

<p class="caption">Original source photo credit <a href="http://flickr.com/kylerichner" target="_blank" rel="noopener">Kyle Richner</a> via <a href="http://unsplash.com" target="_blank" rel="noopener">Unsplash.com</a></p>


<style>
  #week-24-bg {
    background: url("images/Week-24.jpg");
    color: #fff;
    background-size: cover;
    background-repeat: no-repeat;
    transition: background 4s ease;
    position: relative;
    overflow: hidden;
    width: 100vw;
    margin-left: calc(50% - 50vw);
  }

  @media (min-width: 640px) {
      #week-24-bg {
      width: 100%;
      margin-left: 0;
    }
  }

  @media (min-width: 1080px) {
    #week-24-bg {
      width: calc(100% + 20rem);
      margin-left: -10rem;
      min-height: 66rem;
    }
  }

  #week-24-bg p {
    font-style: italic;
    line-height: 1.6;
    color: #fff;
    opacity: .8;
    padding: 0 2rem;
  }

  #week-24-bg img {
    transition: opacity 2s ease;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    width: 100%;
    min-height: 100%;
    margin: 0;
    padding: 0;
    object-fit: cover;
    object-position: bottom right;
  }

  #week-24-bg img + img {
    z-index: -2;
  }

  .spacer {
    width: 100%;
    margin: 2rem 0;
  }

  .hideme {
      height: 0;
      padding: 0px;
      margin: 0px;
      visibility: invisible;
      position: relative;
      float: right;
  }

  #week-24-bg:hover img:first-of-type {
    opacity: 0;
  }
</style>