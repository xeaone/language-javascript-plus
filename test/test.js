
/*
	HTML
*/

var o = {
	template: `
		<div>${template}</div>
	`,
	html: `
		<div>${html}</div>
	`,
	none: `
		<div>${none}</div>
	`
};

o.template = `
	<div>${template}</div>
`;

o.html = `
	<div>${html}</div>
`;

o.none = `
	<div>${none}</div>
`;

o.innerHTML = `
	<style>.class { color: blue }</style>
	<div class="foo">e1</div>
`;

o.innerHTML += `
	<div id="bar">e2</div>
`;

var template = `
	<div>${template}</div>
`;

var html = `
	<div>${html}</div>
`;

var none =  `
	<div>${none}</div>
`;

/*
	CSS
*/

var o2 = {
	css: `
		.class {
			color: url('asdfas');
		}
	`,
	style: `
		.class {
			color: url('asdfas');
		}
	`,
	none: `
		.class {
			color: url('asdfas');
		}
	`
};

o2.css = `
	.class {
		color: url('asdfas');
	}
`;

o2.style = `
	.class {
		color: url('asdfas');
	}
`;

o2.none = `
	.class {
		color: url('asdfas');
	}
`;

var css = `
	.class {
		color: url('asdfas');
	}
`;

var style = `
	.class {
		color: url('asdfas');
	}
`;

var none =  `
	.class {
		color: url('asdfas');
	}
`;

var foo = 'bar';
