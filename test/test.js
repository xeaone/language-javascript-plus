var o;

/*
	HTML
*/

	o = {
		template: `
			<div>${template}</div>
		`,
		html: `
			<div>${html}</div>
		`,
		html2: /*html*/`
			<div>${html}</div>
		`,
		innerHtml: `
			<div>${innerHtml}</div>
		`,
		none: `
			<div>${none}</div>
		`
	};


	/*
		dot
	*/
	o.template = `
		<div>${template}</div>
	`;

	o.html = `
		<div>${html}</div>
	`;

	o.html2 = /* html */`
		<div>${html}</div>
	`,

	o.innerHtml = `
		<div>${innerHtml}</div>
	`;

	o.none = `
		<div>${none}</div>
	`;


	/*
		var
	*/
	var template = `
		<div>${template}</div>
	`;

	var html = `
		<div>${html}</div>
	`;

	var html2 = /* html */`
		<div>${html}</div>
	`;

	var innerHtml = `
		<div>${innerHtml}</div>
	`;

	var none = `
		<div>${none}</div>
	`;


	/*
		const
	*/
	const template = `
		<div>${template}</div>
	`;

	const html = `
		<div>${html}</div>
	`;

	const html2 = /* html */`
		<div>${html}</div>
	`;

	const innerHTML = `
		<div>${innerHtml}</div>
	`;

	const none = `
		<div>${none}</div>
	`;

	const notWorkingTemplate = `
		<style>.class { color: blue }</style>
		<div class="foo">e1</div>
	`;


	/*
		let
	*/
	let template = `
		<div>${template}</div>
	`;

	let html = `
		<div>${html}</div>
	`;

	let html2 = /* html */`
		<div>${html}</div>
	`;

	let innerHtml = `
		<div>${innerHtml}</div>
	`;

	let none = `
		<div>${none}</div>
	`;

	/*
		template tag
	*/
	template`
		<div>${template}</div>
	`;

	html`
		<div>${html}</div>
	`;

	tag/* html */`
		<div>${html}</div>
	`;

	innerHtml`
		<div>${innerHtml}</div>
	`;

	none`
		<div>${none}</div>
	`;

/*
	CSS
*/

o = {
	css: `
		.class {
			color: url('asdfas');
		}
	`,
	css2: /* css */`
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

o.css = `
	.class {
		color: url('asdfas');
	}
`;

o.css2 = /* css */`
	.class {
		color: url('asdfas');
	}
`;

o.style = `
	.class {
		color: url('asdfas');
	}
`;

o.none = `
	.class {
		color: url('asdfas');
	}
`;

var css = `
	.class {
		color: url('asdfas');
	}
`;

var css2 = /* css */`
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
