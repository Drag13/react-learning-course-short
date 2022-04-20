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

If you want to start particular presentation - execute the next command where number should be equal to the lesson number

```cmd
npm start react-intro
```

## How to update documentation

All course related data should be stored in the `course.json` file. To update documentation please execute the next command

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
