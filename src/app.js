const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const database = require('./utils/database');
const initModel = require('./models/initModels');
const errorHandlerRouter = require('./routes/errorHandler.routes');
const userRouter = require('./routes/users.routes');
const authRouter = require('./routes/authentication.routes');
const conversationRouter = require('./routes/conversations.routes');
const messagesRouter = require('./routes/messages.routes');

initModel();

const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

const PORT = 8000;


database.authenticate()
    .then(() => {
        console.log('Successful connection');
    })
    .catch((err) => {
        console.log(`Error connecion ${err}`);
    });

database.sync({ alter: true })
    .then(() => {
        console.log('Synchronized database');
    })
    .catch((err) => {
        console.log(`Synchronization error ${err}`);
    });


app.use(userRouter);
app.use(authRouter);
app.use(conversationRouter);
app.use(messagesRouter);

errorHandlerRouter(app);

app.listen(PORT, () => {
    console.log(`ESCUCHANDO POR EL PUERTO ${PORT}`);
});