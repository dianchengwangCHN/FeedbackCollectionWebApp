import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSurveys, deleteSurvey } from "../../actions";

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  renderSurveys() {
    return this.props.surveys.map(survey => {
      return (
        <div className='card darken-1' key={survey._id}>
          <div className='card-content'>
            <span className='card-title'>
              {survey.title}
              <a
                className='right btn grey darken-2'
                onClick={() => {
                  this.props.deleteSurvey(survey._id);
                }}
              >
                DELETE
                <i
                  className='material-icons right'
                  style={{ color: "grey lighten-2" }}
                >
                  delete
                </i>
              </a>
            </span>
            <p>{survey.body}</p>
            <p className='right'>
              Sent On: {new Date(survey.dateSent).toLocaleDateString()}
            </p>
          </div>
          <div className='card-action'>
            <a>Yes: {survey.yes}</a>
            <a>No: {survey.no}</a>
          </div>
        </div>
      );
    });
  }

  render() {
    return <div>{this.renderSurveys()}</div>;
  }
}

function mapStateToProps({ surveys }) {
  return { surveys };
}

export default connect(
  mapStateToProps,
  { fetchSurveys, deleteSurvey }
)(SurveyList);
