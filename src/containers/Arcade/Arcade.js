import React, { Component } from 'react'

import Dent from '../../components/Dent/Dent';

import './Arcade.css';

class Arcade extends Component {

    state = {
        secteurs: [],
        isLoading: true,
        showOclu: true,
    }

    componentDidMount() {
        let data = [];
        let secteurs = [];
        for (let i=1; i<=4; i++) {
            for (let j=1; j<=8; j++) {
               data.push (i.toString() + j.toString());
            }
            secteurs.push(data);
            data=[];
        }
        this.setState({secteurs, isLoading: false});
    }

    changeFaceHandler = () => {
        let face=this.state.face==='v' ? 'o':'v';        
        this.setState({face});
    }

    getDentSecteur = (num, face) => {
        const chicots = this.state.secteurs[num-1].map((dent)=>{
            return <Dent key={dent} num={dent} clicked={()=>this.handleDentClicked(dent)} face={face}/>
        })
        return (
            <div className={"secteur"+num+'__'+face}>
                {chicots}
            </div>
        )
    }

    handleDentClicked = (num) => {
        console.log("clic => "+num)
    }

  render() {
      if(this.state.isLoading) {
        return <h3>Loading...</h3>
      } else {
      
        return (        
            <div className="arcade">
                
                <div className="arcade__haut">
                    { this.getDentSecteur(1,'v') }

                    { this.state.showOclu ? this.getDentSecteur(1,'o'):'' }
                    { this.state.showOclu ? this.getDentSecteur(2,'o'):'' }

                    { this.getDentSecteur(2,'v') }            
                </div>

                <div className="arcade__bas">
                    { this.getDentSecteur(3,'v') }

                    { this.state.showOclu ? this.getDentSecteur(3,'o'):'' }
                    { this.state.showOclu ? this.getDentSecteur(4,'o'):'' }

                    { this.getDentSecteur(4,'v') }
                </div>
                <div className="select-face">
                    <button onClick={()=>this.setState({showOclu: !this.state.showOclu})}>Oclu</button>
                </div>
            </div>
        )
    }
  }
}

export default Arcade;

