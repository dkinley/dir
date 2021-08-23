import React, { useEffect, useState } from 'react';
import { Link, navigate } from '@reach/router';
import axios from 'axios';
import DeleteButton from './DeleteButton';

const GetAll = (props) => {
    const [ allProfiles, setAllProfiles ] = useState([]); // put in an array, as there is an array of objects expected, see postman which gets back and array of objects
    
    useEffect(() => {
        axios.get("http://localhost:8000/api/profile") //use the same string that works for a 'get' in postman
            .then((res) => {
                console.log(res.data); //this is just checking that the data came back correctly in the console
                //need state to hold onto the data we just called, do this above with const all
                setAllProfiles(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div>
            <table>
                <thead>
                    <th>Profile</th>
                    <th>Remove</th>
                </thead>
                <tbody>
                    {
                        allProfiles.map((profile, index) => (
                        <tr>
                            <td>
                                <img src={profile.pictureUrl} alt={profile.firstName}/>
                                <br/>
                                <Link to={ `/profile/${profile._id}`} >{profile.firstName}{" "}{profile.lastName} </Link>
                                <p>Top Producer</p>
                            </td>
                            <DeleteButton _id={ profile._id }/>
                        </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
};

export default GetAll;