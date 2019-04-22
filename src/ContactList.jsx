import React, { Component } from 'react';
import { connect } from 'react-redux';

class ContacList extends Component {
  render() {
    const list = this.props.contacts.map((contact, index) =>
      <p key={index}>{contact.name}</p>
    )

    return(
      <div>
        {list}
      </div>
    )
  }
}

const mapStateToProps = store => ({
  contacts: store.contacts
})

export default connect(mapStateToProps)(ContacList);
