import React from 'react';

const CompareTable = (props) => {
    const { selectedPhotos } = props;
    return (<div>
        <table>
            <tr>
            <th colspan="4">COMPARISON TABLE</th>
            </tr>
            <tr>
                <th></th>
                <th>ID</th>
                <th>URL</th>
                <th>Title</th>
            </tr>
            <tr>
                <td>Photo 1</td>
                <td>Alfreds Futterkiste</td>
                <td>Maria Anders</td>
                <td>Germany</td>
            </tr>
        </table>
  </div>);
}

export default CompareTable;