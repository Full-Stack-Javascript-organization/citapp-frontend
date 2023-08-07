const Service = require('../../models/service');

class ServiceRepository {
  async createService(serviceData) {
    try {
      const service = new Service(serviceData);
      await service.save();
      return service;
    } catch (err) {
        console.log(`findOne error--> ${err}`);
      throw new Error('Failed to create service');
    }
  }

  async getService(serviceId) {
    try {
      const service = await Service.findById(serviceId);
      return service;
    } catch (err) {
      throw new Error('Failed to get service');
    }
  }

  async getAllServices() {
    try {
      const services = await Service.find();
      return services;
    } catch (err) {
      throw new Error('Failed to get services');
    }
  }

  async updateService(serviceId, serviceData) {
    try {
      const service = await Service.findByIdAndUpdate(serviceId, serviceData, { new: true });
      return service;
    } catch (err) {
      throw new Error('Failed to update service');
    }
  }

  async deleteService(serviceId) {
    try {
      const service = await Service.findByIdAndDelete(serviceId);
      return service;
    } catch (err) {
      throw new Error('Failed to delete service');
    }
  }

  async getService(filter) {
    try {
      const service = await Service.findOne(filter);
      return service;
    } catch (err) {
      throw new Error('Failed to get service');
    }
  }

  async getAllServices(filter) {
    try {
      const services = await Service.find(filter);
      return services;
    } catch (err) {
      throw new Error('Failed to get services');
    }
  }
}

module.exports = ServiceRepository;