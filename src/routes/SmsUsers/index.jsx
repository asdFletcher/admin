import React, { Component } from 'react';
import { connect } from 'react-redux';

import smsUsersStateBranch from '../../state/sms-users';

class SmsUsers extends Component {
  componentDidMount() {
    const { requestTotalCount, requestSmsUsersByState } = this.props;
    requestTotalCount();
    requestSmsUsersByState();
  }

  render() {
    return (
      <React.Fragment>
        <div>Total number of sms users: {this.props.totalSmsUsers}</div>
        
        {/* <div>WA users: {this.props.smsUsersByState}</div> */}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  console.log(`in MSTP: `, state);
  return ({
    totalSmsUsers: smsUsersStateBranch.selectors.getTotalSmsUsers(state),
    smsUsersByState: smsUsersStateBranch.selectors.getSmsUsersByState(state),
  })
};

const mapDispatchToProps = dispatch => ({
  requestTotalCount: () => dispatch(smsUsersStateBranch.actions.requestTotalCount()),
  requestSmsUsersByState: () => dispatch(smsUsersStateBranch.actions.requestSmsUsersByState()),
});


export default connect(mapStateToProps, mapDispatchToProps)(SmsUsers);