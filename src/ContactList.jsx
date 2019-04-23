import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeContact } from './actions';

class ContacList extends Component {
  constructor(props) {
    super(props);
    this.removeContact = this.removeContact.bind(this);
  }

  removeContact(index) {
    this.props.removeContact(index);
  }

  render() {
    const list = this.props.contacts.map((contact, index) =>
      <tr key={index}>
        <td>{contact.name}</td>
        <td>{contact.phone}</td>
        <td>{contact.email}</td>
        <td><button onClick={() => this.removeContact(index)}>Remove</button></td>
      </tr>
    )

    return(
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {list}
        </tbody>
      </table>
    )
  }
}

const mapStateToProps = store => ({
  contacts: store.contacts
});

const mapDispatchToProps = dispatch => ({
  removeContact: index => dispatch(removeContact(index))
});

export default connect(mapStateToProps, mapDispatchToProps)(ContacList);
