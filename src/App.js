import React from 'react'
import FormNew from './FormNew'
import {BrowserRouter, Route, Link} from 'react-router-dom'

function App (props){
    return(
            <BrowserRouter>
                    <div>
                  
                        <Route path="/" component={FormNew} exact={true}/>
                    </div>
                   
                
            </BrowserRouter>

    )
}
export default App