import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';
import { IconButton, Grid, Typography, Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import CheckBoxOutlineBlank from '@material-ui/icons/CheckBoxOutlineBlank';
import Clear from '@material-ui/icons/Clear';
import Brightness1 from '@material-ui/icons/Brightness1';

function calculateWinner(gameMap) {
    let lines = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (gameMap[a] && gameMap[a] === gameMap[b] && gameMap[a] === gameMap[c])
            return gameMap[a];
    }
}

class GameButton extends React.Component {

    constructor(props) {
        super(props);
        this.state = { check: false };
    }

    handle() {
        let result = this.props.click();
        result && this.setState({ check: result });
    }

    render() {
        return (
            <IconButton color="primary" onClick={() => { this.handle() }}>
                {this.state.check || <CheckBoxOutlineBlank fontSize="large" />}
            </IconButton>
        );
    }
}


class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            gameMap: Array(9).fill(null),
            x: true,
            winner : false
        };
    }

    kernel(index) {
        if (this.state.gameMap[index] || this.state.winner)
            return;
        let gameMap = this.state.gameMap.slice();
        gameMap[index] = this.state.xIsNext ? 'X' : 'O';
        let winner = calculateWinner(gameMap);
        this.setState({
            gameMap: gameMap,
            xIsNext: !this.state.xIsNext,
            winner : winner
        });
        return gameMap[index] == 'O' ? <Brightness1 fontSize="large" /> : <Clear fontSize="large" color="secondary" />;
    }

    render() {
        return (
            <Grid container alignItems="center" justify="center" direction="column" style={{ minHeight: "100vh" }}>

                <Typography variant="h2" component="h2" color="primary" style={{ marginBottom: "3rem" }}>
                    Tik Tak Teo
                </Typography>

                <div className="game">
                    {[...Array(9)].map((val, index) => <GameButton click={() => this.kernel(index)} key={index} />)}
                </div>

                <Snackbar open={Boolean(this.state.winner)} autoHideDuration={6000} onClose={()=>{location.reload();}}>
                    <MuiAlert elevation={6} variant="filled" onClose={()=>{location.reload();}} severity="success">
                        {this.state.winner} won the game !  
                    </MuiAlert>
                </Snackbar>

            </Grid>
        );
    }
}



function render() {
    ReactDOM.render(<App />, document.querySelector('#app'));
}

render();