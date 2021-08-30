---
title: "Two Things"
date: "2015-08-24"
layout: "../../layouts/BlogPost.astro"
number: 37
categories: 
  - "interactive"
  - "poem"
---

<div class="eyem-container">
  <br />
  <p class="eyem-1 checkone"><i>Everyone you ever meet</i></p>
  <p class="blinker">...<span class="blinker-bar">|</span></p>
  <br />
</div>

<script
  src="https://code.jquery.com/jquery-3.6.0.min.js"
  integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
  crossorigin="anonymous">
</script>

<script>
$(document).ready(function(){
	$('.blinker').click(function(){
		if ($('.eyem-1').hasClass('checkone')){ 
			$('.eyem-1').append('<br><span class="eyem-fadein">has</span><span class="eyem-fadein fadein-2"> experienced <span class="eyem-fadein fadein-3">things <span class="eyem-fadein fadein-4">you <span class="eyem-fadein fadein-5">have <span class="eyem-fadein fadein-6">not</span>').addClass('checktwo').removeClass('checkone');
			$('.blinker').fadeOut(0).delay(100).fadeIn(0);
		} else if ($('.eyem-1').hasClass('checktwo')){ 
			$('.eyem-1').append('<br><span class="eyem-fadein">and</span><span class="eyem-fadein fadein-2"> has</span><span class="eyem-fadein fadein-3"> felt</span><span class="eyem-fadein fadein-4"> ways</span><span class="eyem-fadein fadein-5"> you</span><span class="eyem-fadein fadein-6"> also</span><span class="eyem-fadein fadein-7"> have </span><span class="eyem-fadein fadein-8">felt.</span>').addClass('checkthree').removeClass('checktwo');
			$('.blinker').fadeOut(0).delay(1100).fadeIn(0);
		} else if ($('.eyem-1').hasClass('checkthree')){ 
			$('.eyem-1').append('<span class="eyem-fadein"><br><br>To </span><span class="eyem-fadein fadein-2">put </span><span class="eyem-fadein fadein-3">it </span><span class="eyem-fadein fadein-4">another </span><span class="eyem-fadein fadein-5">way,</span>').addClass('checkfour').removeClass('checkthree');
			$('.blinker').fadeOut(0).delay(900).fadeIn(0);
		} else if ($('.eyem-1').hasClass('checkfour')){ 
			$('.eyem-1').append('<br><span class="eyem-fadein">there </span><span class="eyem-fadein fadein-2">are </span><span class="eyem-fadein fadein-3">at </span><span class="eyem-fadein fadein-4">least</span>').addClass('checkfive').removeClass('checkfour');	
			$('.blinker').fadeOut(0).delay(800).fadeIn(0);
		} else if ($('.eyem-1').hasClass('checkfive')){ 
			$('.eyem-1').append('<br><span class="eyem-fadein">two </span><span class="eyem-fadein fadein-2">amazing </span><span class="eyem-fadein fadein-3">things</span>').addClass('checksix').removeClass('checkfive');	
			$('.blinker').fadeOut(0).delay(700).fadeIn(0);
		} else if ($('.eyem-1').hasClass('checksix')){ 
			$('.eyem-1').append('<br><span class="eyem-fadein">about<br></span>').addClass('checkseven').removeClass('checksix');
			$('.blinker').fadeOut(0).delay(500).fadeIn(0);
		} else if ($('.eyem-1').hasClass('checkseven')){ 
			$('.eyem-1').append('<br><span class="eyem-fadein"><i>everyone</i></span><span class="eyem-fadein fadein-2"><i> you </i></span><span class="eyem-fadein fadein-3"><i>ever </i></span><span class="eyem-fadein fadein-4"><i>meet</i> <br></span>').addClass('checkone').removeClass('checkseven');		
			$('.blinker').fadeOut(0).delay(800).fadeIn(0);
		};
	});
});
</script>