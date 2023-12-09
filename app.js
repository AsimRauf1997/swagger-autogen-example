import express from 'express';
import userRouter from './src/routes/user_routes.js';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger-output.js';
const app = express();

app.use('/api/v1/user', userRouter);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get('/', (req, res) => {
	res.send({ message: 'Server is runing' });
});

export default app;
