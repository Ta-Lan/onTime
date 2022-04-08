/**
 * @file :
 * @author :
 * @date :
 */

(function ($, CONFIG, window) {
    var ENV = CONFIG.ENV;
    var MSG = CONFIG.MSG;
    var CONSTANT = CONFIG.CONSTANT;
    var SERVER_CODE = CONFIG.SERVER_CODE;
    var SERVER_PATH = CONFIG.SERVER_PATH;
    var page = {
        els: {},
        data: {},
        init: function init() {
            console.log('send http');
            $.sendHttp({
                path: SERVER_PATH.GET_MESSAGE,
                data : {
                    messageSender: "dy",
                    messageReceiver:"yd"
                },
                succ : function(data){
                    console.log(data.Data);
                },
                error : function(data){
                    console.log(data);
                }
            });
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