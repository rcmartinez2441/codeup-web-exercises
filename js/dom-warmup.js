(function () {
	'use strict';

	$('button').click(
		function (e) {

			e.preventDefault();
			let inputValue = $('input').val();
			$('#post-container')
				.addClass('container row d-flex justify-content-center m-auto')
				.append(
					`<div id="for-text" class="col-12 text-center"></div> <br>
					<img src="assets/dj-khaled.gif" alt="dj-khaled" class="col-12" height="300px"/>`);
			$('#for-text')
				.text(inputValue)
				.css({
					'border': 'solid 2px black',
					'border-radius': '5px',
					'font-size': '40px',
					'font-weight': 'bold',
					'color': 'white',
					'background':'#ff449f'
				});


		});

})();