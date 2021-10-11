import React, { Component } from 'react'
import { fetchAllMovieCameras } from './Fetch-utils.js'
import { Link } from 'react-router-dom'
import './App.css'

export default class ListPage extends Component {
    state = {
        allMovieCameras: [],
    }

    componentDidMount = async () => {
        const moviecameras = await fetchAllMovieCameras()

        this.setState( {allMovieCameras: moviecameras} )
    }



    render() {
    //    console.log(this.state.allMovieCameras[0]) 
        
        
        return (
            <div className = "container">
                {this.state.allMovieCameras.map ((singleCamera) =>
                <Link to={`EditPage/${singleCamera.id}`} key={`${singleCamera.model}-${singleCamera.id}`}>
                        <div className = "inner-container">
                            <img className = 'img' src={singleCamera.image} alt={singleCamera.make} />
                            <section>
                            <p className = 'make'>{singleCamera.make}</p>
                            <p>{singleCamera.model}</p>
                            <p>{singleCamera.year_made}</p>
                            <p>{singleCamera.lens_type}</p>
                            {
                                singleCamera.sound ? <p>Sound: True</p>
                                : <p>Sound: False</p>
                            }
                            </section>
                            
                    </div>
                    </Link>)
                }
            </div>
        )
    }
}
