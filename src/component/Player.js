import React, { Component } from "react";
import { connect } from "react-redux";

class Player extends Component {
    renderOptions = () => {
        const { options, getSelectedOption } = this.props;

        return options.map((option, index) => {
            let border = {};

            // Kiểm tra lấy ra giá trị dc chọn
            if (option.isChoose) {
                border = { border: "3px solid #45d994" };
            }

            return (
                <div className="col-4" key={index}>
                    <button
                        style={border}
                        onClick={() => {
                            getSelectedOption(option);
                        }}
                    >
                        <img
                            src={option.img}
                            alt={option.img}
                            className="img-item"
                        />
                    </button>
                </div>
            );
        });
    };

    optionSelected = () => {
        return this.props.options.find((option) => option.isChoose).img;
    };

    render() {
        return (
            <div className="player">
                <div className="boxItem">
                    <img
                        src={this.optionSelected()}
                        alt={this.optionSelected()}
                        className="img-item mt-5"
                    />
                </div>

                <div className="speech-bubble"></div>

                <img src=".././img/player.png" alt=".././img/player.png" />

                <div className="row">{this.renderOptions()}</div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        options: state.gameReducer.options,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getSelectedOption: (option) => {
            const action = {
                type: "CHANGE_OPTION",
                payload: option,
            };

            // Send action to store
            dispatch(action);
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
