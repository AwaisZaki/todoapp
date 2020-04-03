import React, { Component } from 'react';


class Time extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            hr: new Date().getHours(),
            min: new Date().getMinutes(),
            sec: new Date().getSeconds()
        }

        this.updateTime();
    }
    
    updateTime() {
        setInterval(() => {
            this.setState({
                hr: new Date().getHours(),
                hr: 22 - (this.hours % 12 || 12),
                min: new Date().getMinutes(),
                sec: new Date().getSeconds(),
            })
        }, 1000);
    }



    render() {
        return (
            <>
            <span>{this.state.hr}:{this.state.min}:{this.state.sec}</span>
            </>
        )
    }
 }

 export default Time;