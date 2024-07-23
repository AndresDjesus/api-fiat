const {validatesSChemaCreateCompany, validatesSChemaGetIdCompany, validatesSChemaUpdatePutCompany, validatesSChemaUpdatePatchCompany, validatesSChemaDeleteCompany} = require('../validators');
const {createCompany, getIdCompany, updatePutCompany, updatePatchCompany, deleteCompany, getCompany} = require('../services');


const GetCompanyController = async (req, res) => {
    try {
        const company = await getCompany();
        return res.json(company);
    } catch (err) {
        return res.status(500).send({ message: err.message, stack: err.stack });
    }
}
const CreateCompanyController = async (req, res) => {
    try { 
        const { error } = validatesSChemaCreateCompany.validate({ ...req.body }, { abortEarly: false });
        if(error) {
            const e = new Error();
            e.status = 400;
            e.message = error.details.map((err) => err.message).join(', ');
            throw e;
        }
        const company = await createCompany(req.body);
        return res.json(company);
    } catch (err) {
        if(err.status === 400) {
            return res.status(err.status).send({ message: err.message, stack: err.stack });
        }
        return res.status(500).send({ message: err.message, stack: err.stack });
    }
}

const GetIdCompanyController = async (req, res) => { 
    try {
        const { id } = req.params;
        const company = await getIdCompany(id);
        return res.json(company);
    } catch (err) {
        return res.status(500).send({ message: err.message, stack: err.stack });
    }
}

const UpdatePutCompanyController = async (req, res) => {
    try {
        const { error } = validatesSChemaUpdatePutCompany.validate({ ...req.body }, { abortEarly: false });
        if(error) {
            const e = new Error();
            e.status = 400;
            e.message = error.details.map((err) => err.message).join(', ');
            throw e;
        }
        const { id } = req.params;
        const updatedCompany = req.body; //datos de la categoria actualizado
        const company = await updatePutCompany(id, {...updatedCompany});
        if(company[0] === 0) {
            return res.status(404).json({ message: 'Companía no encontrada' });
        }
        res.status(200).json({ message: 'Companía actualizada correctamente', data: {...updatedCompany} });
    } catch (err) {
        console.log(err);
        if(err.status === 400) {
            return res.status(err.status).send({ message: err.message, stack: err.stack });
        }
        return res.status(500).send({ message: err.message, stack: err.stack });
    }
}

const UpdatePatchCompanyController = async (req, res) => {
    try {
        const { error } = validatesSChemaUpdatePatchCompany.validate({ ...req.body }, { abortEarly: false });
        if(error) {
            const e = new Error();
            e.status = 400;
            e.message = error.details.map((err) => err.message).join(', ');
            throw e;
        }
        const { id } = req.params;
        const updatedCompany = req.body; //datos de la categoria actualizado
        const company = await updatePatchCompany(id, {...updatedCompany});
        if(company[0] === 0) {
            return res.status(404).json({ message: 'Companía no encontrada' });
        }
        res.status(200).json({ message: 'Companía actualizada correctamente', data: { ... updatedCompany } });
    } catch (err) {
        if(err.status === 400) {
            return res.status(err.status).send({ message: err.message, stack: err.stack });
        }   
        return res.status(500).send({ message: err.message, stack: err.stack });
    }
}

const DeleteCompanyController = async (req, res) => {
    try {
        const { id } = req.params;
        const company = await deleteCompany(id);
        if(company[0] === 0) {
            return res.status(404).json({ message: 'Companía no encontrada' });
        }
        res.status(200).json({ message: 'Companía eliminada correctamente' });
    } catch (err) {
        return res.status(500).send({ message: err.message, stack: err.stack });
    }
}

module.exports = {
    CreateCompanyController,
    GetIdCompanyController,
    UpdatePutCompanyController,
    UpdatePatchCompanyController,
    DeleteCompanyController,
    GetCompanyController
}
