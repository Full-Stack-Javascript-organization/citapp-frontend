const CompanyRepository = require('../repositories/companyRepository');

class CompanyService {
  constructor() {
    this.companyRepository = new CompanyRepository();
  }

  async createCompany(companyData) {
    try {
      return await this.companyRepository.createCompany(companyData);
    } catch (err) {
      throw new Error('Failed to create company');
    }
  }

  async getCompany(companyId) {
    try {
      return await this.companyRepository.getCompany(companyId);
    } catch (err) {
      throw new Error('Failed to get company');
    }
  }

  async getAllCompanys() {
    try {      
      console.log("Before sleep");
      await new Promise(r => setTimeout(r, 2000));
      console.log("after sleep");
      return await this.companyRepository.getAllCompanys();
    } catch (err) {
      throw new Error('Failed to get companys');
    }
  }

  async updateCompany(companyId, companyData) {
    try {
      return await this.companyRepository.updateCompany(companyId, companyData);
    } catch (err) {
      throw new Error('Failed to update company');
    }
  }

  async deleteCompany(companyId) {
    try {
      return await this.companyRepository.deleteCompany(companyId);
    } catch (err) {
      throw new Error('Failed to delete company');
    }
  }

  async getCompanyByName(name) {
    try {
      const filter = { name: name }; 
      return await this.companyRepository.getCompany(filter);
    } catch (err) {
      throw new Error('Failed to get company');
    }
  }
  
  async getAllCompanys(name, email) {
    try {
      const filter = {};
      
      if (name) {
        filter.name = name;
      }
      
      if (email) {
        filter.email = email;
      }
      return await this.companyRepository.getAllCompanys(filter);
    } catch (err) {
      throw new Error('Failed to get companys');
    }
  }
}

module.exports = CompanyService;