
/*
	HTML
*/

var o = {
	template: `
		<div>hello world</div>
	`,
	la: '',
};

var template = `
	<div>${textVar}</div>
`;

/*
	innerHTML
*/
var e1, e2;

e1.innerHTML = `
	<style>.class { color: blue }</style>
	<div class="foo">e1</div>
`;

e2.innerHTML += `
	<div id="bar">e2</div>
`;

/*
	CSS
*/

var style = `
	.class {
		background-color: url('asdfas');
	}
`;

var foo = 'bar';
