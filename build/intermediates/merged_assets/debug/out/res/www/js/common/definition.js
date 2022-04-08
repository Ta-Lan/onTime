/**
 * @file : definition.js 상수 값을 모아두는 공통 JS
 * @author :
 * @date :
 */
(function (window, M) {
    var module = {};

    var IS_DEV = true;
    var IS_PROD = !IS_DEV;


    // 앱 환경변수 값
    var ENV = module.ENV = {
        IS_DEV: IS_DEV, // 개발 모드 여부
        SERVER_NAME: IS_PROD ? "OT_SERVER" : "OT_SERVER" //바라볼 서버 이름 (Manifest.xml에 설정되어있는 이름)
        , UPLOAD_URL: IS_PROD ? "" : ""
        , INDICATOR: true //서버통신시 indicator 여부
    };

    //서버 전문 요청 목록
    var SERVER_PATH = module.SERVER_PATH = {
        LOGIN: "api/member/login", //로그인
        DUPLICATE: "api/member/duplicate", //아이디 중복 체크
        JOIN: "api/member/join", //회원가입
        FIND_ID: "api/member/findId", //아이디 찾기
        FIND: "api/member/find", //비밀번호 변경 전 개인정보 확인
        PASSWORD: "api/member/password", //비밀번호 변경
        OUT: "api/member/out", //회원 탈퇴
        INFO: "api/member/info", //회원 정보 조회
        UPDATE: "api/member/update", //회원 정보 수정
        CHECK_PASSWORD: "api/member/chkPwd", //회원 비밀번호 확인

        //request
        REQUEST_WRITE: "api/request/write", // request 글쓰기

        //message
        GET_MESSAGE: "api/message/info", // message info
        SET_MESSAGE: "api/message/send", // send message

        //feed
        FEED_REGIST: "api/feed/regist", //피드 등록
        FEED_UPDATE: "api/feed/update", //피드 업데이트
        FEED_LIST: "api/feed/list", //피드 리스트
        FEED_DETAIL: "api/feed/detail", //피드 디테일
        FEED_DELETE: "api/feed/delete", //피드 삭제
        FEED_COMMENT_REGIST: "api/feed/commentsRegist", //피드 댓글 작성
        FEED_COMMENT_DETAIL: "api/feed/commentsDetail", //피드 댓글 조회
        FEED_COMMENT_DELETE: "api/feed/commentsDelete", //피드 댓글 삭제
    };

    var SERVER_CODE = module.SERVER_CODE = {
        SUCC: '0000', // 성공시
    }

    // 상수 키 값
    var CONSTANT = module.CONSTANT = {
        AUTO_LOGIN_AUTH: 'AUTO_LOGIN_AUTH'
    }

    // 메시지 문자열 상수
    var MSG = module.MSG = {
        INDICATOR_MSG: "통신중..." //서버통신시 default indicator_msg
        , DEFAULT_ERROR_MSG: "네트워크 통신 중 오류가 발생했습니다."
    };


    window.__config__ = module;
})(window, M);