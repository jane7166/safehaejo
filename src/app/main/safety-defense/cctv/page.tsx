"use client";
import React, { useState } from "react";
import styled from "styled-components";

const CctvPage: React.FC = () => {
  const [selectedContent, setSelectedContent] = useState<number | null>(null);

  const cctvData = [
    {
      title: "CCTV 1",
      link: "https://smartstore.naver.com/rayhome/products/4842284088?nl-au=8a824c99961044c38d4f4cf43e211a22&nl-query=%ED%98%84%EA%B4%80+CCTV",
      details: [
        "- 가격: 96,000원",
        "- 배터리 교체 시기가 6개월이라 추천드립니다.",
        "- 문 앞에 움직임이 보이면 모션 캡쳐 기능으로 사진 전송.",
        "- 최대 5명까지 사진 공유 가능.",
      ],
      image: "/safety-defense1.png", // CCTV 이미지 경로
    },
    {
      title: "CCTV 2",
      link: "https://smartstore.naver.com/eyedence/products/8889711584?nl-au=d763fcc8722d4d1b8be7a997dc8fb3a5&nl-query=%ED%98%84%EA%B4%80+CCTV",
      details: [
        "- 가격: 69,000원",
        "- 마이크 기능 존재, 스마트폰 소리 전달 가능.",
        "- SD 카드로 최대 52일 저장 가능.",
      ],
      image: "/safety-defense2.png", // CCTV 이미지 경로
    },
    {
      title: "CCTV 3",
      link: "https://smartstore.naver.com/eyedence/products/4904181003",
      details: [
        "- 가격: 49,800원",
        "- 방수 기능과 선명한 화질 제공.",
        "- 타공(천장 구멍 작업) 필요.",
      ],
      image: "/safety-defense3.png", // CCTV 이미지 경로
    },
    {
      title: "CCTV 모형",
      link: "https://search.shopping.naver.com/catalog/28758921554?query=CCTV%20%EB%AA%A8%ED%98%95",
      details: [
        "- 부담 없는 CCTV 모형.",
        "- 가격대는 1,500원 ~ 7,500원.",
        "- 작동 중처럼 보이는 불빛 효과.",
      ],
      image: "/safety-defense4.png", // CCTV 이미지 경로
    },
  ];

  const handleImageClick = (index: number) => {
    setSelectedContent(index);
  };

  const handleCloseModal = () => {
    setSelectedContent(null);
  };

  return (
    <MainContainer>
      <Title>CCTV</Title>
      {cctvData.map((item, index) => (
        <Card key={index}>
          <StyledImage
            src={item.image}
            alt={`${item.title} 이미지`}
            onClick={() => handleImageClick(index)}
          />
          <CardTitle>{item.title}</CardTitle>
        </Card>
      ))}

      {selectedContent !== null && (
        <ModalOverlay onClick={handleCloseModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <ModalTitle>{cctvData[selectedContent].title}</ModalTitle>
            <ul>
              {cctvData[selectedContent].details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
            <StyledLink
              href={cctvData[selectedContent].link}
              target="_blank"
              rel="noopener noreferrer"
            >
              구매 링크
            </StyledLink>
            <CloseButton onClick={handleCloseModal}>닫기</CloseButton>
          </ModalContent>
        </ModalOverlay>
      )}
    </MainContainer>
  );
};

export default CctvPage;

// 스타일링
const MainContainer = styled.div`
  padding: 20px;
  background-color: #f5f7fa;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 24px;
  color: #333;
`;

const Card = styled.div`
  padding: 20px;
  background: #fff;
  border-radius: 8px;
  margin-bottom: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  cursor: pointer;
  display: flex; /* 플렉스 컨테이너로 설정 */
  flex-direction: column; /* 세로 정렬 */
  align-items: center; /* 수평 중앙 정렬 */
  justify-content: center; /* 수직 중앙 정렬 */
`;

const StyledImage = styled.img`
  width: 100%;
  max-width: 300px;
  height: auto;
  border-radius: 8px;
  margin-bottom: 10px;
  display: block; /* 이미지가 블록 요소로 작동 */
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;


const CardTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  max-width: 400px;
  text-align: center;
`;

const ModalTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 10px;
`;

const StyledLink = styled.a`
  display: block;
  margin-top: 10px;
  color: #0070f3;
  text-decoration: underline;
`;

const CloseButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background: #0070f3;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: #005bb5;
  }
`;
