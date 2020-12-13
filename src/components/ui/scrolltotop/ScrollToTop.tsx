import React, { Component, ReactInstance } from "react";
import { withRouter } from "react-router-dom";

interface IProps {
    location: ReactInstance,
}

class ScrollToTop extends Component<IProps> {
    
    componentDidUpdate(prevProps: any) {

		if (this.props.location !== prevProps.location) {
			window.scrollTo(0, 0);
		}
	}

	render() {
		return <> 
        </>
	}
}

export default withRouter<any, any>(ScrollToTop);