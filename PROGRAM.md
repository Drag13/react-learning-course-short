# React For Beginners - free course by Itera

## 0 Lecture: What is React

### Key points: 

- The problem
- What is the React
- Three pillars of React
- React - advantages and disadvantages
- Why to learn React nowadays

Talk: https://www.youtube.com/watch?v=fQ_UNyQBiqg

Presentation - https://drag13.io/react-learning-course-short/react-intro

### Home task: 

Not specified

## 1 Workshop: A new project with create-react-app

### Key points: 

- Starting new React project from scratch using create-react-app
- Project structure
- Files you need to know
- Predefined commands
- Code examples
- Alternatives

Talk: https://www.youtube.com/watch?v=2r1TW9yPhlQ

Presentation - https://drag13.io/react-learning-course-short/react-cra

### Prerequisite

- Install <a href="https://nodejs.org/en/">Node.JS</a>
- Install <a href="https://code.visualstudio.com/">VsCode</a>
- Execute 'npx create-react-app my-test-app --template typescript'

### Home task: 

- Create new repository at <a href="https://github.io">GitHub</a> and name it react-for-beginners-itera
- Select .gitignore from VisualStudio
- Clone repo locally using <i>git clone</i>
- Initialize new react application using <i>npx create-react-app my-page --template typescript</i>
- Create a new <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON#example_json">JSON</a> with next information:
- First Name
- Short biography
- Public contacts
- Use React to display data from the JSON on the page
- Commit and push the results with <i>git add .</i>, <i>git commit -m "Initial commit"</i>, <i>git push</i>

## 2 Lecture: What is React Component

### Key points: 

- What is the component
- Why to use the components
- Component types
- How to pass data into the component
- How to get data from the component
- Component lifecycle

Talk: https://youtu.be/BPIeZqomYQw

Presentation - https://drag13.io/react-learning-course-short/react-components

### Home task: 

- Split your APP into the logical components
- Mix Class Based and Functional approach to get more practice in both
- Use props only to pass the data to your components

## 3 Lecture: React with Hooks

### Key points: 

- What is a hook
- Hook rules
- UseState
- Use Effect
- UseContext
- Custom hooks

Talk: https://youtu.be/6AHDZGumKZg

Presentation - https://drag13.io/react-learning-course-short/react-hooks

### Home task: 

Not specified

## 4 Workshop: Building React Component

### Key points: 

- What is component - quick recap
- Building "dumb" components - functional and class-based
- Building "smart" component - functional and class-based
- What and when to use
- Components - best practices


Presentation - https://drag13.io/react-learning-course-short/react-new-component

### Prerequisite

- Create new project using <a target="_blank" href="https://drag13.io/react-learning-course-short/react-components/index.html">example</a>

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

## 5 Lecture: Styling in React - from plain CSS to CSS in JS

### Key points: 

- Default way
- Using CSS modules
- Preprocessors
- CSS in JS


Presentation - https://drag13.io/react-learning-course-short/react-styling

### Home task: 

Not specified

## 6 Workshop: Managing state in React

### Key points: 

- Problems with setState and useState
- Context
- Redux
- MobX


Presentation - https://drag13.io/react-learning-course-short/react-state-management

### Prerequisite

- Copy the <a href="https://raw.githubusercontent.com/Drag13/react-learning-course-short/master/presentations/react-state-management/code/index_general.tsx">code</a> to your project
- Install MobX - <i>npm i mobx mobx-react-lite</i>

### Home task: 

- Using context write the timer that will have two buttons
- start and stop
- Timer should:
- Be stopped by default
- On start, App should display time in format HH:MM:SS
- On start page title should be changed to "Timer is running"
- On stop timer should be stopped, the latest value should be present
- Page title should be returned back to normal
- Install MobX
- Implement same functionality with MobX

## 7 Workshop: Forms - Default way and React-Hook-Forms

### Key points: 

- React Forms - default way
- Building your first form with  <a href="https://react-hook-form.com/get-started">React Hook Form</a>
- Validation with Yup


Presentation - https://drag13.io/react-learning-course-short/react-forms

### Prerequisite

- Install <a href="https://react-hook-form.com/get-started">React Hook Form</a> before the workshop

### Home task: 

Not specified

## 8 Lecture: Routing in React

### Key points: 

- Install react router
- Basic setup
- Data Binding
- Router guard


Presentation - https://drag13.io/react-learning-course-short/react-router

### Home task: 

- Add header for your application
- Create new page named `about`
- Move all content related yourself to the page about
- Add new query parameter named `ln` to your link like this: `https://8080?ln=ua`
- If `ln` equals `ua` all texts should be in Ukrainian language
- If `ln` equals `en` all text should be in English (feel free to use google translate if needed)

## 9 Lecture: React and network

### Key points: 

- Fetch
- Axios


Presentation - https://drag13.io/react-learning-course-short/react-network

### Home task: 

Not specified

## 10 Lecture: UI libraries

### Key points: 

- Purpose
- How to choose
- Material UI


Presentation - https://drag13.io/react-learning-course-short/react-ui-lib

### Home task: 

Not specified

## 11 Lecture: Tests

### Key points: 

- Why test
- Testing pyramid
- What should be tested
- Testing with Jest


Presentation - https://drag13.io/react-learning-course-short/react-testing

### Home task: 

Not specified
