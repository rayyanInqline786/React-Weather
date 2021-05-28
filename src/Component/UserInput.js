import React, { Component } from 'react';
import './Style/style.css'

class FormInput extends Component{
    state={
        cityName:''
    }
    render(){
        const submitHandler = (e)=>{
            e.preventDefault()
            // this.props.apiCall()
            this.props.apiCall(this.state.cityName)
            this.props.apiPicCall(this.state.cityName)
        }
        const changeHandler = (e)=>{
            this.setState({
                cityName:e.target.value
            })
        }
        return(
            <div className="container mt-5">
               <div className="row"> 
                <div className="col-lg-6">
                <form onSubmit={submitHandler}>
  <div className="mb-3">
    <label htmlFor="cityname" className="form-label"> <h4>Enter City Name</h4></label>
    <input type="text" className="form-control" id="cityname" aria-describedby="cityHelp" value={this.state.cityName} required onChange={changeHandler}></input>
    <div id="emailHelp" className="form-text">Enter City name to display weather update</div>
  </div>
  <button type="submit" className="btn btn-dark">Search</button>
</form>
            </div>
            </div>
            </div>
        )
    }
}

export default FormInput;