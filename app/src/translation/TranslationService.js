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
        name: 'Default (English)',
        avatar: 'svg-1',
        content: 'Test Test Test Test Test Test Test Test Test Test Test Test Test'
      },
      {
        name: 'German',
        avatar: 'svg-2',
        content: 'Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris.'
      },
      {
        name: 'French',
        avatar: 'svg-3',
      },
      {
        name: 'Spanish',
        avatar: 'svg-4',
      },
      {
        name: 'Italian',
        avatar: 'svg-5',
      },
      {
        name: 'Swedish',
        avatar: 'svg-6',
      },
      {
        name: 'Norwegian',
        avatar: 'svg-6',
      },
      {
        name: 'Danish',
        avatar: 'svg-6',
      },
      {
        name: 'Finnish',
        avatar: 'svg-6',
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
