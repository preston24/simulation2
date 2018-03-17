module.exports = {
  create: (req, res, next) => {
    const dbInstance = req.app.get('db');
    const {
      user_id,
      property_name,
      property_desc,
      address,
      city,
      state,
      zip,
      image,
      loan_amt,
      monthly_mort,
      desired_rent
    } = req.body;
    const {session} = req;
    dbInstance.create_property( [session.user.id, property_name, property_desc, address, city, state, zip, image, loan_amt, monthly_mort, desired_rent] )
    .then( () => res.status(200).send() )
    .catch( () => res.status(500).send() );
  },

  getProperty: (req, res, next) => {
    const dbInstance = req.app.get('db');
    const {session} = req;

    dbInstance.get_property( [session.user.id] )
    .then( properties => res.status(200).send(properties) )
    .catch( () => res.status(500).send() );
  },

  delete: (req, res, next) => {
    const dbInstance = req.app.get('db');
    const {params} = req;
    const {session} = req;

    dbInstance.delete_property( [params.id, session.user.id] )
    .then( () => res.status(200).send() )
    .catch( () => res.status(500).send() );
  }
}