const {validatesSChemaCreateImage, validatesSChemaGetIdImage, validatesSChemaUpdatePutImage, validatesSChemaUpdatePatchImage, validatesSChemaDeleteImage} = require('../validators');

const {createImage, getIdImage, updatePutImage, updatePatchImage, deleteImage, getImages} = require('../services');

const CreateImageController = async (req, res) => {
    try { 
        const { error } = validatesSChemaCreateImage.validate({ ...req.body }, { abortEarly: false });
        if(error) {
            const e = new Error();
            e.status = 400;
            e.message = error.details.map((err) => err.message).join(', ');
            throw e;
        }
        const image = await createImage(req.body);
        return res.json(image);
    } catch (err) {
        if(err.status === 400) {
            return res.status(err.status).send({ message: err.message, stack: err.stack });
        }
        return res.status(500).send({ message: err.message, stack: err.stack });
    }
}   

const GetIdImageController = async (req, res) => {
    try {
        const { id } = req.params;
        const image = await getIdImage(id);
        return res.json(image);
    } catch (err) {
        return res.status(500).send({ message: err.message, stack: err.stack });
    }
}

const UpdatePutImageController = async (req, res) => {
    try {
        const { error } = validatesSChemaUpdatePutImage.validate({ ...req.body }, { abortEarly: false });
        if(error) {
            const e = new Error();
            e.status = 400;
            e.message = error.details.map((err) => err.message).join(', ');
            throw e;
        }
        const { id } = req.params;
        const updatedImage = req.body; //datos del image actualizado
        const image = await updatePutImage(id, {...updatedImage});
        if(image[0] === 0) {
            return res.status(404).json({ message: 'Image no encontrada' });
        }
        res.status(200).json({ message: 'Image actualizada correctamente', data: {...updatedImage} });
    } catch (err) {
        if(err.status === 400) {
            return res.status(err.status).send({ message: err.message, stack: err.stack });
        }
        return res.status(500).send({ message: err.message, stack: err.stack });
    }
}

const UpdatePatchImageController = async (req, res) => {
    try {
        const { error } = validatesSChemaUpdatePatchImage.validate({ ...req.body }, { abortEarly: false });
        if(error) {
            const e = new Error();
            e.status = 400;
            e.message = error.details.map((err) => err.message).join(', ');
            throw e;
        }
        const { id } = req.params;
        const updatedImage = req.body; //datos del image actualizado
        const image = await updatePatchImage(id, {...updatedImage});
        if(image[0] === 0) {
            return res.status(404).json({ message: 'Image no encontrada' });
        }
        res.status(200).json({ message: 'Image actualizada correctamente', data: {...updatedImage} });
    } catch (err) {
        if(err.status === 400) {
            return res.status(err.status).send({ message: err.message, stack: err.stack });
        }
        return res.status(500).send({ message: err.message, stack: err.stack });
    }
}

const DeleteImageController = async (req, res) => {
    try {
        const { id } = req.params;
        const image = await deleteImage(id);
        if(image[0] === 0) {
            return res.status(404).json({ message: 'Image no encontrada' });
        }
        res.status(200).json({ message: 'Image eliminada correctamente' });
    } catch (err) {
        return res.status(500).send({ message: err.message, stack: err.stack });
    }
}

const GetImagesController = async (req, res) => {
    try {
        const images = await getImages();
        return res.json(images);
    } catch (err) {
        return res.status(500).send({ message: err.message, stack: err.stack });
    }
}

module.exports = {
    CreateImageController,
    GetIdImageController,
    UpdatePutImageController,
    UpdatePatchImageController,
    DeleteImageController,
    GetImagesController
}