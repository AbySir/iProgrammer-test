import React from 'react';

const CompareTable = (props) => {
    const { selectedPhotos } = props;

    const renderTableBody = () => {
        return(selectedPhotos.map((picDetails, i) => <tr key={picDetails.id}>
            <td>Photo {i+1}</td>
            <td>{picDetails.id}</td>
            <td>{picDetails.thumbnailUrl}</td>
            <td>{picDetails.title}</td>
        </tr>))
    }

    return (<div>
        <table>
            <tr>
            <th colSpan="4">COMPARISON TABLE</th>
            </tr>
            <tr>
                <th></th>
                <th>ID</th>
                <th>URL</th>
                <th>Title</th>
            </tr>
            {renderTableBody()}
        </table>
  </div>);
}

export default CompareTable;