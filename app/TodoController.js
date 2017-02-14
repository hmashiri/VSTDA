app.controller('TodoController', ['$scope', function( $scope )
{
	//set an empty array to store user inputs and selections.
	$scope.listOftodoItems = [];

	$scope.optionSelected = '1';


	$scope.addItems = function()
	{
        $scope.listOftodoItems.push(
        {
			"priority": $scope.optionSelected,
			"description": $scope.userInput,
		});

      	$scope.userInput=null;
    };


    $scope.remove = function( todo )
    {
    	var index = $scope.listOftodoItems.indexOf(todo);
    	$scope.listOftodoItems.splice( index, 1);
    };

}]);
