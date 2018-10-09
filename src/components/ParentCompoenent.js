import React, {Component} from 'react';
import ChildComponent from './ChildComponent';

export default class ParentCompoenent extends Component{
  constructor(){
    super();
    this.state={name:'', valueFromChild:'',  fruites:['mango', 'banana', 'apple' , 'grapes']}

    this.handleClick = this.handleClick.bind(this);
    this.gettingValueFromChild = this.gettingValueFromChild.bind(this);
  }

  handleClick(){
     alert("button is clicked");
     this.setState({name:"My Name is Devendra"})
  }

  gettingValueFromChild(value){
    this.setState({valueFromChild: value})
  }

  render(){
    return(
        <div className="parentComponentCSS">
            this is the Parent Comonent call the child component by clicking this button
            <input type="button" id="btnSubmit" value="Click me" onClick={this.handleClick} />
            <ChildComponent nameProp={this.state.name} callParent={this.gettingValueFromChild}/>

            Got Value from ChildCompnent = {this.state.valueFromChild}

            <div>
                fruotes: {this.state.fruites}
            </div>
        </div>
    );
  }
}
