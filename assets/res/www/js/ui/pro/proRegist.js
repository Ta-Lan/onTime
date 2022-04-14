/**
 * @file : proRegist.js
 * @author : suhyun
 * @date : 2022.04.14
 */

 (function ($, CONFIG, window) {
    var ENV = CONFIG.ENV;
    var MSG = CONFIG.MSG;
    var CONSTANT = CONFIG.CONSTANT;
    var SERVER_CODE = CONFIG.SERVER_CODE;
    var SERVER_PATH = CONFIG.SERVER_PATH;
    var page = {
        els: {
            $category: null,
            $registContent: null,
            $experiencePeriod: null,
            $license: null,
            $selectedLicense: null,
            $searchBtn: null,
            $searchResult: null,
            $registBtn: null,
        },
        data: {},
        init: function init() {
            var self = this;
            self.els.$category = $('#category');
            self.els.$registContent = $('#regist-content');
            self.els.$experiencePeriod = $('#experience-period');
            self.els.$license = $('#license');
            self.els.$searchBtn = $('#search-btn');
            self.els.$searchResult = $('#search-result');
            self.els.$registBtn = $('#regist-btn');
        },
        initView: function initView() {
            // 화면에서 세팅할 동적데이터
            //자격증 목록 한 열개 띄워
        },
        initEvent: function initEvent() {
            // Dom Event 바인딩
            var self = this;
            console.log("버튼눌려요?");
            self.els.$searchBtn.on('click', function(){
                console.log("네");
                self.searchLicenses();
            });
            self.els.$registBtn.on('click', function(){
                var category = self.els.$category;
                var registContent = self.els.$registContent;
                var experiencePeriod = self.els.$experiencePeriod;
                var license = self.els.$selectedLicense;
                $.sendHttp({
                    path: SERVER_PATH.PRO_REGIST,
                    data:{
                        category: category,
                        license: license,
                        registContent: registContent,
                        experiencePeriod: experiencePeriod
                    },
                    succ: function(data){
                        alert("pro 등록이 완료되었습니다!");
                        M.data.global("LOGIN_INFO.auth", true);
                        M.data.global("PRO_STAUTS.proStatus", true);
                        M.page.html({
                            url:"././mypage.html",
                            action:"CLEAR_TOP"
                        });
                        
                    },
                    error: function(data, status){
                        alert("error");
                    }
                })
            })
        },
        
        searchLicenses: function(){
            var self = this;
            var license = self.els.$license.val();
            if(license.length < 2){ return alert("검색어를 2자 이상 입력하세요.");}
            else{
                document.querySelector("#layer_search_condition > div.layer-contents > div.search-gray-box > div > button")
            }

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