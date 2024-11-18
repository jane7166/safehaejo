"use client";
import React from "react";
import styled from "styled-components";
import { Analytics } from "@vercel/analytics/next";
import { useRouter } from "next/navigation";
import { FaHome, FaShieldAlt, FaLock } from "react-icons/fa";

interface Category {
  text: string;
  link: string;
  icon: JSX.Element;
}

const categories: Category[] = [
  { text: "주거 침입 범죄 예방", link: "main/home-safety", icon: <FaHome /> },
  { text: "여성 안심 서비스", link: "/main/safety-service", icon: <FaShieldAlt /> },
  { text: "보안장치 추천", link: "/main/safety-defense", icon: <FaLock /> },
];

const CategoryPage: React.FC = () => {
  const router = useRouter();

  const handleCardClick = (link: string) => {
    router.push(link);
  };

  return (
    <main>
      <MainContainer>
        <ContentWrapper>
          <TextSection>
            <Title>여성 1인가구 안전해조</Title>
            <Description>
              서울여자대학교 바롬종합설계프로젝트
              <br />
              여성 가구가 조금 더 안전하게 생활할 수 있도록 도움을 주기 위한 가이드라인입니다.
            </Description>
          </TextSection>
          <Analytics/>
          <CardSection>
            {categories.map((category, index) => (
              <InfoCard key={index} onClick={() => handleCardClick(category.link)}>
                <IconContainer>{category.icon}</IconContainer>
                <CardText>{category.text}</CardText>
              </InfoCard>
            ))}
          </CardSection>
        </ContentWrapper>
      </MainContainer>
    </main>
  );
};

export default CategoryPage;

// Styled Components
const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #b5c0e6, #f5f7fa);  
  background-size: 200% 200%;
  animation: gradientAnimation 10s ease infinite;
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

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1200px; /* 전체 너비 설정 */
  padding: 60px 20px;
  text-align: center;
`;

const TextSection = styled.div`
  margin-bottom: 40px;
`;

const Title = styled.h1`
  font-size: 42px;
  font-weight: 700;
  color: #1f2a38;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 18px;
  color: #5f6d7a;
  line-height: 1.8;
  max-width: 500px;
`;

const CardSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  max-width: 1200px; /* CardSection의 최대 너비 설정 */
`;

const InfoCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 200px; /* 한 줄에 4개씩 배치될 수 있도록 너비 조정 */
  height: 180px;
  background: rgba(255, 255, 255, 0.85);
  border-radius: 16px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(15px);
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
  }
`;

const IconContainer = styled.div`
  font-size: 36px;
  color: #4a5568;
  margin-bottom: 10px;
`;

const CardText = styled.h2`  // <h3>에서 <h2>로 수정
  font-size: 18px;
  color: #4a5568;
  text-align: center;
  font-weight: 500;
`;
