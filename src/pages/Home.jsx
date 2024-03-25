import React from "react";
import CountDisplay from "../components/CountDisplay";
import CounterButtons from "../components/CounterButtons";

/*const Home = (props) => {
    return(
      <CountDisplay currentCount={3}/>
    );
}*/

class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {currentCount: 1};
  };
  handleIncrement(){
    this.setState({currentCount: this.state.currentCount + 1});
  }
  handleDecrement(){
    this.setState({currentCount: this.state.currentCount - 1});
  }
  
  render() {
    return (
      <>
      <div>
        <CounterButtons 
         onIncrement={this.handleIncrement.bind(this)}
         onDecrement={this.handleDecrement.bind(this)}/>

        <CountDisplay currentCount={this.state.currentCount}/>
      </div>
      </>
    );
  }
}

export default Home;