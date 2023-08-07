const User = require('../../models/User');

class UserRepository {
  async createUser(userData) {
    try {
      const user = new User(userData);
      await user.save();
      return user;
    } catch (err) {
        console.log(`findOne error--> ${err}`);
      throw new Error('Failed to create user');
    }
  }

  async getUser(userId) {
    try {
      const user = await User.findById(userId);
      return user;
    } catch (err) {
      throw new Error('Failed to get user');
    }
  }

  async getAllUsers() {
    try {
      const users = await User.find();
      return users;
    } catch (err) {
      throw new Error('Failed to get users');
    }
  }

  async updateUser(userId, userData) {
    try {
      const user = await User.findByIdAndUpdate(userId, userData, { new: true });
      return user;
    } catch (err) {
      throw new Error('Failed to update user');
    }
  }

  async deleteUser(userId) {
    try {
      const user = await User.findByIdAndDelete(userId);
      return user;
    } catch (err) {
      throw new Error('Failed to delete user');
    }
  }

  async getUser(filter) {
    try {
      const user = await User.findOne(filter);
      return user;
    } catch (err) {
      throw new Error('Failed to get user');
    }
  }

  async getAllUsers(filter) {
    try {
      const users = await User.find(filter);
      return users;
    } catch (err) {
      throw new Error('Failed to get users');
    }
  }
}

module.exports = UserRepository;