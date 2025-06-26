const footerMenu = [
  "자주 묻는 질문",
  "고객 센터",
  "계정",
  "미디어 센터",
  "투자 정보(IR)",
  "입사 정보",
  "넷플릭스 지원 디바이스",
  "이용 약관",
  "개인정보 처리방침",
  "쿠키 설정",
  "회사 정보",
  "문의하기",
  "속도 테스트",
  "법적 고지",
  "오직 넷플릭스에서",
];
const Footer = () => {
  return (
    <footer className="footer">
      <p>질문이 있으신가요?</p>
      <ul className="netflix">
        {footerMenu.map((item, idx) => {
          return (
            <li key={idx}>
              <a href="#">{item}</a>
            </li>
          );
        })}
      </ul>
      <ul className="myproject">
        <li>이 사이트는 Netflix 클론입니다.</li>
        <li>상업 목적이 아닙니다.</li>
        <li>Made By 정수진</li>
        <li>GitHub 링크 : <a href="#"></a></li>
        <li>기술스택 : React, SCSS, REST API, 반응형, Flex Layout, Grid Layout</li>
      </ul>
    </footer>
  );
};

export default Footer;
