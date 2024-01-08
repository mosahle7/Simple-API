import express from 'express';
import {StatusCodes} from 'http-status-codes';
// import bodyParser from 'body-parser';
import userRoutes from './user.routes';
import mainRoutes from './main.routes';
import helmet from 'helmet';

const app = express();
const port = 3000;


app.use(express.json());
app.use(helmet());

app.use('/v1', mainRoutes);
app.use('/v1/user', userRoutes);

app.listen(port, () => {
    console.log(`hey go to http://localhost/hello:${port}`);
})