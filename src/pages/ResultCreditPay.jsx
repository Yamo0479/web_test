import React, { useEffect, useContext, useState } from 'react';
import API from "../API";

import queryString from 'query-string';

export const ResultCreditPay = async() => {

    const {data} = await API.get("https://testpg.pay-story.co.kr/payInit_hash.do");

    console.log("Result Data", data);
    // const { search } = this.props.location;	// 문자열 형식으로 결과값이 반환된다.
    // const queryObj = queryString.parse(search);	// 문자열의 쿼리스트링을 Object로 변환

    // const [posts, setPosts] = useState([]);
    // const apiEndpoint = "http://jsonplaceholder.typicode.com/posts";

    // useEffect(async () => {
    //     // Promise pending -> resolved(성공) 또눈 rejected(실패) 객체 반환
    //     const response = await axios.get(apiEndpoint);
    //     setPosts(response.data);
    //     console.log(response.data);
    // }, []);

    return (
        <div>
            Result OK
        </div>

    );

    

}