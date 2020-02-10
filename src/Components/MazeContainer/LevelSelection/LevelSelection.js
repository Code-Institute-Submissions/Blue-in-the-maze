import React, {Fragment} from 'react';
import StartButton from "../Buttons/StartButton/StartButton";
import '../StartScreen/StartScreen.scss';

import PropTypes from 'prop-types';

const LevelSelection = ({chooseLevel}) => {


    return (
        <Fragment>
            <div id={'startScreen'}>
                <img src="./bg-for-screen-state.png" alt="background image"/>
                <div id={'gameName'}>
                    Level selection
                </div>
                <StartButton start={() => chooseLevel('level2')}/>
            </div>
        </Fragment>
    )
};

LevelSelection.prototype = {
    chooseLevel: PropTypes.func.isRequired
};

export default LevelSelection;