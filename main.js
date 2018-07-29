(function( $, win){
	'use strict';
	

	var app = (function () {
		return {
			init: function init(){
				console.log('app init');
				this.companyInfo();
				this.initEvents();
			},
			
				companyInfo: function companyInfo(){
				var ajax = new XMLHttpRequest();
				ajax.open('GET', 'company.json', true);
				ajax.send();
				ajax.addEventListener('readystatechange', this.getCompanyInfo, false);
			},


			isReady: function isReady(){
				return this.readyState === 4 && this.status === 200;
			},

			initEvents: function initEvents(){
				$('[data-js="form-register"]').on('submit', this.handleSubmit);
			},

			handleSubmit: function handleSubmit(e){
				e.preventDefault();
				console.log('submit');
				var $tableCar = $('[data-js="table-car"]').get();
				$tableCar.appendChild(app.createNewCar());
			},

			createNewCar: function createNewCar(){

				var $fragment = document.createDocumentFragment();
				var $tr = document.createElement('tr');
				var $tdImage = document.createElement('td');
				var $image = document.createElement('img');
				var $tdModel = document.createElement('td');
				var $tdYear = document.createElement('td');
				var $tdPlate = document.createElement('td');
				var $tdColor = document.createElement('td');

				$image.src = $('[data-js="image"]').get().value;
				$tdImage.appendChild($image);

				$tdModel.textContent = $('[data-js="model"]').get().value;
				$tdYear.textContent = $('[data-js="year"]').get().value;
				$tdPlate.textContent = $('[data-js="plate"]').get().value;
				$tdColor.textContent = $('[data-js="color"]').get().value;

				$tr.appendChild($tdImage);
				$tr.appendChild($tdModel);
				$tr.appendChild($tdYear);
				$tr.appendChild($tdPlate);
				$tr.appendChild($tdColor);

				return $fragment.appendChild($tr);
			},

			getCompanyInfo: function getCompanyInfo(){
				if( !app.isReady.call(this))
					return;

					var data = JSON.parse(this.responseText);
					var $companyName = $('[data-js="company-nome"]').get();
					var $companyFone = $('[data-js="company-fone"]').get();
					$companyName.textContent = data.name;
					$companyFone.textContent = data.phone;
					
			},

			


		};
	})();

	app.init();

})(window.DOM)