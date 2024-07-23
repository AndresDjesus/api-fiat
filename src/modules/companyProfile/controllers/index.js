const {validatesSChemaCreateCompanyProfile, validatesSChemaGetIdCompanyProfile, validatesSChemaUpdatePutCompanyProfile, validatesSChemaUpdatePatchCompanyProfile} = require('../validators');

const {createCompanyProfile, getIdCompanyProfile, updatePutCompanyProfile, updatePatchCompanyProfile, deleteCompanyProfile, getCompanyProfile} = require('../services');

const GetCompanyProfileController = async (req, res) => {
    try {
        const companyProfile = await getCompanyProfile();
        return res.json(companyProfile);
    } catch (err) {
        return res.status(500).send({ message: err.message, stack: err.stack });
    }
}
const CreateCompanyProfileController = async (req, res) => {
    try { 
        const { error } = validatesSChemaCreateCompanyProfile.validate({ ...req.body }, { abortEarly: false });
        if(error) {
            const e = new Error();
            e.status = 400;
            e.message = error.details.map((err) => err.message).join(', ');
            throw e;
        }
        const companyProfile = await createCompanyProfile(req.body);
        return res.json(companyProfile);
    } catch (err) {
        if(err.status === 400) {
            return res.status(err.status).send({ message: err.message, stack: err.stack });
        }
        return res.status(500).send({ message: err.message, stack: err.stack });
    }
}

const GetIdCompanyProfileController = async (req, res) => { 
    try {
        const { id } = req.params;
        const companyProfile = await getIdCompanyProfile(id);
        return res.json(companyProfile);
    } catch (err) {
        return res.status(500).send({ message: err.message, stack: err.stack });
    }
}

const UpdatePutCompanyProfileController = async (req, res) => {
    try {
        const { error } = validatesSChemaUpdatePutCompanyProfile.validate({ ...req.body }, { abortEarly: false });
        if(error) {
            const e = new Error();
            e.status = 400;
            e.message = error.details.map((err) => err.message).join(', ');
            throw e;
        }
        const { id } = req.params;
        const updatedCompanyProfile = req.body; //datos de la categoria actualizado
        const companyProfile = await updatePutCompanyProfile(id, {...updatedCompanyProfile});
        if(companyProfile[0] === 0) {
            return res.status(404).json({ message: 'Compania no encontrada' });
        }
        res.status(200).json({ message: 'Compania actualizada correctamente', data: {...updatedCompanyProfile} });
    } catch (err) {
        console.log(err);
        if(err.status === 400) {
            return res.status(err.status).send({ message: err.message, stack: err.stack });
        }

        return res.status(500).send({ message: err.message, stack: err.stack });
    }
}

const UpdatePatchCompanyProfileController = async (req, res) => {
    try {
        const { error } = validatesSChemaUpdatePatchCompanyProfile.validate({ ...req.body }, { abortEarly: false });
        if(error) {
            const e = new Error();
            e.status = 400;
            e.message = error.details.map((err) => err.message).join(', ');
            throw e;
        }
        const { id } = req.params;
        const updatedCompanyProfile = req.body; //datos de la categoria actualizado
        const companyProfile = await updatePatchCompanyProfile(id, {...updatedCompanyProfile});
        if(companyProfile[0] === 0) {
            return res.status(404).json({ message: 'Compania no encontrada' });
        }
        res.status(200).json({ message: 'Compania actualizada correctamente', data: {...updatedCompanyProfile} });
    } catch (err) {
        console.log(err);
        if(err.status === 400) {
            return res.status(err.status).send({ message: err.message, stack: err.stack });
        }

        return res.status(500).send({ message: err.message, stack: err.stack });
    }
}

const DeleteCompanyProfileController = async (req, res) => {
    try {
        const { id } = req.params;
        const companyProfile = await deleteCompanyProfile(id);
        if(companyProfile[0] === 0) {
            return res.status(404).json({ message: 'Compania no encontrada' });
        }
        res.status(200).json({ message: 'Compania eliminada correctamente' });
    } catch (err) {
        return res.status(500).send({ message: err.message, stack: err.stack });
    }
}

module.exports = {
    GetCompanyProfileController,
    CreateCompanyProfileController,
    GetIdCompanyProfileController,
    UpdatePutCompanyProfileController,
    UpdatePatchCompanyProfileController,
    DeleteCompanyProfileController
}