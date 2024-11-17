"use client";
import React from "react";
import styled from "styled-components";
import { useRouter } from "next/navigation";

const HomeSafetyPage: React.FC = () => {
  const router = useRouter();

  return (
    <MainContainer>
      <TextSection>
        <Title>안심 서비스 안내</Title>
        <BackIcon onClick={() => router.back()}>←</BackIcon>
        <Description>
          여성 1인 가구에게 도움이 되는 서비스를 소개합니다.
          <br />
        </Description>
      </TextSection>

      <ContentWrapper>
        <Content>
          <SectionTitle>씽글벙글서울: 서울 1인 가구 포털</SectionTitle>
          <StyledImage src="/safety-service1.png" alt="Safety Service Image 1" />
          <InfoBox>
            <p>서울시에서 제공하는 1인 가구 포털</p>
            <ul>
              <li>1인 가구 삶의 질 향상을 위해 4대 분야 (건강, 범죄, 고립, 주거) 안심정책을 추진합니다.</li>
              <li>1인 가구 안심특별시를 조성하는 정책입니다.</li>
              <li>모니터링을 하셔서 많은 도움 얻어가셨으면 좋겠습니다.</li>
              <li><a href="https://1in.seoul.go.kr/front/user/main.do" target="_blank" rel="noopener noreferrer">서울 1인 가구 포털 바로가기</a></li>
            </ul>
          </InfoBox>
        </Content>

        <Content>
          <SectionTitle>안심 택배함</SectionTitle>
          <StyledImage src="/safety-service2.png" alt="Safety Service Image 2" />
          <InfoBox>
            <p>범죄 예방 및 개인정보 유출 방지의 목적으로 운영되는 안심택배함</p>
            <ul>
              <li>서울시에서 1인 가구 밀집 지역에 무인 택배함을 운영하고 있습니다.</li>
              <li>최대 48시간 무료로 이용 가능합니다.</li>
              <li><a href="https://1in.seoul.go.kr/front/safety/safetyMap.do" target="_blank" rel="noopener noreferrer">근처 안심택배함 보러가기</a></li>
            </ul>
          </InfoBox>
        </Content>

        <Content>
          <SectionTitle>안심장비 지원사업</SectionTitle>
          <StyledImage src="/safety-service3.png" alt="Safety Service Image 3" />
          <InfoBox>
            <p>지자체에서 지원하는 안심장비</p>
            <ul>
              <li>스마트 초인종, 가정용 CCTV, 현관문 안전장치 등 여러 안심장비를 지원하는 사업입니다.</li>
              <li>범죄에 취약한 상황에 놓여있는 1인가구에게 안심 홈 키트를 제공합니다.</li>
              <li>거주하고 있는 지자체 홈페이지를 확인하세요!</li>
            </ul>
          </InfoBox>
        </Content>

        <Content>
          <SectionTitle>호신술</SectionTitle>
          <StyledImage src="/safety-service4.png" alt="Safety Service Image 4" />
          <InfoBox>
            <p>안전 교육 프로그램</p>
            <ul>
              <li>도봉구, 광진구, 영등포구 등에서 호신술 프로그램을 제공합니다.</li>
              <li>거주하는 있는 지자체 홈페이지를 확인하세요!</li>
            </ul>
          </InfoBox>
        </Content>

        <Content>
          <SectionTitle>여성긴급전화 1366</SectionTitle>
          <StyledImage src="/safety-service6.png" alt="Safety Service Image 5" />
          <InfoBox>
            <p>가정폭력, 성폭력, 스토킹, 데이트 폭력 등 폭력 피해자를 위한 긴급 전화</p>
            <ul>
              <li>365일 운영하며 언제든 피해 상담을 받을 수 있는 서비스입니다.</li>
              <li>지역의 정부기관, 경찰, 병원, 법률기관과 연계시켜 지원해줍니다.</li>
              <li><a href="https://www.hwasun.go.kr/contents.do?S=S01&M=060402010000" target="_blank" rel="noopener noreferrer">1366 홈페이지 바로가기</a></li>
            </ul>
          </InfoBox>
        </Content>

        <Content>
          <SectionTitle>범죄피해자 원스톱 솔루션 센터 운영</SectionTitle>
          <StyledImage src="/safety-service7.png" alt="Safety Service Image 6" />
          <InfoBox>
            <p>범죄 피해자에게 다양하고 체계적인 솔루션을 제공하는 센터</p>
            <ul>
              <li>피해자에게 필요한 법률, 경제, 심리, 복지, 고용, 금융 등 다양한 지원 서비스를 제공합니다.</li>
              <li>발생 초기부터 사후관리까지 케어해주는 센터</li>
              <li>모든 유형의 범죄 피해자가 도움을 받을 수 있습니다.</li>
              <li><a href="https://news.seoul.go.kr/welfare/archives/564927?listPage=1" target="_blank" rel="noopener noreferrer">범죄피해자 원스톱 솔루션 센터 바로가기</a></li>
            </ul>
          </InfoBox>
        </Content>

        <Content>
          <SectionTitle>안심이 앱 서비스</SectionTitle>
          <StyledImage src="/safety-service8.png" alt="Safety Service Image 7" />
          <InfoBox>
            <p>여성 및 취약계층을 위한 종합안전서비스</p>
            <ul>
              <li>안심 귀가를 위해 24시간 서비스를 지원합니다.</li>
              <li>긴급 신고 시에는 CCTV 관제 후 경찰 출동, CCTV로 신청자의 귀가 경로 모니터링, 스카우트의 귀가 동행 및 우범지역 순찰, 택시 승하차 정보를 보호자 및 지인에게 문자 전송 등의 서비스를 제공합니다.</li>
            </ul>
          </InfoBox>
        </Content>
      </ContentWrapper>
    </MainContainer>
  );
};

