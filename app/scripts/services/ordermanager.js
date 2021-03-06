'use strict';

/**
 * @ngdoc service
 * @name mealplannerApp.ordermanager
 * @description
 * # ordermanager
 * Service in the mealplannerApp.
 */
angular.module('mealplannerApp')
  .service('ordermanager', function () {
    var selectedDay = 'Monday';

    var orderSelection = {
      Monday: {
	salad: '',
	sandwich: '',
	meal: '',
	dessert: '',
	drink: '',
	snack: ''
      },
      Tuesday: {
	salad: '',
	sandwich: '',
	meal: '',
	dessert: '',
	drink: '',
	snack: ''
      },
      Wednesday: {
	salad: '',
	sandwich: '',
	meal: '',
	dessert: '',
	drink: '',
	snack: ''
      },
      Thursday: {
	salad: '',
	sandwich: '',
	meal: '',
	dessert: '',
	drink: '',
	snack: ''
      },
      Friday: {
	salad: '',
	sandwich: '',
	meal: '',
	dessert: '',
	drink: '',
	snack: ''
      }
    };

    this.getSelectedDay = function() {
      return selectedDay;
    };

    this.setActiveDay = function(day) {
      selectedDay = day;
    };

    this.chooseMenuOption = function(meal, menuItem) {
      orderSelection[selectedDay][meal] = menuItem;
    };

    this.removeMenuOption = function(day, menuCategory) {
      orderSelection[day][menuCategory] = '';
    };

    this.getOrders = function() {
      return orderSelection;
    };
  });
