import Cell from '../cell/cell';

const Column = ({ colData }) => {
  return (
    <div className="column">
      {colData.map((cellData, rowIndex) => (
        <Cell
          key={rowIndex}
          value={cellData}
          row={rowIndex}
          col={0}
          istittle={true} // necesitamos mandar un valor aca
        />
      ))}
    </div>
  );
};

export default Column;
