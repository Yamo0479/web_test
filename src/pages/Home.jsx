import React, { useEffect, useContext, useState } from 'react';
import * as pgAsistant from '../javascript/pgAsistant.js';
import Button from '@material-ui/core/Button';
import axios from 'axios';


export const Home = (props) => {
    
    const [exTarget, setTarget] = useState(null);
    const [exAction, setAction] = useState(null);

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

    const changeOpacity = (target, level) => {
        var obj = target;
        obj.style.opacity = level;
        obj.style.MozOpacity = level;
        obj.style.KhtmlOpacity = level;
        obj.style.MsFilter = "'progid: DXImageTransform.Microsoft.Alpha(Opacity=" + (level * 100) + ")'";
        obj.style.filter = "alpha(opacity=" + (level * 100) + ");";
    }

    const fadeInAction = (target, level, inTimer, time, opacity) => {
        level = level + opacity/time;
        changeOpacity(target, level);
        if(level>=opacity) clearInterval(inTimer);
        return level;
    }

    const fadeIn = (target, time, opacity) => {
        var level = 0;
        var inTimer = null;
        inTimer = setInterval( function() {
            level = fadeInAction(target, level, inTimer, time, opacity);
            target.style.display = 'block';
        }, 0);
    }

    const fadeOut = () => {
        var target = document.getElementById('pgPayMask');
        var level = 1;
        var outTimer = null;
        outTimer = setInterval( function() {
            level = fadeOutAction(target, level, outTimer);
        }, 50);
    }

    const fadeOutAction = (target, level, outTimer) => {
        level = level - 0.1;
        changeOpacity(target, level);
        if(level < 0) {
            clearInterval(outTimer);
        }
        return level;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        this.props.handleAccount({
            email: e.target.email.value,
            pwd: e.target.pwd.value,
            nickname: e.target.nickname.value,
            name: e.target.name.value
        });
    }

    const returnData = (e) =>
    {
        e.preventDefault();

        document.getElementById('pgPayMask').style.display = 'none';
        document.getElementById('pgPayWindow').style.display = 'none';
        
        if(e.data.resultCode == '0000')
        {
            var resData = e.data.data;
            
            var form = document.createElement("form");
            document.getElementsByTagName('body')[0].appendChild(form);
            for(var key in resData){
                var input = document.createElement("input");
                input.name = key;
                input.type = "hidden";
                input.value = resData[key];
                form.appendChild(input);
            }
            
            form.name = "payResult";
            form.acceptCharset = e.data.charSet;
            form.action = e.data.returnUrl;
            form.method = 'post';
            
            //form.submit();
            // pay_result_submit();

            alert("ss1");
            document.payInit.target = exTarget;
            document.payInit.action = exAction;
            
        }else if (e.data[0] == 'SUCCESS'){
            var form = document.createElement("form");
            document.getElementsByTagName('body')[0].appendChild(form);
            var keys=Object.keys(e.data[1]);
            for(var key in keys){
                var input = document.createElement("input");
                input.name = keys[key];
                input.type = "hidden";
                input.value = e.data[1][keys[key]];
                form.appendChild(input);
            }

            // requestData.append("tid=").append(tid).append("&");
            // requestData.append("mid=").append(mid).append("&");
            // requestData.append("goodsAmt=").append(goodsAmt).append("&");
            // requestData.append("ediDate=").append(ediDate).append("&");
            // requestData.append("charSet=").append("utf-8").append("&");
            // requestData.append("encData=").append(encData).append("&");
            // requestData.append("signData=").append(signData);
            // f9192b7aeb0785a2e254c0bd8627dc6f9924c7fe0d17d428b6bbbb8825eba26c

            //let body = form.tid.value + '';
            var body = 'tid=' + form.tid.value + '&';
            body += 'mid=' + form.mid.value + '&';
            body += 'goodsAmt=' + form.goodsAmt.value + '&';
            body += 'ediDate=' + form.ediDate.value + '&';
            body += "charSet='utf-8'&";
            body += 'encData=f9192b7aeb0785a2e254c0bd8627dc6f9924c7fe0d17d428b6bbbb8825eba26c&';
            body += 'signData=' + form.signData.value;

            console.log('body  ', body);

            axios.post(
                'https://testpg.pay-story.co.kr/payment.do', 
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

            // creditpay_send_and_recv(url, body);
            // form.name = "payResult";
            // form.acceptCharset = e.data[1]["charSet"];
            // form.method = 'post';
            // form.target = exTarget;
            // form.action = exAction;

            
        
            // //form.submit();
            // // pay_result_submit();
            // alert("ss2");
            // document.payInit.target = exTarget;
            // document.payInit.action = exAction;
        } else {
            // pay_result_close()
        }
    }

    const testfunc = (form) => 
    {
        window.addEventListener("message", returnData, false);

        var html = '<div id="pgPayMask" style="position:fixed;z-index:9000;background-color:#000;display:none;left:0;top:0;width:100%;height:100%;"></div>';
        html += '<div id="pgPayWindow" style="display: none;position:fixed;top:0%;width:100%;height:100%;z-index:10000;">';
        html += '<div style="width:100%;height:100%;">';
        html += '<iframe id="pg_pay_frame" name="pg_pay_frame" style="width:100%; height:100%;" src="" marginwidth="0" marginheight="0" frameborder="no" scrolling="no"></iframe>';
        html += '</div></div>';
        
        // html += '<form name="payInit" method="post" id="payInit" action="https://testpg.pay-story.co.kr/payInit_hash.do">';
        // html += '<input name="cardCd" type="hidden" value="11" />';
        // html += '<input name="mid" type="hidden" value="asdfadfmmm" />';
        // html += '<input name="goodsNm" type="hidden" value="관리비책 관리비" />';
        // html += '<input name="ordNo" type="hidden" value="asdfadfmmm20211027110247" />';
        // html += '<input name="goodsAmt" type="hidden" value="1004"/>';
        // html += '<input name="ordNm" type="hidden" value="박진기" />';
        // html += '<input name="ordTel" type="hidden" value="01034500479" />';
        // html += '<input name="returnUrl" type="hidden" value="https://localhost:4001/ResultCreditPay" />';
        // html += '<input name="notiUrl" type="hidden" value="https://localhost:4001/NoticeCreditPay" />';
        // html += '<input name="trxCd" type="hidden" value="0"/>';
        // html += '<input name="charSet" type="hidden" value="UTF-8" />';
        // html += '<input name="ediDate" type="hidden" value="20211027110247"/>';
        // html += '<input name="encData" type="hidden" value="f9192b7aeb0785a2e254c0bd8627dc6f9924c7fe0d17d428b6bbbb8825eba26c" />';
        // html += '</form>';

        // document.write(html);

        // const crypto = require('crypto');
        // form.ediDate.value =  
        // let hashData = form.ediDate.value;
        // form.encData.value = crypto.createHash('sha256').update(hashData).digest('hex');

        
        setTarget(form.target);
        setAction(form.action);

        form.target = "pg_pay_frame"; // SHA256 Hash
	    form.action = "https://testpg.pay-story.co.kr/payInit_hash.do"; // SHA256 Hash
	    
	    var targetElement = document.getElementById('pgPayMask');
	    fadeIn(targetElement, 150, 0.6);

	    console.log('Request CreditPay Data', form);
        document.body.appendChild(form);
	    form.submit();
	    document.getElementById('pgPayWindow').style.display = 'block';
    }

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
                        testfunc(document.payInit);
                        fadeOut();
                    }
                }>
                결제하기
                </Button>
        </article>
    );
}
