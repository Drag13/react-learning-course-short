# React For Beginners - free course by Itera

## 0 Lecture: What is React

### Key points: 

- What is the React
- React - advantages and disadvantages
- Why to learn React nowadays

Presentation - https://drag13.io/react-learning-course-short/0/index.html

### Home task: 

Not specified

## 1 Workshop: Starting new project with create-react-app

### Key points: 

- Starting new React project from scratch using create-react-app
- Project structure
- Predefined commands
- Code examples

Presentation - https://drag13.io/react-learning-course-short/1/index.html

### Prerequisite

- Install [Node.JS](https://nodejs.org/en/) with NPM
- Install [VsCode](https://code.visualstudio.com/)

### Home task: 

- Create new repository at [github](https://github.io) and name it **react-for-beginners-itera**
- Select .gitignore from VisualStudio
- Clone repo locally using `git clone`
- Initialize new project with `npm init -y`
- Initialize new react application using `npx create-react-app my-page --template typescript`
- Create a [JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON#example_json) with next information:
- First Name, Short biography
- Short biography
- Public contacts
- Use React to display data from the JSON on the page
- Commit and push the results with `git add .`, `git commit -m "Initial commit"`, `git push`

## 2 Lecture: What is component and why you should use it

### Key points: 

- What is the component
- Why to use the components
- How to pass data into the component
- How to get data from the component

### Home task: 

Not specified

## 3 Lecture: Building your own component

### Key points: 

- Design your first component
- Building static component
- Building component with interaction

### Home task: 

- Add footer to your application
- Split the application you've built previously into components
- Create a component named `<AppLink>` which will render `a`. Component should:
- Be typed
- Accept custom text
- Accept custom url
- Accept callback that should be invoked before the click
- Put the new component into the footer
- When clicked, it should log into the console next text: `redirecting user to the next {link}` where `{link}` should be a's href

## 4 Lecture: Change Detection

### Key points: 

- What is change detection
- How it works in React (simplified)
- React not rendering my changes examples

### Home task: 

Not specified

## 5 Lecture: Managing state in React

### Key points: 

- `setState` and `useState`
- [Context](https://reactjs.org/docs/context.html)
- [Redux](https://redux.js.org/) + [Redux Toolkit](https://reduxtoolkit.js.org/),
- [MobX](https://mobx.js.org/react-integration.html)

### Home task: 

- Install redux and redux toolkit
- Write the timer that will with two buttons 
- start and stop
- Timer should:
- Be stopped by default
- On start it should display time in format HH:MM:SS
- On start page title (<title>) should be changed to "Timer is running"
- On stop timer should be stopped and show the last value
- Page title should be returned back to normal
- Uninstall redux
- Install MobX
- Implement same functionality

## 6 Workshop: Forms with React, Formik and Yup

### Key points: 

- Building your first form with [Formik](https://formik.org/docs/overview)
- Validation with [Yup](https://github.com/jquense/yup)

### Prerequisite

- Install [Formik](https://www.npmjs.com/package/formik) and [Yup](https://www.npmjs.com/package/yup) before the workshop

### Home task: 

Not specified

## 7 Lecture: Single Page Application

### Key points: 

- Server side routing
- Client side routing
- Benefits
- React router

### Home task: 

Not specified

## 8 Lecture: React Router

### Key points: 

- Install react router
- Basic setup
- Data Binding
- Router guard

### Home task: 

- Add header for your application
- Create new page named `about`
- Move all content related yourself to the page about
- Add new query parameter named `ln` to your link like this: `https://8080?ln=ua`
- If `ln` equals `ua` all texts should be in Ukrainian language
- If `ln` equals `en` all text should be in English (feel free to use google translate if needed)

## 9 Lecture: Network, Fetch and Axios

### Key points: 

- Default way with fetch
- Setup axios

### Home task: 

Not specified

## 10 Lecture: Styling, CSS Modules and Styled Components

### Key points: 

- Preprocessors
- CSS Modules
- CSS in JS

### Home task: 

- TBD

## 11 Lecture: UI libraries

### Key points: 

- Purpose
- How to choose
- Material UI

### Home task: 

Not specified

## 12 Lecture: Tests

### Key points: 

- Why test
- Unit tests VS integration tests vs e2e
- Jest

### Home task: 

Not specified
