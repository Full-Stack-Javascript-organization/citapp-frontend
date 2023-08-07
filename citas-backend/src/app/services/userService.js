const UserRepository = require('../repositories/UserRepository');

class UserService {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async createUser(userData) {
    try {
      return await this.userRepository.createUser(userData);
    } catch (err) {
      throw new Error('Failed to create user');
    }
  }

  async getUser(userId) {
    try {
      return await this.userRepository.getUser(userId);
    } catch (err) {
      throw new Error('Failed to get user');
    }
  }

  async getAllUsers() {
    try {      
      console.log("Before sleep");
      await new Promise(r => setTimeout(r, 2000));
      console.log("after sleep");
      return await this.userRepository.getAllUsers();
    } catch (err) {
      throw new Error('Failed to get users');
    }
  }

  async updateUser(userId, userData) {
    try {
      return await this.userRepository.updateUser(userId, userData);
    } catch (err) {
      throw new Error('Failed to update user');
    }
  }

  async deleteUser(userId) {
    try {
      return await this.userRepository.deleteUser(userId);
    } catch (err) {
      throw new Error('Failed to delete user');
    }
  }

  async getUserByName(name) {
    try {
      const filter = { name: name }; 
      return await this.userRepository.getUser(filter);
    } catch (err) {
      throw new Error('Failed to get user');
    }
  }
  
  async getAllUsers(name, email) {
    try {
      const filter = {};
      
      if (name) {
        filter.name = name;
      }
      
      if (email) {
        filter.email = email;
      }
      return await this.userRepository.getAllUsers(filter);
    } catch (err) {
      throw new Error('Failed to get users');
    }
  }
}

module.exports = UserService;