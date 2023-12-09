import app from './app.js';
import http from 'http';
import config from './src/config/constants.js';

const server = http.createServer(app);

server.listen(config.port, () => {
	//Print Only 1 Time
	console.log(
		`Listening on port http://${server.address().address}:${
			server.address().port
		} At ${new Date().toString()} `
	);
});
