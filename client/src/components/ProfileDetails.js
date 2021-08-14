import React, { useEffect, useState } from 'react';
import axios from 'axios';
//import DeleteButton from './DeleteButton';
import { Link, navigate } from '@reach/router';

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
                <div className="header">{ profile.firstName } { profile.lastName }  | Top Agent</div>
                <img src={profile.pictureUrl} alt={profile.firstName} />
                <div className="buttonsCenter">
                    <button><a href="tel:{profile.cell}">Call {profile.firstName} Now</a></button>
                    <button><a href="mailto:{profile.website}">Email {profile.firstName}</a></button>
                </div>
                <div class="center">
                <table className="table">
                    <th></th>
                    <th></th>
                    <th></th>
                    <tr>
                    <td>
                        Top Agent:
                    </td>
                    <td>
                        { profile.firstName } { profile.lastName }
                    </td>
                    <td>
                        <a href="tel:{profile.cell}">{profile.cell}</a>
                    </td>
                    </tr>
                    <tr>
                    <td>
                        Designation:
                    </td>
                    <td>
                        Career $750,000,000
                    </td>
                    <td>
                        Top 1% San Francisco
                    </td>
                    </tr>
                    <tr>
                    <td>
                        Registration:
                    </td>
                    <td>
                        { profile.licenseMainState } { profile.licenseMain }
                    </td>
                    <td>
                        { profile.companyCurrent }
                    </td>
                    </tr>
            </table>
            <table className="table">
            <th>Yr.</th>
            <th>Firm</th>
            <th>$Vol</th>
            <th>Deals</th>
            <th>Buyers</th>
            <th>Sellers</th>
            <tr>
                <td>
                2021
                </td>
                <td>
                { profile.companyCurrent }
                </td>
                <td>
                62,000,000
                </td>
                <td>
                43
                </td>
                <td>
                19
                </td>
                <td>
                24
                </td>
            </tr>
            <tr>
                <td>
                2020
                </td>
                <td>
                { profile.companyCurrent }
                </td>
                <td>
                55,000,000
                </td>
                <td>
                39
                </td>
                <td>
                11
                </td>
                <td>
                28
                </td>
            </tr>
            <tr>
            <td>
                2019
                </td>
                <td>
                { profile.companyCurrent }
                </td>
                <td>
                41,000,000
                </td>
                <td>
                30
                </td>
                <td>
                10
                </td>
                <td>
                20
                </td>
            </tr>
            
            </table>

                <button className="button" onClick={ () => navigate("/")}>___________________________________________________________</button>
                Copyright ©2021, Leaderboard, Inc. All Rights Reserved.   
            </div>
            </div>
            
    )
};
export default ProfileDetails;