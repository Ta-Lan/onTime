/**
 * @file :findId.js
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
        els: {
            $name: null,
            $email: null,
            $findIdBtn: null,
            $findPwBtn: null,
        },
        data: {},
        init: function init() {
            var self = this;
            self.els.$name = $('#user-name');
            self.els.$cellPhone = $('#email');
            self.els.$findIdBtn = $('#find-id-btn');
            self.els.$findPwBtn = $('#find-pw');
        },
        initView: function initView() {
            // 화면에서 세팅할 동적데이터
        },
        initEvent: function initEvent() {
            // Dom Event 바인딩
            var self = this;
            this.els.$findIdBtn.on('click', function () {
                self.findId();
            });
            this.els.$findPwBtn.on('click', function () {
                M.page.html('./findPw1.html');
            });
        },

        findId: function(){
            var self = this;
            var name = self.els.$name.val().trim();
            var email = self.els.$email.val().trim();
    
            if(name == ''){
                return alert("이름을 입력해주세요.");
            }
            if(email == ''){
                return alert("이메일을 입력해주세요.");
            }
    
            $.sendHttp({
                path: SERVER_PATH.FIND_ID,
                data:{
                    userNm : userNm,
                    cellPhone : cellPhone,
                },
                succ: function(data){
                    alert("아이디는 " +data.peopleId+" 입니다.");
                },
                error: function(data){
                    alert("등록된 ID가 없습니다.");
                }
            });
    
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