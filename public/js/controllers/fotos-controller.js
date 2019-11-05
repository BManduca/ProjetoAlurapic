/*
	aqui foi chamado novamente o angular.module, porém, dessa vez não foi passado
	o segundo parâmetro, que é o array vazio...

	quando fazemos isso queremos indicar que estamos acessando o módulo e não 
	criando um novo

	em seguida, é encadeado uma chamada á função controller que recebe dois parâmetros
	 -> O primeiro é o nome do controller que estamos criando na convenção PascalCase e o segundo
	 uma função que define o controller.

	 o angular disponibiliza uma ponte de ligação entre o controller e a view, essa ponte se
	 chama $scope e tudo que for "pendurado" neste objeto será enxergado pela view

	 ou pode ser um controller de parte do seu DOM (Document Object Module).

	 O angular tem um termo apropriado para essa associação de um dado disponibilizado por um controller
	 para a view.

	 $http -> serviço do angular responsável por fazer requisições Ajax.

	 Da mesma maneira que pedimos ao Angular a criação de um $scope podemos pedir o $http 
	 recebendo-o como parâmetro na função que define FotosController

	 Esse sistema de "pedirmos" ao Angular o que precisamos é chamado de 
	 injeção de dependências. Nós gritamos "eu preciso de um $http!" e o 
	 framework se vira para nos entregar um.
*/

angular.module('alurapic').controller('FotosController',function($scope,$http){
	//definição do controller

	/*
		resolvendo o problema de multiplas propriedades dentro do $scope
		sendo assim, fazemos uma lista utilizando um array
	*/
	$scope.fotos = [];
	$scope.filtro = '';

	/*
		para obter dados como mencionado, sabemos que podemos usar a função get..
		Tecnicamente falando, o que $http.get retorna é uma promise

		caso algo der errado, como por exemplo a url não existir ou servidor cair....podemos
		encadear uma chamada à função .catch que nos fornecerá um objeto com
		informações do suposto erro que ocorreu..

		var promise = $http.get('/v1/fotos');
	*/

	$http.get('/v1/fotos')
	/* 
		aqui podemos ainda usar de diversas formas..
		como por exemplo:
		promise.then(function(retorno) {

			ou omitindo o promise..

		.then(function(retorno) {

			ou ainda..podemos usar o success e o error... com o success, 
			nao precisa retornar o retorno.data, como demonstramos a baixo...
	*/
	.success(function(retorno){
		console.log(retorno);
		$scope.fotos = retorno; //nao precisa ser retorno.data;
	})
	//.catch(function(erro){
	.error(function(erro){
		console.log(erro);
	});

});