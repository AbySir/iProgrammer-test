import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CompareTable from '../compareTable';

const Photos = () => {

    const [ photosList, setPhotosList ] = useState([]);
    const [ selectedphotoList, setSelectedphotoList ] = useState([]);

    useEffect(async () => {
        const photosData = await axios.get('https://jsonplaceholder.typicode.com/photos');
        setPhotosList(photosData.data);
    }, []);

    const setPhotoData = (selectedPhoto) => {
        // compare and update data
        // setSelectedphotoList()
    }

    const renderGrid = () => {
        return photosList.map((picDetails) => (
            <div key={picDetails.id}>
                <img src={picDetails.thumbnailUrl} alt="image"></img>
                <div>{picDetails.title}</div>
                <div>{picDetails.id}</div>
                <div>{picDetails.url}</div>
                <button onClick={() => setPhotoData(picDetails)}>Compare</button>
            </div>
        ));
    }

    return (<div>
        {photosList.length > 0 && renderGrid()}
        {selectedphotoList.length > 0 || <CompareTable selectedPhotos={selectedphotoList} />}
    </div>);
}

export default Photos;