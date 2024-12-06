"use client";
import React, { useState } from "react";
import styled from "styled-components";

const CctvPage: React.FC = () => {
  const [selectedContent, setSelectedContent] = useState<number | null>(null);

  const cctvData = [
    {
        title: "창문 안전장치 1", 
        link: "https://search.shopping.naver.com/catalog/50521439414?query=%EB%AC%B4%ED%83%80%EA%B3%B5%20%EC%B0%BD%EB%AC%B8%20%EC%95%88%EC%A0%84%EC%9E%A5%EC%B9%98&NaPm=ct%3Dm31g6xvs%7Cci%3D2c3c7772d804c443a8dd052052466422b53f47ed%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3D659641dfece93269cfa1bb9d778866ae534bd1b3", 
        details: [
                  "- 가격: 5,570원", 
                  "- 창문이 완전히 열리지 않도록 하여 외부인이 침입하는 일을 막을 수 있는 안전장치입니다.",
                  "- 무타공으로도 사용이 가능합니다.",
                  "- 창문 규격에 맞게 사용할 수 있으며, 구매 페이지에서 사용 영상을 참고할 수 있습니다."
                ],
      image: "/safety-defense11.png", // CCTV 이미지 경로
    },
    {
        title: "창문 안전장치 2", 
        link: "https://smartstore.naver.com/lifedoctor/products/4533794982?nl-query=%EB%AC%B4%ED%83%80%EA%B3%B5%20%EC%B0%BD%EB%AC%B8%20%EC%95%88%EC%A0%84%EC%9E%A5%EC%B9%98&frm=NVSCPSI&pageid=iyOK2lqVOsossutVaP4ssssssFs-360734&NaPm=ci%3DiyOK2lqVOsossutVaP4ssssssFs-360734%7Cct%3Dm31fpyrt%7Ctr%3Dnsls%7Csn%3D940935%7Chk%3Df65045a72b4b9e5c5d5f7132fb781aa84ea655a6", 
        details: [
                  "- 가격: 1,700원", 
                  "- 2.5-4cm 정도로 창문의 열림을 조절할 수 있습니다.",
                  "- 부드러운 사용감을 위해 제품에 기름(구리스)가 많이 묻어있는 것이 특징입니다."
                ],
      image: "/safety-defense12.png", // CCTV 이미지 경로
    },
    {
      title: "창문 안전장치 3", 
      link: "https://smartstore.naver.com/kakaxi/products/5633100574?n_media=643599&n_rank=2&n_ad_group=grp-a001-02-000000021745865&n_ad=nad-a001-02-000000137643877&n_campaign_type=2&n_mall_id=ncp_1o6434_01&n_mall_pid=5633100574&n_ad_group_type=2&n_match=3&NaPm=ct%3Dm31jfrwg%7Cci%3D0ya00010ngrBbNVYzeX9%7Ctr%3Dplas%7Chk%3D8ae514757577aec80ee219311b1093936d0d0799%7Cnacn%3DrlfIDYAQKmzDA", 
      details: [
                "- 가격: 2,000원",
                "- 나사를 돌려 창문을 고정하는 장치고, 나사를 돌리는 데 필요한 공구는 함께 배송됩니다.", 
                "- 방충망도 열리지 않도록 고정해줍니다.",
                "- 아래에만 설치하면 윗부분이 들린다는 평이 있기에 창틀 아래와 위 모두 설치하는 것을 추천드립니다."
              ],
      image: "/safety-defense13.png", // CCTV 이미지 경로
    },
    {
      title: "창문 안전장치 4 + 경보기", 
      link: "https://smartstore.naver.com/allinone2002/products/4426920468?NaPm=ct%3Dm31g8kiw%7Cci%3D0zq00011i2rB29KA20YL%7Ctr%3Dpla%7Chk%3D8165dd36566e6dee9194856920498b7a9f9428d0%7Cnacn%3DrlfIDYAQKmzDA", 
      details: [
                "- 가격: 약 3만원 대",
                "- 창문 안전 잠금장치와 경보기가 달려있는 제품입니다.", 
                "- 충격이 감지되면 동작모드로 전환되어 30초동안 약 90dB의 경보기가 울립니다."
              ],
      image: "/safety-defense14.png", // CCTV 이미지 경로
    },
    {
        title: "현관문 안전장치", 
      link: "https://smartstore.naver.com/impetus/products/6656148729?NaPm=ct%3Dm31fqb48%7Cci%3Dec6c5b27e68ae95da388178f69ced24549bab4ca%7Ctr%3Dslsl%7Csn%3D1164235%7Chk%3D4e6732a485cffb06de0e57604df3ca7d9ac5592b&nl-au=157d2249cac847478556406b980fcee4&nl-query=%EB%AC%B4%ED%83%80%EA%B3%B5+%EC%B0%BD%EB%AC%B8+%EC%95%88%EC%A0%84%EC%9E%A5%EC%B9%98", 
      details: [
                "- 가격: 3,900원", 
                "- 현재 존재하는 현관문 안전장치는 거의 대부분의 제품이 손잡이를 잡고 내리는 문고리에 맞게 출시되었습니다. 따라서 돌려서 여는 구조의 문고리나, 밀어서 여는 도어락 구조의 경우에는 사용이 어려울 수 있습니다.",
                "- 무타공 이중잠금 안전장치입니다."
              ],
        image: "/safety-defense15.png", // CCTV 이미지 경로
      },
      {
        title: "현관문 안전장치", 
      link: "https://smartstore.naver.com/allinone2002/products/4744951432?", 
      details: [
                "- 가격: 11,700원(고리형 기준)", 
                "- 현재 존재하는 현관문 안전장치는 거의 대부분의 제품이 손잡이를 잡고 내리는 문고리에 맞게 출시되었습니다. 따라서 돌려서 여는 구조의 문고리나, 밀어서 여는 도어락 구조의 경우에는 사용이 어려울 수 있습니다.",
                "- 타공이 필요합니다."
              ] 
,
        image: "/safety-defense16.png", // CCTV 이미지 경로
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
