exports.ProgressScroll = ({scroll_bar = '', article = ''}) => {
	window.addEventListener('scroll', () => {
		const fromTop = window.scrollY | 0;
		const fromBottom = window.scrollY + window.innerHeight | 0;

		if(scroll_bar !== null && article !== null){
			const article_start = article[0].offsetTop;
			const scrolled = ((fromTop - article_start) / (article[0].offsetHeight - window.innerHeight)) * 100;
			scroll_bar.style.width = `${(scrolled >= 0) ? scrolled : 0}%`;
		}
	});
}