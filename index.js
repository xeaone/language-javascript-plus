
exports.activate = function () {

	atom.grammars.addInjectionPoint('source.js', {

		type: 'comment',

		language (data) {
			const languages = ['html', 'css'];
			const text = data.text.toLowerCase().replace(/\/|\*/g, '');

			console.log(text);
			console.log(data);

			if (languages.includes(text)) {
				console.log(true);
				return text;
			}

		},

		content (data) {
			if (data.nextSibling.type === 'template_string') {
				return data.nextSibling;
			}
		}

	});

};
