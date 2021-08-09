import React, { useEffect, useState } from 'react';
import axios from 'axios';
//import DeleteButton from './DeleteButton';
import { navigate } from '@reach/router';

const ProfileDetails = (props) => {
     // things to do here create state to hold details, useEffect to retrieve data from API
    // axios call to get the details, setState with the details from the API
    const [ profile, setProfile ] = useState({});
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/profile/' + props.id) // postman verified url
            .then((res) => {
                console.log(res.data); //.then gives response object which is commonly referred to as res
                setProfile(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
        }, [props.id ]);

    return (
        <div>
                <h2>Profile</h2>                
                <table>
                <tr>
                <td>
                    First Name:
                </td>
                <td>
                    { profile.firstName }
                </td>
                </tr>
                <tr>
                <td>
                    Last Name:
                </td>
                <td>
                    { profile.lastName }
                </td>
                </tr>

                <tr>
                <td>
                    License:
                </td>
                <td>
                    { profile.licenseMain }
                </td>
                </tr>
                <tr>
                <td>
                    License State:
                </td>
                <td>
                    { profile.licenseMainState }
                </td>
                </tr>
                <tr>
                <td>
                    Direct:
                </td>
                <td>
                    { profile.cell }
                </td>
                </tr>
                <tr>
                <td>
                    Company:
                </td>
                <td>
                    { profile.companyCurrent }
                </td>
                </tr>
                <tr>
                <td>
                    Website Link:
                </td>
                <td>
                    { profile.website }
                </td>
                </tr>
                <tr>
                <td>
                    Picture:
                </td>
                <td>
                    { profile.pictureUrl }
                </td>
                </tr>

                <button onClick={ () => navigate("/")}>Top Offer Directory</button>
                
            </table>
        </div>
    )
};
export default ProfileDetails;