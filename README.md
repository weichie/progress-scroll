# progress-scroll
A progress bar that shows you how far you are down a page. When reading an article for example. I created this project in plain Javascript, so there is no need to require jQuery at the moment. I will upload a jUqery version later on.

#installation
You can choose to either download this repo and import the progress-scroll.js file in your project yourself, or use NPM to install it.

* NPM *
```npm install weichie-progress-scroll```

#usage
Call the progress_scroll function wherever you like, like this:
*Javascript*
```javascript
progress_scroll({
	scroll_bar: document.getElementById('progress-scroll'),
	article: document.getElementsByClassName('container')
});
```
*jQuery*
```javascript
progress_scroll({
	scroll_bar: $('#progress-scroll'),
	article: $('.container')
});
```