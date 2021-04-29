import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CompareTable from '../compareTable';

const Photos = () => {

    const [ photosList, setPhotosList ] = useState([]);
    const [ selectedPhotoList, setSelectedPhotoList ] = useState([]);

    const getPhotoData = async() => {
        let photosData = await axios.get('https://jsonplaceholder.typicode.com/photos');
        photosData['isSelected'] = false;
        setPhotosList(photosData.data);
    }

    useEffect(() => {
        getPhotoData();
    }, []);

    const setPhotoData = (selectedPhoto) => {
        const tempSelectedList = [...selectedPhotoList];
        const tempPhotoList = [...photosList];
        if(selectedPhoto['isSelected']){
            let Ind = tempSelectedList.findIndex((picData) => picData.id === selectedPhoto.id);
            tempSelectedList.splice(Ind, 1);
        } else {
            tempSelectedList.push(selectedPhoto)
        }
        selectedPhoto['isSelected'] = !selectedPhoto['isSelected'];
        let picIndex = tempPhotoList.findIndex((picData) => picData.id === selectedPhoto.id);
        tempPhotoList.splice(picIndex, 1, selectedPhoto);
        setSelectedPhotoList(tempSelectedList)
        setPhotosList(tempPhotoList);
    }

    const renderGrid = () => {
        return photosList.map((picDetails) => (
            <div key={picDetails.id} className="photos">
                <img src={picDetails.thumbnailUrl} alt={`image-${picDetails.id}`}></img>
                <div>{picDetails.title}</div>
                <div>{picDetails.id}</div>
                <div>{picDetails.url}</div>
                <button onClick={() => setPhotoData(picDetails)}>{picDetails.isSelected ? 'Remove' : 'Compare'}</button>
            </div>
        ));
    }

    return (<div className="photo-container">
        {photosList.length > 0 && renderGrid()}
        {selectedPhotoList.length > 0 && <CompareTable selectedPhotos={selectedPhotoList} />}
    </div>);
}

export default Photos;