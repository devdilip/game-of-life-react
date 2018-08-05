import React from "react";

class Box extends React.Component {
    selectBox = () => {
        this.props.selectBox(this.props.row, this.props.col);
    };

    render() {
        return (
            <div
                className={this.props.boxClass}
                id={this.props.id}
                onClick={this.selectBox}
            />
        );
    }
}
const Grid = props => {
    const width = props.cols * 14;
    let boxClass = "";
    const rowsArr = props.gridFull.map((rowArr, rowIdx) =>
        rowArr.map((item, colIdx) => {
            const boxId = `${rowIdx}_${colIdx}`;

            boxClass = props.gridFull[rowIdx][colIdx] ? "box on" : "box off";
            return (
                <Box
                    boxClass={boxClass}
                    key={boxId}
                    boxId={boxId}
                    row={rowIdx}
                    col={colIdx}
                    selectBox={props.selectBox}
                />
            );
        })
    );

    return (
        <div className="grid" style={{ width }}>
            {rowsArr}
        </div>
    );
};

export default Grid