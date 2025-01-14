import React from 'react';
import Resources from "./Resources";
import {Table} from "antd";
import './stats.css'

let state = {
    XWin: 0,
    OWin: 0,
    Fair: 0
};

class Stats extends React.Component {

    static updateRoundResult(winner) {
        if (winner === 'X') {
            state.XWin = state.XWin + 1
            return;
        }

        if (winner === 'O') {
            state.OWin = state.OWin + 1
            return;
        }

        state.Fair = state.Fair + 1
    }

    getTotal() {
        return state.XWin + state.OWin + state.Fair;
    }

    getXWinPercent() {
        if (this.getTotal() === 0) {
            return 0;
        }
        return (state.XWin) / this.getTotal();
    }

    getOWinPercent() {
        if (this.getTotal() === 0) {
            return 0;
        }
        return (state.OWin) / this.getTotal();
    }

    getFairPercent() {
        if (this.getTotal() === 0) {
            return 0;
        }
        return (state.Fair) / this.getTotal();
    }

    render() {
        const dataSource = [{
            key: '#',
            XWin: state.XWin,
            OWin: state.OWin,
            draw: state.Fair,
            subtotal: this.getTotal()
        }, {
            key: '%',
            XWin: this.getXWinPercent().toFixed(2) * 100 + '%',
            OWin: this.getOWinPercent().toFixed(2) * 100 + '%',
            draw: this.getFairPercent().toFixed(2) * 100 + '%',
            subtotal: '100%'
        }];
        const columns = [{
            title: this.props.round,
            dataIndex: 'key',
            key: 'key',
        }, {
            title: <div>你 (X) <br/>{Resources.getInstance().wins}</div>,
            dataIndex: 'XWin',
            key: 'XWin',
        }, {
            title: <div>电脑 (O) <br/>{Resources.getInstance().wins}</div>,
            dataIndex: 'OWin',
            key: 'OWin',
        }, {
            title: Resources.getInstance().fair,
            dataIndex: 'draw',
            key: 'draw'
        }, {
            title: Resources.getInstance().total,
            dataIndex: 'subtotal',
            key: 'subtotal'
        }];
        return <Table dataSource={dataSource} columns={columns} pagination={false}/>;
    }
}

export default Stats;