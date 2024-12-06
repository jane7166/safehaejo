"use client";
import React, { useState } from "react";
import styled from "styled-components";

const CctvPage: React.FC = () => {
  const [selectedContent, setSelectedContent] = useState<number | null>(null);

  const cctvData = [
    {
        title: "휴대용 경보기 1", 
        link: "https://smartstore.naver.com/paldofood/products/9140047319?n_media=27758&n_query=%ED%9C%B4%EB%8C%80%EC%9A%A9%EA%B2%BD%EB%B3%B4%EA%B8%B0&n_rank=1&n_ad_group=grp-a001-02-000000042755544&n_ad=nad-a001-02-000000304578872&n_campaign_type=2&n_mall_id=daewoon5574&n_mall_pid=9140047319&n_ad_group_type=2&n_match=3&NaPm=ct%3Dm31ff8yw%7Cci%3D0z40003DgwrBKvN%5FR11D%7Ctr%3Dpla%7Chk%3D1e8f36b4cfa2e2ae03f662236f477848f4747699%7Cnacn%3DrlfIDYAQKmzDA", 
        details: [
                "- 가격: 9,900원", 
                "- 두 가지 모드가 존재합니다.",
                "- 소음은 최대 130dB로, 제트기 이륙시 소음보다 큽니다.",
                "- LED 빛 기능도 존재합니다.",
                "- 범죄 발생 시 경보기에서 순간적으로 큰 소리가 난다면 범인이 놀라 도망가는 경우가 존재하며, 외부에서 신고해줄 가능성이 높기 때문에 휴대성 경보기를 지니고 다니시는 것을 추천합니다."
              ] 
,
        image: "/safety-defense8.png",
      },
      { 
        title: "휴대용 경보기 2", 
        link: "https://smartstore.naver.com/ttabongoutlet/products/8130802654?nl-query=%ED%9C%B4%EB%8C%80%EC%9A%A9+%EA%B2%BD%EB%B3%B4%EA%B8%B0&nl-ts-pid=iyO6Hsqps8wssb8zL94ssssstvw-340238&NaPm=ct%3Dm31fi54w%7Cci%3D9859d3cc67723afe49adda22df57dae6019124d6%7Ctr%3Dsls%7Csn%3D1016170%7Chk%3D5a49201c3ab74eaadf432f90ac789f8a66bd4708", 
        details: [
                "- 가격: 5,900원", 
                "- 저렴한 가격으로 가성비가 좋으나, 소음은 최대 110dB입니다."
              ] 
,
        image: "/safety-defense9.png",
      },
      { 
        title: "휴대용 경보기 3", 
        link: "https://smartstore.naver.com/wishmall/products/193973208?nl-query=%ED%9C%B4%EB%8C%80%EC%9A%A9+%EA%B2%BD%EB%B3%B4%EA%B8%B0&nl-ts-pid=iyO6Hsqps8wssb8zL94ssssstvw-340238&NaPm=ct%3Dm31flz94%7Cci%3Dc854c7648b01294416777dc816f04e523b096497%7Ctr%3Dsls%7Csn%3D214113%7Chk%3D2bcd592d6143898e6503183326cb31aa8f999f46", 
        details: [
                "- 가격: 860원", 
                "- 아주 저렴하지만, 소음은 최대 90dB입니다.",
                "- 핀을 당겨서 뽑아야만 소리가 난다는 특징이 있습니다."
              ],
        image: "/safety-defense10.png",
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
