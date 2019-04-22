import React, { Component } from 'react';
import { connect } from 'react-redux';

class ContacList extends Component {
  render() {
    const list = this.props.contacts.map((contact, index) =>
      <tr key={index}>
        <td>{contact.name}</td>
        <td>{contact.phone}</td>
        <td>{contact.email}</td>
      </tr>
    )

    return(
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
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
})

export default connect(mapStateToProps)(ContacList);
