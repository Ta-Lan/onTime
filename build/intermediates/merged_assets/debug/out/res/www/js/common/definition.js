/**
 * @file : definition.js 상수 값을 모아두는 공통 JS
 * @author :
 * @date :
 */
(function (window, M) {
    var module = {};

    var IS_DEV = false;
    var IS_PROD = !IS_DEV;


    // 앱 환경변수 값
    var ENV = module.ENV = {
        IS_DEV: IS_DEV, // 개발 모드 여부
        SERVER_NAME: IS_PROD ? "LH_SERVER" : "OT_SERVER" //바라볼 서버 이름 (Manifest.xml에 설정되어있는 이름)
        , UPLOAD_URL: IS_PROD ? "" : ""
        , INDICATOR: true //서버통신시 indicator 여부
    };

    //서버 전문 요청 목록
    var SERVER_PATH = module.SERVER_PATH = {
        LOGIN: "api/people/login", //로그인
        DUPLICATE1: "api/people/duplicate1", //아이디 중복 체크
        DUPLICATE2: "api/people/duplicate2", //이메일 중복 체크
        DUPLICATE3: "api/people/duplicate3", //닉네임 중복 체크
        JOIN: "api/people/join", //회원가입
        FIND_ID: "api/people/findId", //아이디 찾기
        FIND: "api/people/find", //비밀번호 변경 전 개인정보 확인
        PASSWORD: "api/people/password", //비밀번호 변경
        OUT: "api/people/out", //회원 탈퇴
        INFO: "api/people/info", //회원 정보 조회
        UPDATE: "api/people/update", //회원 정보 수정
        CHECK_PASSWORD: "api/people/chkPwd", //회원 비밀번호 확인

        //request
        REQUEST_WRITE: "api/request/write", // request 글쓰기

        //messagewe
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
        FEED_LIST_BY_WRITER: "api/feed/listByWriter", //피드 작성자별 리스트
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

    // html default form
    var HTML = module.HTML = {
        FEED_COMMENT_HTML: "<ul>\n" +
            "                    <li>\n" +
            "                        <div class=\"comment-writer-info\">\n" +
            "                            <div class=\"comment-writer\">김people</div>\n" +
            "                            <div class=\"comment-write-date\">2022.04.07 <span class=\"delete-comment\">X</span></div>\n" +
            "                        </div>\n" +
            "                    </li>\n" +
            "                    <li class='comment-content'>\n" +
            "                        게시글 잘 보고 갑니다. 제 블로그 놀러오셔서 자격증 정보 알아가세요.\n" +
            "                    </li>\n" +
            "                </ul>"
    };

    window.__config__ = module;
})(window, M);