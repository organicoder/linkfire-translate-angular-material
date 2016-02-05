(function(){
  'use strict';

  angular.module('maindata')
         .service('maindataService', ['$q', MaindataService]);

  /**
   * Main DataService
   * Uses embedded, hard-coded data model; acts asynchronously to simulate
   * remote data service call(s).
   *
   * @returns {{loadAll: Function}}
   * @constructor
   */
  function MaindataService($q){
    var maindata = 
 
{
    "da_DK": {
              "FEEDS": 'Feeds' {
                                "LINKS": 'Links' {
                                                  "VIEW_INSIGHTS" :'Se insights'  ,
                                                  "EDIT_LINK"     :'Redigér link' ,
                                                  "DELETE_LINK"   :'Slet link' 
                                                  }
                                "ARTISTS": 'Kunstnere'
                                "TAGS"   : 'Mærkater'
                                "PEOPLE" : 'Mennesker'
              
    }
  }
}

    // Promise-based API
    return {
      loadAllMaindata : function() {
        // Simulate async nature of real remote calls
        return $q.when(maindata);
      }
    };
  }

})();
