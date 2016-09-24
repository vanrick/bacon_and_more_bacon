app.controller('HomeController', function($scope, $http, $route, TeaService, $routeParams,$window) {
  $scope.view ={}
  $scope.view.teaData = [
      {
          "_id": "55c8ee82152165d244b98300",
          "name": "Smoked Bacon",
          "ingredients": "applewood smoked, pepper, molasus, sugar, reduce sodium",
          "caffeineScale": 5,
          "price": 1540,
          "inStock": true,
          "rating": 3,
          "imageUrl": "http://foodnetwork.sndimg.com/content/dam/images/food/fullset/2013/12/24/0/FN_Bacon-Cooked-Smoked_s4x3.jpg.rend.snigalleryslide.jpeg?$cimg$",
          "__v": 0,
          "categories": [ "crispy", "tender","smoked"]
      },

      {
          "_id": "55c8ee82152165d244b98301",
          "name": "Speck Bacon",
          "ingredients": "fennel, sage, juniper, garlic, nutmeg",
          "caffeineScale": 3,
          "price": 7348,
          "inStock": true,
          "rating": 5,
          "imageUrl": "https://s-media-cache-ak0.pinimg.com/originals/35/a6/1c/35a61cb83858a2802553d2c80822b165.jpg?$cimg$",
          "__v": 0,
          "categories": ["tender","cured","spices"]
      },
      {
          "_id": "55c8ee82152165d244b98302",
          "name": "Gypsy Bacon",
          "ingredients": "garlic, paprika, spicy, open flame",
          "caffeineScale": 2,
          "price": 4991,
          "inStock": true,
          "rating": 4,
          "imageUrl": "http://img.oola.com/slides/1/5/6/6/8/2/1566827335/2eee37b6bd3b857f106ddfb963da874dd33a1d76.jpeg?$cimg$",
          "__v": 0,
          "categories": ["hard","flame","spicy"]
      },
      {
          "_id": "55c8ee82152165d244b98303",
          "name": "Duck Bacon",
          "ingredients": "Moulard Duck breast, salt, sugar, flavorings, smoked, less fat vs pork bacon",
          "caffeineScale": 2,
          "price": 5496,
          "inStock": true,
          "rating": 4,
          "imageUrl": "http://dartagnan.scene7.com/is/image/DARTAGNAN/PSMBD002-1_VA0_SQ?$Hi-Res$?$cimg$",
          "__v": 0,
          "categories": ["duck", "smoked", "less fat"]
      },
      {
          "_id": "55c8ee82152165d244b98304",
          "name": "Pancetta",
          "ingredients": "salt cured, unsmoked, great with pasta",
          "caffeineScale": 5,
          "price": 2445,
          "inStock": true,
          "rating": 1,
          "imageUrl": "http://shop.salumiaddonizio.it/content/images/thumbs/0000271_pancetta-arrotolata-trancio-da-1-kg.jpeg?$cimg$",
          "__v": 0,
          "categories": ["summer","crispy","unsmoked","tender"]
      },
      {
          "_id": "55c8ee82152165d244b98305",
          "name": "Slab Bacon",
          "ingredients": "Thicker blocks, cured, smoked, great with soups and stews",
          "caffeineScale": 3,
          "price": 4486,
          "inStock": true,
          "rating": 3,
          "imageUrl": "http://www.nueskemeats.com/assets/1/20/DimRecipeDetail/Nueskes_Braised_Smoked_Slab_Bacon_Recipe.jpg?1146?$cimg$",
          "__v": 0,
          "categories": ["dry","Thick","smoked"]
      },
      {
          "_id": "55c8ee82152165d244b98306",
          "name": "Lamb Bacon",
          "ingredients": "flavorings, smoked, savory, lamb, less fat",
          "caffeineScale": 2,
          "price": 6973,
          "inStock": true,
          "rating": 3,
          "imageUrl": "http://www.centralmarket.com/getattachment/5a22b80c-e47a-4a91-bdbe-150c8f64dfca/What%E2%80%99s-Your-Bacon-Style.aspx?$cimg$",
          "__v": 0,
          "categories": ["Lamb","less fat","smoked","soft"]
      },
      {
          "_id": "55c8ee82152165d244b98307",
          "name": "Beef Bacon",
          "ingredients": "Beef, fatty-cut , smoked, less fat, uncured",
          "caffeineScale": 3,
          "price": 6003,
          "inStock": true,
          "rating": 3,
          "imageUrl": "http://www.halalbeefbacon.co.uk/images/caramelised-halal-beef-bacon.jpg?$cimg$",
          "__v": 0,
          "categories": ["uncured","tender","less fat","smoked","beef"]
      },
      {
          "_id": "55c8ee82152165d244b98308",
          "name": "Irish Bacon",
          "ingredients": "Back meat of pork, thick, tender, never crispy",
          "caffeineScale": 0,
          "price": 1374,
          "inStock": true,
          "rating": 2,
          "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/9/92/Bacon.JPG?$cimg$",
          "__v": 0,
          "categories": ["tender","winter","soft"]
      },
      {
          "_id": "55c8ee82152165d244b98309",
          "name": "Canadian Bacon",
          "ingredients": "Cooked ham, cured, delectable, pork loin, sugared, great on pizza or omlets",
          "caffeineScale": 3,
          "price": 4158,
          "inStock": true,
          "rating": 5,
          "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/3/3f/Flickr_bokchoi-snowpea_4266923676--Roast_peameal_bacon.jpg?$cimg$",
          "__v": 0,
          "categories": ["cured", "sweet", "salty"]
      }
  ]
  $scope.selectQuantity = '1'
  $scope.view.numberOfItems = TeaService.inventory.length;
  $scope.view.addBag= function(tea,qty){
     TeaService.add(tea,qty)

  }
  TeaService.grand_total();
  $scope.view.inventory = TeaService.inventory
  console.log('inventory: ',TeaService.inventory);
  $scope.view.order_total = TeaService;
  $scope.view.delete_one = function(tea){
   TeaService.delete_one(tea)
   TeaService.grand_total();
   console.log('tea: ',tea);
  }
  $scope.view.toggle_quantity = function(){
    $scope.showQuantity = !$scope.showQuantity
    $scope.showEdit = !$scope.showEdit
  }
  $scope.view.edit_one = function(tea,qty){
    TeaService.edit_quantity(tea,qty)
    $scope.showEdit = !$scope.showEdit
    $scope.showQuantity = !$scope.showQuantity
    TeaService.grand_total();
  }
  $scope.newQuantity = '1'

  $scope.view.catFunc = function(){
    var array = []
    for (var i = 0; i < $scope.view.teaData.length; i++) {
      array.push($scope.view.teaData[i].categories)
      console.log('**********teaData**********');
    }
    var merged = [].concat.apply([], array);
    console.log(merged);
    var unique = {}, mergy = [];
   for(var c = 0, l = merged.length; c < l; ++c){
      if(unique.hasOwnProperty(merged[c])) {
         continue;
      }
      mergy.push(merged[c]);
      unique[merged[c]] = 1;
   }
   $scope.view.mergy = mergy
   return unique;
  }
  $scope.setMaster = function(section) {
    $scope.selected = section;
  }

  $scope.isSelected = function(section) {
    return $scope.selected === section;
  }

  $scope.view.refresh = function(){
    // $route.reload();
    $window.location.reload();
  }

$scope.view.catFunc()
//   $scope.view.stretch = setInterval(function() {
//   var newVal = Math.floor((Math.random() * 179) + 1);
//
//   $('.gauge--3 .semi-circle--mask').attr({
//     style: '-webkit-transform: rotate(' + newVal + 'deg);' +
//     '-moz-transform: rotate(' + newVal + 'deg);' +
//     'transform: rotate(' + newVal + 'deg);'
//    });
// }, 1000);

})
