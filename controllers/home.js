/**
 * GET /
 * Home page.
 */
exports.index = (req, res) => {
  res.render('call-1', {
    title: 'Donate Now!'
  });
};

exports.demo = (req, res) => {
  res.render('demo', {
    title: 'Lading Page'
  });
};

exports.call1 = (req, res) => {
  res.render('call-1', {
    title: 'Lading Page'
  });
};

exports.providers = (req, res) => {
  res.render('providers', {
    title: 'Provider Donations'
  });
};
