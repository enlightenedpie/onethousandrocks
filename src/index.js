import React from 'react'
import ReactDOM from 'react-dom'
import OTR from './otr'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(<OTR />, document.getElementById('poot'))
serviceWorker.unregister()