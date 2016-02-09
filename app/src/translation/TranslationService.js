(function(){
  'use strict';

  angular.module('translations')
         .service('translationService', ['$q', TranslationService]);

  /**
   * Translations DataService
   * Uses embedded, hard-coded data model; acts asynchronously to simulate
   * remote data service call(s).
   *
   * @returns {{loadAll: Function}}
   * @constructor
   */
  function TranslationService($q){
    var translations = [
      {
        name: 'Feeds'
      },
      {
        name: 'Links'
      },
      {
        name: 'Artists'
      },
      {
        name: 'Tags'
      },
      {
        name: 'People'
      }
      ];


    // Promise-based API
    return {
      loadAllTranslations : function() {
        // Simulate async nature of real remote calls
        return $q.when(translations);
      }
    };
  }

})();
