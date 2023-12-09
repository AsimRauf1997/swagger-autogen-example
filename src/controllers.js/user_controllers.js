const getUser = (req, res) => {
	res.send({ message: 'user found successfully' });
};
const createUser = (req, res) => {
	res.send({ message: 'user created successfully' });
};

const userController = {
	getUser: getUser,
	createUser: createUser,
};
export default userController;
