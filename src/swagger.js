import swaggerAutogen from 'swagger-autogen';

const doc = {
	openapi: '3.1.0',
	info: {
		title: 'My API',
		description: 'Description',
	},
	host: 'localhost:4000',
};

const outputFile = '../src/swagger-output.js';
const routes = ['./routes/user_routes.js'];

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

swaggerAutogen()(outputFile, routes, doc);
