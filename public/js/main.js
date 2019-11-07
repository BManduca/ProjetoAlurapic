// public/js/main.js

/*
	a função module recebe dois parâmetros, onde o primeiro é o nome do modulo que desejamos 
	criar e o segundo é um array com todos os módulos de que o nosso módulo em si vai depender

	adicionamos o novo modulo 'minhasDiretivas' como dependência do módulo 
	principal da nossa aplicação.

	a equipe que desenvolveu o angular criou um modulo que irá 'atacar' justamente o problema
	de o efeito de fade já estar sendo carregado diretamente e não aguardando o filtro
	como esperado, a idéia é aplicar a classe painel-animado apenas no(s) elemento(s) que
	sairem(leave) da lista, ou seja, para o(s) elemento(s) que não atenderem o critério do 
	filtro utilizado.

	-> algumas diretivas do Angular passam a adicionar ou remover classes automaticamente 
	sem a nossa ciência, são as classes definidas pelo Angular, aquel pode lembrar 
	muito as pseudo classes do CSS3, um exemplo, é quando usamos a diretiva 
	ng-repeat e um dado elemento sai da lista...ele acaba ganhando a classe 
	ng-leave e quando está preste a sair o ng-leave-active.

*/

/*
	preparando as configurações... 

	poderiamos até criar um modulo exclusivo com as configurações das rotas da aplicação, mas 
	não é incomum essa configuração ser feita diretamente no módulo principal da aplicação
	através do serviço $routeProvider, que obtemos através do sistema de injeção de dependências
	do Angular..dentro da função config...
*/


/* 
	quando o usuário acessar determinada rota, será enviado para ele uma view
	parcial(templateUrl) e tambem indicamos qual é o controlador(controller) para
	aquela parcial. Definindo o controller, da uma certa flexibilidade para usar
	uma mesma parcial com controllers diferentes...

	a view parcial principal.html pode ser exibida, porém, fica bem estranho com o uso
	do #, mas e uma alternativa bastante usada, para que seja possível favoritas
	em seu navegador a parcial...mas ainda assim, quando alguem abrir o endereço, quem 
	será carregada é a view principal index.html, que buscará a parcial através 
	do sistema de rotas do Angular.

	Com o advento do HTML5, foi criada a History API, que permite alcançar
	um melhor resultado, sem o #.

	o History API é suportado pelo Angular e pode ser usado atraves 
	do serviço $locationProvider, que pode ser acionado através da injeção
	de dependencia..

	so ocorre a injeção de depedência, através da inserção
	da diretiva ngRoute.

	a principal.html ao ser acionada, vai ser inserida dentro do
	ng-view, presente no index.html
*/
angular.module('alurapic', ['minhasDiretivas','ngAnimate','ngRoute'])
.config(function($routeProvider, $locationProvider){
	//o locationProvider ele da o start ou aciona o modulo html5 de rotas no angular

	/* 
		com a chegada do HTML5, pode omitir o #, porém, 
		po back tem que estar preparado

		como essas 'partials' não tem nem head nem body..
		elas não serão exibidas corretamente... Desta forma, 
		faremos URL's de mentirinha...no sistema de rotas do Angular..
		essas url's não acessam um recurso diretamente no servidor, elas
		são processadas no lado do cliente através do Angular, que traduz aquela 
		URL em uma chamada AJAX que irá carregar a parcial para a URL em 
		questão.. Como é o Angular que faz esse processo, é ele que se 
		encarrega de incluir a parcial dentro da diretiva ng-vire presente em 
		index.html

	*/
	$locationProvider.html5Mode(true);

	//fotos -> equivale a principal.html
	$routeProvider.when('/fotos',{
		templateUrl: 'partials/principal.html',
		controller: 'FotosController'
	});

	//foto no singular...
	$routeProvider.when('/fotos/new', {
		/* associação de FotoController à view parcial foto.html */
		templateUrl: 'partials/foto.html',
		controller: 'FotoController'
	});

	//ao inserir qualquer endereço inexistente...'jogar' o usuario para a pagina fotos(index)
	$routeProvider.otherwise({redirectTo: '/fotos'});
});