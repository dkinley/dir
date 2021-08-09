import React, {useState} from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

const DeleteButton = (props) => {
    const [ profileId, setProfileId ] = useState (props.id);
    const deleteProfile = (profileId) => {
        axios.delete(`http://localhost:8000/api/profile/${ profileId }`)
            .then((res) => {
                console.log(res.data);
                // setAllSongs(allSongs.filter((songElement) => songElement._id !== songID))
                navigate('/');
            })
            .catch((err) => {
                console.log(err);
            });
    }
    return (
        <button onClick={ () => deleteProfile(props._id) }>Delete</button>
    )
}

export default DeleteButton;