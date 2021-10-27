import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';


export const RequestCreditPay = (props) => {

    useEffect(() => {
        // window.location.href = 'http://www.naver.com';
        // <form name="payInit" method="post" id="payInit" action="https://testpg.pay-story.co.kr/payInit_hash.do">
        //     <input name="cardCd" type="hidden" value="11" />
        //     <input name="mid" type="hidden" value="asdfadfmmm" />
        //     <input name="goodsNm" type="hidden" value="관리비책 관리비" />
        //     <input name="ordNo" type="hidden" value="asdfadfmmm20211027110247" />
        //     <input name="goodsAmt" type="hidden" value="1004"/>
        //     <input name="ordNm" type="hidden" value="박진기" />
        //     <input name="ordTel" type="hidden" value="01034500479" />
        //     <input name="returnUrl" type="hidden" value="https://testpg.pay-story.co.kr/receiveUrlSample.do" />
        //     <input name="notiUrl" type="hidden" value="https://testpg.pay-story.co.kr/testNoti.do" />
        //     <input name="trxCd" type="hidden" value="0"/>
        //     <input name="charSet" type="hidden" value="UTF-8" />
        //     <input name="ediDate" type="hidden" value="20211027110247"/>
        //     <input name="encData" type="hidden" value="f9192b7aeb0785a2e254c0bd8627dc6f9924c7fe0d17d428b6bbbb8825eba26c" />
        // </form>

        // window.open('#;', '_black');
        // //requestSendPayData(document.payInit);
        // document.payInit.submit();
        
    }, []);
    
    return (
        <div>
            <iframe id = "requestFrame"></iframe>
            <form name="payInit" target="requestFrame" method="post" id="payInit" action="https://testpg.pay-story.co.kr/payInit_hash.do">
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
                <Button type="submit">Click</Button> 
            </form>
        </div>
    );
    // const initiate = (comp) => {
    //     window.daum.postcode.load(() => {
    //         const Postcode = new window.daum.Postcode({
    //         oncomplete: function oncomplete(data) {
    //             comp.props.onComplete(data);
    //             if (comp.props.autoClose) comp.setState({ display: 'none' });
    //         },
    //         onsearch: comp.props.onSearch,
    //         onresize: function onresize(size) {
    //             if (comp.props.autoResize) comp.setState({ height: size.height });
    //         },
    //         alwaysShowEngAddr: comp.props.alwaysShowEngAddr,
    //         animation: comp.props.animation,
    //         autoMapping: comp.props.autoMapping,
    //         autoResize: comp.props.autoResize,
    //         height: '100%',
    //         hideEngBtn: comp.props.hideEngBtn,
    //         hideMapBtn: comp.props.hideMapBtn,
    //         maxSuggestItems: comp.props.maxSuggestItems,
    //         pleaseReadGuide: comp.props.pleaseReadGuide,
    //         pleaseReadGuideTimer: comp.props.pleaseReadGuideTimer,
    //         shorthand: comp.props.shorthand,
    //         showMoreHName: comp.props.showMoreHName,
    //         submitMode: comp.props.submitMode,
    //         theme: comp.props.theme,
    //         useSuggest: comp.props.useSuggest,
    //         useBannerLink: comp.props.useBannerLink,
    //         width: '100%',
    //         focusInput: comp.props.focusInput,
    //         focusContent: comp.props.focusContent,
    //         });

    //         Postcode.embed(this.wrap, { q: this.props.defaultQuery, autoClose: this.props.autoClose });
    //     });
    //     };
        
    // const handleError = (error) => {
    //     error.target.remove();
    //     this.setState({ error: true });
    // };

    // render() {
    //     const {
    //         style,
    //         onComplete,
    //         onSearch,
    //         alwaysShowEngAddr,
    //         animation,
    //         autoClose,
    //         autoMapping,
    //         autoResize,
    //         defaultQuery,
    //         errorMessage,
    //         height,
    //         hideEngBtn,
    //         hideMapBtn,
    //         maxSuggestItems,
    //         pleaseReadGuide,
    //         pleaseReadGuideTimer,
    //         scriptUrl,
    //         shorthand,
    //         showMoreHName,
    //         submitMode,
    //         theme,
    //         useSuggest,
    //         useBannerLink,
    //         width,
    //         zonecodeOnly,
    //         focusInput,
    //         focusContent,
    //         ...rest
    //     } = this.props;
    
    //     return (
    //         <div
    //         ref={(div) => { this.wrap = div; }}
    //         style={{
    //             width: this.state.width,
    //             height: this.state.height,
    //             display: this.state.display,
    //             ...style,
    //         }}
    //             {...rest}
    //             >
    //             {this.state.error && this.props.errorMessage}
    //         </div>
    //     );
    // };
}


// DaumPostcode.propTypes = {
//   onComplete: PropTypes.func.isRequired,
//   onSearch: PropTypes.func,
//   alwaysShowEngAddr: PropTypes.bool,
//   animation: PropTypes.bool,
//   autoClose: PropTypes.bool,
//   autoMapping: PropTypes.bool,
//   autoResize: PropTypes.bool,
//   defaultQuery: PropTypes.string,
//   errorMessage: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
//   height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
//   hideEngBtn: PropTypes.bool,
//   hideMapBtn: PropTypes.bool,
//   maxSuggestItems: PropTypes.number,
//   pleaseReadGuide: PropTypes.number,
//   pleaseReadGuideTimer: PropTypes.number,
//   scriptUrl: PropTypes.string,
//   shorthand: PropTypes.bool,
//   showMoreHName: PropTypes.bool,
//   style: PropTypes.object,
//   submitMode: PropTypes.bool,
//   theme: PropTypes.exact({
//     bgColor: PropTypes.string,
//     searchBgColor: PropTypes.string,
//     contentBgColor: PropTypes.string,
//     pageBgColor: PropTypes.string,
//     textColor: PropTypes.string,
//     queryTextColor: PropTypes.string,
//     postcodeTextColor: PropTypes.string,
//     emphTextColor: PropTypes.string,
//     outlineColor: PropTypes.string,
//   }),
//   useSuggest: PropTypes.bool,
//   useBannerLink: PropTypes.bool,
//   width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
//   focusInput: PropTypes.bool,
//   focusContent: PropTypes.bool,
// };

// DaumPostcode.defaultProps = {
//   onSearch: undefined,
//   alwaysShowEngAddr: false,
//   animation: false,
//   autoClose: false,
//   autoMapping: true,
//   autoResize: false,
//   defaultQuery: null,
//   errorMessage: defaultErrorMessage,
//   height: 400,
//   hideEngBtn: false,
//   hideMapBtn: false,
//   maxSuggestItems: 10,
//   pleaseReadGuide: 0,
//   pleaseReadGuideTimer: 1.5,
//   scriptUrl: 'https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js',
//   shorthand: true,
//   showMoreHName: false,
//   style: null,
//   submitMode: true,
//   theme: null,
//   useSuggest: true,
//   useBannerLink: true,
//   width: '100%',
//   focusInput: true,
//   focusContent: true,
// };

// export default DaumPostcode;
