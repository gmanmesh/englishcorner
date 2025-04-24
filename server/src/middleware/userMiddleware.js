const isUser = (req, res, next) => {
  if (req.user.role !== 'user') {
    return res.status(403).json({ error: 'The correct user credentials required' });
  }
  next();
};

module.exports = isUser;