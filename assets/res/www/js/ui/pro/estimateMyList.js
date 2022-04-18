/**
 * @file : estimateMyList.js
 * @author : suhyun
 * @date : 2022.04.16
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
        },
        data: {},
        init: function init() {
            var self = this;
        },
        initView: function initView() {
            // 화면에서 세팅할 동적데이터
            var self = this;
            console.log("LOGIN_INGO");
            $.sendHttp({
                path: SERVER_PATH.ESTIMATE_MYLIST,
                data:{},
                succ: function(data){
                    console.log(data);
                    for(var i = 0; i < data.list.length; i++){
                        self.showEstimateList(data, i);
                    }
                },
                error: function(status, data){
                    swal("견적서 리스트를 불러오는 데 실패하였습니다.","","error");
                }
            })
        },
        initEvent: function initEvent() {
            // Dom Event 바인딩
            var self = this;
        },
        showEstimateList: function showEstimateList(data, i){
            $("div#estimete-list").html(" ");
            $("#estimate-list").append(HTML.ESTIMATE_LIST);
            $("h3.card-title:eq("+i+")").html(data.list[i].estimateTitle);
            $("div.card-body:eq("+i+")").html(data.list[i].estimateContent);
            $("p.card-estimate:eq("+i+")").html(data.list[i].estimateRegisterDate);
            if(data.list[i].requestStatus == 0){//진행중
                $("li.div-card:eq("+i+")").append("<p class='status-ongoing'>진행중</p>");
            }
            else if(data.list[i].requestStatus == 1){//마감
                if(data.list[i].estimateStatus == 0){
                    $("li.div-card:eq("+i+")").append("<p class='status-decline'>마감</p>");
                }
                else{
                    $("li.div-card:eq("+i+")").append("<p class='status-matching'>매칭완료</p>");
                }
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