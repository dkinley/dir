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
            <div className="header">
                <div className="upper-header">{ profile.firstName } { profile.lastName }  | Top 1% Agent</div>
                <br/>
                <div className="lower-header"> { profile.licenseMainState } License { profile.licenseMain } at { profile.companyCurrent }</div>
            </div>
            <div class="container">
            <img class="img" src={profile.pictureUrl} alt={profile.firstName} />
                <div className="bio-btn"> 
                    <div class="bio">What Others Say: { profile.firstName } handled my sale with the utmost care. It was a great experience working with { profile.firstName }. 
                    Definitely one who helps you get what you want. We started with a couple of zoom calls rolling on. { profile.firstName } executed 
                    the Listing tasks at super speed, guidance with remodeling, staging, working with Vendors, and transparency in 
                    the whole process. { profile.firstName } is taking care of everything, like selling the family's own home.</div>
                    <button className="buttonsCenter"><a href="tel:{profile.cell}">Call {profile.firstName}</a></button>
                    <button className="buttonsCenter"><a href="mailto:{profile.website}">Email {profile.firstName}</a></button>
                </div>
            </div>
            <div className="container">
                <div className="bio">
                    <table className="table">
                    <th>Year</th>
                    <th>Firm</th>
                    <th>$Vol</th>
                    <th>Deals</th>
                    <th>Buyers</th>
                    <th>Sellers</th>
                    <tr>
                        <td>
                        Career
                        </td>
                        <td>
                        { profile.companyCurrent }
                        </td>
                        <td>
                        762,000,000
                        </td>
                        <td>
                        655
                        </td>
                        <td>
                        301
                        </td>
                        <td>
                        354
                        </td>
                    </tr>
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
                    <tr>
                    <td>
                        2018
                        </td>
                        <td>
                        { profile.companyCurrent }
                        </td>
                        <td>
                        39,000,000
                        </td>
                        <td>
                        21
                        </td>
                        <td>
                        8
                        </td>
                        <td>
                        13
                        </td>
                    </tr>
                 </table>
                 </div>
            </div>
            <div class="container">
                <div className="bio-btn"> 
                    <button className="buttonsCenter" onClick={ () => navigate("/")}>____________________</button>
                    <div className="center">Copyright ©2021, Leaderboard, Inc. All Rights Reserved.</div> 
                </div>
            </div>
            </div>
    )
};
export default ProfileDetails;