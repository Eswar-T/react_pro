import React, { Component } from 'react';
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
  .then((responseJson)=> this.setState({ dataSource: responseJson.members }))
  .catch((error)=>console.log(error,"error"))
}

render(){
   const showHideClassName = this.state.show ? "modal display-block" : "modal display-none";
  return (
    <div>
       <h1  style={{ textAlign:'center' }}>Users list and their Location</h1>
       { this.state.dataSource.map(item=>( 
         <div>
              <div className="content"
                   onClick={this.showModal}>            
                     <div style={{ color:'black',fontWeight:'bold',textAlign:'center',marginTop:20 }}>{item.real_name}</div>
                     <div style={{ float:'left',color:'black',fontWeight:'bold' }}>Location :</div>
                     <div style={{ float:'left',color:'black',fontWeight:'bold',textAlign:'center',paddingLeft:10 }}>{item.tz}</div>
                     </div> 
                      {
                        this.state.show == true ? 
                                                  (
                                                   <div className={showHideClassName}>
                                                       <section className="modal-main">
                                                       <h1 style={{ textAlign:'center' }}>Activity Period</h1>
                                                           { item.activity_periods.map( time =>(
                                                                 <span>
                                                                 <div className="row">                                                                  
                                                                    <div className="column" style={{ backgroundColor:'green' }}>{time.start_time}</div>
                                                                    <div className="column" style={{ backgroundColor:'red' }}>{time.end_time}</div>
                                                                 </div>
                                                                 </span>
                                                                 ))
                                                            }
                                                          <button className="close" onClick={this.hideModal}>close</button>
                                                          <ul>
                                                          <li><h4>Start Time - Green Color Background</h4></li>
                                                          <li><h4>End Time - Red Color Background</h4></li>
                                                          </ul>
                                                        </section>
                                                    </div> ) :
                                                   ('')
                      }
         </div>
         ))} 
    </div>
  );
}
}

export default App;



