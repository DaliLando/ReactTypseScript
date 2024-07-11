import React, { Component } from 'react'; 
// creating an interface to store variable
interface State {
    count:number;
    title:string;
}

interface MyData {
    data: string[]
}

class Counter extends Component <MyData>{ 

    state :State= {    // the state variable gets the State interface variables
        count:0,
        title:""
         }; 

 increment = ():void => {
     this.setState({ count: this.state.count + 1 });  // setState changes the state of count by incrementing using the button
}; 

change = (e:any):void => {   ///  updates the value of the title by the data coming from input using onChange
   this.setState({title: e.target.value})
   
}



render() { 
 return(
    <div> 
        <p>Count: {this.state.count}</p> 
        <input type='text' onChange={this.change} placeholder='write here'/>

        <button onClick={this.increment}>Increment</button> 
        <div>
            {this.props.data.map ((item,index)=>{
                return <h3 key={index}>{item}</h3>
            })}
        </div>
    </div>
     );
 }
} 

export default Counter;