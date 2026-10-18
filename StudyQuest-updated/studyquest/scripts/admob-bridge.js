import {
  AdMob,
  BannerAdPosition
} from '@capacitor-community/admob';

// Expose the methods used by the static StudyQuest UI.
window.StudyQuestAdMob = {
  initialize: () => AdMob.initialize(),

  showBanner: (options = {}) =>
    AdMob.showBanner({
      ...options,
      position: BannerAdPosition.TOP
    })
};

window.dispatchEvent(new Event('studyquest-admob-ready'));

