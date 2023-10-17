import * as express from "express";
import Locals from '../constants/Envs';

import Routes from './Routes';

class Express {
    
    public express: express.Application;

    /**
	 * Initializes the express server
	 */
    constructor () {
		this.express = express.default();

        this.mountEnv();
		// this.mountMiddlewares();
		this.mountRoutes();
	}

	/**
	 * Mounts all the defined env
	 */
    private mountEnv (): void {
		this.express = Locals.init(this.express);
	}

	/**
	 * Mounts all the defined middlewares
	 */
	// private mountMiddlewares (): void {
	// 	this.express = Bootstrap.init(this.express);
	// }

	/**
	 * Mounts all the defined routes
	 */
	private mountRoutes (): void {
		this.express = Routes.mountWeb(this.express);
		this.express = Routes.mountApi(this.express);
	}

    public init (): any {
		const port: number = Locals.config().port;
		// Registering Exception / Error Handlers
		// this.express.use(ExceptionHandler.logErrors);
		// this.express.use(ExceptionHandler.clientErrorHandler);
		// this.express.use(ExceptionHandler.errorHandler);
		// this.express = ExceptionHandler.notFoundHandler(this.express);

		// Start the server on the specified port
		this.express.listen(port, () => {
			return console.log('\x1b[33m%s\x1b[0m', `Server :: Running @ 'http://localhost:${port}'`);
		}).on('error', (_error: any) => {
			return console.log('Error: ', _error.message);
		});
	}
}


export default new Express();