const swaggerDocument = {
	openapi: '3.1.0',
	info: {
		title: 'My API',
		description: 'Description',
		version: '1.0.0',
	},
	servers: [
		{
			url: 'http://localhost:4000/',
		},
	],
	paths: {
		'/get-user': {
			get: {
				description: '',
				responses: {
					200: {
						description: 'OK',
					},
				},
			},
		},
		'/create-user': {
			post: {
				description: '',
				responses: {
					200: {
						description: 'OK',
					},
				},
			},
		},
	},
};

export default swaggerDocument;
