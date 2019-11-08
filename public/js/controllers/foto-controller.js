/*
	o $scope disponibiliza a propriedade foto, um objeto JS, 
	porém, sem qualquer propriedade. 

	Mas como usamos a diretiva ng-model, não precisa se preocupar, a 
	propriedade indicada será criada automaticamente no objeto, sendo assim, se 
	usarmos ng-model="foto.titulo", automaticamente o Angular criará em 
	$scope.foto a propriedade titulo, inclusive atribuindo o valor
	inserido pelo user

	mas ainda precisamos ter acesso ao ID da foto em FotoController para que 
	possamos buscá-la em nosso servidor. Existe um serviço especializado do 
	Angular que nos fornecerá este parâmetro, o $routeParams.
*/

angular.module('alurapic')
	.controller('FotoController', function($scope, $http, $routeParams){
		$scope.foto = {};
		$scope.mensagem = '';

		if ($routeParams.fotoId) {
			//buscando a foto no servidor
			$http.get('/v1/fotos/' + $routeParams.fotoId)
			.success(function(foto){
				$scope.foto = foto;
			})
			.error(function(){
				console.log(erro);
				$scope.mensagem = 'Não foi possível obter a foto!';
			});
		}

		$scope.submeter = function(){
			/*
				Ao considerarmos dados inválidos pelo Angular não são aplciados pelo formulário para
				po atributo relacionado em $scope, sendo assim, no momento do envio dos dados, 
				$scope.foto.titulo ficou vazio.

				para evitar que sejam submetido dados invalidos e uma foto seja cadastrada
				de forma indevida....e que a foto tambem fique em branco....
				basta consultarmos em nosso $scope o status do formulario com 
				a sintaxe $scope.formulario.$valid, assim estaremos acessando o formulario
				atraves do seu name e perguntando se é valido, consultando a propriedade
				$valid.
			*/

			if ($scope.formulario.$valid) {
				if ($routeParams.fotoId) {
					http.put('/v1/fotos/' + $scope.foto._id, $scope.foto)
					.success(function(){
						$scope.mensagem = 'Foto ' + $scope.foto.titulo + ' foi alterada';
					})
					.error(function(erro){
						console.log(erro);
						$scope.mensagem = 'Não foi possível alterar a foto ' + $scope.foto.titulo;
					});
				} else {
					$http.post('/v1/fotos/', $scope.foto)
					.success(function(){
						$scope.foto = {};
						$scope.mensagem = 'Foto cadastrada com sucesso!!';
					})
					.error(function(erro){
						console.log(erro);
						$scope.mensagem = 'Não foj possível cadastrar a foto!';
					})
				}
			}
		};
	});