"use client";
import React from "react";
import styled from "styled-components";
import { useRouter } from "next/navigation";

const HomeSafetyPage: React.FC = () => {
  const router = useRouter();

  return (
    <MainContainer>
      <TextSection>
        <Title>주거 침입 범죄 예방</Title>
        <BackIcon onClick={() => router.back()}>←</BackIcon>
        <Description>
          범죄 예방을 위한 자취러 생활 팁
          <br />
        </Description>
      </TextSection>

      <Content>
        <SectionTitle>택배/배달</SectionTitle>
        <InfoBox>
          <ul>
            <li>범죄 예방을 위해 요청 사항은 퇴행어 지양</li>
            <li>문 앞에 두고 가주세용!! 감사합니당!!❌</li>
            <li>문앞/집앞/문앞에 놔주세요. ⭕</li>
            <li>개인정보 유출을 방지하기 위해 택배 운송장 스티커의 내용을 물파스로 지워주세요.</li>
            <li><a href="https://youtu.be/rkdpe_vg_Fk?si=fJ42Cdd_M-8WWLyK" target="_blank" rel="noopener noreferrer">유튜브에 있는 남성 목소리 활용하기 #출처# 대충남 -자취하는 남자 목소리</a></li>
            <StyledImage src="/home-safety1.png" alt="Safety Service Image 1" />
          </ul>
        </InfoBox>
      </Content>

      <Content>
        <SectionTitle>현관</SectionTitle>
        <InfoBox>
          <ul>
            <li>남성 슬리퍼나 남성 신발을 현관 앞에 놔주세요.</li>
            <li>현관문 닫으면 잠길때까지 잡아주세요.</li>
            <li>도어락 이중 잠금이 존재한다면 이중장금을 적극 활용해주세요.</li>
            <li>도어락 마스터 키를 삭제해주세요</li>
            <li><a href="https://blog.naver.com/PostView.nhn?blogId=coolkanna&logNo=221500591439" target="_blank" rel="noopener noreferrer">도어락 마스터키 삭제하기 #출처# 삼성 SDS 공식 도어록스토어 A/S 서비스 지정점 블로그</a></li>
          </ul>
        </InfoBox>
      </Content>

      <Content>
        <SectionTitle>캡스 홈도어</SectionTitle>
        <InfoBox>
          <ul>
            <li>SKT 요금제를 사용하고 있다면 더 저렴하게 이용이 가능합니다.</li>
            <li>현관문 CCTV뿐만 아니라 창문 잠금 센서도 존재합니다.</li>
            <li>인터넷이 설치되어 있어야 합니다.</li>
            <li>현관 앞 이상 신호를 감지하고 녹화하여, 실시간으로 상황을 파악할 수 있습니다.</li>
            <li>위급 상황시 24시간 긴급 출동을 지원합니다.</li>
            <li><a href="https://www.skshieldus.com/kor/service/home/capshome/adt-caps-home-cctv.do" target="_blank" rel="noopener noreferrer">캡스 홈도어 #출처# SK 쉴더스 캡스홈</a></li>
          </ul>
        </InfoBox>
      </Content>
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
    color: #0070f3; // 링크 색상 설정
    text-decoration: underline; // 링크 밑줄 표시
  }
`;

const StyledImage = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 20px;
  border-radius: 16px;
`;