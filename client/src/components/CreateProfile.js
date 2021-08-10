import React, { useEffect, useState } from 'react';
import { Link, navigate } from '@reach/router';
import axios from 'axios';

const New = (props) => {
    const [ firstName, setFirstName ] = useState();
    const [ lastName, setLastName ] = useState();
    const [ licenseMain, setLicenseMain ] = useState();
    const [ licenseMainState, setLicenseMainState ] = useState();
    const [ cell, setCell ] = useState();
    const [ website, setWebsite ] = useState();
    const [ pictureUrl, setPictureUrl ] = useState();
    const [ companyCurrent, setCompanyCurrent ] = useState();
    const [ companyCurrentLogo, setCompanyCurrentLogo ] = useState(); 
    const [ errs, setErrs ] = useState({});

    const submitHandler = (e) => {
        e.preventDefault(); //bring in the event with 'e' and prevent default refresh

        axios.post("http://localhost:8000/api/profile/", {
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
                    navigate("/");
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
                    {
                        errs.firstName ?
                            <span className="error-text">{errs.firstName.message}</span>
                            : null
                    }
                    <input type="text"
                    name="firstName"
                    value={firstName}
                    onChange={ (e) => setFirstName( e.target.value ) }
                    />
                </div>

                <div>
                    <label> Last Name: </label>
                    {
                        errs.type ?
                        <span className="error-text">{errs.lastName.message}</span>
                            : null
                    }
                    <input type="text"
                    name="lastName"
                    value={lastName}
                    onChange={ (e) => setLastName( e.target.value ) }
                    />
                </div>

                <div>
                    <label> License: </label>
                    {
                        errs.licenseMain ?
                        <span className="error-text">{errs.licenseMain.message}</span>
                            : null
                    }
                    <input type="text"
                    name="licenseMain"
                    value={licenseMain}
                    onChange={ (e) => setLicenseMain( e.target.value ) }
                    />
                </div>

                <div>
                    <label> License State: </label>
                    {
                        errs.licenseMainState ?
                        <span className="error-text">{errs.licenseMainState.message}</span>
                            : null
                    }
                    <input type="text"
                    name="licenseMainState"
                    value={licenseMainState}
                    onChange={ (e) => setLicenseMainState( e.target.value ) }
                    />
                </div>
                <div>
                    <label> Direct Phone Number: </label>
                    {
                        errs.cell ?
                        <span className="error-text">{errs.cell.message}</span>
                            : null
                    }
                    <input type="number"
                    name="cell"
                    value={cell}
                    onChange={ (e) => setCell( e.target.value ) }
                    />
                </div>
                <div>
                    <label> Website: </label>
                    {
                        errs.website ?
                        <span className="error-text">{errs.website.message}</span>
                            : null
                    }
                    <input type="text"
                    name="website"
                    value={website}
                    onChange={ (e) => setWebsite( e.target.value ) }
                    />
                </div>

                <div>
                    <label> Picture: </label>
                    {
                        errs.pictureUrl ?
                        <span className="error-text">{errs.pictureUrl.message}</span>
                            : null
                    }
                    <input type="text"
                    name="pictureUrl"
                    value={pictureUrl}
                    onChange={ (e) => setPictureUrl( e.target.value ) }
                    />
                </div>

                <div>
                    <label> Company: </label>
                    {
                        errs.companyCurrent ?
                        <span className="error-text">{errs.companyCurrent.message}</span>
                            : null
                    }
                    <input type="text"
                    name="companyCurrent"
                    value={companyCurrent}
                    onChange={ (e) => setCompanyCurrent( e.target.value ) }
                    />
                </div>
                <div>
                    <label> Company Logo: </label>
                    {
                        errs.companyCurrentLogo ?
                        <span className="error-text">{errs.companyCurrentLogo.message}</span>
                            : null
                    }
                    <input type="text"
                    name="companyCurrentLogo"
                    value={companyCurrentLogo}
                    onChange={ (e) => setCompanyCurrentLogo( e.target.value ) }
                    />
                </div>
                <div>
                <button type="submit">Create Profile</button>
                <button onClick={ (e) => navigate("/")}>Cancel</button>
                </div>
                </form>
            
        </div>
    )
};

export default New;