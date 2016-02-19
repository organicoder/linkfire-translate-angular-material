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

    var pages = [
      {
        title: 'Board settings',
        sections: [
          {
            headline: 'General',
            ids : {
            coverImage: 'Cover image',
            boardName: 'Board name',
            shortName: 'Short domains',
            useCustomDomain:'Use custom domain?',
            getInTouch:'Get in touch',
            addShortDomain:'Add short dommain',
            leaveBoard:'Leave board'}
          }
          ,{
            headline: 'User management',
            ids : {
              userDetails:'User details',
              inviteUser: 'Invite user'
            }
          },
          {
            headline: 'Service',
            ids : {

            }
          },
          {
            headline: 'Channels',
          },
          {
            headline: 'Retargeting',
          },
        ]
      },
      {
        title: 'Edit link'
      },
      {
        title: 'Artists'
      },
      {
        title: 'Tags'
      },
      {
        title: 'People'
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
