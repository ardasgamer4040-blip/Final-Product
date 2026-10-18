# StudyQuest Android project

## What's updated
- One scrollable dashboard with subjects directly below the dashboard; no separate Home/Learn screen.
- Class picker from UKG through Class 10.
- Simple starter questions for UKG–Class 5; difficulty steps up with the class. Class 6–10 use the existing NCERT-style question bank.
- Switching class requires confirmation and resets XP/levels, streaks, badges, daily goal counters, answered/perfect counts, studied state, and subject mastery. User-created decks/cards remain, but their mastery resets.
- Support form requires a reply-to email address (any valid email, not Gmail-only) and sends the message to `ardasgamer4040@gmail.com` using FormSubmit's AJAX endpoint.
- Capacitor AdMob plugin is included and a Google official test banner is requested on native Android builds.

## Support email setup
The first FormSubmit submission may trigger an activation email to `ardasgamer4040@gmail.com`. Open that email and activate the inbox. Until activation is complete, submissions may not arrive. This frontend endpoint is a lightweight no-server solution; for production, use a backend or a verified form provider with spam controls. The support form deliberately requires the student's contact email so the developer can reply.

## AdMob setup
The build currently uses Google's official **test** app ID and test banner ID only. This proves the native plugin wiring; it does not earn revenue. Before release, create an AdMob app and ad unit, replace both test IDs in:
- `.github/workflows/build-android.yml` (Android app ID)
- `www/index.html` (banner ad unit ID `ca-app-pub-3940256099942544/6300978111`)

Because the app includes UKG content, review Google's child-directed/family policy and consent requirements before serving production ads. Never click your own live ads. Rebuild and test the APK on a physical Android device after changing IDs.

## Build
Push this folder to GitHub. Actions -> **Build Android APK** -> run workflow. Download `studyquest-debug-apk` from the completed workflow run. A debug APK is for testing, not Play Store release signing.
