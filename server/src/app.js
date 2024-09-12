const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const accountRouter = require('./routes/accountRouter');
const tokensRouter = require('./routes/tokensRouter');
const userRouter = require('./routes/userRouter');
const initRouter = require('./routes/initRouter');
const voteRouter = require('./routes/voteRouter');

const app = express();

app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/account/', accountRouter);
app.use('/api/tokens/', tokensRouter);
app.use('/api/users/', userRouter);
app.use('/api/inits/', initRouter);
app.use('/api/votes', voteRouter);

module.exports = app;
