# Slider-module_nativeJS
  This is a simple code for slider on your site. It provides switching between slides(by clicking on arrow block) and dots to display the current slide. Any changing is up to you.
## Usage
  Your layout should contains next code structure:
```
  <div class="slider">
    <div class="slides-wrap">
      <!-- there are blocks with photo below -->
      <div class="slider-item">
        <img src="link-img1" alt="img1">
      </div>
      <div class="slider-item">
        <img src="link-img2" alt="img2">
      </div>
      <div class="slider-item">
        <img src="link-img3" alt="img3">
      </div>
      <div class="slider-item">
        <img src="link-img4" alt="img4">
      </div>
      <!-- after them there are photo switching blocks -->
      <div class="prev">
        <div class="arrow-left"></div>
      </div>
      <div class="next">
        <div class="arrow-right"></div>
      </div>
    </div>
    <!-- finally, block with dots -->
    <div class="slider-dots">
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
    </div>
  </div>
```
Next step - add slider.js to you project and import this module. Then just call a function with passing corresponding classes to it(in the appropriate order):
```
slider('slider-item', 'prev', 'next', 'slider-dots', 'dot')
```
The example has only four slides, but you can easily scale it by adding blocks with a photo and blocks with a dot (required), as much as necessary. 
