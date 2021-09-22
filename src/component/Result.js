import React, { Component } from "react";
import { connect } from "react-redux";

class Result extends Component {
    render() {
        const { result, wins, total } = this.props;

        return (
            <div className="mb-5">
                <div className="display-4 text-warning">Kết quả: {result}</div>

                <div className="display-4 text-success">
                    Số trận thắng: <span className="text-warning"> {wins}</span>
                </div>

                <div className="display-4 text-success">
                    Tổng số trận đã chơi:
                    <span className="text-warning"> {total}</span>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        result: state.gameReducer.result,
        wins: state.gameReducer.wins,
        total: state.gameReducer.total,
    };
};

export default connect(mapStateToProps, null)(Result);
