module.exports = function(req, res, next) {

  if(!req.session.user) {
    req.session.user = {id: null, username: ''};
    console.log(1111111111, req.session.user)
  } else {
    console.log(222222222222, req.session.user)
  }

  next();
}