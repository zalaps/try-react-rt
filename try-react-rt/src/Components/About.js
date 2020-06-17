import React, { Component } from 'react';

class About extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var profilepic= "images/"+this.props.data.image;
      var bio = this.props.data.bio;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var resumeDownload = this.props.data.resumedownload;
      var people = this.props.data.companyvalues.people;
      var journey = this. props.data.companyvalues.journey;
      var progress = this.props.data.companyvalues.progress;
    }

    return (
      <section id="about">
      <div className="row">
         <div className="twelve columns main-col">
            <h2>About BlackHole</h2>
            <p>{bio}</p>
            <div className="row">
               <div className="twelve columns">
                  <h2>BlackHole Values</h2>
                  <div className="row">
                     <div className="four columns">
                        <h3>People</h3>
                        <p>{people}</p>
                     </div>                     
                     <div className="four columns">
                        <h3>Journey</h3>
                        <p>{journey}</p>
                     </div>                     
                     <div className="four columns">
                        <h3>Progres</h3>
                        <p>{progress}</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default About;
