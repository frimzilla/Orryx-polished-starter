
# Orryx Polished Starter

Production-leaning Expo starter with:
- Real PNG assets (icon, adaptive icon, splash)
- Tiny design system in `theme.js`
- GitHub Actions workflow with **asset validation** and **expo doctor**
- EAS internal build (APK) on demand

## Quick start
1) Put your Expo **Project ID (UUID)** into `app.json` → `extra.eas.projectId` (already set in this bundle; confirm it matches).
2) Ensure `slug` = `project-obsidian-oryyx` and `owner` = `naktak00`.
3) Add **EXPO_TOKEN** to GitHub repo secrets.
4) Run **Actions → Build Android Internal APK (EAS)**.
5) Download the **APK** from the workflow **Artifacts**.

## Local
```
npm install -g eas-cli
npm install
eas login
eas build -p android --profile internal --local --non-interactive
```
