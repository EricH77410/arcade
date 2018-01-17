import React, { Component } from 'react'

import Dent from '../../components/Dent/Dent';

import './Arcade.css';

class Arcade extends Component {

    state = {
        secteurs: [],
        face: 'v'
    }

    componentWillMount() {
        let data = [];
        let secteurs = [];
        for (let i=1; i<=4; i++) {
            for (let j=1; j<=8; j++) {
               data.push (i.toString() + j.toString());
            }
            secteurs.push(data);
            data=[];
        }
        this.setState({secteurs});
    }

    changeFaceHandler = () => {
        let face=this.state.face==='v' ? 'o':'v';        
        this.setState({face});
    }

    getDentSecteur = (num) => {
        const chicots = this.state.secteurs[num-1].map((dent)=>{
            return <Dent key={dent} num={dent} clicked={()=>this.handleDentClicked(dent)} face={this.state.face}/>
        })
        return (
            <div className={"secteur"+num}>
                {chicots}
            </div>
        )
    }

    handleDentClicked = (num) => {
        console.log("clic => "+num)
    }

  render() {
    return (
      <div className="arcade">
        <button onClick={this.changeFaceHandler}>{this.state.face.toLocaleUpperCase()}</button>
        <div className="arcade__haut">
            { this.getDentSecteur(1) }
            { this.getDentSecteur(2) }
        </div>

        <div className="arcade__bas">
            { this.getDentSecteur(3) }
            { this.getDentSecteur(4) }
        </div>
        
      </div>
    )
  }
}

export default Arcade;

