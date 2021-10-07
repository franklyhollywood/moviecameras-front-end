import React, { Component } from 'react'
import { editMovieCamera, fetchAllLenses, deleteMovieCamera, fetchMovieCameraById } from './Fetch-utils.js'

//Update/Detail page for a single item, with the item's ID in the URL and fetch on load, 
//with form values (excluding dropdown) pre-loaded. 
//Submitting on this page will update the detailed item and reoute the user to the list. 
//That item will be updated in the list.	
//Delete button on detail/update page for a single item, and route to list on delete

export default class EditPage extends Component {
    state = {
        categories: [],
        make: '',
        model: '',
        image: '',
        year_made: '',
        sound: '',
        lens_id: '',
        
    }

    componentDidMount = async () => {
        const lenses = await fetchAllLenses()
        const moviecamera =  await fetchMovieCameraById(this.props.match.params.id)
        console.log(moviecamera);
        this.setState({
            categories: lenses,
            make: moviecamera.make,
            model: moviecamera.model,
            image: moviecamera.image,
            year_made: moviecamera.year_made,
            sound: moviecamera.sound,
            lens_id: moviecamera.lens_id,
        
        })
    }
      
    handleSubmit = async e => {
        e.preventDefault();

        await editMovieCamera(this.props.match.params.id, this.state)

        this.props.history.push('/')
    }

    deleteCamera = async () => {
      await deleteMovieCamera(this.props.match.params.id)
      this.props.history.push('/');
    }

    render() {
        return (
            <div>
               <form onSubmit={this.handleSubmit}>
                    <label>
                        Make
                        <input onChange={(e) => this.setState({make: e.target.value})} value = {this.state.make}/>
                    </label>
                    <label>
                        Model
                        <input onChange={(e) => this.setState({model: e.target.value})} value = {this.state.model} />
                    </label>
                    <label>
                        Image
                        <input onChange={(e) => this.setState({image: e.target.value})} value = {this.state.image} />
                    </label>
                    <label>
                        Year Made
                        <input onChange={(e) => this.setState({year_made: e.target.value})} value = {this.state.year_made} />
                    </label>
                    <label>
                        Sound
                        <select value = {this.state.sound} onChange={(e) => this.setState({ sound: e.target.value })}>
                                <option  value = 'true'>
                                    True
                                </option>
                                <option  value = 'false'>
                                    False
                                </option>
                        </select>           
                   </label>
                   <label>
                       Lens
                       <select value = {this.state.lens_id} onChange={(e) => this.setState({ lens_id: e.target.value })}>
                            {this.state.categories.map(lens => 
                                <option key={`${lens.lens_type}-${lens.id}`} value={lens.id}>
                                    {lens.lens_type}
                                </option>)}
                        </select>
                   </label>
                   <button>
                       Update
                   </button>
                   <button type = 'button' onClick = {this.deleteCamera}>
                       Delete
                   </button>
                </form>
            </div>
        )
    }
}
