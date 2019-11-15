import React from "react";
// import { Tab, Menu, Icon } from "semantic-ui-react";
// import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from 'styled-components'

const Div = styled.div`
display: flex;
justify-content: space-between;
text-align: center;
`


// TODO: Add missing tabs below
// Take a look at React Semantic UI tabs 
// https://react.semantic-ui.com/modules/tab/
export default function TabNav() {

    return (
        <Div className="nav-bar">
            <div>
            <Link to="/">Home</Link>
            </div>

            <div>
            <Link to="/characters">Characters</Link>
            </div>

            <div>
            <Link to="/episodes">Episodes</Link>
            </div>

            <div>
            <Link to="/locations">Location</Link>
            </div>

            <div>
            <Link to="/search">Search</Link>
            </div>

        </Div>
    )
    

};