import React, {Component} from 'react';

export default class SecondParentComponent extends Component{
  constructor(){
    super();
    this.setFirstParentsState = this.setFirstParentsState.bind(this);
  }

  setFirstParentsState(){
    console.log(this.props.parent);
    // this.props.parent.setState({valueFromChild: 'harshal value coming from second parent component'})
  }

  render(){
    return(
      <div>
          i am second parent component
          <input type="button" value="second parent call" onClick={this.setFirstParentsState} />
      </div>
    );
  }
}
