import React, { useEffect, useContext, useState } from 'react';
import * as pgAsistant from '../javascript/pgAsistant.js';
import Button from '@material-ui/core/Button';

export const Home = (props) => {
    
    let requestCreditPayData = {
        merchantID : '',
        trxCd : 0,
        goodsNm : '',
        ordNo : '',
        goodsAmt : '',
        ordNm : '',
        ordTel : '',
        ediDate : '',
        encData : '',
    };

    const requestSendPayData = (formData) => {
        console.log("payInit Form1:", formData);
        pgAsistant.SendPay(formData);
    };

    return (
        <article className='mm'>
            <form name="payInit" method="post" id="payInit" action="https://testpg.pay-story.co.kr/payInit_hash.do">
                <input name="cardCd" type="hidden" value="11" />
                <input name="mid" type="hidden" value="asdfadfmmm" />
                <input name="goodsNm" type="hidden" value="관리비책 관리비" />
                <input name="ordNo" type="hidden" value="asdfadfmmm20211027110247" />
                <input name="goodsAmt" type="hidden" value="1004"/>
                <input name="ordNm" type="hidden" value="박진기" />
                <input name="ordTel" type="hidden" value="01034500479" />
                <input name="returnUrl" type="hidden" value="https://localhost:4001/ResultCreditPay" />
                <input name="notiUrl" type="hidden" value="https://localhost:4001/NoticeCreditPay" />
                <input name="trxCd" type="hidden" value="0"/>
                <input name="charSet" type="hidden" value="UTF-8" />
                <input name="ediDate" type="hidden" value="20211027110247"/>
                <input name="encData" type="hidden" value="f9192b7aeb0785a2e254c0bd8627dc6f9924c7fe0d17d428b6bbbb8825eba26c" />
            </form>
                <Button onClick={() => {
                        requestSendPayData(document.payInit);
                    }
                }>
                결제하기
                </Button>
        </article>
    );
}