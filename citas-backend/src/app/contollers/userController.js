const UserService = require('../services/UserService');

class UserController {
  constructor() {
    this.userService = new UserService();
  }

  

  async getAllUsers(req, res) {
    try {
      console.log("Before Await");
      const users = await this.userService.getAllUsers();
      console.log("After Await");
      res.json(users);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async createUser(req, res) {
    try {
      const userData = req.body;
      const user = await this.userService.createUser(userData);
      res.json(user);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async getUser(req, res) {
    try {
      const userId = req.params.id;     
      const user = await this.userService.getUser(userId);
      res.json(user);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async updateUser(req, res) {
    try {
      const userId = req.params.id;
      const userData = req.body;
      const updatedUser = await this.userService.updateUser(userId, userData);
      res.json(updatedUser);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async deleteUser(req, res) {
    try {
      const userId = req.params.id;
      const deletedUser = await this.userService.deleteUser(userId);
      res.json(deletedUser);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async getUserByName(req, res) {
    try {
      const name = req.params.name;// Assuming the parameter is 'name'      
      const user = await this.userService.getUserByName(name);
      res.json(user);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async getAllUsersByName(req, res) {
    try {
      const { name, email } = req.query;            
      const users = await this.userService.getAllUsers(name, email);
      res.json(users);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}

module.exports = UserController;