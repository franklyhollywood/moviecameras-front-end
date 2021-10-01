import React, { Component } from 'react'
import './App.css'
import request from 'superagent';


export default class Input extends Component {
    state = {
        inputMake: '',
        inputModel: '',
        inputImage: '',
        inputYearMade: '',
        inputSound: '',
    };

    handleInputMake = (e) => {
        this.setState({inputMake: e.target.value})
    }
    
    handleInputModel = (e) => {
        this.setState({inputModel: e.target.value})
    }

    handleInputImage = (e) => {
        this.setState({inputImage: e.target.value})
    }

    handleInputYearMade = (e) => {
        this.setState({inputYearMade: e.target.value})
    }

    handleInputSound = (e) => {
        this.setState({inputSound: e.target.value})
    }

    handleSubmit = async (e) => {
        e.preventDefault()
         await request
            .post('https://moviecamerasii.herokuapp.com/moviecamerasII')
            .send({
                make: this.state.inputMake,
                model: this.state.inputModel,
                image: this.state.inputImage,
                year_made: this.state.inputYearMade,
                sound: this.state.inputSound
            })
      this.props.history.push('/result')
        
      }

    render() {
        return (
            
                <form onSubmit = {this.handleSubmit}>
                    <label>Submit new Camera</label>
                        <input onChange = {this.handleInputMake} type = 'text' value= {this.state.inputMake} placeholder = 'make'/>
                        <input onChange = {this.handleInputModel} type = 'text' value={this.state.inputModel} placeholder = 'model'/>
                        <input onChange = {this.handleInputImage} type = 'url' value={this.state.inputImage} placeholder = 'image'/>
                        <input onChange = {this.handleInputYearMade} type = 'number' value={this.state.inputYearMade} placeholder = 'year_made'/>
                        <label><input onChange = {this.handleInputSound} type="radio" name="boolean" value="true" />
                            True</label><br/>
                            <label><input onChange = {this.handleInputSound}  type="radio" name="boolean" value="false" />
                            False</label><br/>
                        <button>Submit</button>
                    
                </form>
            
        )
    }
}
