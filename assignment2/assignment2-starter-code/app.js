(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var tobuy = this;

  tobuy.shoppingList = ShoppingListCheckOffService.getItems();
  tobuy.removeItem = function (itemIndex) {
    ShoppingListCheckOffService.removeItem(itemIndex);
  };

  }
function ShoppingListCheckOffService() {
    var service = this;
    var shoppingList1 = [];
    // List of shopping items
    var shoppingList = [
      {
        name: "Milk",
        quantity: "2"
      },
      {
        name: "Donuts",
        quantity: "200"
      },
      {
        name: "Cookies",
        quantity: "300"
      },
      {
        name: "Chocolate",
        quantity: "5"
      },
      {
        name: "Drinks",
        quantity: "5"
      }
    ];
    service.getItems = function () {
      return shoppingList;

    };
    service.getItems1 = function () {
      return shoppingList1;
    };
    service.removeItem = function (itemIdex) {
      shoppingList1.push(shoppingList[itemIdex]);
      shoppingList.splice(itemIdex, 1);
      
    };


  }
  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
var bought=this;
bought.shoppingList1 = ShoppingListCheckOffService.getItems1();
  }
}
)();
