const UserModel = require('./model');

const handlers = {
  async signUp(req, res, next) {
    try {
      const user = new UserModel(req.body);
      await user.save();
      const token = await user.generateAuthToken();
      res.json({ user, token });
    } catch (error) {
      next(error);
      res.status(400).send(error);
    }
  },
  async signIn(req, res, next) {
    try {
      const { email, username, password } = req.body;
      let user;

      if (email) {
        user = await UserModel.findByCredentials(email, '', password);
      } else if (username) {
        user = await UserModel.findByCredentials('', username, password);
      }

      if (!user) {
        return res.status(401).send({ error: 'Login failed! Please check again' });
      }

      const token = await user.generateAuthToken();
      res.json({ token });
    } catch (error) {
      console.log(error);
      next(error);
      res.status(400).send(error);
    }
  },
  async readTokenMiddleware(req, res, next) {
    try {
      let accessToken = req.headers.authorization;
      if (accessToken) {
        let userData = verifyToken(accessToken);
        req.user = userData;
      }
      next();
    } catch (err) {
      next(new Error('Invalid access token!'));
    }
  },
};

module.exports = handlers;
