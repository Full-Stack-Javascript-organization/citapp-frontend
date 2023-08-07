const CompanyService = require('../services/companyService');

class CompanyController {
  constructor() {
    this.companyService = new CompanyService();
  }

  

  async getAllCompanys(req, res) {
    try {
      console.log("Before Await");
      const companys = await this.companyService.getAllCompanys();
      console.log("After Await");
      res.json(companys);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async createCompany(req, res) {
    try {
      const companyData = req.body;
      const company = await this.companyService.createCompany(companyData);
      res.json(company);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async getCompany(req, res) {
    try {
      const companyId = req.params.id;     
      const company = await this.companyService.getCompany(companyId);
      res.json(company);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async updateCompany(req, res) {
    try {
      const companyId = req.params.id;
      const companyData = req.body;
      const updatedCompany = await this.companyService.updateCompany(companyId, companyData);
      res.json(updatedCompany);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async deleteCompany(req, res) {
    try {
      const companyId = req.params.id;
      const deletedCompany = await this.companyService.deleteCompany(companyId);
      res.json(deletedCompany);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async getCompanyByName(req, res) {
    try {
      const name = req.params.name;// Assuming the parameter is 'name'      
      const company = await this.companyService.getCompanyByName(name);
      res.json(company);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async getAllCompanysByName(req, res) {
    try {
      const { name, email } = req.query;            
      const companys = await this.companyService.getAllCompanys(name, email);
      res.json(companys);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}

module.exports = CompanyController;