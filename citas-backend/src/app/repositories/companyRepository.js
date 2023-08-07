const Company = require('../../models/company');

class CompanyRepository {
  async createCompany(companyData) {
    try {
      const company = new Company(companyData);
      await company.save();
      return company;
    } catch (err) {
        console.log(`findOne error--> ${err}`);
      throw new Error('Failed to create company');
    }
  }

  async getCompany(companyId) {
    try {
      const company = await Company.findById(companyId);
      return company;
    } catch (err) {
      throw new Error('Failed to get company');
    }
  }

  async getAllCompanys() {
    try {
      const companys = await Company.find();
      return companys;
    } catch (err) {
      throw new Error('Failed to get companys');
    }
  }

  async updateCompany(companyId, companyData) {
    try {
      const company = await Company.findByIdAndUpdate(companyId, companyData, { new: true });
      return company;
    } catch (err) {
      throw new Error('Failed to update company');
    }
  }

  async deleteCompany(companyId) {
    try {
      const company = await Company.findByIdAndDelete(companyId);
      return company;
    } catch (err) {
      throw new Error('Failed to delete company');
    }
  }

  async getCompany(filter) {
    try {
      const company = await Company.findOne(filter);
      return company;
    } catch (err) {
      throw new Error('Failed to get company');
    }
  }

  async getAllCompanys(filter) {
    try {
      const companys = await Company.find(filter);
      return companys;
    } catch (err) {
      throw new Error('Failed to get companys');
    }
  }
}

module.exports = CompanyRepository;