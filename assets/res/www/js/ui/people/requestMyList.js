/**
 * @file : requestMyList.js
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
            $category: null,
            $requestList: null,
            $declineBtn: null,
        },
        data: {},
        init: function init() {
            var self = this;
            self.els.$requestList = $('#request-list');
            self.els.$category = M.data.param("category");
            self.els.$declineBtn = $('.declineBtn');
        },
        initView: function initView() {
            // 화면에서 세팅할 동적데이터
            var self = this;
            $.sendHttp({
                path: SERVER_PATH.REQUEST_MYLIST,
                data:{},
                succ: function(data){
                    console.log(data);
                    for(var i = 0; i < data.list.length; i++){
                        self.showRequestList(data, i);
                    }
                },
                error: function(data, status){
                    alert("요청서 리스트를 불러오는 데 실패하였습니다.");
                }
            })
        },
        initEvent: function initEvent() {
            // Dom Event 바인딩
            var self = this;
            $('#request-list').on('click','button.decline-btn', function(){
                var self2 = this;
                M.pop.alert({
                    title: '요청 마감',
                    message: '요청을 마감하시겠습니까? (마감되면 더 이상 견적서를 받을 수 없습니다.)',
                    buttons: ['예', '아니오'],
                    callback: function(index){
                        if(index == 0){
                            $.sendHttp({
                                path: SERVER_PATH.REQUEST_CLOSED,
                                data:{
                                    requestNumber: $(self2).parent().parent().attr('id')
                                },
                                succ: function(data){
                                    alert("요청이 마감되었습니다.");
                                    self.initView();
                                },
                                error: function(data){
                                    console.log(data.requestNumber);
                                    console.log($(this).parent().parent().attr('id'))
                                }
                            })
                        }      
                    }
                });
            });
        },
        showRequestList: function showRequestList(data, i){
            $("div#requst-list").html(" ");
            $("#request-list").append(HTML.REQUEST_MY_LIST);
            $("li.div-card:eq("+i+")").attr('id', data.list[i].requestNumber);
            $("h3.card-title:eq("+i+")").html(data.list[i].requestTitle);
            $("p.card-day:eq("+i+")").html(data.list[i].requestDate);
            if(data.list[i].requestStatus == 0){
                $("div.decline-btn-wrap:eq("+i+")").html("<button type='button' class='decline-btn' id='decline-btn'>마감하기</button>")
            }else{
                $("div.decline-btn-wrap:eq("+i+")").html("<button type='button' disabled class='declined-btn' id='declined-btn'>마감됨</button>")
            }
            $("p.request-title:eq("+i+")").html(data.list[i].requestTitle);
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