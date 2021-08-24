import React, { useEffect, useState } from 'react';
import axios from 'axios';
import topLogo from './topLogo.png';
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
            <img class="imgSmall" src={topLogo}/>    
            <div> 
                    <div className="upper-header">
                        { profile.firstName } { profile.lastName } 
                    </div>
                    <br/>
                    <div className="lower-header"> 
                        { profile.licenseMainState } License { profile.licenseMain }
                    </div>
                    <div className="lower-header">
                        { profile.company21 }
                    </div>                      
            </div>
                
            </div>
            <div class="container">
            <img class="img" src={profile.pictureUrl} alt={profile.firstName} />
                <div className="bio-btn"> {profile.about} 
                    <button className="buttonsCenter"><a href="tel:{profile.cell}">Call {profile.firstName}</a></button>
                    <button className="buttonsCenter"><a href="mailto:{profile.website}">Email {profile.firstName}</a></button>
                </div>
            </div>
            <div className="container">
                <div className="bio">
                    <table className="table">
                    <th>Year</th>
                    <th>Firm</th>
                    <th>$Volume</th>
                    <th>Deals</th>
                    <th>Buys</th>
                    <th>Sells</th>
                    <tr>
                        <td>
                        Total of Recent
                        </td>
                        <td>

                        </td>
                        <td>
                            { ((((profile.buyerDeals21 + profile.sellerDeals21) * profile.avgDealDollar21) 
                            + ((profile.buyerDeals20 + profile.sellerDeals20) * profile.avgDealDollar20)
                            + ((profile.buyerDeals19 + profile.sellerDeals19) * profile.avgDealDollar19)
                            + ((profile.buyerDeals18 + profile.sellerDeals18) * profile.avgDealDollar18))
                            )/1000000 + " Million"
                            }
                        </td>
                        <td>
                            { (((profile.buyerDeals21 + profile.sellerDeals21)) 
                            + ((profile.buyerDeals20 + profile.sellerDeals20))
                            + ((profile.buyerDeals19 + profile.sellerDeals19))
                            + ((profile.buyerDeals18 + profile.sellerDeals18)))
                            }
                        </td>
                        <td>
                                { (((profile.buyerDeals21)) 
                                + ((profile.buyerDeals20))
                                + ((profile.buyerDeals19))
                                + ((profile.buyerDeals18)))
                                }
                        </td>
                        <td>
                                { (((profile.sellerDeals21)) 
                                + ((profile.sellerDeals20))
                                + ((profile.sellerDeals19))
                                + ((profile.sellerDeals18)))
                                }
                        </td>
                    </tr>
                    <tr>
                        <td>
                        2021
                        </td>
                        <td>
                        { profile.company21 }
                        </td>
                        <td>
                        { (((profile.buyerDeals21 + profile.sellerDeals21) * profile.avgDealDollar21)
                            )/1000000 + " Million"
                        }
                        </td>
                        <td>
                        { profile.buyerDeals21 + profile.sellerDeals21 }
                        </td>
                        <td>
                        { profile.buyerDeals21 }
                        </td>
                        <td>
                        { profile.sellerDeals21 }
                        </td>
                    </tr>
                    <tr>
                        <td>
                        2020
                        </td>
                        <td>
                        { profile.company20 }
                        </td>
                        <td>
                        { (((profile.buyerDeals20 + profile.sellerDeals20) * profile.avgDealDollar20)
                            )/1000000 + " Million" 
                        }
                        </td>
                        <td>
                        { profile.buyerDeals20 + profile.sellerDeals20 }
                        </td>
                        <td>
                        { profile.buyerDeals20 }
                        </td>
                        <td>
                        { profile.sellerDeals20 }
                        </td>
                    </tr>
                    <tr>
                        <td>
                        2019
                        </td>
                        <td>
                        { profile.company19 }
                        </td>
                        <td>
                        { (((profile.buyerDeals19 + profile.sellerDeals19) * profile.avgDealDollar19)
                            )/1000000 + " Million" }
                        </td>
                        <td>
                        { profile.buyerDeals19 + profile.sellerDeals19 }
                        </td>
                        <td>
                        { profile.buyerDeals19 }
                        </td>
                        <td>
                        { profile.sellerDeals19 }
                        </td>
                    </tr>
                    <tr>
                        <td>
                        2018
                        </td>
                        <td>
                        { profile.company18 }
                        </td>
                        <td>
                        { (((profile.buyerDeals18 + profile.sellerDeals18) * profile.avgDealDollar18) 
                            )/1000000 + " Million"
                        }
                        </td>
                        <td>
                        { profile.buyerDeals18 + profile.sellerDeals18 }
                        </td>
                        <td>
                        { profile.buyerDeals18 }
                        </td>
                        <td>
                        { profile.sellerDeals18 }
                        </td>
                    </tr>
                </table>
                </div>
            </div>
            <div class="container">
                <div className="bio-btn"> 
                    <button className="buttonsCenter" onClick={ () => navigate("/")}>____________________</button>
                    <div className="center">Copyright ©2021, Leaderboards, Inc. All Rights Reserved.</div> 
                </div>
            </div>
            </div>
    )
};
export default ProfileDetails;