export default HomeSafetyPage;

// Styled components
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* 전체 수평 중앙 정렬 */
  justify-content: center; /* 전체 수직 중앙 정렬 */
  padding: 40px 20px;
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa, #d4d7e0);
  font-family: Arial, sans-serif;
  color: #333;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: radial-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 1px);
    background-size: 40px 40px;
    opacity: 0.3;
    pointer-events: none;
  }
      @keyframes gradientAnimation {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

const TextSection = styled.div`  
  display: flex;  
  flex-direction: column;
  width: 100%;
  max-width: 700px;
  text-align: center;
  align-items: center;
  margin-bottom: 40px;
`;

const Title = styled.h1`
  font-size: 48px;
  font-weight: 700;
  color: #1f2a38;
  margin-bottom: 10px;
  line-height: 1.2;
  text-align: center;
`;

const BackIcon = styled.span`
  position: absolute;
  top: 20px;
  left: 20px;
  font-size: 36px; /* 크기를 크게 조정 */
  cursor: pointer;
  color: #000;
  transition: color 0.3s;
  
  &:hover {
    color: #667094;
  }
`;

const Description = styled.p`
  font-size: 18px;
  color: #5f6d7a;
  line-height: 1.8;
  max-width: 500px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: 800px;
`;

const Content = styled.div`
  width: 100%;
  padding: 30px;
  background: rgba(255, 255, 255, 0.85);
  border-radius: 16px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(15px);
  margin-top: 20px;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
  }
`;

const SectionTitle = styled.h2`
  font-size: 22px;
  margin-bottom: 20px;
  color: #1f2a38;
  text-transform: uppercase;
  letter-spacing: 1.5px;
`;

const InfoBox = styled.div`
  padding: 25px;
  background-color: #e3e9ff;
  border-radius: 12px;
  p {
    margin-bottom: 15px;
    font-size: 16px;
    color: #3e4c59;
  }
  ul {
    list-style-type: disc;
    margin-left: 20px;
    li {
      margin-bottom: 10px;
      font-size: 16px;
      color: #3e4c59;
    }
  }
  a {
    color: #0070f3;
    text-decoration: underline;
  }
`;

const StyledImage = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 20px;
  border-radius: 16px;
`;