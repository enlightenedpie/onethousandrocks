import React from 'react'
import './otr.css'

const OneRock = ({x,y,count,deg}) => {
    return (
        <div id={"otr"+count} className={"onerock"} style={{
            left: x+'%',
            top: y+'%',
            zIndex: count,
            transform: "rotate3d(0,0,1,"+deg+"deg) translate3d(-50%,-50%,0)"
        }}>
            <img alt="" src={count === 30 ? "/ima/thirtyrock.png" : "/ima/onerock.png"}/>
        </div>
    )
}

export default class OTR extends React.Component {
    state = {
        counter: 0,
        els: [null]
    }

    makeOneRock() {
        let {counter} = this.state
        if (counter >= 1001) return counter
        let num = Math.floor(500 + Math.random() * 900),
            obj = {
                x: Math.floor(Math.random() * (95 - 5 +1)) + 5,
                y: Math.floor(Math.random() * (95 - 5 +1)) + 5,
                deg: (Math.floor(Math.random() * (35 - 5 +1)) + 5) * (Math.random() < 0.5 ? -1 : 1)
            }

        window.setTimeout(() => {
            this.setState(state => {
                let newEls = state.els
                newEls.push(<OneRock key={state.counter+1} count={state.counter+1} {...obj}/>)
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