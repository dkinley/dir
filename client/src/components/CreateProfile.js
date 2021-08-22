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
    const [ buyerDeals21, setBuyerDeals21] = useState();
    const [ sellerDeals21, setSellerDeals21] = useState();
    const [ avgDealDollar21, setAvgDealDollar21] = useState();
    const [ buyerDeals20, setBuyerDeals20] = useState();
    const [ sellerDeals20, setSellerDeals20] = useState();
    const [ avgDealDollar20, setAvgDealDollar20] = useState();
    const [ company20Logo, setCompany20Logo] = useState();
    const [ buyerDeals19, setBuyerDeals19] = useState();
    const [ sellerDeals19, setSellerDeals19] = useState();
    const [ avgDealDollar19, setAvgDealDollar19] = useState();
    const [ company19Logo, setCompany19Logo] = useState();
    const [ buyerDeals18, setBuyerDeals18] = useState();
    const [ sellerDeals18, setSellerDeals18] = useState();
    const [ avgDealDollar18, setAvgDealDollar18] = useState();
    const [ company18Logo, setCompany18Logo] = useState();
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

    const companyLogo = [
        'Compass.png', './Compass.png',
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
            buyerDeals21: buyerDeals21,
            sellerDeals21: sellerDeals21,
            avgDealDollar21: avgDealDollar21,
            buyerDeals20: buyerDeals20,
            sellerDeals20: sellerDeals20,
            avgDealDollar20: avgDealDollar20,
            company20Logo: company20Logo,
            buyerDeals19: buyerDeals19,
            sellerDeals19: sellerDeals19,
            avgDealDollar19: avgDealDollar19,
            company19Logo: company19Logo,
            buyerDeals18: buyerDeals18,
            sellerDeals18: sellerDeals18,
            avgDealDollar18: avgDealDollar18,
            company18Logo: company18Logo,

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
                {/* The below are the annual deal statistics */}
                <div className="annual">
                    <div>
                        <label> 2021 Buyers Represented: </label>
                        <input type="number"
                        name="buyerDeals21"
                        value={buyerDeals21}
                        onChange={ (e) => setBuyerDeals21( e.target.value ) }
                        />
                    </div>
                    <div>
                        <label> 2021 Sellers Represented: </label>
                        <input type="number"
                        name="sellerDeals21"
                        value={sellerDeals21}
                        onChange={ (e) => setSellerDeals21( e.target.value ) }
                        />
                    </div>
                    <div>
                        <label> 2021 Average Deal $ Size: </label>
                        <input type="number"
                        name="avgDealDollar21"
                        value={avgDealDollar21}
                        onChange={ (e) => setAvgDealDollar21( e.target.value ) }
                        />
                    </div>
                </div>
                <div>
                    <label> 2020 Buyers Represented: </label>
                    <input type="number"
                    name="buyerDeals20"
                    value={buyerDeals20}
                    onChange={ (e) => setBuyerDeals20( e.target.value ) }
                    />
                </div>
                <div>
                    <label> 2020 Sellers Represented: </label>
                    <input type="number"
                    name="sellerDeals20"
                    value={sellerDeals20}
                    onChange={ (e) => setSellerDeals20( e.target.value ) }
                    />
                </div>
                <div>
                    <label> 2020 Average Deal $ Size: </label>
                    <input type="number"
                    name="avgDealDollar20"
                    value={avgDealDollar20}
                    onChange={ (e) => setAvgDealDollar20( e.target.value ) }
                    />
                </div>
                <div>
                    <label> 2020 Affiliated Brokerage: </label>
                    <select
                    name="company20Logo"
                    value={company20Logo}
                    onChange={ (e) => setCompany20Logo( e.target.value ) }
                    >
                    <option value=""></option>
                    {
                        companies.map((company20Logo, index) => (
                                <option value={company20Logo} key={company20Logo}>{company20Logo}</option>
                        ))
                    }
                </select>
                </div>
                <div>
                <label> 2019 Buyers Represented: </label>
                <input type="number"
                name="buyerDeals19"
                value={buyerDeals19}
                onChange={ (e) => setBuyerDeals19( e.target.value ) }
                />
            </div>
            <div>
                <label> 2019 Sellers Represented: </label>
                <input type="number"
                name="sellerDeals19"
                value={sellerDeals19}
                onChange={ (e) => setSellerDeals19( e.target.value ) }
                />
            </div>
            <div>
                <label> 2019 Average Deal $ Size: </label>
                <input type="number"
                name="avgDealDollar19"
                value={avgDealDollar19}
                onChange={ (e) => setAvgDealDollar19( e.target.value ) }
                />
            </div>
            <div>
                <label> 2019 Affiliated Brokerage: </label>
                <select
                name="company19Logo"
                value={company19Logo}
                onChange={ (e) => setCompany19Logo( e.target.value ) }
                >
                <option value=""></option>
                {
                    companies.map((company19Logo, index) => (
                            <option value={company19Logo} key={company19Logo}>{company19Logo}</option>
                    ))
                }
            </select>
            </div>
            <div>
            <label> 2018 Buyers Represented: </label>
            <input type="number"
            name="buyerDeals18"
            value={buyerDeals18}
            onChange={ (e) => setBuyerDeals18( e.target.value ) }
            />
        </div>
        <div>
            <label> 2018 Sellers Represented: </label>
            <input type="number"
            name="sellerDeals18"
            value={sellerDeals18}
            onChange={ (e) => setSellerDeals18( e.target.value ) }
            />
        </div>
        <div>
            <label> 2018 Average Deal $ Size: </label>
            <input type="number"
            name="avgDealDollar18"
            value={avgDealDollar18}
            onChange={ (e) => setAvgDealDollar18( e.target.value ) }
            />
        </div>
        <div>
            <label> 2018 Affiliated Brokerage: </label>
            <select
            name="company18Logo"
            value={company18Logo}
            onChange={ (e) => setCompany18Logo( e.target.value ) }
            >
            <option value=""></option>
            {
                companies.map((company18Logo, index) => (
                        <option value={company18Logo} key={company18Logo}>{company18Logo}</option>
                ))
            }
        </select>
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