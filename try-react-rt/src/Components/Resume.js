import React, { Component } from "react";

class Resume extends Component {
  render() {
    if (this.props.data) {
      var education = this.props.data.education.map(function (education) {
        return (
          <div key={education.school}>
            <h3>{education.school}</h3>
            <p className="justified">{education.description}</p>
          </div>
        );
      });

      var work = this.props.data.work.map(function (work) {
        return (
          <div key={work.company}>
            <h3>{work.company}</h3>
            <p className="justified">{work.description}</p>
          </div>
        );
      });

      var skills = this.props.data.skills.map(function (skills) {
        return (
          <div key={skills.name}>
            <h3>{skills.name}</h3>
            <p>{skills.stacknames}</p>
          </div>
        );
      });
    }

    return (
      <section id="resume">
        <div className="row education">
          <div className="two columns header-col">
            <h1>
              <span>Software Product Development</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">{education}</div>
            </div>
          </div>
        </div>

        <div className="row work">
          <div className="two columns header-col">
            <h1>
              <span>Software Development Outsourcing</span>
            </h1>
          </div>

          <div className="nine columns main-col">{work}</div>
        </div>

        <div className="row work">
          <div className="two columns header-col">
            <h1>
              <span>Techstacks</span>
            </h1>
          </div>

          <div className="nine columns main-col">{skills}</div>
        </div>
      </section>
    );
  }
}

export default Resume;
