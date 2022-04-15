/**
 * @file : estimateList.js
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
            $writeBtn: null,
            $receivedData: null,
        },
        data: {},
        init: function init() {
            var self = this;
            self.els.$writeBtn = $('#write-btn');
            self.els.$receivedData = $('#received-data');
        },
        initView: function initView() {
            // 화면에서 세팅할 동적데이터
            var self = this;
            $.sendHttp({
                path: SERVER_PATH.ESTIMATE_LIST,
                data:{
                    requestNumber: 'REQUEST100010'
                },
                succ: function(data){
                    
                },
            });
        },
        initEvent: function initEvent() {
            // Dom Event 바인딩
            var self = this;
            self.els.$writeBtn.on('click', function(){
                M.page.html("../../people/requestWrite.html");
            });
            self.els.$receivedData.on('click', function(){
                $.movePage({
                    url:"../estimateDetail.html",
                    param:{
                        estimateNumber : estimateNumber
                    }
                });
            });
        },
        
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