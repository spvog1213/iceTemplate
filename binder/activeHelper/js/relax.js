document.addEventListener('DOMContentLoaded', () => {
	const video = getEl('#video1')[0];
	const items = getEl('.js-item');
	const bigT = getEl('.js-big_T')[0];
	const mainPage = getEl('.js-mainPage')[0];
	const startPage = getEl('.js-startPage')[0];
	const sourec = video.getEl('source')[0];
	const home = getEl('.js-home')[0];
	const play = getEl('.js-play')[0];
	const stop = getEl('.js-stop')[0];
	let index;

	addHoverEvent(home.DOM);
	addHoverEvent(play.DOM);
	addHoverEvent(stop.DOM);

	items.forEach(function (item, idx) {
		addHoverEvent(item.DOM);
		item.addEvent('click', function () {
			const dataitem = item.attr('data-item');
			if (dataitem == 'eye') {
				bigT.DOM.innerHTML = '눈';
			} else if (dataitem == 'neck') {
				bigT.DOM.innerHTML = '목';
			} else {
				bigT.DOM.innerHTML = '어깨';
			}
			sourec.attr('src', 'images/relax/' + dataitem + '.mp4');
			video.DOM.load();
			index = idx + 1;
			mainPage.addClass('sports' + index, 'on');
			startPage.addClass('hide');
		});
	});

	home.addEvent('click', function () {
		video.DOM.pause();
		video.DOM.currentTime = 0;

		mainPage.removeClass('sports' + index, 'on');
		startPage.removeClass('hide');
		play.removeClass('pause');
	});


	play.addEvent('click', function () {
		if (play.DOM.classList.contains('pause')) {
			play.removeClass('pause');
			video.DOM.pause();
		} else {
			play.addClass('pause');
			video.DOM.play();
		}
	});


	stop.addEvent('click', function () {
		stop_video();
	});

	video.addEvent('ended', function () {
		stop_video();
	});

	function stop_video() {
		video.DOM.pause();
		video.DOM.currentTime = 0;
		play.removeClass('pause');
	};
}); // end