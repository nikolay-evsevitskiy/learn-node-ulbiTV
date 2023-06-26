const PORT = process.env.PORT || 5000;
const Application = require('./framework/Application');
const userRouter = require('./src/user-router')

const application = new Application();

application.addRouter(userRouter);
application.listen(PORT, () => console.log(`Server started on port ${PORT}`))
