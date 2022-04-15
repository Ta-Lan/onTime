/**
 * @file : requestList.js
 * @author : shyun
 * @date : 2022.04.15
 */

(function ($, CONFIG, window) {
    var ENV = CONFIG.ENV;
    var MSG = CONFIG.MSG;
    var CONSTANT = CONFIG.CONSTANT;
    var SERVER_CODE = CONFIG.SERVER_CODE;
    var SERVER_PATH = CONFIG.SERVER_PATH;
    var page = {
        els: {
            $category: null,
            $writeBtn: null,
        },
        data: {},
        init: function init() {
            var self = this;
            self.els.$writeBtn = $('#write-btn')
          
        },
        initView: function initView() {
            // 화면에서 세팅할 동적데이터
            console.log(M.data.param("category"));
        },
        initEvent: function initEvent() {
            // Dom Event 바인딩
            var self = this;
            self.els.$writeBtn.on('click', function(){
                $.movePage({
                    url: "/www/html/people/requestWrite.html"
                });
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