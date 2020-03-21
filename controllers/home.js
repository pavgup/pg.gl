/**
 * GET /
 * Home page.
 */

exports.index = (req, res) => {
  res.render('index', {
    title: 'Lading Page'
  });
};

exports.learn_more = (req, res) => {
  res.render('learn-more', {
    title: 'Learn More'
  });
};
