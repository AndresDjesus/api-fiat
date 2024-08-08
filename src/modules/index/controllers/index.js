const {validatesSChemaCreateIndex, validatesSChemaUpdatePutIndex, validatesSChemaUpdatePatchIndex} = require('../validators');
const {createIndex, getIndexes, getIdIndex, updatePutIndex, updatePatchIndex, deleteIndex} = require('../services');

const CreateIndexController = async (req, res) => {
    try { 
        const { error } = validatesSChemaCreateIndex.validate({ ...req.body }, { abortEarly: false });
        if(error) {
            const e = new Error();
            e.status = 400;
            e.message = error.details.map((err) => err.message).join(', ');
            throw e;
        }
        const index = await createIndex(req.body);
        return res.json(index);
    } catch (err) {
        if(err.status === 400) {
            return res.status(err.status).send({ message: err.message, stack: err.stack });
        }
        return res.status(500).send({ message: err.message, stack: err.stack });
    }
}

const GetIdIndexController = async (req, res) => { 
    try {
        const { id } = req.params;
        const index = await getIdIndex(id);
        return res.json(index);
    } catch (err) {
        return res.status(500).send({ message: err.message, stack: err.stack });
    }
}

const UpdatePutIndexController = async (req, res) => {
    try {
        const { error } = validatesSChemaUpdatePutIndex.validate({ ...req.body }, { abortEarly: false });
        if(error) {
            const e = new Error();
            e.status = 400;
            e.message = error.details.map((err) => err.message).join(', ');
            throw e;
        }
        const { id } = req.params;
        const updatedIndex = req.body; //datos del index actualizado
        const index = await updatePutIndex(id, {...updatedIndex});
        if(index[0] === 0) {
            return res.status(404).json({ message: 'Index no encontrado' });
        }
        res.status(200).json({ message: 'Index actualizado correctamente', data: {...updatedIndex} });
    } catch (err) {
        console.log(err);
        if(err.status === 400) {
            return res.status(err.status).send({ message: err.message, stack: err.stack });
        }
        return res.status(500).send({ message: err.message, stack: err.stack });
    }
}

const UpdatePatchIndexController = async (req, res) => {
    try {
        const { error } = validatesSChemaUpdatePatchIndex.validate({ ...req.body }, { abortEarly: false });
        if(error) {
            const e = new Error();
            e.status = 400;
            e.message = error.details.map((err) => err.message).join(', ');
            throw e;
        }
        const { id } = req.params;
        const updatedIndex = req.body;
        const index = await updatePatchIndex(id, {...updatedIndex});
        if(index[0] === 0) {
            return res.status(404).json({ message: 'Index no encontrado' });
        }
        res.status(200).json({ message: 'Index actualizado correctamente', data: { ... updatedIndex } });
    } catch (err) {
        if(err.status === 400) {
            return res.status(err.status).send({ message: err.message, stack: err.stack });
        }   
        return res.status(500).send({ message: err.message, stack: err.stack });
    }
}       

const DeleteIndexController = async (req, res) => {
    try {
        const { id } = req.params;
        const index = await deleteIndex(id);
        if(index[0] === 0) {
            return res.status(404).json({ message: 'Index no encontrado' });
        }
        res.status(200).json({ message: 'Index eliminado correctamente' });
    } catch (err) {
        return res.status(500).send({ message: err.message, stack: err.stack });
    }
}

const GetIndexesController = async (req, res) => {
    try {
        const index = await getIndexes();
        return res.json(index);
    } catch (err) {
        return res.status(500).send({ message: err.message, stack: err.stack });
    }
}


module.exports = {CreateIndexController, GetIdIndexController, UpdatePutIndexController, UpdatePatchIndexController , DeleteIndexController, GetIndexesController};    
