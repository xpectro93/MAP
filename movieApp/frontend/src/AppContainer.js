import App from './App'
import { connect } from "react-redux";
// import {  } from "./actions/AppActions";
import { withRouter } from 'react-router-dom'

// const mapStateToProps = (state, ownProps) => {
//   return {
//     // users: state.dashboard.users,
//     // user:state.dashboard.user
//   };
// };
//
// const mapDispatchToProps = (dispatch, ownProps) => {
//
//   return {
//
//   };
// };

export default withRouter(connect(
  null, null
  // mapStateToProps,
  // mapDispatchToProps
)(App));
