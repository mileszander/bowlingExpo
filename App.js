import React, { Component } from 'react';
import MainHeader from './src/components/header';
import GoBowl from './src/components/goBowl';
import UserSignUp from './src/components/signUp'
import GameBoard from './src/components/gameBoard'
import {Text, View} from 'react-native';


export default class App extends Component {
  constructor() {
    super () 
    this.state = {
        page: 2,
        user: '',
        users: ['mikes','jennifer']
    }
    this.nextPage=this.nextPage.bind(this)
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  //iterate through pages
  nextPage(){
    let curPage = this.state.page 
    this.setState({page: (curPage += 1)})
    console.log('clicked next page!')
  }

  //functions for accepting users
  handleChange(event) {
    console.log(event)
    this.setState({user: event})
  }

  handleSubmit(event) {
    let individ = this.state.user
    let allUsers = this.state.users
    console.log('wow, I hit enter')
    allUsers.push(individ)
    this.setState({users: allUsers})
    this.setState({user: ''})
    console.log(this.state.users)
  }

    render() {
        if(this.state.page===0) {
            return (
              <GoBowl nextPage={this.nextPage}/>
            )}
        else if (this.state.page===1){
          return (
              <UserSignUp nextPage={this.nextPage} 
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              users={this.state.users}/>
          )
        } else if (this.state.page===2) {
            return (
              <GameBoard users={this.state.users}/>
            )
        }
    }
}
