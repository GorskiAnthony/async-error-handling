const handleError = (err, req, res, next) => {
  if (err instanceof Error) res.status(500).json({ error: err.message });
  else next();
};

module.exports = { handleError };
