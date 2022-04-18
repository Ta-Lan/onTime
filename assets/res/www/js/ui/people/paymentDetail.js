/**
 * @file : paymentDetail.js
 * @author : suhyun
 * @date : 2022.04.18
 */

 (function ($, CONFIG, window) {
    var ENV = CONFIG.ENV;
    var MSG = CONFIG.MSG;
    var CONSTANT = CONFIG.CONSTANT;
    var SERVER_CODE = CONFIG.SERVER_CODE;
    var SERVER_PATH = CONFIG.SERVER_PATH;
    var page = {
        els: {
            $paymentDate: null,
            $paymentNumber: null,
            $paymentStatus: null,
            $paymentType: null,
            $paymentAmount: null,
            $requestTitle: null,
            $requestContent: null,
            $proId: null,
            $estimateTitle: null,
            $estimateContent: null,
            $reviewWrite: null,
        },
        data: {},
        init: function init() {
            var self = this;
            self.els.$paymentDate = $('#payment-date');
            self.els.$paymentStatus = $('#payment-status');
            self.els.$paymentType = $('#payment-type');
            self.els.$paymentAmount = $('#payment-amount');
            self.els.$requestTitle = $('#request-title');
            self.els.$requestContent = $('#request-content');
            self.els.$proId = $('#pro-id');
            self.els.$estimateTitle = $('#estimate-title');
            self.els.$estimateContent = $('#estimate-content');
            self.els.$paymentCancel = $('#payment-cancel');
            self.els.$reviewWrite = $('#review-write');
        },
        initView: function initView() {
            // 화면에서 세팅할 동적데이터
            var self = this;
            var paymentNumber = M.data.param("paymentNumber");
            $.sendHttp({
                path: SERVER_PATH.PAYMENT_DETAIL,
                data:{
                    paymentNumber: paymentNumber
                },
                succ: function(data){
                    self.els.$paymentDate.text(data.paymentDate);
                    self.els.$paymentNumber.text(data.paymentNumber);
                    self.els.$paymentStatus.text(data.progressiveStatus);
                    self.els.$paymentAmount.text(data.paymentPrice+"원");
                    self.els.$requestTitle.text(data.requestTitle);
                    self.els.$requestContent.text(data.requestContent);
                    self.els.$proId.text(data.nickname+" 님의 견적서");
                    self.els.$estimateTitle.text(data.estimateTitle);
                    self.els.$estimateContent.text(data.estimateContent);
                }
            })
        },


        initEvent: function initEvent() {
            // Dom Event 바인딩
            var self = this;
            self.els.$reviewWrite.on('click', function(){
                $.movePage({
                    url:"/www/html/people/reviewWrite.html",
                    param:{
                        paymentNumber: M.data.param("paymentNumber")
                    }
                })
            })
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