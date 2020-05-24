import ReactDOM from 'react-dom';
import './style.scss';
import { Grid, Typography, Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import Clear from '@material-ui/icons/Clear';
import Brightness1 from '@material-ui/icons/Brightness1';

import GameButton from './components/GameButton';
import calculateWinner from './calculateWinner';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            gameMap: Array(9).fill(null),
            x: true,
            winner: false
        };
    }

    kernel(index) {
        // return if button was selected or game over 
        if (this.state.gameMap[index] || this.state.winner)
            return;
        // clone current state
        let gameMap = this.state.gameMap.slice();
        gameMap[index] = this.state.xIsNext ? 'X' : 'O';
        // calculate winner
        let winner = calculateWinner(gameMap);
        this.setState({
            gameMap: gameMap,
            xIsNext: !this.state.xIsNext,
            winner: winner
        });
        // return x or o icon
        return gameMap[index] == 'O' ? <Brightness1 fontSize="large" /> : <Clear fontSize="large" color="secondary" />;
    }

    render() {
        return (
            <Grid container alignItems="center" justify="center" direction="column" style={{ minHeight: "100vh" }}>

                <Typography variant="h2" component="h2"
                    color={this.state.xIsNext ? "secondary" : "primary"}
                    style={{ marginBottom: "3rem" }}>
                    Tik Tak Teo
                </Typography>

                <div className="game">
                    {[...Array(9)].map((val, index) => <GameButton click={() => this.kernel(index)} key={index} />)}
                </div>

                <Snackbar open={Boolean(this.state.winner)} autoHideDuration={6000} onClose={() => { location.reload(); }}>
                    <MuiAlert elevation={6} variant="filled" onClose={() => { location.reload(); }} severity="success">
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