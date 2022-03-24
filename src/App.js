    import './App.css'
    import React, { Component } from 'react';
    import axios from 'axios';

    export class App extends Component {
        state = {
            advice:''
        };
        componentDidMount(){
        //llamo al afuncion fetch 
        this.fetchAdvice();
            console.log('Component didmount')
        }
        fetchAdvice = ()=>{
            //obtengo los datos de la api con axios
            axios.get('https://api.adviceslip.com/advice')
            .then((response)=>{
                //imprimo toda la respuesta de la api
                console.log(response)
                //imprimo data de la respuesta dela api
                const {advice} = response.data.slip
                //lleno el state con el consejo
                this.setState({advice});
                console.log(advice)
            })
            .catch((error)=>{
                console.log(error)
            })
        }
    render() {
        
        return (
        <div className='app'>
            <div className='card'>
                <h1 className='heading'>{this.state.advice}</h1>
                <button className='button' onClick={this.fetchAdvice}>
                    <span>
                        NUEVO CONSEJO
                    </span>
                </button>
            </div>
        </div>
        )
    }
    }

    export default App
    /*
    import React, { Component, useState, useEffect } from 'react';

hooks

    const App = ()=> {
        const state = {
            advice:''
        };
        const [ad, setAd] = useState([]);

        useEffect(()=>{
 //llamo al afuncion fetch 
 fetchAdvice()
 console.log('Component didmount')
        }, [])
           
            
        const   fetchAdvice = ()=>{
            //obtengo los datos de la api con axios
            axios.get('https://api.adviceslip.com/advice')
            .then((response)=>{
                //imprimo toda la respuesta de la api
                console.log(response)
                //imprimo data de la respuesta dela api
                const advice = response.data.slip.advice
                //lleno el state con el consejo
                setAd(...ad, advice);
                console.log(advice)
            })
            .catch((error)=>{
                console.log(error)
            })
        }

        
        return (
        <div className='app'>
            <div className='card'>
                <h1 className='heading'>{ad}</h1>
                <button className='button' onClick={fetchAdvice}>
                    <span>
                        NUEVO CONSEJO
                    </span>
                </button>
            </div>
        </div>
        )
    
    }

    export default App
    */