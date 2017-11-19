import React, {Component} from 'react';

export class Home extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
            <p>It's a new Component</p>     
            <p>Your name is {this.props.name}, your age is {this.props.age }</p>
            <p>User Object => Name: {this.props.user.name}</p>
            <div>
                <h4>Hobbies</h4>
                <ul>
                    {this.props.user.hobbies.map((hobby, i) => <li key={i}>{hobby}</li>)}
                </ul>
            </div>
            <hr/>
            {this.props.children}
            </div>
        )
    }
}

//Google React Proptypes
//Proptypes er depricated
/*Home.propTypes = {
    name: React.PropTypes.string,
    age: React.PropTypes.number,
    user: React.PropTypes.object

}*/