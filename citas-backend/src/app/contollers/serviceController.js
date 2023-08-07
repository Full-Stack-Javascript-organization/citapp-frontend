const ServiceService = require('../services/servicesService');

class ServiceController {
  constructor() {
    this.serviceService = new ServiceService();
  }

  

  async getAllServices(req, res) {
    try {
      console.log("Before Await");
      const services = await this.serviceService.getAllServices();
      console.log("After Await");
      res.json(services);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async createService(req, res) {
    try {
      const serviceData = req.body;
      const service = await this.serviceService.createService(serviceData);
      res.json(service);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async getService(req, res) {
    try {
      const serviceId = req.params.id;     
      const service = await this.serviceService.getService(serviceId);
      res.json(service);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async updateService(req, res) {
    try {
      const serviceId = req.params.id;
      const serviceData = req.body;
      const updatedService = await this.serviceService.updateService(serviceId, serviceData);
      res.json(updatedService);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async deleteService(req, res) {
    try {
      const serviceId = req.params.id;
      const deletedService = await this.serviceService.deleteService(serviceId);
      res.json(deletedService);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async getServiceByName(req, res) {
    try {
      const name = req.params.name;// Assuming the parameter is 'name'      
      const service = await this.serviceService.getServiceByName(name);
      res.json(service);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async getAllServicesByName(req, res) {
    try {
      const { name, email } = req.query;            
      const services = await this.serviceService.getAllServices(name, email);
      res.json(services);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}

module.exports = ServiceController;