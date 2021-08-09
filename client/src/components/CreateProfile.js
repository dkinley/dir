import React, { useEffect, useState } from 'react';
import { Link, navigate } from '@reach/router';
import axios from 'axios';

const New = (props) => {
    const [ firstName, setFirstName ] = useState("");
    const [ lastName, setLastName ] = useState("");
    const [ licenseMain, setLicenseMain ] = useState("");
    const [ licenseMainState, setLicenseMainState ] = useState("");
    const [ cell, setCell ] = useState("");
    const [ website, setWebsite ] = useState("");
    const [ pictureUrl, setPictureUrl ] = useState("");
    const [ companyCurrent, setCompanyCurrent ] = useState("");
    const [ companyCurrentLogo, setCompanyCurrentLogo ] = useState(""); 
    const [ errs, setErrs ] = useState({});

    const submitHandler = (e) => {
        e.preventDefault(); //bring in the event with 'e' and prevent default refresh
        axios.post("http://localhost:8000/api/profile/" + props.id, {
            firstName: firstName,
            lastName: lastName,
            licenseMain: licenseMain,
            licenseMainState: licenseMainState,
            cell: cell,
            website: website,
            pictureUrl: pictureUrl,
            companyCurrent: companyCurrent,
            companyCurrentLogo: companyCurrentLogo,

            }) //axios sends data, use postman url, add .then, .catch
            .then((res) => {
                if(res.data.errors) {
                    console.log(res.data.errors)
                    setErrs(res.data.errors);
                }
                else {
                    console.log(res.data)
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <div>
            <h1>New Profile</h1> 
            <form onSubmit={submitHandler}>
                <div>
                    <label> First Name: </label>
                    <input type="text"
                    name="firstName"
                    value={firstName}
                    onChange={ (e) => setFirstName( e.target.value ) }
                    />
                    {
                        errs.firstName ?
                            <span className="error-text">{errs.firstName.message}</span>
                            : null
                    }
                </div>
                <div>
                    <label> Last Name: </label>
                    <input type="text"
                    name="lastName"
                    value={lastName}
                    onChange={ (e) => setLastName( e.target.value ) }
                    />
                    {
                        errs.type ?
                        <span className="error-text">{errs.lastName.message}</span>
                            : null
                    }
                </div>
                <div>
                    <label> License: </label>
                    <input type="text"
                    name="licenseMain"
                    value={licenseMain}
                    onChange={ (e) => setLicenseMain( e.target.value ) }
                    />
                    {
                        errs.licenseMain ?
                        <span className="error-text">{errs.licenseMain.message}</span>
                            : null
                    }
                </div>
                <div>
                    <label> License State: </label>
                    <input type="text"
                    name="licenseMainState"
                    value={licenseMainState}
                    onChange={ (e) => setLicenseMainState( e.target.value ) }
                    />
                    {
                        errs.licenseMainState ?
                        <span className="error-text">{errs.licenseMainState.message}</span>
                            : null
                    }
            </div>
                <div>
                    <label> Direct Phone Number: </label>
                    <input type="number"
                    name="cell"
                    value={cell}
                    onChange={ (e) => setCell( e.target.value ) }
                    />
                    {
                        errs.cell ?
                        <span className="error-text">{errs.cell.message}</span>
                            : null
                    }
                </div>
                <div>
                    <label> Website: </label>
                    <input type="text"
                    name="website"
                    value={website}
                    onChange={ (e) => setWebsite( e.target.value ) }
                    />
                    {
                        errs.website ?
                        <span className="error-text">{errs.website.message}</span>
                            : null
                    }
                </div>
                <div>
                    <label> Picture: </label>
                    <input type="text"
                    name="pictureUrl"
                    value={pictureUrl}
                    onChange={ (e) => setPictureUrl( e.target.value ) }
                    />
                    {
                        errs.pictureUrl ?
                        <span className="error-text">{errs.pictureUrl.message}</span>
                            : null
                    }
                </div>
                <div>
                    <label> Company: </label>
                    <input type="text"
                    name="companyCurrent"
                    value={companyCurrent}
                    onChange={ (e) => setCompanyCurrent( e.target.value ) }
                    />
                    {
                        errs.companyCurrent ?
                        <span className="error-text">{errs.companyCurrent.message}</span>
                            : null
                    }
                </div>
                <div>
                    <label> Company Logo: </label>
                    <input type="text"
                    name="companyCurrentLogo"
                    value={companyCurrentLogo}
                    onChange={ (e) => setCompanyCurrentLogo( e.target.value ) }
                    />
                    {
                        errs.companyCurrentLogo ?
                        <span className="error-text">{errs.companyCurrentLogo.message}</span>
                            : null
                    }
                </div>
                <div>
                <button type="submit">Create Profile</button>
                <button onClick={ () => navigate("/")}>Cancel</button>
                </div>
                </form>
            
        </div>
    )
};

export default New;