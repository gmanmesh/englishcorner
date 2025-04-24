const isStudent = (req, res, next) => {
  if (req.user.role !== 'student') {
    return res.status(403).json({ error: 'The correct student credentials required' });
  }
  next();
};

module.exports = isStudent;