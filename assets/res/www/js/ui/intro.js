/**
 * @file :
 * @author :
 * @date :
 */

// 페이지 단위 모듈
(function ($, M, CONFIG, window) {
    var ENV = CONFIG.ENV;
    var MSG = CONFIG.MSG;
    var CONSTANT = CONFIG.CONSTANT;
    var SERVER_CODE = CONFIG.SERVER_CODE;
    var SERVER_PATH = CONFIG.SERVER_PATH;
    var page = {
        els: {
            $percent: null,
            $progressBar: null
        },
        data: {},
        init: function init() {
            console.log("어디부터 안되는거야..?");
            this.els.$percent = $('#percent');
            this.els.$progressBar = $('#progress-bar');
        },
        startProgress: function startProgress(succCallBack) {
            console.log("아니 이거 돼? 돌아가?");
            var $percent = this.els.$percent;
            var $progressBar = this.els.$progressBar;
            var count = 0;                              

            var interval = setInterval(function () {
                count += 10;
                $percent.html(count);
                $progressBar.css('width', count + '%')
                if (count == 100) {
                    clearInterval(interval); // 반복 실행을 멈춘다.
                    succCallBack();
                }
            }, 50); // 반복적으로 함수를 실행 1ms
        },

        moveLoginPage: function moveLoginPage() {
            M.page.html({
                url: "./member/login.html",
                actionType: "CLEAR_TOP"
            });
        },
        initView: function initView() {
            // 화면에서 세팅할 동적데이터
            var self = this;
            var existLoginData = M.data.storage('AUTO_LOGIN_AUTH');
            if (existLoginData) {
                console.log("된겨?");
                this.startProgress(function () {
                    console.log("이건?"),
                    $.sendHttp({
                        path: SERVER_PATH.LOGIN,
                        data: {
                            peopleId: existLoginData.peopleId,
                            password: existLoginData.password
                        },
                        succ: function (data) {
                            //로그인이 성공했을 때 콜백
                            M.page.html('./main.html');
                        },
                        error: function () {
                            self.moveLoginPage();
                        }
                    });
                });
            } else {
                this.startProgress(this.moveLoginPage);
            }
        },
        initEvent: function initEvent() {
            // Dom Event 바인딩
        }
    };
    window.__page__ = page;
})(jQuery, M, __config__, window);

// 해당 페이지에서 실제 호출
(function ($, M, pageFunc, window) {

    // 화면에 리소스가 로딩을 끝내고 정상적으로 동작할 수 있는 시점에 대한 콜백
    // window.onload 와 비슷함.
    M.onReady(function () {
        pageFunc.init(); // 최초 화면 초기화
        pageFunc.initView();
        pageFunc.initEvent();
    });

})(jQuery, M, __page__, window);