import React, { useEffect, useContext, useState } from 'react';
import queryString from 'query-string';
import API from "../API";

export const NoticeCreditPay = async() => {
    
    // const { search } = this.props.location;	// 문자열 형식으로 결과값이 반환된다.
    // const queryObj = queryString.parse(search);	// 문자열의 쿼리스트링을 Object로 변환
    const {data} = await API.get("https://testpg.pay-story.co.kr/payInit_hash.do");

    console.log("Notice Data", data);

    return (

        <div>
            Notice Ok
        </div>
    );
}