import React, { useEffect, useState } from 'react';
import axios from 'axios';
//import { Link, navigate } from '@reach/router';
    
    const Header = (props) => {
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
            <header>
            <div>{profile.firstName} {profile.lastName}</div>
            </header>
        )
};
export default Header;