import React, { Component } from 'react';
import ReactDOM from 'react-dom'


class Calculation extends Component {
    constructor(props){
        super(props);
        this.state = {
            month:0,
            formatedMonth:0,
            amount:0,
            interest:0
        }
    }
   

    


    formatMonth=(date,principle)=>{
        var dateArray,Pmonth,newMonth,targetYear,year1,today,k,i,first,second,third,fourth,date,principle;
        date=this.props.date;
        principle=this.props.principle;
        dateArray=String(date).split("-");

        if(0<dateArray[2]<6){
            Pmonth =dateArray[1];
        }else{
           Pmonth=dateArray[1]+1;
        }

        if(1<Pmonth<12){
            newMonth=Pmonth-3;
        }else{
            newMonth=Pmonth+9;
        }

        today=new Date();
        year1=today.getFullYear();
        if(2<today.getMonth()<=12){
                targetYear=year1+2;
        }else{
            targetYear=year1+1;
        }
        var totalInterest=0;
        var interest=0;
        first=8;
        second=8;
        third=8;
        fourth=8;
        for(k=dateArray[0];k<targetYear;k++){
            for( i=newMonth;i<12;i++){
                switch (i) {
                    case 0:
                    case 1:
                    case 2:
                    interest= (principle*first)/1200;
                    break;
                    case 3:
                    case 4:
                    case 5:
                    interest= (principle*second)/1200;
                    break;
                    case 6 :
                    case 7:
                    case 8:
                    interest= (principle*third)/1200;
                    break;
                    case 9 :
                    case 10:
                    case 11:
                    interest=(principle*fourth)/1200;
                        break;
                    default:
                        break;
                }
                totalInterest += interest; 
            }
            principle+=totalInterest;
        }
        return principle;

    }

    
    
    
    

    render() { 
        console.log(this.props.entry.date);
        return ( 
                {/* <table>
                    <tbody>
                        {props.entry.map(entry=>
                            <tr key ={entry.id}>
                                <td>{entry.date}</td>
                                <td>{entry.principle}</td>
                                <td>{entry.action}</td>
                            </tr>)}
                    </tbody>
                </table> */}
        );
    }
}
 
export default Calculation;