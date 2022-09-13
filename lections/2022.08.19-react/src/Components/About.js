import { Component } from "react";
import { Link } from "react-router-dom";

class About extends Component {
    render() {
        return (
            <>
                <h5>Hello from about page</h5>
                <Link to="/">Home</Link>
                <br></br>
                <Link to="/about/activity">Activity</Link>
            </>
        );
    }
}
export default About;
