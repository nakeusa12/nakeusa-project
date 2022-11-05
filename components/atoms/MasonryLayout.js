import PropTypes from 'prop-types';

export const MasonryLayout = props => {
  const columnWrapper = {};
  const result = [];

  // create columns
  for (let i = 0; i < props.columns; i++) {
    columnWrapper[`column${i}`] = [];
  }

  // divide children into columns
  const lastRow = Math.ceil((props.children.length) / props.columns);

  for (let i = 0; i < props.children.length; i++) {
    const columnIndex = i % props.columns;
    const row = Math.ceil((i + 1) / props.columns);
    columnWrapper[`column${columnIndex}`].push(
      <div key={i} style={{ marginBottom: `${lastRow == row ? "0" : props.gap}px`}}>
        {props.children[i]}
      </div>
    );
  }

  // wrap children in each column with a div
  for (let i = 0; i < props.columns; i++) {
    result.push(
      <div
        key={i}
        style={{
          marginLeft: `${i > 0 ? props.gap : 0}px`,
          flex: 1,
        }}>
        {columnWrapper[`column${i}`]}
      </div>
    );
  }

  return (
    <div style={{ display: 'flex' }}>
      {result}
    </div>
  );
}

MasonryLayout.propTypes = {
  columns: PropTypes.number.isRequired,
  gap: PropTypes.number.isRequired,
  children: PropTypes.arrayOf(PropTypes.element),
};

MasonryLayout.defaultProps = {
  columns: 2,
  gap: 20,
};