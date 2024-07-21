const {data} = require('joi');
const db = require('../../../utils/sequelize');


const createImage = async (data) => {
    try {

    if (data.service_id && data.vehicle_id) {
      throw new Error('We should provide only one of these fields: service_id, vehicle_id');
    }
    if (data.service_id && !await db.services.findOne({ where: { id: data.service_id } })) {
      throw new Error('Service not found');
    }

    if (data.vehicle_id && !await db.vehicles.findOne({ where: { id: data.vehicle_id } })) {
      throw new Error('Vehicle not found');
    }

    // Crear la imagen
    return await db.images.create(data);
  } catch (e) {
    throw e;
  }
};

const getImages = async () => {
    try {
        return await db.images.findAll();
    } catch (e) {
        throw e;
    }
}

const getIdImage = async (id) => {
    try {
        return await db.images.findByPk(id);
    } catch (e) {
        throw e;
    }
}

const updatePutImage = async (id, data) => {
    try {
        if (data.service_id && data.vehicle_id) {
            throw new Error('We should provide only one of these fields: service_id, vehicle_id');
          }
          if (data.service_id && !await db.services.findOne({ where: { id: data.service_id } })) {
            throw new Error('Service not found');
          }
      
          if (data.vehicle_id && !await db.vehicles.findOne({ where: { id: data.vehicle_id } })) {
            throw new Error('Vehicle not found');
          }

          const image = await db.images.findOne({ where: { id } });

          if (!image) {
            throw new Error('Image not found');
          }

          if(image.vehicle_id && data.service_id) {
            throw new Error('You cant update an image from vehicles to services');
          }

          if(image.service_id && data.vehicle_id) {
            throw new Error('You cant update an image from services to vehicles');
          }
          
        return await db.images.update({ ...data }, { where: { id } });    
    } catch (e) {
        throw e;
    }
}   
const updatePatchImage = async (id,data) => {
    try {
        if (data.service_id && data.vehicle_id) {
            throw new Error('We should provide only one of these fields: service_id, vehicle_id');
          }
          if (data.service_id && !await db.services.findOne({ where: { id: data.service_id } })) {
            throw new Error('Service not found');
          }
      
          if (data.vehicle_id && !await db.vehicles.findOne({ where: { id: data.vehicle_id } })) {
            throw new Error('Vehicle not found');
          }

          const image = await db.images.findOne({ where: { id } });

          if (!image) {
            throw new Error('Image not found');
          }

          if(image.vehicle_id && data.service_id) {
            throw new Error('You cant update an image from vehicles to services');
          }

          if(image.service_id && data.vehicle_id) {
            throw new Error('You cant update an image from services to vehicles');
          }
        return await db.images.update({ ...data }, { where: { id } });    
    } catch (e) {
        throw e;
    }
}                          
const deleteImage = async (id) => {
            try {
              // Verifica si la imagen está asociada a un vehículo o servicio antes de eliminarla
              const image = await db.images.findByPk(id);
          
              if (!image) {
                throw new Error('La imagen no existe.');
              }
              if (image && (image.vehicle_id|| image.services_id)) {
                throw new Error('La imagen está asociada a un vehículo o servicio. No se puede eliminar.');
              }
          
   
        return await db.images.destroy({ where: { id } });
    } catch (e) {
        throw e;
    }
}

module.exports = {
    createImage, getImages, getIdImage, updatePutImage, updatePatchImage, deleteImage
}