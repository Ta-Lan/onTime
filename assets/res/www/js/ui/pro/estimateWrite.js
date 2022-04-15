/**
 * @file : estimateWrite.js
<<<<<<< HEAD
 * @author : suhyun
 * @date : 2022.04.14
 */

 (function ($, CONFIG, module, window) {
=======
 * @author : ParkDoYoung
 * @date : 22.4.13
 */

(function ($, module,CONFIG, window) {
>>>>>>> 55d55524065aa7b09fde4d52eafcb1fc087fcd67
    var ENV = CONFIG.ENV;
    var MSG = CONFIG.MSG;
    var CONSTANT = CONFIG.CONSTANT;
    var SERVER_CODE = CONFIG.SERVER_CODE;
    var SERVER_PATH = CONFIG.SERVER_PATH;
    var page = {
<<<<<<< HEAD
        els: {  
            $timeExpect: null,
            $price: null,
            $subject: null,
            $content: null,
            $writeBtn: null,
            $cancelBtn: null
=======
        els: {
            $timeExpect : null,
            $price : null,
            $content : null,
            $subject : null,
            $write : null,
            $cancel :null,
            $unit : null,
>>>>>>> 55d55524065aa7b09fde4d52eafcb1fc087fcd67
        },
        data: {},
        init: function init() {
            var self = this;
            self.els.$timeExpect = $('#time-expect');
            self.els.$price = $('#price');
<<<<<<< HEAD
            self.els.$subject = $('#subject');
            self.els.$content = $('#content');
            self.els.$writeBtn = $('#writeBtn');
            self.els.$cancelBtn = $('#cancelBtn');
        },
        initView: function initView() {
            // 화면에서 세팅할 동적데이터
            module.onKeyupNum(this.els.$price);

=======
            self.els.$content = $('#content');
            self.els.$subject = $('#subject');
            self.els.$write = $('#write');
            self.els.$cancel = $('#cancel');
            self.els.$unit = $('#unit');
        },
        initView: function initView() {
            // 화면에서 세팅할 동적데이터
>>>>>>> 55d55524065aa7b09fde4d52eafcb1fc087fcd67
        },
        initEvent: function initEvent() {
            // Dom Event 바인딩
            var self = this;
<<<<<<< HEAD
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
                    requestNumber: "REQUEST100010", //이거 받아오는걸로 바꿔야해
                    predictTime: timeExpect,
                    quotePrice: price,
                    estimateTitle: subject,
                    estimateContent: content
                },
                succ: function(data){
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
=======
            module.onKeyupNum(self.els.$price);
            $(self.els.$write).on('click',function(){
                var timeExpect = self.els.$timeExpect.val().trim();
                var unit = self.els.$unit.val();
                var price = self.els.$price.val().trim();
                var subject = self.els.$subject.val().trim();
                var content = self.els.$content.val().trim();
                if ($.isEmpty(timeExpect)){return alert('예상 소요시간을 입력해주세요');}
                if (unit === '선택'){return alert('단위를 선택해주세요');}
                if ($.isEmpty(price)){return alert('가격을입력해주세요');}
                if ($.isEmpty(subject)){return alert('제목을 입력해주세요');}
                if ($.isEmpty(content)){return alert('내용을 입력해주세요');}
                $.sendHttp({
                    path : SERVER_PATH.ESTIMATE_REGIST,
                    data : {
                        requestNumber : "REQUEST100010",
                        predictTime : timeExpect,
                        quotePrice : price, // unit + price
                        estimateTitle : subject,
                        estimateContent : content,
                    },
                    succ : function (data){
                        console.log(data);
                    },
                    error : function (data){
                        console.log(data);
                    }
                });
            });
        }
    };
    window.__page__ = page;
})(jQuery,__util__, __config__, window);
>>>>>>> 55d55524065aa7b09fde4d52eafcb1fc087fcd67

(function ($, M, pageFunc, window) {

    M.onReady(function () {
        pageFunc.init();
        pageFunc.initView();
        pageFunc.initEvent();
    });

})(jQuery, M, __page__, window);