import angular from 'angular';
import uiRouter from '@uirouter/angularjs';

import template from './items.html';
import './items.css';

const moduleName = "items";
const itemsModule = angular.module(moduleName, [uiRouter]).config(["$stateProvider", function ($stateProvider) {
    $stateProvider.state({
        name: moduleName,
        url: "/{categoryId:int}/items/",
        parent: "home",
        component: "itemsComponent",
        resolve: {
            items: function (apiService, $stateParams) {
                return apiService.fetchCategoryItems($stateParams.categoryId);
            }
        }
    });
}]);

itemsModule.component("itemsComponent", {
    template,
    bindings: {
        items: "<"
    },
    controller: function () {
    }
});

export default moduleName;
