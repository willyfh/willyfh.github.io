;(function () {
	
	'use strict';
	var loaded = 0;
	var initialLimit = 8;
	var limit  = 9;
	var sum = 0;
	var portfolios = [];
	var initPortfolio = function(){
		$.ajax({
		  url: 'data/portfolio.json',
		  dataType: 'json',
		  success: function (response) {
			portfolios = response.data;
			sum = portfolios.length;
			for (var i = loaded; i<loaded+initialLimit && i < sum; i++){
				var html = '<div class="col-md-4 text-center">';
				html+= '<a href="';
				html+= portfolios[i].url;
				html+= '" class="work" style="background-image: url(';
				html+= portfolios[i].img;
				html+= ');">';
				html+= '<div class="desc">';
				html+= '<h3>'+portfolios[i].title+'</h3>';
				html+= '<span>'+portfolios[i].desc+'</span>';
				html+= '</div></a></div>';
				$('.load-more').before(html);				
			}
			loaded = i;
			if (loaded>=sum){
				$('.load-more').hide();
			}
		  }
		});
			
	};
	var loadPortfolio = function(){
		$('.load-more').on('click', function(event){		
			for (var i = loaded; i<loaded+limit && i < sum; i++){
				var html = '<div class="col-md-4 text-center">';
				html+= '<a href="';
				html+= portfolios[i].url;
				html+= '" class="work" style="background-image: url(';
				html+= portfolios[i].img;
				html+= ');">';
				html+= '<div class="desc">';
				html+= '<h3>'+portfolios[i].title+'</h3>';
				html+= '<span>'+portfolios[i].desc+'</span>';
				html+= '</div></a></div>';
				$('.load-more').before(html);
			}
			loaded = i;
			if (loaded>=sum){
				$('.load-more').hide();
			}
			event.preventDefault();
		});

	};
	$(function(){
		initPortfolio();
        loadPortfolio();
	});


}());