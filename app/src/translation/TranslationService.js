(function() {
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

function TranslationService($q) {

  this.loadAllTranslations = function() {
    console.log('lol');
    var defered = $q.defer();

    var pages = {
      BOARD_SETTINGS: {
        title:  'Board settings',
        sections: [
                  {
                    headline: 'General',
                    elements: {
                                coverImage: 'Cover image',
                                boardName: 'Board name',
                                shortName: 'Short domains',
                                useCustomDomain: 'Use custom domain?',
                                getInTouch:'Get in touch',
                                addShortDomain:'Add short dommain',
                                leaveBoard:'Leave board',
                              },
                  }, {
                    headline: 'Music service management',
                    elements: {
                                addNewTerritory:'Add new territory',
                                searchCountry: 'Search country',
                                selectedTerritories: ' Selected territories',
                                AllCountries: 'All countries',
                                addNewService: 'Add new service',
                                saveChanges: 'Save changes',
                              },
                  }, {
                    headline: 'Customization',
                    elements: {
                                arrangeMusicServices: 'Arrange music services',
                                translation: 'Translation',
                                translationBodytext: 'Change the default look of all the links created in the selected territory by adding a different (translated) title and description or by changing the music services order',
                                addCustomDescription: 'Add custom description',
                                enterDescription: 'Enter description (max 30 characters)',
                                media: 'Media',
                                mediaBodytext: 'Add a music sample to the landing page. If a YouTube link is available in the media section, this can be added to the landing page instead',
                                addMedia: 'Add media to landing page',
                                addMediaTooltip: 'If a music sample or YouTube video is available in the media section, it will be added to your landing page',
                                redirect: 'Redirect',
                                redirectBodytext: 'Selecting this option will link known visitors directly to their preferred music service without showing the landing page. If only one music service is available, all users will be linked directly to that service',
                                automaticallyRedirect: 'Automatically redirect visitors (recommended)',
                                automaticallyRedirectTooltip: 'In order to improve the click-through rate, known visitors will be directed to their preferred music service.  If only one music service is available, all users will be directed to that service.',
                                displayIDontKnow: 'Display the "I don´t know" button',
                                displayIDontKnowTooltip: 'The "I dont know" button will link the user to the music service at the top of your list',
                                enableTrackingPixel: 'Enable Tracking Pixel (recommended)',
                                enableTrackingPixelTooltip: 'Enable re-targeting programs. For each of the programs a pixel will be set when users visit your link',
                                saveChanges: 'Save changes',
                              },
                  }, {
                    headline: 'Campaign channel management',
                    elements: {
                                owned: 'Owned',
                                channels: 'Channels',
                                paid: 'Paid',
                                addChannels: 'Add channels',
                              },
                  }, {
                    headline: 'Affiliate programs',
                    elements: {
                                addCountry: 'Add country',
                                requestAffiliateProgram: 'Request affiliate program',
                              },
                  }, {
                    headline: 'Google Analytics',
                    elements: {
                                trackingId: 'Tracking id',
                              },
                  }, {
                    headline: 'Retargeting programs',
                    elements: {
                                requestRetargetingProgram: 'Request re-targeting program',
                              },
                  }, {
                    headline: 'IP-filters',
                    elements: {
                                addNewIpFilter: 'Add new IP-filter',
                              },
                  },
        ],
      },
      EDIT_LINK: {
        title:  'Create link',
        sections: [
          {
            headline: 'Create new link',
            elements: {
                        trackMatch: 'Track match',
                        albumMatch: 'Album match',
                        artistMatch: 'Artist match',
                        playlistMatch: 'Playlist match',
                        rescanLink: 'Rescan link',
                        artist: 'Artist',
                        album: 'Album',
                        track: 'Track',
                        source:'Source',
                      },
          }, {
            headline: 'Organize',
            elements: {
                        board: 'Board',
                        boardTooltip: 'This is the board where your link will be placed',
                        artists: 'Artists',
                        addArtist: 'Add artist',
                        tags: 'Tags',
                        addTag: 'Add tag',
                      },
          }, {
            headline: 'Domain',
            elements: {
                        domainTooltip: 'Use label, artist or other branded sub-domains to create vanity url’s and to make each campaign unique for tracking purposes',
                        shortCode: 'Short code',
                        shortCodeTooltip: 'Use track or album name to make your url even more unique',
                      },
          }, {
            headline: 'Media',
            elements: {
                        thirtySecondPreviewSources: '30 seconds preview sources',
                        available: 'Available',
                        rescanSamples: 'Rescan samples',
                        youtubeVideoLink: 'Youtube video link',
                        notActive: 'Not active',
                      },
          }, {
            headline: 'Customize metadata',
            elements: {
                        inlineArtwork: 'Inline artwork',
                        title: 'Title',
                        titleTooltip: 'Customize the Meta Title of your link. The title will appear when you post your link online',
                        description: 'Description',
                        descriptionTooltip: 'Customize the Meta Description of your link. The description will appear when you post your link online',
                        previewDownloadOrStream: 'Preview, download or stream',
                        useYoutubeVideoInMetadata: 'Use Youtube video in metadata',
                        useYoutubeVideoInMetadataTooltip: 'Add a YouTube video in the media manager to add it as meta-data',
                        enableFacebookMusicStory: 'Enable Facebook Music Story',
                        enableFacebookMusicStoryTooltip: 'This will turn the Facebook post into a music player. There can be geographical restrictions, so in some cases not all users will see the player',
                      },
          }, {
            headline: 'Music matches',
            elements: {
                        whatsThis: 'What´s this?',
                        territories: 'Territories',
                        match: 'Match',
                        manualLink: 'Manual link',
                        addMusicServices: 'Add music services',
                      },
          }, {
            headline: 'Landing page',
            elements: {
                        manageTerritories: 'Manage territories',
                        conditionalDestinations: 'Conditional destinations',
                        conditionalDestinationsTooltip: 'Set up re-directs and/or conditional statements for a specific territory. If none of the conditions are met, the user will be directed to your music landing page',
                        translation: 'translation',
                        addCustomTitle: 'Add custom title',
                        enterTitle: 'Enter title (max 60 characters',
                        addCustomDescription: 'Add custom description',
                      },
          }, {
            headline: 'Retargeting programs',
            elements: {
                        retargetingEnabled: 'Retargeting enabled',
                        boardPixels: 'Board pixels',
                        linkPixels: 'Link pixels',
                      },
          },
        ],
      },
    };
    defered.resolve(pages);

    return defered.promise;

  };
}
})();

