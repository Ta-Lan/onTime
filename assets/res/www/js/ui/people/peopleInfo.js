/**
 * @file : peopleInfo.js
 * @author : ParkDoYoung
 * @date : 22.4.12
 */

(function ($, CONFIG, window) {
    var ENV = CONFIG.ENV;
    var MSG = CONFIG.MSG;
    var CONSTANT = CONFIG.CONSTANT;
    var SERVER_CODE = CONFIG.SERVER_CODE;
    var SERVER_PATH = CONFIG.SERVER_PATH;
    var page = {
        els: {
            $goPro : null,
        },
        data: {},
        init: function init() {
            var self = this;
            self.els.$goPro = $('#go-pro');
        },
        initView: function initView() {
            // 화면에서 세팅할 동적데이터
        },
        initEvent: function initEvent() {
            // Dom Event 바인딩
            var self = this;
            $(self.els.$goPro).on('click',function(){
                $.movePage({
                    url : "/www/html/pro/proInfo.html",
                    actionType : "NO_HISTORY"
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