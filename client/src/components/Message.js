import React from 'react'
import { fetchMessage } from '../redux/actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Message extends React.Component {

	componentDidMount() {
    this.props.fetchMessage();
  }

	renderMessage = () => {
		return (
			<p>{this.props.message}</p>
		)
	}

	render() {
		return (
			<div>
				{this.renderMessage()}
			</div>
		)
	}
}

const mapStateToProps = state => {
		console.log(typeof(Object.values(state.message)))
	return {
    message: Object.values(state.message)
  };
};

export default connect(
  mapStateToProps,
  { fetchMessage }
)(Message);

Message.propTypes = {
  message: PropTypes.array.isRequired
};