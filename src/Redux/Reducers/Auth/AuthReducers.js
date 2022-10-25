import {
  API_PENDING,
  API_ERROR,
  USER_LOGIN,
  EDIT_USER_PROFILE,
  LOG_OUT,
  ROLE,
  OTP_GENERATE,
  OTP_VERIFY,
  GRADE_SELECTION,
  FAV_SUBJECT,
  ALL_SCHOOL,
  SELECT_SCHOOL,
  ALL_GRADES,
  ALL_SUBJECT,
} from './AuthActions';

const initialState = {
  loading: false,
  data: '',
  verifyData: '',
  userProfile: null,
  userRole: null,
  allschool: null,
  allgrades: null,
  allSubject: null,
  selectschool: null,
};

const apiReducer = (state = initialState, action) => {
  switch (action.type) {
    case API_PENDING:
      return {
        ...state,
        loading: true,
      };
    case OTP_GENERATE:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    case OTP_VERIFY:
      return {
        ...state,
        verifyData: action.payload,
        loading: false,
      };
    case FAV_SUBJECT:
      return {
        ...state,
        favSubject: action.payload,
        loading: false,
      };
    case ALL_SUBJECT:
      return {
        ...state,
        allSubject: action.payload,
        loading: false,
      };
    case GRADE_SELECTION:
      return {
        ...state,
        gradeSelection: action.payload,
        loading: false,
      };
    case ALL_SCHOOL:
      return {
        ...state,
        allschool: action.payload,
        loading: false,
      };
    case ALL_GRADES:
      return {
        ...state,
        allgrades: action.payload,
        loading: false,
      };
    case SELECT_SCHOOL:
      return {
        ...state,
        selectschool: action.payload,
        loading: false,
      };
    case API_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    case USER_LOGIN:
      return {
        ...state,
        userProfile: action.user,
        loading: false,
      };
    case EDIT_USER_PROFILE:
      return {
        ...state,
        userProfile: action.data,
        loading: false,
      };
    case LOG_OUT:
      return {
        ...state,
        userProfile: null,
        loading: false,
      };
    case ROLE:
      return {
        ...state,
        userRole: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default apiReducer;
