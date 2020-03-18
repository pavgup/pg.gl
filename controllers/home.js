/**
 * GET /
 * Home page.
 */
exports.index = (req, res) => {
  res.render('home', {
    title: 'Home'
  });
};

exports.newHome = (req, res) => {
  res.render('new-home', {
    title: 'Lading Page'
  });
};
