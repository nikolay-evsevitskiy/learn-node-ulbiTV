const PORT = process.env.PORT || 5000;
const Application = require('./framework/Application');
const userRouter = require('./src/user-router');
const jsonParser = require('./framework/parseJson');
const urlParser = require('./framework/parseUrl');

const application = new Application();

application.use(jsonParser)
application.use(urlParser('http://localhost:5000'))
application.addRouter(userRouter);
application.listen(PORT, () => console.log(`Server started on port ${PORT}`))
