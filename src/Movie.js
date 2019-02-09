import React,{Component} from 'react'
import FavoriteUsers from './FavoriteUsers'

class Movie extends Component {
  
 render(){
 	return(
      <div>
    	<h2>{this.props.name}</h2>
      	{this.props.users.length > 0?<FavoriteUsers users={this.props.users}/>:<p>None of the current users liked this movie</p>}
      </div>
    ) 
 }
}

export default Movie