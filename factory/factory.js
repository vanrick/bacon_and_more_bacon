app.factory('TeaService', function ($routeParams, $http) {
  return {
      running_total: 0,
      inventory: [],
      add: function (tea,qty) {
          if (this.inventory.length > 0) {
            for (var i = 0; i < this.inventory.length; i++) {
              if (tea._id == this.inventory[i]._id) {
                this.inventory[i].order_quantity += Number(qty)
                break;
            }else{
              tea.order_quantity = Number(qty)
              this.inventory.push(tea)
              break;
            }
          }
          }else{
            tea.order_quantity = Number(qty)
            this.inventory.push(tea)
        }
      },
      grand_total: function(){
        var total = 0
        for (var i = 0; i < this.inventory.length; i++) {
          total+=this.inventory[i].price * this.inventory[i].order_quantity
        }

        this.running_total = total;

      },
      delete_one: function(tea){
        var index = this.inventory.indexOf(tea)
        this.inventory.splice(index, 1)
      },
      edit_quantity: function(tea,qty){
      var index = this.inventory.indexOf(tea)
      this.inventory[index].order_quantity = qty
      }
    }
});
