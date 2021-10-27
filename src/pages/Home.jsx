import React, { useEffect, useContext, useState } from 'react';
import * as pgAsistant from '../javascript/pgAsistant.js';
import Button from '@material-ui/core/Button';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Modal from 'react-modal';
import { RequestCreditPay } from './RequestCreditPay.jsx';

const customStyles = {
    overlay: {
     zIndex: 100,
    },
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: 'calc(100vw - 32px)',
        boxSizing: 'border-box',
        borderRadius: '22px',
        padding: '24px 16px',
    },
};

const iframw = () => {
    return (
        <div>
            <iframe src = "http://www.naver.com"/>
        </div>
    );

};

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

    const [modalIsOpen, setModalIsOpen] = useState(false);
    
    const SendPay = (form) => {

    };

    const requestSendPayData = (formData) => {
        console.log("payInit Form1:", formData);
        pgAsistant.SendPay(formData);
    };

    const openModal = (type) => {
        if (type === 'RequestPayM') {
          setModalIsOpen({ ...modalIsOpen, RequestPayM: true });
        }
      };
      const afterOpenModal = () => {
        // references are now sync'd and can be accessed.
    };
    
    const closeModal = (type) => {
        if (type === 'RequestPayM') {
            setModalIsOpen({ ...modalIsOpen, RequestPayM: false });
        } else {
            setModalIsOpen(false);
        }
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
                <input name="returnUrl" type="hidden" value="https://testpg.pay-story.co.kr/receiveUrlSample.do" />
                <input name="notiUrl" type="hidden" value="https://testpg.pay-story.co.kr/testNoti.do" />
                <input name="trxCd" type="hidden" value="0"/>
                <input name="charSet" type="hidden" value="UTF-8" />
                <input name="ediDate" type="hidden" value="20211027110247"/>
                <input name="encData" type="hidden" value="f9192b7aeb0785a2e254c0bd8627dc6f9924c7fe0d17d428b6bbbb8825eba26c" />
            </form>
                {/* <Button onClick={() => { requestSendPayData(document.payInit) }} > */}
                <Button onClick={() => {
                        // window.open('#;', '_black');
                        requestSendPayData(document.payInit);
                        //   openModal('RequestPayM');
                     
                        
                    }
                }>
                결제하기
                </Button>

            <Modal
                appElement={document.getElementById('root')}
                isOpen={modalIsOpen.RequestPayM}
                onAfterOpen={afterOpenModal}
                onRequestClose={() => {
                closeModal('RequestPayM');
                }}
                style={customStyles}
            >
                {/* <iframw/> */}
                <RequestCreditPay/>
            </Modal>
        </article>
    );
}