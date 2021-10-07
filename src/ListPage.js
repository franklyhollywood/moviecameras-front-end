import React, { Component } from 'react'
import { fetchAllMovieCameras } from './Fetch-utils.js'
import { Link } from 'react-router-dom'

export default class ListPage extends Component {
    state = {
        allMovieCameras: [],
    }

    componentDidMount = async () => {
        const moviecameras = await fetchAllMovieCameras()

        this.setState( {allMovieCameras: moviecameras} )
    }



    render() {
       console.log(this.state.allMovieCameras[0]) 
        
        
        return (
            <div>
                {this.state.allMovieCameras.map ((singleCamera) =>
                <Link to={`EditPage/${singleCamera.id}`} key={`${singleCamera.model}-${singleCamera.id}`}>
                        <div>
                            <p>{singleCamera.make}</p>
                            <p>{singleCamera.model}</p>
                            <img src={singleCamera.image} alt={singleCamera.make} />
                            <p>{singleCamera.year_made}</p>
                            {
                                singleCamera.sound ? <p>Sound: True</p>
                                : <p>Sound: False</p>
                            }
                            
                            <p>{singleCamera.lens_id}</p>
                    </div>
                    </Link>)
                }
            </div>
        )
    }
}
