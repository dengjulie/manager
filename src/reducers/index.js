import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import EmployeeFormReducer from './EmployeeFormReducer';

export default combineReducers({
  // dummy: () => []
  auth: AuthReducer,
  employeeForm: EmployeeFormReducer
});
