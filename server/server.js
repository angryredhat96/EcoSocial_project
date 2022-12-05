const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const authRouter = require('./routes/authRouter');
const apiRouter = require('./routes/apiRouter');
const eventsRouter = require('./routes/eventsRouter');
const indexRouter = require('./routes/indexRouter');
const apiPhotos = require('./routes/apiPhotos');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({
  credentials: true,
  origin: true,
}));

app.use(morgan('dev'));
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(session({
  name: 'sid',
  secret: process.env.SESSION_SECRET ?? 'test',
  resave: true,
  store: new FileStore(),
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 12,
    httpOnly: true,
  },
}));

app.use('/auth', authRouter);
app.use('/api/v1', apiRouter);
app.use('/', indexRouter);
app.use('/events', eventsRouter);
app.use('/api/photos', apiPhotos);

app.listen(PORT, () => console.log(`Server has started on PORT ${PORT}`));
