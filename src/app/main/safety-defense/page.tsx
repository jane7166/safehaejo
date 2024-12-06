"use client";
import React from "react";
import styled from "styled-components";
import Link from "next/link";

const HomeSafetyPage: React.FC = () => {
  const categories = [
    { key: "cctv", name: "CCTV" },
    { key: "pepper-spray", name: "후추 스프레이" },
    { key: "alarm", name: "휴대용 경보기" },
    { key: "window", name: "창문 안전 장치" },
  ];

  return (
    <MainContainer>
      <Title>보안장치 추천</Title>
      <Description>아래 카테고리를 클릭하여 보안장치 정보를 확인하세요!</Description>
      {categories.map((category) => (
        <CategoryLink key={category.key} href={`/main/safety-defense/${category.key}`}>
          <CategoryCard>
            <CategoryName>{category.name}</CategoryName>
          </CategoryCard>
        </CategoryLink>
      ))}
    </MainContainer>
  );
};

export default HomeSafetyPage;

const MainContainer = styled.div`
  padding: 20px;
  background-color: #f5f7fa;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 24px;
  color: #333;
`;

const Description = styled.p`
  font-size: 16px;
  color: #555;
  margin: 20px 0;
  text-align: center;
`;

const CategoryLink = styled(Link)`
  text-decoration: none;
  width: 100%;
  max-width: 400px;
  margin-bottom: 20px;
`;

const CategoryCard = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.03);
  }
`;

const CategoryName = styled.h2`
  font-size: 20px;
  color: #0070f3;
`;
