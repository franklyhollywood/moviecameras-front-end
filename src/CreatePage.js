import React, { Component } from 'react'
import { postNewMovieCamera, fetchAllLenses } from './Fetch-utils.js'
import './App.css'
import Button from '@material-ui/core/Button'
import Select from '@material-ui/core/Select'
import TextField from '@material-ui/core/TextField'
import InputLabel from '@material-ui/core/InputLabel'
export default class CreatePage extends Component {

state = {
    categories: [],
    make: '',
    model: '',
    image: '',
    year_made: '',
    sound: '',
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
            <div className = "create-container">
                <form className = "create-form" onSubmit={this.handleSubmit}>
                    <label>
                    
                        <TextField label = 'make'  variant = "standard" onChange={(e) => this.setState({make: e.target.value})} />
                    </label>
                    <label>
                        
                        <TextField label = 'model'  variant = "standard" onChange={(e) => this.setState({model: e.target.value})} />
                    </label>
                    <label>
                        
                        <TextField label = 'image'  variant = "standard" onChange={(e) => this.setState({image: e.target.value})} />
                    </label>
                    <label>
                        
                        <TextField label = 'year'  variant = "standard" onChange={(e) => this.setState({year_made: Number(e.target.value)})} />
                    </label>
                    <InputLabel>Sound</InputLabel>
                    
                    <Select value = {this.state.sound} onChange={(e) => this.setState({ sound: e.target.value })}>
                                
                                <option  value ='true'>
                                    True
                                </option>
                                <option  value ='false'>
                                    False
                                </option>
                        </Select>
                   
                   
                   <InputLabel>Lens</InputLabel>
                       <Select onChange={(e) => this.setState({ lens_id: Number(e.target.value )})}>
                            {this.state.categories.map(lens => 
                                <option key={`${lens.lens_type}-${lens.id}`} value={lens.id}>
                                    {lens.lens_type}
                                </option>)}
                        </Select>
                   
                   <Button
                   variant = 'contained'
                   color = 'primary'>
                       Create
                   </Button>
                </form>

            </div>
        )
    }
}
