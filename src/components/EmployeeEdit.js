import React, { Component } from 'react';
import { connect } from 'react-redux';
import EmployeeForm from './EmployeeForm';
import { Card, CardSection, Button } from './common';

class EmployeeEdit extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <EmployeeForm />
          <Button>
            Save Changes
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default connect()(EmployeeEdit);
