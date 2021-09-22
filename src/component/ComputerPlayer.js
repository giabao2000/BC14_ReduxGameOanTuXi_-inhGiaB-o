import React, { Component } from "react";
import { connect } from "react-redux";

class ComputerPlayer extends Component {
    render() {
        let keyframe = `@keyframes randomItem${Date.now()} {
            0% { top: -50px }
            25% { top: 100px }
            50% { top: -50px }
            75% { top: 100px }
            100% { top: 0px }
        }`;

        return (
            <div>
                <div className="player">
                    <style> {keyframe} </style>
                    <div className="boxItem">
                        <img
                            src={this.props.computer.img}
                            alt={this.props.computer.img}
                            className="img-item mt-5"
                            style={{
                                position: "absolute",
                                left: 0,
                                right: 0,
                                margin: "0 auto",
                                animation: `randomItem${Date.now()} 0.5s`,
                            }}
                        />
                    </div>
                    <div className="speech-bubble"></div>
                    <img
                        src=".././img/playerComputer.png"
                        alt=".././img/playerComputer.png"
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        computer: state.gameReducer.computer,
    };
};

export default connect(mapStateToProps, null)(ComputerPlayer);
