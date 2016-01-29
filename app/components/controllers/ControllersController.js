var app = angular.module('angularPlayground');

app.controller('ControllersController', ControllersController);


function ControllersController(){
    this.friends = ['Joey', 'Chandler', 'Monica', 'Phebes', 'Ross & Rachel'];
	this.controllersStatus = 'Working';
    this.addFriend = function(friend) {
        this.friends.push(friend);
        this.newFriend = "";
    }
}