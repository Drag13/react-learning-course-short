# Free React Learning Course by Itera - Short

## 0 What is React

### Keypoints: 

- What is the React
- React - advantages and disadvantages
- Why to learn React nowadays

### Hometask: 

Not specified

## 1 Starting new project with create-react-app

### Keypoints: 

- How to start new project from scratch
- A project structure
- Writing a first component
- Debug the app

### Hometask: 

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

## 2 What is component and why you should use it

### Keypoints: 

- What is the component
- Why to use the components
- How to pass data into the component
- How to get data from the component

### Hometask: 

Not specified

## 3 Building your own component

### Keypoints: 

- Design your first component
- Building static component
- Building component with interaction

### Hometask: 

- Add footer to your application
- Split the application you've built previously into components
- Create a component named `<AppLink>` which will render `a`. Component should:
- Be typed
- Accept custom text
- Accept custom url
- Accept callback that should be invoked before the click
- Put the new component into the footer
- When clicked, it should log into the console next text: `redirecting user to the next {link}` where `{link}` should be a's href

## 4 Change Detection

### Keypoints: 

- What is change detection
- How it works in React (simplified)
- React not rendering my changes examples

### Hometask: 

Not specified

## 5 Managing state in React

### Keypoints: 

- `setState` and `useState`
- [Context](https://reactjs.org/docs/context.html)
- [Redux](https://redux.js.org/) + [Redux Toolkit](https://reduxtoolkit.js.org/),
- [MobX](https://mobx.js.org/react-integration.html)

### Hometask: 

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

## 6 Forms with React, Formik and Yup

### Keypoints: 

- Building your first form with [Formik](https://formik.org/docs/overview)
- Validation with [Yup](https://github.com/jquense/yup)

### Hometask: 

Not specified

## 7 Single Page Application

### Keypoints: 

- Server side routing
- Client side routing
- Benefits
- React router

### Hometask: 

Not specified

## 8 React Router

### Keypoints: 

- Install react router
- Basic setup
- Data Binding
- Router guard

### Hometask: 

- Add header for your application
- Create new page named `about`
- Move all content related yourself to the page about
- Add new query parameter named `ln` to your link like this: `https://8080?ln=ua`
- If `ln` equals `ua` all texts should be in Ukrainian language
- If `ln` equals `en` all text should be in English (feel free to use google translate if needed)

## 9 Network, Fetch and Axios

### Keypoints: 

- Default way with fetch
- Setup axios

### Hometask: 

Not specified

## 10 Styling, CSS Modules and Styled Components

### Keypoints: 

- Preprocessors
- CSS Modules
- CSS in JS

### Hometask: 

- TBD

## 11 UI libraries

### Keypoints: 

- Purpose
- How to choose
- Material UI

### Hometask: 

Not specified

## 12 Tests

### Keypoints: 

- Why test
- Unit tests VS integration tests vs e2e
- Jest

### Hometask: 

Not specified
