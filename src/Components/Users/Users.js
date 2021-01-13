import React, { Component } from 'react'
import UserItem from './UserItems';


class Users extends Component {
  state= {
    users:[
      {id: 'id',
      login: 'angelika',
      avatar_url: 'http://google.com',
      html_url: 'https://github.com/'},
      {id: 'id',
      login: 'bobby',
      avatar_url: 'http://google.com',
      html_url: 'https://github.com/'},
      {id: 'id',
      login: 'ciara',
      avatar_url: 'http://google.com',
      html_url: 'https://github.com/'}
    ]
  }
  render() {
    return (
      <div style={userStyle}>
        {this.state.users.map(user => (
          <UserItem key={user.id} user={user}/>
        ))}
      </div>
    )
  }
}

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat( 3, 1fr)',
  gridGap: '1rem'
}

export default Users
