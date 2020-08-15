import React, { useState } from 'react'
import './otr.css'

const OneRock = ({ror,x,y,count,deg}) => {
    let [pressed,setPressed] = useState(false);
    return (
        <div id={"otr"+count} className={"onerock"}
            style={{
                left: x+'%',
                top: y+'%',
                zIndex: count,
                transform: "rotate3d(0,0,1,"+deg+"deg) translate3d(-50%,-50%,0)" + (pressed ? ' scale3d(1.1,1.1,1)' : '')
            }}
            onMouseDown={(e) => {setPressed(true);}}
            onTouchStart={(e) => {setPressed(true);}}
            onMouseUp={(e) => {setPressed(false);}}
            onTouchEnd={(e) => {setPressed(false);}}
            onDragEnd={(e) => {setPressed(false);}}
        >
            <img alt="" src={count === 30 ? "/ima/thirtyrock.png" : "/ima/onerock.png"}/>
        </div>
    )
}

export default class OTR extends React.Component {
    constructor() {
        super()
        this.state = {
            counter: 0,
            els: [null]
        }

        this.removeOneRock = this.removeOneRock.bind(this);
        this.makeOneRock = this.makeOneRock.bind(this);
    }

    removeOneRock(count) {
        this.setState(state => {
            let newEls = state.els
            newEls.splice(count,1)
            return {
                counter: --state.counter,
                els: newEls
            }
        })
    }

    makeOneRock() {
        let {counter} = this.state
        if (counter >= 1000) return counter
        let num = Math.floor(500 + Math.random() * 900),
            obj = {
                x: Math.floor(Math.random() * (95 - 5 +1)) + 5,
                y: Math.floor(Math.random() * (95 - 5 +1)) + 5,
                deg: (Math.floor(Math.random() * (35 - 5 +1)) + 5) * (Math.random() < 0.5 ? -1 : 1)
            }

        window.setTimeout(() => {
            this.setState(state => {
                let newEls = state.els
                newEls.push(<OneRock ror={this.removeOneRock} key={state.counter+1} count={state.counter+1} {...obj}/>)
                return {
                    counter: ++state.counter,
                    els: newEls
                }
            })
        },num)
        return counter
    }

    render() {
        let {els} = this.state
        return (
            <React.Fragment>
                <div id="cowntur">
                    {this.makeOneRock()}
                </div>
                {els.map((val) => val)}
            </React.Fragment>
        )
    }
}