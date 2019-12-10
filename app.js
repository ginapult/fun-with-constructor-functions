'use strict';

console.log('js linked!');

function Pet (breed, weight, description) {
  this.breed = breed;
  this.weight = weight;
  this.description = description;
}

Pet.prototype.getDescription = function() {
  var randomIndex = Math.floor(Math.random() * this.descriptionWords.length);
  return this.descriptionWords[randomIndex];
};

var ginger = new Pet('goldendoodle', 35, ['cute', 'awesome', 'adorbs']);
var toby = new Pet('american short hair', 7, ['whiskery', 'fab', 'awesome']);
var ellie = new Pet('labrador retriever', null, ['the best', 'scoops', 'love']);