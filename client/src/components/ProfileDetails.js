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
                <div className="profile-pic-deets"> 
                    <img class="img" src={profile.pictureUrl} alt={profile.firstName} />
                    <div className="bio-btn"> 
                        <div class="bio">Real Estate isn’t rocket science, but it’s definitely harder than it needs to be. Why is that? 
                        Why is it, quite frankly, a pain? We ask ourselves that every day. That is our guiding light. 
                        Mark's team asks “What if?” and “How can we?” as open-ended questions that drive innovation. 
                        It is our experimentation studio, our innovation hub, our intersection of technology and design. It’s where 
                        we play with ideas and design great products that change the way we do real estate.</div>
                        <div className="buttonsCenter">
                        <button><a href="tel:{profile.cell}">Call {profile.firstName}</a></button>
                        <button><a href="mailto:{profile.website}">Email {profile.firstName}</a></button>
                        </div>
                    </div>
                </div>
            <table className="table">
            <th>Yr.</th>
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
            
            </table>

                <button className="button" onClick={ () => navigate("/")}>___________________________________________________________</button>
                Copyright ©2021, Leaderboard, Inc. All Rights Reserved.   
            </div>
    )
};
export default ProfileDetails;