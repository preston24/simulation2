module.exports = {
  login: (req, res, next) => {
    const dbInstance = req.app.get('db');
    const {username, user_pass} = req.body;
    const {session} = req

    dbInstance.login_user( [username, user_pass] )
    .then( user => { 
      session.user.id == user.id;
      session.user.username == user.username;
      res.status(200).send() })
    .catch( () => res.status(500).send() );
  },

  register: (req, res, next) => {
    const dbInstance = req.app.get('db');
    const {id, username} = req.body;
    const {session} = req;

    dbInstance.register_user( [username, user_pass] )
    .then( () => {
      session.user.id == user.id;
      session.user.username == username;
      res.status(200).send() })
    .catch( () => res.status(500).send() );
  }, 

  logout: (req, res, next) => {
    const {session} = req;
    session.destroy();
    res.status(200).send(req.session)
  }
}