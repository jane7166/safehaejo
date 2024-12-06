"use client";
import React, { useState } from "react";
import styled from "styled-components";

const CctvPage: React.FC = () => {
  const [selectedContent, setSelectedContent] = useState<number | null>(null);

  const cctvData = [
    {
        title: "후추 스프레이 1", 
        link: "https://smartstore.naver.com/park2926/products/8935484515?nl-au=7f668352d83a4048abb2af46a7a33005&nl-query=%ED%9B%84%EC%B6%94%EC%8A%A4%ED%94%84%EB%A0%88%EC%9D%B4", 
        details: [
                  "- 가격: 28,500원", 
                  "- 손으로 잡아 모양을 파악할 수 있어 스프레이의 분사구를 감각으로 알 수 있습니다.",
                  "- 최대 3.5m까지 분사가 가능합니다."
                ],
        image: "/safety-defense5.png",
      },
      { 
        title: "후추 스프레이 2", 
        link: "https://smartstore.naver.com/s-defense2020/products/9883054827?n_media=11068&n_query=%ED%9B%84%EC%B6%94%EC%8A%A4%ED%94%84%EB%A0%88%EC%9D%B4&n_rank=3&n_ad_group=grp-a001-02-000000045481006&n_ad=nad-a001-02-000000325300889&n_campaign_type=2&n_mall_id=ncp_1ob3x2_01&n_mall_pid=9883054827&n_ad_group_type=2&n_match=3", 
        details: [
                  "- 가격: 19,800원", 
                  "- 펜 모양으로 소지가 자연스러우며 가볍습니다.",
                  "- 최대 3m까지 분사가 가능합니다.",
                  "- 야광 표시가 되어있어 어두운 환경에서도 사용이 가능합니다."
                ],
        image: "/safety-defense6.png",
      },
      { 
        title: "후추 스프레이 3", 
        link: "https://smartstore.naver.com/kmom23/products/10305370314?nl-au=b5c6564205d8402ab9916c253cc7755e&nl-query=%ED%9B%84%EC%B6%94%EC%8A%A4%ED%94%84%EB%A0%88%EC%9D%B4", 
        details: [
                  "- 가격: 6,470원", 
                  "- 한 손에 쏙 들어오는 사이즈를 가지고 있어 휴대성이 높습니다.",
                  "- 부담없는 가격입니다."
                ] ,
        image: "/safety-defense7.png",
   // CCTV 이미지 경로
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
