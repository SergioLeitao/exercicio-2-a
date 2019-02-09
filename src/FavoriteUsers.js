import React,{Component} from 'react'

class FavoriteUsers extends Component{
	render(){
		return(
        <div>
          <p>Liked By:</p>
          <ul>{this.props.users.map(user=><li key={user}>{user}</li>)}
          </ul>
        </div>
        )
	}
}

export default FavoriteUsers