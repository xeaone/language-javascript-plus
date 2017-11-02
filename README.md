
# JavaScript Plus
Syntax highlighting for template strings in Atom

## Install
`apm install language-javascript-plus`

## Usage
Simply declare a variable, property, template tag, or multiline comment with html, innerHTML, css, or style then use backtick for your template string. HTML and CSS will be using their own syntax highlighting.

## Changes
- Template not supported any more. Please use the new comment style.

## Triggers

- Comment Style
	- `/* html */`
	- `/* css */`

- Variable Style
	- `html: `
	- `html = `
	- `.html = `

	- `css: `
	- `css = `
	- `.css = `

- These are only supported for native use cases
	- `style: `
	- `style = `
	- `.style = `
	- `innerHTML: `
	- `innerHTML = `
	- `.innerHTML = `
