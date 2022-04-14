/**
 * @file : common.event.js
 * @author : ParkDoYoung
 * @date : 22.4.8
 */

// 페이지 단위 모듈
(function ($, module,window) {

    var page = {
        els: {
            $btnBack : null,
            $btnMenu : null,
            $requestBtn : null,
            $messageBtn : null,
            $homeBtn : null,
            $inquireBtn : null,
            $myPageBtn : null
        },
        data: {},
        init: function init() {
            var self = this;
            self.els.$btnBack = $('.btn-back');
            self.els.$btnMenu = $('.btn-menu');
            self.els.$requestBtn = $('#request-btn');
            self.els.$messageBtn = $('#message-btn');
            self.els.$homeBtn = $('#home-btn');
            self.els.$inquireBtn = $('#inquire-btn');
            self.els.$myPageBtn = $('#my-page-btn');
        },
        initView: function initView() {
            // 화면에서 세팅할 동적데이터
        },
        initEvent: function initEvent() {
            var self = this;
            // 뒤로가기
            $(self.els.$btnBack).on('click',function(){
                $.moveBack();
            });
            // 요청/견적
            // 사용자의
            // 프로 -> requestList
            // 피플 -> requestMyList
            $(self.els.$requestBtn).on('click',function(){
                $.movePage({
                    url : "/www/html/people/requestMyList.html",
                    actionType : 'NO_HISTORY'
                });
            });
            // 메시지
            $(self.els.$messageBtn).on('click',function(){
                $.movePage({
                    url : "/www/html/service/messageList.html",
                });
            });
            // 홈
            $(self.els.$homeBtn).on('click',function(){
                $.movePage({
                    url : "/www/html/main.html",
                    actionType : 'NO_HISTORY'
                });
            });
            // 문의
            $(self.els.$inquireBtn).on('click',function(){
                $.movePage({
                    url : "/www/html/member/myQnaList.html",
                    actionType : 'NO_HISTORY'
                });
            });
            // 마이페이지
            $(self.els.$myPageBtn).on('click',function(){
                $.movePage({
                    url : "/www/html/member/mypage.html"
                });
            });
        }
    };
    window.__page__ = page;
})(jQuery,__util__ ,window);

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