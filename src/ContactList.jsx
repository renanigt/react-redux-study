import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeContact } from './actions';

class ContacList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: ''
    }

    this.removeContact = this.removeContact.bind(this);
    this.handleSearchInput = this.handleSearchInput.bind(this);
  }

  removeContact(index) {
    this.props.removeContact(index);
  }

  handleSearchInput(event) {
    this.setState({ searchText: event.target.value });
  }

  render() {
    const list = this.props.contacts.filter(contact =>
      contact.name.toLowerCase().startsWith(this.state.searchText.toLowerCase())
    ).map((contact, index) =>
      <tr key={contact.id}>
        <td>{contact.name}</td>
        <td>{contact.phone}</td>
        <td>{contact.email}</td>
        <td><button onClick={() => this.removeContact(contact.id)}>Remove</button></td>
      </tr>
    )

    return(
      <div>
        <div>
          <input type="text" onChange={this.handleSearchInput} />
        </div>
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
      </div>
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
