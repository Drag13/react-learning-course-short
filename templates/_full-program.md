# {{title}}
{{#lessons}}

## {{i}} {{type}}: {{title}}

### Key points: 

{{#keyPoints}}
- {{{.}}}
{{/keyPoints}}

{{#presentation}}
Presentation - {{{.}}}

{{/presentation}}
{{#prerequisite.length}}
### Prerequisite

{{/prerequisite.length}}
{{#prerequisite}}
- {{{.}}}
{{/prerequisite}}
{{#prerequisite.length}}

{{/prerequisite.length}}
### Home task: 

{{^hometask}}
Not specified
{{/hometask}}
{{#hometask}}
- {{{.}}}
{{/hometask}}
{{/lessons}}