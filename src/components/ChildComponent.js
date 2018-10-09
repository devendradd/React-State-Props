import React, {Component} from 'react';

export default class ChildComponent extends Component{
  constructor(){
    super();
    this.state={changeName:''}

    this.changeValueForParent = this.changeValueForParent.bind(this);
  }

  changeValueForParent(){
    this.props.callParent("mangesh bhau");
  }

  render(){
    return(
        <div>
            this is the child compoenent invoked by {this.props.nameProp}
            <input type="button" id="childButton" value="click me to change the parents value" onClick={this.changeValueForParent} />
        </div>
    );
  }

}
