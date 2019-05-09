import React, { Component } from 'react';
import AddEntry from './addEntry';
import ShowEntry from './showEntry';
import Calculation from './calculation';
import './css.css';



class Record extends Component {
    constructor(props){
        super(props);
        this.state={
            entry:[],
        };
    }

    

    onClick=(data)=>{
        if(data.principle>0 && data.date!==""){
            let id=Math.random();
            data.id=id;
            let newEntry=this.state.entry;
            newEntry.push(data);
            this.setState({
                entry:newEntry
            }
            )
        } else {
            alert("please enter date and amount ");
        }
    }
   
    calculationPart=()=>{
        var i;
        var data={};
        var result,total;
        var totalResult=[];
        for(i=0;i<this.state.entry.length;i++){
            data=this.state.entry[i];
            result=this.amountCalculation(data.date,Number(data.principle));
           Number(result).toFixed(2);
            console.log(result,"resultttttttttttttt");
            totalResult.push(result);
            console.log(totalResult,"totalResultttttttttttttttttttt");
        }
        var numbered=[];
        totalResult.forEach(function (result){
                                numbered.push(Number(result));
                                // return numbered;
                            });
        console.log(numbered,"ltttttttt");
       
        if(numbered.length>1){
            for(var l=0;l<numbered.length;l++){
                total +=numbered[l];
            }
        }else{
            total=numbered[0];
        }
        
    
        return <h5>{total}</h5>
    }


    


    amountCalculation=(date,principle)=>{
        var dateArray,Pmonth,newMonth,targetYear,year1,today,k,i,first,second,third,fourth,date,principle;
        // date=this.props.date;
        // principle=this.props.principle;
        dateArray=String(date).split("-");
        console.log(dateArray,"dateArray");

        if(0<dateArray[2]<6){
            Pmonth =dateArray[1];
        }else{
           Pmonth=dateArray[1]+1;
        }
        console.log(Pmonth,"Pmonth");
        if(1<Pmonth<12){
            newMonth=Pmonth-3;
        }else{
            newMonth=Pmonth+9;
        }
        console.log(newMonth,"newMonth");
        today=new Date();
        year1=today.getFullYear();
        if(2<today.getMonth()<=11){
                targetYear=year1+1;
        }else{
            targetYear=year1;
        }
        console.log(targetYear,"targetYear");
        var totalInterest=0;
        var interest=0;
        first=8;
        second=8;
        third=8;
        fourth=8;
        for(k=dateArray[0];k<targetYear;k++){
            console.log(principle,"principle");
            for( i=newMonth;i<13;i++){
                switch (i) {
                    case 1:
                    case 2:
                    case 3:
                    interest= (principle*first)/1200;
                    console.log(interest,"interest");
                    console.log(principle,"principle");
                    break;
                    case 4:
                    case 5:
                    case 6:
                    interest= (principle*second)/1200;
                    Number(interest).toFixed(2);
                    break;
                    case 7 :
                    case 8:
                    case 9:
                    interest= (principle*third)/1200;
                    Number(interest).toFixed(2);
                    break;
                    case 10 :
                    case 11:
                    case 12:
                    interest=(principle*fourth)/1200;
                    console.log(interest,"interest")
                        break;
                    default:
                        break;
                        console.log(interest,"interest")
                }
                Number(interest).toFixed(2);
                totalInterest += interest;
                console.log(totalInterest,"totalInterest");
            }
            console.log(totalInterest,"totalInterest1");
            principle+=totalInterest;
            console.log(principle,"principle");
        }
        console.log(principle);
        return principle.toFixed(2);;

    }
    
   
    render() { 
      
        return(
            <div >
                
                <ShowEntry  entry={this.state.entry}/>  
                <AddEntry onClick={this.onClick}/>
                {this.calculationPart()}
            </div>
         );
    }
}
 
export default Record;