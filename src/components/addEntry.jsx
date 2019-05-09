import React, { Component } from 'react';
import './css.css';
import {connect} from 'react-redux';
import {addSingleEntry} from '../action/action';

class AddEntry extends Component {
    constructor(props){
        super(props);
        this.state={
            date:"",principle:"",action:""
        }
        console.log("constructor");
    }

    onChange=(e)=>{
        e.preventDefault();
        this.setState({
            [e.target.id]:e.target.value,
         }
        )

    }

    onDeposite=(e)=>{
        e.preventDefault();
        this.setState({
            action:"Deposit"
        })
    }

    

    onWithDraw=(e)=>{
        e.preventDefault();
        this.setState({
            action:"withDraw"
        })
        // this.props.onClick(this.state);
    }


    componentDidCatch(){
        console.log("componentDidCatch")
    }

    componentDidMount(){
        console.log("componentDidMount")
    }

    componentDidUpdate(){
        console.log("componentDidUpdate")
        if(this.state.action=="Deposit" || this.state.action=="withDraw" ){
            this.props.onClick(this.state);
            this.setState({
                date:"",principle:"",action:""
            })
        }
    }
    
    componentWillMount(){
        console.log("omponentWillMount")
        
    }
    componentWillReceiveProps(){
        console.log("componentWillMount")
    }
    componentWillUnmount(){
        console.log("componentWillunMount")
    }



    render() { 
        console.log("render")
        return ( 
                <div>
                    <table id="customersInput">
                        <tbody>
                        <tr>
                            <th><input 
                                    id="date" 
                                    type="date" 
                                    onChange={this.onChange} 
                                    value={this.state.date}
                                /></th>
                            <th>
                                <input 
                                    id="principle" 
                                    type="number"
                                    onChange={this.onChange}
                                    value={this.state.principle>0?this.state.principle:""}
                                />
                            </th>
                            <th>
                                <button 
                                    style={{marginRight:"60px"}}  
                                     onClick={this.onDeposite }
                                >
                                Deposite
                                </button>
                                <button  
                                onClick={this.onWithDraw}
                                >
                                WithDraw
                                </button>
                            </th>
                        </tr>
                        </tbody>
                    </table>
                </div>

         );
    }
}

const mapStateToProps=(state)=>{
    return {ntry:state.entry
}}
 
const mapDispatchToProps=(dispatch)=>{
    return {singleAddEntry:(entry)=>{dispatch({addSingleEntry})}}
}
export default connect(mapDispatchToProps)(AddEntry);
