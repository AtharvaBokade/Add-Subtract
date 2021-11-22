import React, { Component } from 'react';
import Add from './add_btn'
import Subtract from './sub_btn'
import './home.css'
import Num from './num'

class Home extends React.Component {
    state = {
        num : 1
      }
      add_num=()=>{
            this.setState({num:this.state.num+1})
      }
      sub_num=()=>{
          this.setState({num:this.state.num-1})
      }
    render() { 
        return(
            <>
            <div className = "add_bt">
            <Add Add_num = {this.add_num.bind(this)} />
            </div>

            <div className = "num">
            <Num num = {this.state.num}/>
            </div>

            
            <div className = "sub_bt">
                <Subtract Sub_num = {this.sub_num.bind(this)}/>
            </div>
            </>
        );
    }
}
 
export default Home;