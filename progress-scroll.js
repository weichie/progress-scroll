$(function(){
	console.log('loaded.');
	progress_scroll({
		element: $('#progress-scroll')
	});
});

progress_scroll = ({element = ''}) => {
	window.addEventListener('scroll', function(e){
		let fromTop = window.scrollY | 0;
		let fromBottom = window.scrollY + window.innerHeight | 0;

		if(element.length){
			console.log('found!');
			// console.log('found');
		}
	});
}