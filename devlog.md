# Technical points

The course is built with:

- [Reveal.js](https://revealjs.com/) - presentation
- [MustacheJs](https://github.com/janl/mustache.js/) - rendering documentation
- [Parcel](https://parceljs.org/docs/) - building and bundling presentation

## Install

```cmd
npm ci
```

## Start the presentation locally

If you want to start particular presentation - execute the next command where `<presentation-name>` should be equal to the lesson name

```cmd
npm start <presentation-name>
```

Then open [http://localhost:1234/](http://localhost:1234/)

## How to update documentation

All course related data should be stored in the `course.json` file. Updates should be done in the pre push phase **automatically**, with the help of Husky. To update documentation **manually** please execute the next command

```cmd
npm run readme
```

If you need to tweak the documentation - check the `_templates` folder

## How to add new presentation

- Add new lecture to the `course.json`
- Run `npm run scaffold` command without arguments

## Deployment

Deployment is automated, appears after the push to the master branch and done with help [github-pages-deploy-action](https://github.com/JamesIves/github-pages-deploy-action)

## Encoding

Spotted that parcel or reveal doesn't like a lot of `<` `>` symbols - the code is completely messed. `.replaceAll('>','&gt;')` can fix this. Check `encode.js` file for details. Use it with `npm encode`.
