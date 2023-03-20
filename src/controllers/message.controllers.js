const MessagesServices = require('../services/Messages.services');

const createMessage = async(req, res, next) => {
    try {
        /* 
            ! PARA CREAR UN MENSAJE SE NECESITA 
            *ID DEL USUARIO
            *ID DE LA CONVERSACION
        */
        const dataMessage = req.body;
        await MessagesServices.create(dataMessage);

        res.status(201).json({
            message: 'Message sent'
        });
    } catch (err) {
        next(err);
    };
}

module.exports = {
    createMessage
};