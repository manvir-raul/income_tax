import React, { Component } from 'react';
class DataBase extends Component {
    constructor(){
        super();
        this.state={
            database:[
                {date:"1990-05-12",principle:"500",action:"deposit"},
                {date:"1991-05-12",principle:"500",action:"deposit"},
                {date:"1992-05-12",principle:"500",action:"deposit"},
                {date:"1993-05-12",principle:"500",action:"deposit"},
                {date:"1995-05-12",principle:"500",action:"deposit"},
                {date:"1996-05-12",principle:"500",action:"deposit"},
                {date:"1997-05-12",principle:"500",action:"deposit"},
                {date:"1995-05-12",principle:"500",action:"withdraw"},
                {date:"1996-05-12",principle:"500",action:"withdraw"}
            ]
        }
    }


    
    filtered=()=>{
        var array=[];
        this.state.database.map(entry=>{
            if(entry.action=="deposit"){
                    array.push(entry)
            }
        })
        console.log(array);
        array;
      
    }
    
    render() { 
        return ( 
            <div>
            {this.filtered()}
            </div>
         );
    }
}
 
export default DataBase;




