import React, { Component } from 'react';
import './css.css';


const ShowEntry=(props)=>{
    return( 
            <div>
                <table id="customers">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Deposite</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.entry.map(entry=>
                            <tr key ={entry.id}>
                                <td>{entry.date}</td>
                                <td>{entry.principle}</td>
                                <td>{entry.action}</td>
                            </tr>)}
                    </tbody>
                </table>
            </div>
    )
}

export default ShowEntry;