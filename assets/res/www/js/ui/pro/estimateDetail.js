/**
 * @file : estimateDetail.js
 * @author : suhyun
 * @date : 2022.04.14
 */

 (function ($, CONFIG, window) {
    var ENV = CONFIG.ENV;
    var MSG = CONFIG.MSG;
    var CONSTANT = CONFIG.CONSTANT;
    var SERVER_CODE = CONFIG.SERVER_CODE;
    var SERVER_PATH = CONFIG.SERVER_PATH;
    var page = {
        els: {
            $proId: null,
            $timeExpect: null,
            $price: null,
            $subject: null,
            $content: null,
            $chatBtn: null,
            $declineBtn: null
        },
        data: {},
        init: function init() {
            var self = this;
            self.els.$proId = $('#pro-id');
            self.els.$timeExpect = $('#time-expect');
            self.els.$price = $('#price');
            self.els.$subject = $('#subject');
            self.els.$content = $('#content');
            self.els.$chatBtn = $('#chat-btn');
            self.els.$declineBtn = $('#decline-btn');
        },
        initView: function initView() {
            // 화면에서 세팅할 동적데이터
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