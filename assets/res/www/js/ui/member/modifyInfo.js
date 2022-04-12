/**
 * @file : modifyInfo.js
 * @author : suhyun
 * @date : 2022.04.12
 */

 (function ($, CONFIG, window) {
    var ENV = CONFIG.ENV;
    var MSG = CONFIG.MSG;
    var CONSTANT = CONFIG.CONSTANT;
    var SERVER_CODE = CONFIG.SERVER_CODE;
    var SERVER_PATH = CONFIG.SERVER_PATH;
    var page = {
        els: {
            $name: null,
            $nickname: null,
            $birth: null,
            $address: null,
            $email: null,
            $phone: null,
            $modifyBtn: null,
            $deleteBtn: null,
        },
        data: {},
        init: function init() {
            var self = this;
            self.els.$name = $('#name');
            self.els.$nickname = $('#nickname');
            self.els.$birth = $('#birth');
            self.els.$address = $('#address');
            self.els.$email = $('#email');
            self.els.$phone = $('#phone');
            self.els.$modifyBtn = $('#modify-info');
            self.els.$deleteBtn = $('#delete-member');
        },
        initView: function initView() {
            // 화면에서 세팅할 동적데이터
            var self =this;
            var peopleId = M.data.global("LOGIN_INFO.peopleId");
            console.log("LOGIN_INFO.peopleId");
            console.log(peopleId);
            $.sendHttp({
                path: SERVER_PATH.INFO,
                data:{
                    peopleId: peopleId
                },
                succ: function(data){
                    self.els.$name.text(data.name);
                    self.els.$nickname.text(data.nickname);
                    self.els.$birth.text(data.birth);
                    self.els.$address.text(data.address);
                    self.els.$email.text(data.email);
                    self.els.$phone.text(data.phone);
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