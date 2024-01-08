import express from "express";

const router = express.Router();

router.get('/ping',(req,res) => {
    res.status(StatusCodes.OK).send('OK');
    // res.send('Hello world');
});

export default router;