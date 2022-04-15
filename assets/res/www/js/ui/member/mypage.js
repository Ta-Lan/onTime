/**
 * @file : mypage.js
 * @author : suhyun
 * @date : 2022.04.11
 */

(function ($, M, CONFIG, window) {
    var ENV = CONFIG.ENV;
    var MSG = CONFIG.MSG;
    var CONSTANT = CONFIG.CONSTANT;
    var SERVER_CODE = CONFIG.SERVER_CODE;
    var SERVER_PATH = CONFIG.SERVER_PATH;
    var proStatus = M.data.global("PRO_STATUS.proStatus");
    var page = {
        els: {
            $nickname: null,
            $intro: null,
            $profileImgBtn: null,
            $modifyInfo: null,
            $modifyIntro: null,
            $paymentInfo: null,
            $latestPayment: null,
            $latestRequest: null,
            $latestReview: null,
            $latestInquiry: null,
            $proRegist: null,
            $goPro: null,
            $goPeople: null,
            $feedWriteBtn: null,
        },
        data: {},
        init: function init() {
            var self = this;
            self.els.$nickname = $('#nickname');
            self.els.$intro = $('#intro');
            self.els.$profileImgBtn = $('#profile-img-btn');
            self.els.$modifyInfo = $('#modify-info');
            self.els.$modifyIntro = $('#modify-intro');
            self.els.$paymentInfo = $('#payment-info');
            self.els.$latestPayment = $('#latest-payment');
            self.els.$latestRequest = $('#latest-request');
            self.els.$latestReview = $('#latest-review');
            self.els.$latestInquiry = $('#latest-inquiry');
            self.els.$proRegist = $('#pro-register');
            self.els.$goPro = $('#go-pro');
            self.els.$goPeople = $('#go-people');
            self.els.$feedWriteBtn = $('#pro-mypage3');
        },
        initView: function initView() {
            // 화면에서 세팅할 동적데이터
            var self = this;
            var peopleId = M.data.global("LOGIN_INFO.peopleId");
            var nickname = M.data.global("LOGIN_INFO.nickname");
            var auth = M.data.global("LOGIN_INFO.auth");
            $.sendHttp({
                path: SERVER_PATH.INFO,
                data: {
                    peopleId: peopleId
                },
                succ: function (data) {
                    self.els.$nickname.text(nickname);
                    self.els.$intro.text(data.intro);
                    document.getElementById("profile-img-btn").src=data.imagePath+data.storeImageName; //($.imagePath(data.imagePath, data.storeImageName))
                    if (auth) {
                        //pro인증이 된 회원
                        $('#pro-register').css("display", "none");
                        self.proOn();
                    } else {
                        //pro인증이 되지 않은 회원. pro가입하기 띄움
                        $("#pro-register").css("display", "block");
                        self.peopleOn();
                        $("#people-mypage").css("display", "none");
                        $("#pro-mypage").css("display", "none");
                    }
                },
                error: function () {
                    alert("ㅇㅔㄹㅓ")
                }
            })
        },
        initEvent: function initEvent() {
            var self = this;
            self.els.$goPro.on('click', function () {
                self.goPro();
            });
            self.els.$goPeople.on('click', function(){
                self.goPeople();
            });
            self.els.$modifyInfo.on('click', function(){
                M.page.html("./viewInfo.html");
            })
            self.els.$modifyIntro.on('click', function(){
                var userInput = prompt("소개 수정"+"소개를 입력하세요.");
                self.els.$intro.text(userInput);
                var intro = self.els.$intro.val();
                $.sendHttp({
                    path: SERVER_PATH.UPDATE_INTRO,
                    data: {
                        intro: intro
                    },
                    succ: function(){
                        alert("소개가 수정되었습니다.");
                    },
                    error: function(){
                        alert("소개 수정 오류");
                    }
                })
            });
            self.els.$proRegist.on('click', function () {
                M.page.html("../pro/proRegist.html");
            });
            self.els.$feedWriteBtn.on('click', function(){
                M.page.html("../pro/feedWrite.html")
            });
            self.els.$profileImgBtn.on('click', function(){
                self.updateImage();
            });
            
        },
        goPro: function goPro(){
            var self = this;
            self.proOn();
        },
        goPeople: function goPeople(){
            var self = this;
            self.peopleOn();
        },
        proOn: function proOn() {
            //people -> pro
            $("#pro-mypage1").css("display", "block");
            $("#pro-mypage2").css("display", "block");
            $("#pro-mypage3").css("display", "block");
            $("#people-mypage1").css("display", "none");
            $("#people-mypage2").css("display", "none");
            $("#people-mypage3").css("display", "none");
            M.data.global("PRO_STATUS.proStatus", true);

            //people로 전환하는 버튼
            $("#people-mypage").css("display", "block");
            $("#pro-mypage").css("display", "none");
        },
        peopleOn: function peopleOn(){
            //pro -> people
            $("#pro-mypage1").css("display","none");
            $("#pro-mypage2").css("display","none");
            $("#pro-mypage3").css("display", "none");
            $("#people-mypage1").css("display", "block");
            $("#people-mypage2").css("display", "block");
            $("#people-mypage3").css("display", "block");
            //pro로 전환
            $("#pro-mypage").css("display", "block");
            $("#people-mypage").css("display","none");

            M.data.global("PRO_STATUS.proStatus", false);
        },
        updateImage: function updateImage(){
            //프로필 이미지 수정
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