/**
 * @file :estimateDetail.js
 * @author : ParkDoYoung
 * @date : 22.4.14
 */

(function ($, CONFIG, window) {
    var ENV = CONFIG.ENV;
    var MSG = CONFIG.MSG;
    var CONSTANT = CONFIG.CONSTANT;
    var SERVER_CODE = CONFIG.SERVER_CODE;
    var SERVER_PATH = CONFIG.SERVER_PATH;
    var page = {
        els: {
            $name : null,
            $timeExpect : null,
            $price : null,
            $subject : null,
            $content : null,
            $message : null,
            $reject : null,
        },
        data: {},
        init: function init() {
            var self = this;
            self.els.$name = $('#name');
            self.els.$timeExpect = $('#time-expect');
            self.els.$price = $('#price');
            self.els.$subject = $('#subject');
            self.els.$content = $('#content');
            self.els.$message = $('#message');
            self.els.$reject = $('#reject');
            self.data.loginInfo = M.data.global("LOGIN_INFO");
            self.data.estimateNumber = M.data.param('estimateNumber');
        },
        initView: function initView() {
            // 화면에서 세팅할 동적데이터
            var self = this;
            console.log(self.data.loginInfo);

            $.sendHttp({
                path : SERVER_PATH.ESTIMATE_DETAIL,
                data : {
                    estimateNumber : self.data.estimateNumber
                },
                succ : function(data){
                    console.log(data);
                    $(self.els.$name).html(data.proId);
                    $(self.els.$timeExpect).val(data.predictTime);
                    $(self.els.$price).val(data.quotePrice+'원');
                    $(self.els.$subject).val(data.estimateTitle);
                    $(self.els.$content).html(data.estimateContent);
                }
            });
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