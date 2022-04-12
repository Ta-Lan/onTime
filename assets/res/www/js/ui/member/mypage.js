/**
 * @file : mypage.js
 * @author : suhyun
 * @date : 2022.04.11
 */

 (function ($, CONFIG, window) {
    var ENV = CONFIG.ENV;
    var MSG = CONFIG.MSG;
    var CONSTANT = CONFIG.CONSTANT;
    var SERVER_CODE = CONFIG.SERVER_CODE;
    var SERVER_PATH = CONFIG.SERVER_PATH;
    var page = {
        els: {
            $nickname: null,
            $intro: null,
            $profileImgBtn: null,
            $modifyInfo: null,
            $paymentInfo: null,
            $latestPayment: null,
            $latestRequest: null,
            $latestReview: null,
            $latestInquiry: null
        },
        data: {},
        init: function init() {
            var self = this;
            self.els.$nickname = $('#nickname');
            self.els.$intro = $('#intro');
            self.els.$profileImgBtn = $('#profile-img-btn');
            self.els.$modifyInfo = $('#modify-info');
            self.els.$paymentInfo = $('#payment-info');
            self.els.$latestPayment = $('#latest-payment');
            self.els.$latestRequest = $('#latest-request');
            self.sle.$latestReview = $('#latest-review');
            self.els.$latestInquiry = $('#latest-inquiry');
        },
        initView: function initView() {
            // 화면에서 세팅할 동적데이터
            var peopleId = M.data.global("LOGIN_INFO.peopleId");
            var nickname = M.data.global("LOGIN_INFO.nickname");
        },
        initEvent: function initEvent() {
            // Dom Event 바인딩
        }
    };
    window.__page__ = page;
})(jQuery, __config__, window);

(function ($, M, pageFunc, window) {

    M.onReady(function () {
        pageFunc.init();
        pageFunc.initView();
        pageFunc.initEvent();
    });

})(jQuery, M, __page__, window);