(function(){

  angular
       .module('maindata')
       .controller('MaindataController', [
          'maindataService', '$mdSidenav', '$mdBottomSheet', '$log', '$q',
          MaindataController
       ]);

  /**
   * Main Controller for the Linkfire Translation App
   * @param $scope
   * @param $mdSidenav
   * @param avatarsService
   * @constructor
   */
  function MaindataController( maindataService, $mdSidenav, $mdBottomSheet, $log) {
    var self = this;

    self.selected     = null;
    self.maindata     = [ ];
    self.selectUser   = selectUser;
    self.toggleList   = toggleUsersList;
    self.makeContact  = makeContact;

    // Load all maindata

    maindataService
          .loadAllMaindata()
          .then( function( maindata ) {
            self.maindata    = [].concat(maindata);
            self.selected = maindata[0];
          });

    // *********************************
    // Internal methods
    // *********************************


    /**
     * Test button clicks
     */

     function testButton(){
      console.log();
     };

    /**
     * Hide or Show the 'left' sideNav area
     */
    function toggleUsersList() {
      $mdSidenav('left').toggle();
    }

    /**
     * Select the current avatars
     * @param menuId
     */
    function selectUser ( maindata ) {
      self.selected = angular.isNumber(maindata) ? $scope.users[maindata] : maindata;
    }

    /**
     * Show the Contact view in the bottom sheet
     */
    function makeContact(selectedUser) {

        $mdBottomSheet.show({
          controllerAs  : "cp",
          templateUrl   : './src/maindata/view/googletranslate.html',
          controller    : [ '$mdBottomSheet', GoogleTranslateController],
          parent        : angular.element(document.getElementById('content'))
        }).then(function(clickedItem) {
          $log.debug( clickedItem.name + ' clicked!');
        });

        /**
         * Google translate controller
         */
        function GoogleTranslateController( $mdBottomSheet ) {
          this.maindata = selectedUser;
          this.actions = [
            { name: 'Phone'       , icon: 'phone'       , icon_url: 'assets/svg/phone.svg'},
            { name: 'Twitter'     , icon: 'twitter'     , icon_url: 'assets/svg/twitter.svg'},
            { name: 'Google+'     , icon: 'google_plus' , icon_url: 'assets/svg/google_plus.svg'},
            { name: 'Hangout'     , icon: 'hangouts'    , icon_url: 'assets/svg/hangouts.svg'}
          ];
          this.googleTranslate = function(action) {
            // The actually contact process has not been implemented...
            // so just hide the bottomSheet

            $mdBottomSheet.hide(action);
          };
        }
    }

  }

})();
