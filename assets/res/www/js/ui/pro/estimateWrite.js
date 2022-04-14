/**
 * @file : estimateWrite.js
 * @author : suhyun
 * @date : 2022.04.14
 */

 (function ($, CONFIG, module, window) {
    var ENV = CONFIG.ENV;
    var MSG = CONFIG.MSG;
    var CONSTANT = CONFIG.CONSTANT;
    var SERVER_CODE = CONFIG.SERVER_CODE;
    var SERVER_PATH = CONFIG.SERVER_PATH;
    var page = {
        els: {  
            $timeExpect: null,
            $price: null,
            $subject: null,
            $content: null,
            $writeBtn: null,
            $cancelBtn: null
        },
        data: {},
        init: function init() {
            var self = this;
            self.els.$timeExpect = $('#time-expect');
            self.els.$price = $('#price');
            self.els.$subject = $('#subject');
            self.els.$content = $('#content');
            self.els.$writeBtn = $('#writeBtn');
            self.els.$cancelBtn = $('#cancelBtn');
        },
        initView: function initView() {
            // 화면에서 세팅할 동적데이터
            module.onKeyupNum(this.els.$price);

        },
        initEvent: function initEvent() {
            // Dom Event 바인딩
            var self = this;
            self.els.$writeBtn.on('click', function(){
                self.writeEstimate();
            });
            self.els.$cancelBtn.on('click', function(){
                $.moveBack();
            });
        },

        writeEstimate: function(){
            var self = this;
            var timeExpect = self.els.$timeExpect.val().trim();
            var price = self.els.$price.val().trim();
            var subject = self.els.$subject.val().trim();
            var content = self.els.$subject.val().trim();
            $.sendHttp({
                path: SERVER_PATH.ESTIMATE_REGIST,
                data:{
                    requestNumber: "REQUEST100010",
                    predictTime: timeExpect,
                    quotePrice: price,
                    estimateTitle: subject,
                    estimateContent: content
                },
                succ: function(data){
                    console.log(data);
                    alert("견적서 작성 완료");
                    $.moveBack();
                },
                eroor: function(data, stauts){
                    alert("에러");
                }
            })
        }
    };
    window.__page__ = page;
})(jQuery, __config__, __util__, window);

(function ($, M, pageFunc, window) {

    M.onReady(function () {
        pageFunc.init();
        pageFunc.initView();
        pageFunc.initEvent();
    });

})(jQuery, M, __page__, window);