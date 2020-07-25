import React, { Component, useState } from 'react';
import logo from './logo.svg';
import './App.css';

class  App extends Component {
  constructor(props){
    super(props);
    this.state={
     dataSource:[],
    
     show:false
    }
  }

  showModal = () => {
    
    this.setState({ show: true });

  };

  hideModal = () => {
    this.setState({ show: false });
  };

componentDidMount(){
  fetch("https://run.mocky.io/v3/85d1eea5-ba2e-4fcb-885b-cb6c83ab6cbc")
  .then((response)=> response.json())
  .then((responseJson)=> this.setState({ dataSource: responseJson.members },()=>{console.log(this.state.dataSource,"source")}))
  .catch((error)=>console.log(error,"error"))
}

render(){

   const showHideClassName = this.state.show ? "modal display-block" : "modal display-none";

  return (
    <div>
       { this.state.dataSource.map(item=>( 
         <div>
              <button style={{ height:40,width:200,backgroundColor:"blue" }}
                      onClick={this.showModal}>{item.real_name}</button> 
                    

                      {
                        this.state.show == true ? 
                        (<div className={showHideClassName}>
                        <section className="modal-main">
                        <div>{item.activity_periods.map( time =>(
                         <div>
                         <div>{time.start_time}</div>
                        <div>{time.end_time}</div>
                          </div>))}</div>
                          <button onClick={this.hideModal}>close</button>
                        </section>
                        </div> ) : (<div></div>)
                      }
              {/* <Modal show={this.state.show} timePeriod={item.activity_periods} handleClose={this.hideModal}/> */}
         </div>
         ))} 
    </div>
  );
}
}

export default App;



// const Modal = ({ show,handleClose,timePeriod }) => {
//   const [time,settime] = useState([])
//   console.log(timePeriod,"timeperios")
//   for(let[key,value] of Object.entries(timePeriod)){
//      settime({ value },()=>{console.log("time",time)})
//    } 

//    const showHideClassName = show ? "modal display-block" : "modal display-none";

//   return (
//     <div className={showHideClassName}>
//       <section className="modal-main">
        
//         <button onClick={handleClose}>close</button>
//       </section>
//     </div>
//   );
// };