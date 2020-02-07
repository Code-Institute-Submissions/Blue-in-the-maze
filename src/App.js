import React from 'react';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import './App.scss';
import Layout from "./Components/Layout/Layout";

library.add(fab, faCheckSquare, faCoffee);

function App() {
    return (
        <div>
            <Layout/>
        </div>
    );
}

export default App;
