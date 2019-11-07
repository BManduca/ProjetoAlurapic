/*
	o $scope disponibiliza a propriedade foto, um objeto JS, 
	porém, sem qualquer propriedade. 

	Mas como usamos a diretiva ng-model, não precisa se preocupar, a 
	propriedade indicada será criada automaticamente no objeto, sendo assim, se 
	usarmos ng-model="foto.titulo", automaticamente o Angular criará em 
	$scope.foto a propriedade titulo, inclusive atribuindo o valor
	inserido pelo user
*/

angular.module('alurapic')
	.controller('FotoController', function($scope){
		$scope.foto = {};

		$scope.submeter = function(){
			console.log($scope.foto);
		};

	});