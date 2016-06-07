app.controller('clientCtrl', ['$scope', function($scope) {

	$scope.clients = [
		{
			"id" : "1",
			"nom": "Google",
			"logo":'img/google.png',
		},

		{
			"id": "2",
			"nom": "Microsoft",
			"logo" : 'images/microsoft.jpg', 
		},

		{
			"id": "3",
			"nom": "Carrefour",
			"logo" : 'images/carrefour.png', 
		},

		{
			"id": "4",
			"nom": "Mojang",
			"logo" : 'images/mojang.png', 
		},

	];
	
}]);

app.controller('userCtrl', ['$scope', '$http', function($scope,$http) {
	$scope.nomUser = '';
	$scope.prenomUser = '';
	$scope.genreUser = '' ;
	$scope.mailUser = '';
	$scope.dateNaissanceUser = undefined;
	$scope.mailUser = '';

	// $http({
	// 	method: 'GET',
	// 	url: 'bd.json'
	// })
	// .success(function(data, status, headers, config){
	// 	$scope.prenomUser = data.user.nom;
	// })
	// .error(function(data, status, headers, config){console.log(data, status, headers)});

}]);

app.controller('companyCtrl', ['$scope', function($scope){
	$scope.nomSociete = '';
	$scope.numeroSociete = '';
	$scope.nbEmploye = '';
	$scope.emailSociete = '';
	$scope.localisationSociete = '';
}]);

app.controller('descriptionCtrl', ['$scope', function($scope) {
	$scope.afficherDescription = false;
}]);