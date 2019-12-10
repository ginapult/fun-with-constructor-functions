'use strict';

console.log('js linked!');

function Pet (breed, weight, description) {
  this.breed = breed;
  this.weight = weight;
  this.description = description;
}

Pet.prototype.getDescription = function() {
  
}

var ginger = new Pet('goldendoodle');
var toby = new Pet('american short hair');
