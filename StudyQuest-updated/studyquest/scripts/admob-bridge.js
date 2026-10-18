import { AdMob } from '@capacitor-community/admob';

// Expose only the two methods used by the static StudyQuest UI.
window.StudyQuestAdMob = {
  initialize: () => AdMob.initialize(),
  showBanner: (options) => AdMob.showBanner(options)
};
window.dispatchEvent(new Event('studyquest-admob-ready'));
