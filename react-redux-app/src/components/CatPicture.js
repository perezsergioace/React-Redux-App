import React from 'react';
import Navbar from '../Navbar';

//connect to store
import { connect } from 'react-redux';

// importing loader
import Loader from 'react-loader-spinner';

import { getPicture } from '../actions';

const CatPicture = (props) => {
	return (
		<div>
		<Navbar />
			<h1>A Cat</h1>
			{!props.picture && !props.isFetching && <p>Go Ahead and click the button to get a random cat picture!</p>}
			{props.isFetching && <Loader type="BallTriangle" color="#00BFFF" height={50} width={100} />}
			{props.picture && (
				<div className="cat-picture-container">
					<img className="cat-picture" src={props.picture} alt="random cat" />
				</div>
			)}
			<button onClick={props.getPicture}>Random Cat</button>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		picture: state.picture,
		isFetching: state.isFetching,
		error: state.error
	};
};

export default connect(mapStateToProps, { getPicture })(CatPicture);
