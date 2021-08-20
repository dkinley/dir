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
    const [ about, setAbout] = useState(); 
    const [ errs, setErrs ] = useState({});

    const states = [
        'AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC',
        'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 
        'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 
        'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 
        'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 
        'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY'
    ];

    const companies = [
        '@properties', 'Berkshire Hathaway HomeServices', 'Baird & Warner', 
        'Century 21', 'Coldwell Banker Real Estate', 'Compass', 
        'EXIT Realty', 'eXp Realty', 'Halstead Real Estate', 
        'HomeServices of America', 'Keller Williams Realty', 'Rainmaker Real Estate', 
        'Redfin', 'RE/MAX', 'Sotheby’s International Realty', 'Weichert', 'Other'
    ];

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
            about: about,

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
            <div className="createProfLeftColumn"> 
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
                    placeholder='Real Estate License Number Here'
                    value={licenseMain}
                    onChange={ (e) => setLicenseMain( e.target.value ) }
                    />
                </div>

                <div>
                    <label> License State: </label>
                    <select 
                    name="licenseMainState"
                    value={licenseMainState}
                    onChange={ (e) => setLicenseMainState( e.target.value ) }
                    >
                        <option value=""></option>
                        {
                            states.map((licenseMainState, index) => (
                                    <option value={licenseMainState} key={licenseMainState}>{licenseMainState}</option>
                            ))
                        }
                        </select>
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
                    format="(###) ###-####" mask=""
                    placeholder='Phone Number Here'
                    onChange={ (e) => setCell( e.target.value ) }
                    />
                </div>
                <div>
                    <label> Website (optional): </label>
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
                    <select
                    name="companyCurrent"
                    value={companyCurrent}
                    onChange={ (e) => setCompanyCurrent( e.target.value ) }
                    >
                    <option value=""></option>
                    {
                        companies.map((companyCurrent, index) => (
                                <option value={companyCurrent} key={companyCurrent}>{companyCurrent}</option>
                        ))
                    }
                </select>
                </div>
                <div>
                    <label> Company Logo (optional): </label>
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
                <label> About: </label>
                <input type="text"
                name="about"
                placeholder='Paste 100 Word-ish Length Summary of Experience'
                value={about}
                onChange={ (e) => setAbout( e.target.value ) }
                />
            </div>
                <div>
                <button type="submit">Create Profile</button>
                <button onClick={ (e) => navigate("/")}>Cancel</button>
                </div>
                </form>
            </div>
        </div>
    )
};

export default New;