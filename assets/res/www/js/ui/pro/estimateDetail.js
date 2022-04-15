/**
<<<<<<< HEAD
=======
<<<<<<< HEAD
 * @file : estimateDetail.js
 * @author : suhyun
 * @date : 2022.04.14
 */

 (function ($, CONFIG, window) {
=======
>>>>>>> suhyun
 * @file :estimateDetail.js
 * @author : ParkDoYoung
 * @date : 22.4.14
 */

(function ($, CONFIG, window) {
<<<<<<< HEAD
=======
>>>>>>> 55d55524065aa7b09fde4d52eafcb1fc087fcd67
>>>>>>> suhyun
    var ENV = CONFIG.ENV;
    var MSG = CONFIG.MSG;
    var CONSTANT = CONFIG.CONSTANT;
    var SERVER_CODE = CONFIG.SERVER_CODE;
    var SERVER_PATH = CONFIG.SERVER_PATH;
    var page = {
        els: {
<<<<<<< HEAD
=======
<<<<<<< HEAD
            $proId: null,
            $timeExpect: null,
            $price: null,
            $subject: null,
            $content: null,
            $chatBtn: null,
            $declineBtn: null
=======
>>>>>>> suhyun
            $name : null,
            $timeExpect : null,
            $price : null,
            $subject : null,
            $content : null,
            $message : null,
            $reject : null,
<<<<<<< HEAD
=======
>>>>>>> 55d55524065aa7b09fde4d52eafcb1fc087fcd67
>>>>>>> suhyun
        },
        data: {},
        init: function init() {
            var self = this;
<<<<<<< HEAD
            self.els.$name = $('#name');
=======
<<<<<<< HEAD
            self.els.$proId = $('#pro-id');
=======
            self.els.$name = $('#name');
>>>>>>> 55d55524065aa7b09fde4d52eafcb1fc087fcd67
>>>>>>> suhyun
            self.els.$timeExpect = $('#time-expect');
            self.els.$price = $('#price');
            self.els.$subject = $('#subject');
            self.els.$content = $('#content');
<<<<<<< HEAD
=======
<<<<<<< HEAD
            self.els.$chatBtn = $('#chat-btn');
            self.els.$declineBtn = $('#decline-btn');
        },
        initView: function initView() {
            // 화면에서 세팅할 동적데이터
=======
>>>>>>> suhyun
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
<<<<<<< HEAD
=======
>>>>>>> 55d55524065aa7b09fde4d52eafcb1fc087fcd67
>>>>>>> suhyun
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