/**
 * GET /
 * Home page.
 */
exports.index = (req, res) => {
  res.render('home', {
    title: 'Donate Now!'
  });
};

exports.demo = (req, res) => {
  res.render('demo', {
    title: 'Lading Page'
  });
};
