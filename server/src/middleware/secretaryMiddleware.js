const isSecretary = (req, res, next) => {
  if (req.user.role !== 'secretary') {
    return res.status(403).json({ error: 'The correct secretary credentials required' });
  }
  next();
};

module.exports = isSecretary;