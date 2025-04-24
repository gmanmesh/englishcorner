const isStaff = (req, res, next) => {
  if (req.user.role !== 'staff') {
    return res.status(403).json({ error: 'The correct staff credentials required' });
  }
  next();
};

module.exports = isStaff;