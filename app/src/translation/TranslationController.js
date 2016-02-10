(function(){

  angular
       .module('translations')
       .controller('TranslationController', [
          'translationService', '$mdSidenav', '$mdBottomSheet', '$log', '$q',
          TranslationController
       ]);

  /**
   * Main Controller for the Angular Material Starter App
   * @param $scope
   * @param $mdSidenav
   * @param avatarsService
   * @constructor
   */
  function TranslationController( translationService, $mdSidenav, $mdBottomSheet, $log, $scope) {
    var self = this;

    self.selected     = null;
    self.translations = [ ];
    self.toggleList   = toggleUsersList;
    self.makeContact  = makeContact;

    // Load all translations

    translationService
          .loadAllTranslations()
          .then( function( translations ) {
            self.translations    = [].concat(translations);
            self.selected = translations[0];
          });

    // *********************************
    // Internal methods
    // *********************************

    /**
     * Test button clicks
     */


     //Method 1
     $scope.testButton = function() {
    
    console.log('Button was clicked!!!');

      }

    /**
     * Hide or Show the 'left' sideNav area
     */
    function toggleUsersList() {
      $mdSidenav('left').toggle();
    }

    /**
     * Show the Contact view in the bottom sheet
     */
    function makeContact(selectedTranslation) {

        $mdBottomSheet.show({
          controllerAs  : "cp",
          templateUrl   : './src/maindata/view/googletranslate.html',
          controller    : [ '$mdBottomSheet', ContactSheetController],
          parent        : angular.element(document.getElementById('content'))
        }).then(function(clickedItem) {
          $log.debug( clickedItem.name + ' clicked!');
        });

        /**
         * User ContactSheet controller
         */
        function ContactSheetController( $mdBottomSheet ) {
          this.user = selectedUser;
          this.actions = [
            { name: 'Phone'       , icon: 'phone'       , icon_url: 'assets/svg/phone.svg'},
            { name: 'Twitter'     , icon: 'twitter'     , icon_url: 'assets/svg/twitter.svg'},
            { name: 'Google+'     , icon: 'google_plus' , icon_url: 'assets/svg/google_plus.svg'},
            { name: 'Hangout'     , icon: 'hangouts'    , icon_url: 'assets/svg/hangouts.svg'}
          ];
          this.contactUser = function(action) {
            // The actually contact process has not been implemented...
            // so just hide the bottomSheet

            $mdBottomSheet.hide(action);
          };
        }
    }

  }

})();
