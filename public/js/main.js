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
*/
angular.module('alurapic', ['minhasDiretivas','ngAnimate','ngRoute'])
	.config(function(){
		$routeProvider.when('/fotos',{
			templateUrl: 'partials/principal.html',
			controller: 'fotosController'
		});
	});