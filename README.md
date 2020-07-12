# Synchronized Clocks

This is an UI project which has two clocks and which has been synchronized means while editing the time of one clock will update the other clock's time .

---

## Table of Contents

- [Installation](#installation)
- [Testing](#testing)
- [Features](#features)
- [Roadmap](#roadmap)
- [License](#license)


---

## Installation

### Prerequisite

- [Nodejs](https://nodejs.org/en/download/)
- [Yarn](yarnpkg.com/lang/en/docs/install/) (optional)

### Setup

> now install npm packages

```shell
$ yarn install
```
> Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

```shell
$ yarn start
```
> Builds the app for production to the `build` folder.

```shell
$ yarn build
```

> Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

```shell
$ yarn start
```

## Testing

- added UI test cases for shallow rendering
- added snapshot testing

## Features

> Analog clock
- show time in cirular dail
- hours, minites and seconds hands position are calculated and corresponding degeres for the hands are calculated.

> Digital clock
- show time in digital foramt in `HH:MM:SS`
- has clock [edit support](#clock-editing)

### Clock Editing
- each clock will show setting on mouse over
- on clicking the setting shows setting inline popup
- from the popup we can edit the time
- once the time is edited and clicked on ok it will updates both the clock 

## Roadmap
- cleanup code and can have shared code
- enchance UI more fluid and responsive

## License
[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- **[MIT license](http://opensource.org/licenses/mit-license.php)**