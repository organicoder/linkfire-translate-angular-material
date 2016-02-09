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
        language: 'Feeds'
      },
      {
        language: 'Links'
      },
      {
        language: 'Artists'
      },
      {
        language: 'Tags'
      },
      {
        language: 'People'
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
