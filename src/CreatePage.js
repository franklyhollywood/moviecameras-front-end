import React, { Component } from 'react'
import { postNewMovieCamera, fetchAllLenses } from './Fetch-utils.js'

export default class CreatePage extends Component {

state = {
    categories: [],
    make: '',
    model: '',
    image: '',
    year_made: '',
    sound: true,
    lens_id: 1
    
}

componentDidMount = async () => {
    const lenses = await fetchAllLenses()
    

    this.setState({categories: lenses})
}

handleSubmit = async e => {
    e.preventDefault();

    await postNewMovieCamera(this.state)

    this.props.history.push('/')
}

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Make
                        <input onChange={(e) => this.setState({make: e.target.value})} />
                    </label>
                    <label>
                        Model
                        <input onChange={(e) => this.setState({model: e.target.value})} />
                    </label>
                    <label>
                        Image
                        <input onChange={(e) => this.setState({image: e.target.value})} />
                    </label>
                    <label>
                        Year Made
                        <input onChange={(e) => this.setState({year_made: Number(e.target.value)})} />
                    </label>
                    <label>
                    Sound
                    <select value = {this.state.sound} onChange={(e) => this.setState({ sound: e.target.value })}>
                                
                                <option  value ='true'>
                                    True
                                </option>
                                <option  value ='false'>
                                    False
                                </option>
                        </select>
                   </label>
                   <label>
                       Lens
                       <select onChange={(e) => this.setState({ lens_id: Number(e.target.value )})}>
                            {this.state.categories.map(lens => 
                                <option key={`${lens.lens_type}-${lens.id}`} value={lens.id}>
                                    {lens.lens_type}
                                </option>)}
                        </select>
                   </label>
                   <button>
                       Create
                   </button>
                </form>

            </div>
        )
    }
}