/*

}
},//End of 'Create link'

//Start of 'Links'
      title:  'Links'
    {
    sections:
        {
    headline: 'General',
    elements: {
                element1: 'Element 1',
                element2: 'Element 2',
                element3: 'Element 3',
                element4: 'Element 4',
                element5: 'Element 5'
              }
        }
    },//End of 'Links'

//Start of 'Artists'
      title:  'Artists'
    {
    sections:
        {
    headline: 'General',
    elements: {
                element1: 'Element 1',
                element2: 'Element 2',
                element3: 'Element 3',
                element4: 'Element 4',
                element5: 'Element 5'
              }
        }
    },//End of Artists

//Start of 'Tags'
      title:  'Tags'
    {
    sections:
        {
    headline: 'General',
    elements: {
                element1: 'Element 1',
                element2: 'Element 2',
                element3: 'Element 3',
                element4: 'Element 4',
                element5: 'Element 5'
              }
        }
    },//End of 'Tags'

//Start of 'People'
      title:  'People'
    {
    sections:
        {
    headline: 'General',
    elements: {
                element1: 'Element 1',
                element2: 'Element 2',
                element3: 'Element 3',
                element4: 'Element 4',
                element5: 'Element 5'
              }
        }
  },//End of 'People'

//Start of 'Domains'
      title:  'Domains'
      {
    sections:
        {
    headline: 'General',
    elements: {
                element1: 'Element 1',
                element2: 'Element 2',
                element3: 'Element 3',
                element4: 'Element 4',
                element5: 'Element 5'
              }
        }
      },//End of 'Domains'

//Start of 'Insights'
      title:  'Insights'
      {
    sections:
        {
    headline: 'General',
    elements: {
                element1: 'Element 1',
                element2: 'Element 2',
                element3: 'Element 3',
                element4: 'Element 4',
                element5: 'Element 5'
              }
         }
       }//End of 'Insights'


}//END OF ENTIRE 'PAGES' OBJECT

*/
