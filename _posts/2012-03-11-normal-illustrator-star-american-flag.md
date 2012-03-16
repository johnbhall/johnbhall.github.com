---
layout: default
title: "Creating a Normal Star in Adobe Illustrator, American Flag Style"
---

{{ page.title }}
================

by <a href="/" rel="author">John B. Hall</a><br />
March 11, 2012

With the Star Tool in Adobe Illustrator, the shape of a star can be modified by specifying the number of star points, an outer radius, and an inner radius. Illustrator's default 5-point star is pudgy; to make a normal star like the one on the American flag, Radius 1 and Radius 2 must be in such a proportion that the edges of each point are visually in line with the edges of the points across the star.

<div class="osx-window pudgy-star">
  <img src="/post-assets/illustrator-star/pudgy-star-bar.jpg">
  <canvas id="pudgy_star" width="190" height="181">
    <img src="/post-assets/illustrator-star/pudgy-star.jpg" class="canvas-backup">
  </canvas>
</div>

<div class="osx-window normal-star">
  <img src="/post-assets/illustrator-star/normal-star-bar.jpg">
  <canvas id="normal_star" width="190" height="181">
    <img src="/post-assets/illustrator-star/normal-star.jpg" class="canvas-backup">
  </canvas>
</div>

Formula for Calculating Radius
------------------------------

    inner_radius = outer_radius * .382

For a star with an outer radius of 100, the inner radius would be 38.2. The dialog to specify these values appears when you select the Star Tool and click, not click-and-drag.

<img src="/post-assets/illustrator-star/radii.jpg" class="osx-window radii-star">
<img src="/post-assets/illustrator-star/illustrator-star-dialog.jpg" class="osx-window">

Proof
-----

To calculate the proportion of Radius 2 to Radius 1, I sought to determine the 3 angles of the gray triangle below so I could then determine the proportion of the sides:

<img src="/post-assets/illustrator-star/proof.jpg" class="osx-window">

- to start, we know that _angle a_ is 36&deg; because it is one tenth of a 360&deg; circle (one half of one fifth)
- for American stars, non-adjacent star points can be connected with a line, so we can draw out this line to treat the gray triangle as two right triangles
- we know two of the angles in the bottom right triangle, so _angle b_ must be 54&deg;
- _angle f_ is opposite _angle b_, so it is also 54&deg; as is _angle e_
- _angle c_ is 72&deg; since it is supplementary with the combination of _angle e_ and _angle f_.
- _angle d_ = 180&deg; - _angle a_ - _angle b_ - _angle c_ = 18&deg;
- finally, now that we know the all the angles of the gray triangle, we can use trigonometry to determine that if Radius 1 is 100, Radius 2 would be 38.2

<script>
  var pudgy_star_canvas = document.getElementById("pudgy_star"),
      normal_star_canvas = document.getElementById("normal_star");
  if (pudgy_star_canvas.getContext){
    drawPudgyStar();
    drawNormalStar();
  }
  
  function drawPudgyStar() {
    var context = pudgy_star_canvas.getContext('2d');
    context.lineWidth = 2;
    context.translate(95, 0)
    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(29, 60);
    context.lineTo(95, 69);
    context.lineTo(48, 116);
    context.lineTo(59, 181);
    context.lineTo(0, 150);
    context.lineTo(-59, 181);
    context.lineTo(-48, 116);
    context.lineTo(-95, 69);
    context.lineTo(-29, 60);
    context.lineTo(0, 0);
    context.stroke();
    context.closePath();
  }
  
  function drawNormalStar() {
    var context = normal_star_canvas.getContext('2d');
    context.lineWidth = 2;
    context.translate(95, 0)
    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(22, 69);
    context.lineTo(95, 69);
    context.lineTo(36, 112);
    context.lineTo(59, 181);
    context.lineTo(0, 138);
    context.lineTo(-59, 181);
    context.lineTo(-36, 112);
    context.lineTo(-95, 69);
    context.lineTo(-22, 69);
    context.lineTo(0, 0);
    context.stroke();
    context.closePath();
  }
</script>
