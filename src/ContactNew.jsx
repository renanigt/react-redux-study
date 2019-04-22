import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addContact } from './actions';

class ContacNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contact: {
        name: '',
        phone: '',
        email: ''
      }
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleNameChange(event) {
    this.setState({ contact: { ...this.state.contact, name: event.target.value } })
  }

  handlePhoneChange(event) {
    this.setState({ contact: { ...this.state.contact, phone: event.target.value } })
  }

  handleEmailChange(event) {
    this.setState({ contact: { ...this.state.contact, email: event.target.value } })
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.dispatch(addContact(this.state.contact));
  }

  render() {
    const list = this.props.contacts.map((contact, index) =>
      <p key={index}>{contact.name}</p>
    )

    return(
      <div>
        {list}
        <form onSubmit={this.onSubmit}>
          <label htmlFor="contactName">Name:</label>
          <input type="text" name="contactName" value={this.state.contact.name} onChange={this.handleNameChange} /><br/>
          <label htmlFor="contactPhone">Phone:</label>
          <input type="text" name="contactPhone" value={this.state.contact.phone} onChange={this.handlePhoneChange} /><br/>
          <label htmlFor="contactEmail">Email:</label>
          <input type="text" name="contactEmail" value={this.state.contact.email} onChange={this.handleEmailChange} /><br/>
          <input type="submit" value="Save" />
        </form>
      </div>
    )
  }
}

const mapStateToProps = store => ({
  contacts: store.contacts
})

export default connect(mapStateToProps)(ContacNew);
