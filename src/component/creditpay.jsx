import React, { useEffect, useContext, useState } from 'react';
import axios from 'axios';

export const creditpay_send_and_recv = (url, body) => {
    axios.post(
            url, 
            body, 
            {
                timeout: 30000, 
                timeoutErrorMessage:'timeout',
            }
        ).then(function (response) {
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        });
}