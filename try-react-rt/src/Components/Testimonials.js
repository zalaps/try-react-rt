import React, { Component } from "react";

class Testimonials extends Component {
  render() {
    if (this.props.data) {
      var testimonials = this.props.data.testimonials.map(function (testimonials) {
        return (
         <div key={testimonials.user}>
            <p className="justified">{testimonials.text}</p>
            <cite>{testimonials.user}</cite>
         </div>
        );
      });
    }

    return (
      <section id="testimonials">
        <div className="row education">
          <div className="two columns header-col">
            <h1>
              <span>Testimonials</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">{testimonials}</div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Testimonials;
