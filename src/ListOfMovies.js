import React, {Component} from 'react'
import Movie from './Movie'

class ListOfMovies extends Component {
    
  render(){
  	const movies = this.props.movies
    const profiles = this.props.profiles
    
    const users = function(movieID){
    	let moviesUsers = []
    	profiles.forEach(profile=>(profile.favoriteMovieID===String(movieID)?moviesUsers.push(profile.user.name):null))    
      	return moviesUsers
    }
    
    return(<div>
			{movies.map(movie => <Movie key={movie.id} name={movie.name} users={users(movie.id)}/>)}
           </div>
    )
  }
}

export default ListOfMovies