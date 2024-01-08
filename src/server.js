import express from 'express';
import {StatusCodes} from 'http-status-codes';
// import bodyParser from 'body-parser';
import userRoutes from './user.routes';
import mainRoutes from './main.routes';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import compression from 'compression';

const app = express();
const port = 3000;

const limiter = rateLimit({
	windowMs: 60 * 1000, // 1 minute
	limit: 20, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
	// standardHeaders: 'draft-7', // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
	// legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
	// // store: ... , // Use an external store for consistency across multiple server instances.
})
app.use(compression());
app.use(limiter)
app.use(express.json());
app.use(helmet());

app.use('/v1', mainRoutes);
app.use('/v1/user', userRoutes);

app.listen(port, () => {
    console.log(`hey go to http://localhost/hello:${port}`);
})