import React, { Component } from "react";
import Player from "./Player";
import Result from "./Result";
import ComputerPlayer from "./ComputerPlayer";
import { connect } from "react-redux";

class BaiTapOanTuXi extends Component {
    render() {
        return (
            <div className="content text-center">
                <div className="row" style={{ marginTop: "40px" }}>
                    <div className="col-4">
                        <Player />
                    </div>

                    <div className="col-4">
                        <Result />
                        <button
                            className="btn btn-success"
                            onClick={() => {
                                this.props.playGame();
                            }}
                        >
                            Play game
                        </button>
                    </div>

                    <div className="col-4">
                        <ComputerPlayer />
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        playGame: () => {
            const action = {
                type: "RANDOM",
            };

            let count = 0;

            let randomChoose = setInterval(() => {
                dispatch(action);

                count++;

                if (count === 50) {
                    clearInterval(randomChoose);

                    dispatch({
                        type: "END_GAME",
                    });
                }
            }, 10);
        },
    };
};

export default connect(null, mapDispatchToProps)(BaiTapOanTuXi);
