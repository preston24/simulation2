const initialState = {
  user: null,
  properties: [],
  name: '',
  description: '',
  address: '',
  city: '',
  prop_state: '',
  zip: null,
  image: '',
  loan_amt: 0,
  monthly_mort: 0,
  desired_rent: 0,
  reccommended_rent: 0
};

const UPDATE_USER = 'UPDATE_USER';
const UPDTATE_PROPERTIES = 'UPDATE_PROPERTIES';
const UPDATE_NAME = 'UPDATE_NAME';
const UPDATE_DESCRIPTION = 'UPDATE_DESCRIPTION';
const UPDATE_ADDRESS = 'UPDATE_ADRESS';
const UPDATE_CITY = 'UPDATE_CITY';
const UPDATE_STATE = 'UPDATE_STATE';
const UPDATE_ZIP = 'UPDATE_ZIP';
const UPDATE_IMAGE = 'UPDATE_IMAGE';
const UPDATE_LOAN_AMT = 'UPDATE_LOAN_AMT';
const UPDATE_MONTHLY_MORT = 'UPDATE_MONTHLY_MORT';
const UPDATE_DESIRED_RENT = 'UPDATE_DESIRED_RENT';
const UPDATE_RECOMMENDED_RENT = 'UPDATE_RECOMMENDED_RENT';


function reducer(state = initialState, action){
  switch(action.type) {
    case UPDATE_USER:
      return Object.assign( {}, state, { user: action.payload } );
    case UPDTATE_PROPERTIES:
      return Object.assign( {}, state, { properties: action.payload } );
    case UPDATE_NAME: 
      return Object.assign( {}, state, { name: action.payload } );
    case UPDATE_DESCRIPTION: 
      return Object.assign( {}, state, { description: action.payload } );
    case UPDATE_ADDRESS:
      return Object.assign( {}, state, { address: action.payload } );
    case UPDATE_CITY: 
      return Object.assign( {}, state, { city: action.payload } );
    case UPDATE_STATE:
      return Object.assign( {}, state, { state: action.payload } );
    case UPDATE_ZIP:
      return Object.assign( {}, state, { zip: action.payload } );
    case UPDATE_IMAGE:
      return Object.assign( {}, state, { image: action.payload } );
    case UPDATE_LOAN_AMT:
      return Object.assign( {}, state, { loan_amt: action.payload } );
    case UPDATE_MONTHLY_MORT:
      return Object.assign( {}, state, { monthly_mort: action.payload } );
    case UPDATE_DESIRED_RENT:
      return Object.assign( {}, state, { desired_rent: action.payload } );
    case UPDATE_RECOMMENDED_RENT:
      return Object.assign( {}, state, { reccommended_rent: action.payload } );

    default: return state;
  }
}

export function updateUser(user) {
  return {
    type: UPDATE_USER,
    payload: user
  };
}

export function updateProperties(properties) {
  return {
    type: UPDTATE_PROPERTIES,
    payload: properties
  };
}

export function updateName(name) {
  return {
    type: UPDATE_NAME,
    payload: name
  };
}

export function updateDescription(description) {
  return {
    type: UPDATE_DESCRIPTION,
    payload: description
  };
}

export function updateAddress(address) {
  return {
    type: UPDATE_ADDRESS,
    payload: address
  };
}

export function updateCity(city) {
  return {
    type: UPDATE_CITY,
    payload: city
  };
}

export function updateState(state) {
  return {
    type: UPDATE_STATE,
    payload: state
  };
}

export function updateZip(zip) {
  return {
    type: UPDATE_ZIP,
    payload: zip
  };
}

export function updateImage(image) {
  return {
    type: UPDATE_IMAGE,
    payload: image
  };
}

export function updateLoanAmt(loan_amt) {
  return {
    type: UPDATE_LOAN_AMT,
    payload: loan_amt 
  };
}

export function updateMonthlyMort(monthly_mort) {
  return {
    type: UPDATE_MONTHLY_MORT,
    payload: monthly_mort
  };
}

export function updateDesiredRent(desired_rent) {
  return {
    type: UPDATE_DESIRED_RENT,
    payload: desired_rent
  };
}

export function updateRecommendedRent(reccommended_rent) {
  return {
    type: UPDATE_RECOMMENDED_RENT,
    payload: reccommended_rent
  };
}



export default reducer;