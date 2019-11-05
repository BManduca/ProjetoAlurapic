angular.module('minhasDiretivas',[])
	.directive('meuPainel',function(){
		var ddo = {};
		/*
			nossa diretiva pode ser usada tanto como atributo quando elemento,
			adicionando em nosso DDO a propriedade restrict com valor "AE"

			uso da diretiva como elemento:
				<meuPainel></meuPainel>

			uso da diretiva como atributo, neste caso suamos uma div, adicionando a diretiva:
				<div meu-painel></div>

			por mais que o nome da diretiva esteja em camelCase, na marcação HTML é usado 
			hífen. Este é um padrão Angular que não pode ser deixado de lado, pois a diretiva
			não irá funcionar.

		*/
		ddo.restrict = "AE";
		ddo.transclude = true;

		/*
			criando um escopo isolado, para que cada diretiva tenha seu próprio 
			título e também, isso irá permitir que cada um tenha seus próprios dados...
			a diretiva pode ser reutilizada em qualquer lugar sem que bagunce o escopo pai
			onde está inserida.
		*/
		ddo.scope = {
			/*
				aqui, através do @ estamos copiando o valor como string do atributo titulo...
				adicionando a diretiva em nossa marcação

				porem quando o atributo presente na diretiva de marcação for igual ao nome da
				propriedade que guardara o valor, pode deixar apenas @
			*/
			titulo: '@'
		};

		/*
			após criar nossa primeira diretiva

			porém, vamos organizar a marcação dentro de um arquivo HTML:
			public/js/directives/meu-painel.html

			e apontamos para o arquivo HTML com a marcação da diretiva...
		*/
		ddo.templateUrl = 'js/directives/meu-painel.html';

		//retorno da nossa diretiva será um directive definition object (DDO)
		return ddo;
	});