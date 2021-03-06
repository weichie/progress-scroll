# Progress Scroll
A progress bar that shows you how far you are down a page. When reading an article for example. I created this project in plain Javascript, so there is no need to require jQuery at the moment. I will upload a jUqery version later on.

[View demo](https://weichieprojects.com/f/progress_scroll)

![Progress Scroll](https://www.weichieprojects.com/f/scroll_demo.jpg)

# Installation
You can choose to either download this repo and import the progress-scroll.js file in your project yourself, or use NPM to install it.

**NPM**\
```npm install weichie-progress-scroll```

```import { ProgressScroll } from 'weichie-progress-scroll';```

# Usage
Call ProgressScroll() wherever you like. The function requires 2 parameters, a *scroll_bar* that will be your custom element you want to use as scroll indicator. The *article* will be used to measure the height of the article you're reading.

**Javascript**
```javascript
ProgressScroll({
   scroll_bar: document.getElementById('progress-scroll'),
   article: document.getElementsByClassName('container')
});
```
**jQuery**
```javascript
ProgressScroll({
   scroll_bar: $('#progress-scroll'),
   article: $('.container')
});
```

# Options
Parameter | Info
------------ | -------------
**scroll_bar** | The element you want to use as indicator
**article** | The article you want to keep track of