const PORT = process.env.PORT || 5000;
const Application = require('./framework/Application');
const userRouter = require('./src/user-router');
const jsonParser = require('./framework/parseJson');

const application = new Application();

application.use(jsonParser)
application.addRouter(userRouter);
application.listen(PORT, () => console.log(`Server started on port ${PORT}`))
