import React, {Component } from 'react'
import axios from 'axios';
class LoginForm extends Component {
   login (event) {
     event.preventDefaule()
     axios.get('https://northwesttheatre.cf/Theatre/user/showlist').then ((data) =>{
      console.log(data)
     })
     .catch((err) => {
       console.log(err)
     })
   }
   handlechange(e){
     let name = e.target.name
     let value = e.target.value
     this.setState({v:value})
   }
    render() {
        return (
            <div className="container">
    <div className="row">
      <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div className="card card-signin my-5">
          <div className="card-body">
            <h5 className="card-title text-center">Sign In</h5>
            <form className="form-signin" onSubmit={this.login}>
              <div className="form-label-group">
              <label>Email address</label>
                <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required />
              </div>
              <div className="form-label-group">
              <label>Password</label>
                <input type="password" id="inputPassword" className="form-control" placeholder="Password" required/>
              </div>
              <div className="custom-control custom-checkbox mb-3">
                <input type="checkbox" className="custom-control-input" id="customCheck1"/>
                <label className="custom-control-label" >Remember password</label>
              </div>
              <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign in</button>
              
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
        );
    }
}

export default LoginForm;