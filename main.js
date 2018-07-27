(function(doc, DOM){
	'use strict';

	function app(){
		return {
			init: function(){
				this.companyInfo();
			},
			companyInfo: function (){
				var ajax = new XMLHttpRequest();
				ajax.open('GET', '/company.json', true);
				ajax.send();
				ajax.addEventListener('readystatechange', getCompanyInfo, false)
			}
		};
	}

	app().init();

})(document, window.DOM)