/**
 * GET /
 * Home page.
 */
exports.index = (req, res) => {
  res.render('home', {
    title: 'Donate Now!'
  });
};

exports.newHome = (req, res) => {
  res.render('new-home', {
    title: 'Lading Page'
  });
};
