---
title: "The Third Draft"
date: "2015-05-31"
layout: '../../layouts/BlogPost.astro'
categories: 
  - "humorous"
  - "illustration"
  - "joshs-favorite"
  - "micahs-favorite"
  - "poem"
---

<div class="the-third-draft-images">
  <img src="/assets/images/Week-25-a.jpg" alt="" />
  <img src="/assets/images/Week-25-b.jpg" alt="" />
  <img src="/assets/images/Week-25-c.jpg" alt="" />
  <img src="/assets/images/Week-25-d.jpg" alt="" />
  <img src="/assets/images/Week-25-e.jpg" alt="" />
</div>


The first draft is the most fun.

The second draft is when it all starts to come together.

The third draft is the hardest because this is the draft that has to get shorter.

But it’s all so necessary you protest to yourself. It will all be ruined if every detail isn’t in place.

Yet sometimes I am guilty of lingering too long and there is power in brevity so maybe I will leave out everything after the


<style>
.the-third-draft-images {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
}

.the-third-draft-images img {
  width: 100%;
  margin: 0;
}

@media (min-width: 960px) {
  .the-third-draft-images {
    width: calc(100% + 20rem);
    margin-left: -10rem;
  }
  
  .the-third-draft-images img:last-of-type {
    margin-left: 50%;
  }
}

@media (min-width: 1200px) {
  .the-third-draft-images {
    width: calc(100% + 40rem);
    margin-left: -20rem;
      grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));

  }
}
</style>