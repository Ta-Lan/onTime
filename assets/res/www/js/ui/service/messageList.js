/**
 * @file : messageList.js
 * @author : ParkDoYoung
 * @date : 22.4.13
 */

(function ($, CONFIG, window) {
    var ENV = CONFIG.ENV;
    var MSG = CONFIG.MSG;
    var CONSTANT = CONFIG.CONSTANT;
    var SERVER_CODE = CONFIG.SERVER_CODE;
    var SERVER_PATH = CONFIG.SERVER_PATH;
    var HTML = CONFIG.HTML;
    var page = {
        els: {
            $chatList: null
        },
        data: {
            loginInfo : {},

        },
        init: function init() {
            var self = this;
            self.els.$chatList = $('#chat-list');
            self.data.loginInfo = M.data.global("LOGIN_INFO");
            console.log(self.data.loginInfo);
        },
        initView: function initView() {
            // 화면에서 세팅할 동적데이터
            $.sendHttp({
                path: SERVER_PATH.GET_MESSAGE_LIST,
                succ: function (data) {
                    console.log(data);
                    $("#chat-list").html(" ");
                    for (var i = 0; i < data.list.length; i++) {
                        $("#chat-list").append(HTML.MESSAGE_LIST);
                        $("div.chat-people-sender:eq(" + i + ")").html(data.list[i].messageSender);
                        $("div.chat-people-category:eq(" + i + ")").html('아무튼 사람에 대한 정보');
                        $("div.chat-box-text:eq(" + i + ")").html(data.list[i].messageContent);
                    }
                },
                error: function (data) {
                    console.log(data);
                }
            })
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