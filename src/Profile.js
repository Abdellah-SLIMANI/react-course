import React from 'react';
import { fetchUserData, cancelFetch } from './dataFetcher';
import { Userlist } from './Userlist';

export class Profile extends React.Component {

    constructor(props){
        super(props);
        this.state = ({userData: null})
    }

    loadUserData(){
        this.setState({userData: null})
        this.fetchID = fetchUserData(this.props.username , (userData) => {
            this.setState({userData})
        })
    }

    componentDidMount(){
        this.loadUserData()
    }

    componentWillUnmount(){
        cancelFetch(this.fetchID)
    }

    componentDidUpdate(prevProps){
        if(prevProps.username !== this.props.username){
            cancelFetch(this.fetchID)
            this.loadUserData()
        }
    }

  render() {
    const isLoading = this.state.userData === null ? true : false;
    const name = isLoading ? "Loading name..." : this.state.userData.name
    const bio = isLoading ? "loading bio..." : this.state.userData.bio;
    const friends = isLoading ? [] : this.state.userData.friends;
    // const name = (this.state.userData)? this.state.userData.name : "Loading name..."; Badr's legacy

    let className = 'Profile';
    if (isLoading) {
      className += ' loading';
    }

    return (
      <div className={className}>
        <div className="profile-picture">
        {!isLoading && <img src={this.state.userData.profilePictureUrl}/>}
        </div>
        <div className="profile-body">
          <h2>{name}</h2>
          <h3>@{this.props.username}</h3>
          <p>{bio}</p>
          <h3>My friends</h3>
          <Userlist usernames={friends} onChoose={this.props.onChoose} />
        </div>
      </div>
    );
  }
}