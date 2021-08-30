import React, {useState} from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

const DeleteButton = (props) => {
    const [ profileID, setProfileID ] = useState (props.id);
    const [ allProfiles, setAllProfiles ] = useState (props.id);
    const deleteProfile = (profileID) => {
        axios.delete(`http://localhost:8000/api/profile/${ profileID }`)
            .then((res) => {
                console.log(res.data);
                setAllProfiles(allProfiles.filter((profileElement) => profileElement._id !== profileID))
                navigate('/');
            })
            .catch((err) => {
                console.log(err);
            });
    }
    return (
        <button onClick={ () => deleteProfile(props._id)}>Delete</button>
    )
}

export default DeleteButton;