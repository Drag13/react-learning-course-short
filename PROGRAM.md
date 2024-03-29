# React For Beginners - Free Course by Itera

## 0 Lecture: What is React

### Key points: 

- The problem
- What is the React
- Three pillars of React
- React - advantages and disadvantages
- Why to learn React nowadays

Talk: https://youtu.be/fQ_UNyQBiqg

Presentation - https://drag13.io/react-learning-course-short/react-intro

### Home task: 

Not specified

## 1 Workshop: A New Project With Create-React-App

### Key points: 

- Starting new React project from scratch using create-react-app
- Project structure
- Files you need to know
- Predefined commands
- Code examples
- Alternatives

Talk: https://youtu.be/2r1TW9yPhlQ

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

## 2 : My first react app with Vite

### Key points: 

- How to create a new React app from scratch
- Project structure
- Code examples

Talk: https://youtu.be/J_826v3GuCE

### Home task: 

Not specified

## 3 Lecture: What is React Component

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

## 4 : React and Props

### Key points: 


Talk: https://youtu.be/1gLLa4fJ1JQ

### Home task: 

Not specified

## 5 Lecture: React and Hooks

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

## 6 Workshop: Building React Component

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

## 7 Lecture: React - From CSS to CSSinJS

### Key points: 

- Default way
- Using CSS modules
- Preprocessors
- CSS in JS

Talk: https://www.youtube.com/watch?v=8al4xMhWWCE

Presentation - https://drag13.io/react-learning-course-short/react-styling

### Home task: 

- Use CSS modules to style previously created application

## 8 Workshop: Managing State in React

### Key points: 

- Problems with setState and useState
- Context
- Redux
- MobX

Talk: https://youtu.be/2KTqbf31cLw

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

## 9 Workshop: Forms - Default Way and React-Hook-Forms

### Key points: 

- React Forms - default way
- Building your first form with  <a href="https://react-hook-form.com/get-started">React Hook Form</a>
- Validation with Yup

Talk: https://youtu.be/gwrMDwYLIWs

Presentation - https://drag13.io/react-learning-course-short/react-forms

### Prerequisite

- Install <a href="https://react-hook-form.com/get-started">React Hook Form</a> before the workshop

### Home task: 

Not specified

## 10 Lecture: Routing in React

### Key points: 

- A cup of theory
- Install react router
- Basic setup
- Data Binding
- Router guard

Talk: https://youtu.be/D0Fkm63FoSY

Presentation - https://drag13.io/react-learning-course-short/react-router

### Home task: 

- Add header for your application
- Create new page named `about`
- Move all content related yourself to the page about
- Add new query parameter named `ln` to your link like this: `https://8080?ln=ua`
- If `ln` equals `ua` all texts should be in Ukrainian language
- If `ln` equals `en` all text should be in English (feel free to use google translate if needed)

## 11 Lecture: React and Network

### Key points: 

- Fetch
- Axios
- Network and store
- Typical mistakes

Talk: https://youtu.be/Tm6l612v2v0

Presentation - https://drag13.io/react-learning-course-short/react-network

### Home task: 

Not specified

## 12 Lecture: UI Libraries

### Key points: 

- Purpose
- Cons
- How to choose
- Material UI

Talk: https://youtu.be/4Dsgzk-GuX8

Presentation - https://drag13.io/react-learning-course-short/react-ui-lib

### Home task: 

Not specified

## 13 Lecture: Testing Your Code

### Key points: 

- Why test
- Testing pyramid
- What should be tested
- Testing with Jest

Talk: https://youtu.be/ASI73nQ9zP8

Presentation - https://drag13.io/react-learning-course-short/react-testing

### Home task: 

Not specified

## 14 Lecture: TypeScript For Beginners

### Key points: 

- Primitives
- Functions
- CustomTypes
- Generics
- TypeAssertions

Talk: https://youtu.be/ND-XaEQ4VSk

Presentation - https://drag13.io/react-learning-course-short/typescript-intro

### Home task: 

Not specified

## 15 Lecture: Useful tools for the web developer

### Key points: 

- EsLint
- Prettier
- Husky and Lint Staged
- Emmet
- Code Snippets


Presentation - https://drag13.io/react-learning-course-short/web-tools

### Home task: 

Not specified

## 16 Lecture: SOLID &amp; React

### Key points: 

- Single Responsibility Principle
- Open Closed Principle
- Liskov Substitution Principle
- Interface Segregation Principle
- Dependency inversion Principle

Talk: https://youtube.com/live/1D80PMHEBa0

Presentation - https://drag13.io/react-learning-course-short/solid

### Home task: 

Not specified
