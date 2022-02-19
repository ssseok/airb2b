import React from "react";
import styled from "styled-components";
import { ReactComponent as GlobalSvg } from "../components/";

const Footer = () => {
  return (
    <FooterWrap>
      <section>
        <div>
          <h3>에어비앤비 지원</h3>
        </div>
        <ul>
          <li>
            <a href="/help/home?from=footer">도움말 센터</a>
          </li>
          <li>
            <a href="/trust">안전 정보</a>
          </li>
          <li>
            <a href="/help/article/2701/extenuating-circumstances-policy-and-the-coronavirus-covid19">
              예약 취소 옵션
            </a>
          </li>
          <li>
            <a href="/d/covidsafety">에어비앤비의 코로나19 대응 방안</a>
          </li>
          <li>
            <a href="/accessibility">장애인 지원</a>
          </li>
          <li>
            <a href="/neighbors">이웃 민원 신고</a>
          </li>
        </ul>
      </section>
      <section>
        <div>
          <h3>커뮤니티</h3>
        </div>
        <ul>
          <li>
            <a href="/help/home?from=footer">Airbnb.org: 재난 구호 숙소</a>
          </li>
          <li>
            <a href="/trust">아프간 난민 지원</a>
          </li>
          <li>
            <a href="/help/article/2701/extenuating-circumstances-policy-and-the-coronavirus-covid19">
              차별 철폐를 위한 노력
            </a>
          </li>
        </ul>
      </section>
      <section>
        <div>
          <h3>호스팅</h3>
        </div>
        <ul>
          <li>
            <a href="/help/home?from=footer">호스팅 시작하기</a>
          </li>
          <li>
            <a href="/trust">에어커버: 호스트를 위한 보호 프로그램</a>
          </li>
          <li>
            <a href="/help/article/2701/extenuating-circumstances-policy-and-the-coronavirus-covid19">
              호스팅 자료 둘러보기
            </a>
          </li>
          <li>
            <a href="/d/covidsafety">커뮤니티 포럼 방문하기</a>
          </li>
          <li>
            <a href="/accessibility">책임감 있는 호스팅</a>
          </li>
        </ul>
      </section>
      <section>
        <div>
          <h3>소개</h3>
        </div>

        <ul>
          <li>
            <a href="/help/home?from=footer">뉴스룸</a>
          </li>
          <li>
            <a href="/trust">새로운 기능에 대해 알아보기</a>
          </li>
          <li>
            <a href="/help/article/2701/extenuating-circumstances-policy-and-the-coronavirus-covid19">
              에어비앤비 공동창업자의 메시지
            </a>
          </li>
          <li>
            <a href="/d/covidsafety">채용정보</a>
          </li>
          <li>
            <a href="/accessibility">투자자 정보</a>
          </li>
          <li>
            <a href="/neighbors">에어비앤비 Luxe</a>
          </li>
        </ul>
      </section>
      <div>
        <div>
          <div>
            <span>
              <button type="button">
                <span>언어 선택</span>
                <span></span>
                <span>한국어 (KR)</span>
              </button>
            </span>
            <span>
              <button type="button">
                <span>통화 선택</span>
                <span>₩</span>
                <span>KRW</span>
              </button>
            </span>
          </div>
          <div>
            <ul>
              <li>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://www.facebook.com/AirbnbKorea"></a>
              </li>
              <li>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://twitter.com/airbnb"></a>
              </li>
              <li>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://instagram.com/airbnb"></a>
              </li>
              <li>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://blog.naver.com/airbnbkr"></a>
              </li>
              <li>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://post.naver.com/airbnb_kr"></a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div>
            <div>
              <div>© 2022 Airbnb, Inc.</div>
              <div>
                <span>
                  <span>·</span>
                </span>
                <a href="/terms/privacy_policy">개인정보 처리방침</a>
                <span aria-hidden="true">·</span>
                <a href="/terms">이용약관</a>
                <span aria-hidden="true">·</span>
                <a href="/sitemaps/v2">사이트맵</a>
                <span aria-hidden="true">·</span>
                <a
                  target="_blank"
                  href="/home/updated_cancellation_policies?korean_strict_policy=true#strict">
                  한국의 변경된 환불 정책
                </a>
                <span aria-hidden="true">·</span>
                <a target="_blank" href="/about/company-details">
                  회사 세부정보
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FooterWrap>
  );
};
const FooterWrap = styled.div``;
export default Footer;
