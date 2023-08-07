const ServiceRepository = require('../repositories/serviceRepository');

class ServiceService {
  constructor() {
    this.serviceRepository = new ServiceRepository();
  }

  async createService(serviceData) {
    try {
      return await this.serviceRepository.createService(serviceData);
    } catch (err) {
      throw new Error('Failed to create service');
    }
  }

  async getService(serviceId) {
    try {
      return await this.serviceRepository.getService(serviceId);
    } catch (err) {
      throw new Error('Failed to get service');
    }
  }

  async getAllServices() {
    try {      
      console.log("Before sleep");
      await new Promise(r => setTimeout(r, 2000));
      console.log("after sleep");
      return await this.serviceRepository.getAllServices();
    } catch (err) {
      throw new Error('Failed to get services');
    }
  }

  async updateService(serviceId, serviceData) {
    try {
      return await this.serviceRepository.updateService(serviceId, serviceData);
    } catch (err) {
      throw new Error('Failed to update service');
    }
  }

  async deleteService(serviceId) {
    try {
      return await this.serviceRepository.deleteService(serviceId);
    } catch (err) {
      throw new Error('Failed to delete service');
    }
  }

  async getServiceByName(name) {
    try {
      const filter = { name: name }; 
      return await this.serviceRepository.getService(filter);
    } catch (err) {
      throw new Error('Failed to get service');
    }
  }
  
  async getAllServices(name, email) {
    try {
      const filter = {};
      
      if (name) {
        filter.name = name;
      }
      
      if (email) {
        filter.email = email;
      }
      return await this.serviceRepository.getAllServices(filter);
    } catch (err) {
      throw new Error('Failed to get services');
    }
  }
}

module.exports = ServiceService;