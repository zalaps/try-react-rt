import React, { Component } from 'react';

class Testimonials extends Component {
   render() {

      if (this.props.data) {
         var testimonials = this.props.data.testimonials.map(function (testimonials) {
            return <li key={testimonials.user}>
               <blockquote>
                  <p className="justified">{testimonials.text}</p>
                  <cite>{testimonials.user}</cite>
               </blockquote>
            </li>
         })
      }

      return (
         <section id="testimonials">
            <div className="row work">
               <div className="row">
                  <div className="two columns header-col">
                     <h1>
                        <span>Client Testimonials</span>
                     </h1>
                  </div>

                  <div className="ten columns main-col">
                     <ul className="slides">
                        {testimonials}
                     </ul>
                  </div>
               </div>
            </div>
         </section>
      );
   }
}

export default Testimonials;
