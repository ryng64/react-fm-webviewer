# React + Vite + Claris FM

Tooling to create widgets for FileMaker's WebViewer.
This project bundles a React project into a single file that is uploaded to into a FileMaker field.

## Scope

A react template to create supplemental UI widgets in FileMaker with:

- Offline Support
- No need web server.

### FileMaker Interactions

2 JavaScript functions that interact with FileMaker
review `fmcount.jsx` call FileMaker Scripts from the web app.
review `App.jsx` to view function defintion inside of App and window level declaration

2 FileMaker scripts that interact with WebViewer Javascript.

- callFromWeb
- callFromFileMaker

## ToDo:

- Bundle Assests inline ( images ) `will cause significantly larger files`
- Remove broken images/assets in Demo

## Complete

- Bundle web app into single inline html file.
- Compatible with React.
- FileMaker Script to insert data from html file.
- npm automate the bundle and Filemaker insert script.
- Add Sample Perform FMscript from JavaScript
- Add Sample Perform JavaScript from FM

# Vite Stuff

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
