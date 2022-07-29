import * as authenticationService from '../../../services/authenticationService';

import { useEffect } from "react"
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export const Logout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        authenticationService
            .logout()
            .then(() => {
                toast.success('Successfully logout!');
                navigate('/user/login');
            })
            .catch((err) => {
                toast.err(err);
            });
    })
}