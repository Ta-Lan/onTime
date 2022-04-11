/**
 * @file : login.js
 * @author : suhyun
 * @date : 22.04.08
 */

 (function ($, M, CONFIG, window) {
    var ENV = CONFIG.ENV;
    var MSG = CONFIG.MSG;
    var CONSTANT = CONFIG.CONSTANT;
    var SERVER_CODE = CONFIG.SERVER_CODE;
    var SERVER_PATH = CONFIG.SERVER_PATH;
    var page = {
        els: {
            $loginIdIpt: null,
            $passwordIpt: null,
            $loginBtn: null,
            $autoLoginChk: null,
            $findIdBtn: null,
            $findPwBtn: null,
            $joinBtn: null,
        },
        data: {},
        init: function init() {
            var self = this;
            self.els.$loginIdIpt = $('#login-id');
            self.els.$passwordIpt = $('#password');
            self.els.$loginBtn = $('#login-btn');
            self.els.$autoLoginChk = $('#auto-login-chk');
            self.els.$findIdBtn = $('#find-id');
            self.els.$findPwBtn = $('#find-pw');
            self.els.$joinBtn = $('#join-btn');
        },
        initView: function initView() {
            // 화면에서 세팅할 동적데이터
        },
        initEvent: function initEvent() {
            // Dom Event 바인딩
            var self = this;
            this.els.$loginBtn.on('click', function () {
              self.login();
            });
            this.els.$findIdBtn.on('click', function () {
              M.page.html('./findId.html');
            });
            this.els.$findPwBtn.on('click', function () {
              M.page.html('./findPw1.html');
            });
            this.els.$joinBtn.on('click', function () {
              M.page.html('./join1.html');
            });
        },
        
        //자동로그인
        setAutoLogin: function(id, pw){
            M.data.storage('AUTO_LOGIN_AUTH',{
                peopleId: id,
                password: pw
            });    
        },
        unsetAutoLogin: function(id, pw){
            M.data.removeStorage('AUTO_LOGIN_AUTH');
        },

        login: function () {
            var self = this;
            var id = this.els.$loginIdIpt.val().trim(); // 로그인 아이디 가져오기
            var pw = this.els.$passwordIpt.val().trim(); // 비밀번호 가져오기
            var isAutoLogin = this.els.$autoLoginChk.prop('checked'); // true / false
      
            if (id == '') {
              return alert('아이디를 입력해주세요');
            }
            if (pw == '') {
              return alert('비밀빈호를 입력해주세요');
            }
      
      
            $.sendHttp({
              path: SERVER_PATH.LOGIN,
              data: {
                peopleId: id,
                password: pw
              },
              succ: function (data) {
                //로그인이 성공했을 때 콜백
                if (isAutoLogin) self.setAutoLogin(id, pw);
                M.data.global({
                  LOGIN_INFO: {
                      nickName: "",
                      auth: "people", // people, pro, admin
                      peopleId : ""
                  }
              });
                M.page.html("../main.html");
              },
              err: function (data) {
                if (data.rsltCode != '0000') {
                  alert("아이디 혹은 비밀번호가 틀립니다.");
                }
              }
            });
          }
    };
    window.__page__ = page;
})(jQuery, M, __config__, window);

(function ($, M, pageFunc, window) {

    M.onReady(function () {
        pageFunc.init();
        pageFunc.initView();
        pageFunc.initEvent();
    });

})(jQuery, M, __page__, window);