"use client";
import React, { useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/navigation";

const HomeSafetyPage: React.FC = () => {
  const router = useRouter();
  const [selectedContent, setSelectedContent] = useState<string | null>(null);

  const handleImageClick = (content: string) => {
    setSelectedContent(content);
  };

  const handleCloseModal = () => {
    setSelectedContent(null);
  };

  const contentData = [
    { 
      title: "CCTV 1", 
      link: "https://smartstore.naver.com/rayhome/products/4842284088?nl-au=8a824c99961044c38d4f4cf43e211a22&nl-query=%ED%98%84%EA%B4%80+CCTV", 
      details: [
                "- 가격: 96,000원", 
                "- 가격이 다소 나가지만, 배터리 교체 시기가 6개월이라 추천드립니다.", 
                "- 문 앞에 움직임이 보이면 모션 캡쳐 기능을 통해 스마트폰으로 사진이 전송됩니다.", 
                "- 최대 5명까지 사진 공유가 가능합니다.", 
                "- 라이브 영상을 30초 간 볼 수 있으나 영상 저장은 불가능합니다."
              ] 
    },
    { 
      title: "CCTV 2", 
      link: "https://smartstore.naver.com/eyedence/products/8889711584?nl-au=d763fcc8722d4d1b8be7a997dc8fb3a5&nl-query=%ED%98%84%EA%B4%80+CCTV", 
      details: [
                "- 가격: 69,000원", 
                "- 마이크 기능이 존재하여, 스마트폰을 통해 CCTV 주변에 소리를 전달하는 것이 가능합니다.",
                "- SD 카드를 이용하여 영상을 최대 52일까지 저장할 수 있습니다.",
                "- 모션 캡쳐 기능이 존재하며 기능을 적용할 시간을 설정할 수 있습니다.",
                "- 초기에 카메라 연결을 위해 전선과 같은 부자재가 필요합니다.",
                "- 타공(천장에 구멍을 내는 작업)이 필요합니다."
              ] 
    },
    { 
      title: "CCTV 3", 
      link: "https://smartstore.naver.com/eyedence/products/4904181003", 
      details: [
                "- 가격: 49,800원", 
                "- 탁월한 방수 기능과 선명한 화질을 제공합니다.",
                "- 초기에 카메라 연결을 위해 전선과 같은 부자재가 필요합니다.",
                "- 타공(천장에 구멍을 내는 작업)이 필요합니다."
              ] 
    },
    { 
      title: "CCTV 모형", 
      link: "https://search.shopping.naver.com/catalog/28758921554?query=CCTV%20%EB%AA%A8%ED%98%95&NaPm=ct%3Dm31et9aw%7Cci%3Da1024c1c89a705bacdbb26bb8e76117f635ca63e%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3Dd3596b718b4622a4ea8dc8898b1108abc4b85ac5", 
      details: [
                "- 실제 CCTV를 설치하기에 부담이 되는 분들을 위해 소개하는 CCTV 모형입니다.", 
                "- 가격대는 1,500원 ~ 7,500원으로 다양합니다.",
                "- 불빛이 들어와 실제 작동 중으로 보이는 제품도 존재합니다."
              ] 
    },
    { 
      title: "후추 스프레이 1", 
      link: "https://smartstore.naver.com/park2926/products/8935484515?nl-au=7f668352d83a4048abb2af46a7a33005&nl-query=%ED%9B%84%EC%B6%94%EC%8A%A4%ED%94%84%EB%A0%88%EC%9D%B4", 
      details: [
                "- 가격: 28,500원", 
                "- 손으로 잡아 모양을 파악할 수 있어 스프레이의 분사구를 감각으로 알 수 있습니다.",
                "- 최대 3.5m까지 분사가 가능합니다."
              ] 
    },
    { 
      title: "후추 스프레이 2", 
      link: "https://smartstore.naver.com/s-defense2020/products/9883054827?n_media=11068&n_query=%ED%9B%84%EC%B6%94%EC%8A%A4%ED%94%84%EB%A0%88%EC%9D%B4&n_rank=3&n_ad_group=grp-a001-02-000000045481006&n_ad=nad-a001-02-000000325300889&n_campaign_type=2&n_mall_id=ncp_1ob3x2_01&n_mall_pid=9883054827&n_ad_group_type=2&n_match=3", 
      details: [
                "- 가격: 19,800원", 
                "- 펜 모양으로 소지가 자연스러우며 가볍습니다.",
                "- 최대 3m까지 분사가 가능합니다.",
                "- 야광 표시가 되어있어 어두운 환경에서도 사용이 가능합니다."
              ] 
    },
    { 
      title: "후추 스프레이 3", 
      link: "https://smartstore.naver.com/kmom23/products/10305370314?nl-au=b5c6564205d8402ab9916c253cc7755e&nl-query=%ED%9B%84%EC%B6%94%EC%8A%A4%ED%94%84%EB%A0%88%EC%9D%B4", 
      details: [
                "- 가격: 6,470원", 
                "- 한 손에 쏙 들어오는 사이즈를 가지고 있어 휴대성이 높습니다.",
                "- 부담없는 가격입니다."
              ] 
    },
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
    },
    { 
      title: "휴대용 경보기 2", 
      link: "https://smartstore.naver.com/ttabongoutlet/products/8130802654?nl-query=%ED%9C%B4%EB%8C%80%EC%9A%A9+%EA%B2%BD%EB%B3%B4%EA%B8%B0&nl-ts-pid=iyO6Hsqps8wssb8zL94ssssstvw-340238&NaPm=ct%3Dm31fi54w%7Cci%3D9859d3cc67723afe49adda22df57dae6019124d6%7Ctr%3Dsls%7Csn%3D1016170%7Chk%3D5a49201c3ab74eaadf432f90ac789f8a66bd4708", 
      details: [
                "- 가격: 5,900원", 
                "- 저렴한 가격으로 가성비가 좋으나, 소음은 최대 110dB입니다."
              ] 
    },
    { 
      title: "휴대용 경보기 3", 
      link: "https://smartstore.naver.com/wishmall/products/193973208?nl-query=%ED%9C%B4%EB%8C%80%EC%9A%A9+%EA%B2%BD%EB%B3%B4%EA%B8%B0&nl-ts-pid=iyO6Hsqps8wssb8zL94ssssstvw-340238&NaPm=ct%3Dm31flz94%7Cci%3Dc854c7648b01294416777dc816f04e523b096497%7Ctr%3Dsls%7Csn%3D214113%7Chk%3D2bcd592d6143898e6503183326cb31aa8f999f46", 
      details: [
                "- 가격: 860원", 
                "- 아주 저렴하지만, 소음은 최대 90dB입니다.",
                "- 핀을 당겨서 뽑아야만 소리가 난다는 특징이 있습니다."
              ] 
    },
    { 
      title: "창문 안전장치 1", 
      link: "https://search.shopping.naver.com/catalog/50521439414?query=%EB%AC%B4%ED%83%80%EA%B3%B5%20%EC%B0%BD%EB%AC%B8%20%EC%95%88%EC%A0%84%EC%9E%A5%EC%B9%98&NaPm=ct%3Dm31g6xvs%7Cci%3D2c3c7772d804c443a8dd052052466422b53f47ed%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3D659641dfece93269cfa1bb9d778866ae534bd1b3", 
      details: [
                "- 가격: 5,570원", 
                "- 창문이 완전히 열리지 않도록 하여 외부인이 침입하는 일을 막을 수 있는 안전장치입니다.",
                "- 무타공으로도 사용이 가능합니다.",
                "- 창문 규격에 맞게 사용할 수 있으며, 구매 페이지에서 사용 영상을 참고할 수 있습니다."
              ] 
    },
    { 
      title: "창문 안전장치 2", 
      link: "https://smartstore.naver.com/lifedoctor/products/4533794982?nl-query=%EB%AC%B4%ED%83%80%EA%B3%B5%20%EC%B0%BD%EB%AC%B8%20%EC%95%88%EC%A0%84%EC%9E%A5%EC%B9%98&frm=NVSCPSI&pageid=iyOK2lqVOsossutVaP4ssssssFs-360734&NaPm=ci%3DiyOK2lqVOsossutVaP4ssssssFs-360734%7Cct%3Dm31fpyrt%7Ctr%3Dnsls%7Csn%3D940935%7Chk%3Df65045a72b4b9e5c5d5f7132fb781aa84ea655a6", 
      details: [
                "- 가격: 1,700원", 
                "- 2.5-4cm 정도로 창문의 열림을 조절할 수 있습니다.",
                "- 부드러운 사용감을 위해 제품에 기름(구리스)가 많이 묻어있는 것이 특징입니다."
              ] 
    },
    { 
      title: "창문 안전장치 3", 
      link: "https://smartstore.naver.com/kakaxi/products/5633100574?n_media=643599&n_rank=2&n_ad_group=grp-a001-02-000000021745865&n_ad=nad-a001-02-000000137643877&n_campaign_type=2&n_mall_id=ncp_1o6434_01&n_mall_pid=5633100574&n_ad_group_type=2&n_match=3&NaPm=ct%3Dm31jfrwg%7Cci%3D0ya00010ngrBbNVYzeX9%7Ctr%3Dplas%7Chk%3D8ae514757577aec80ee219311b1093936d0d0799%7Cnacn%3DrlfIDYAQKmzDA", 
      details: [
                "- 가격: 2,000원",
                "- 나사를 돌려 창문을 고정하는 장치고, 나사를 돌리는 데 필요한 공구는 함께 배송됩니다.", 
                "- 방충망도 열리지 않도록 고정해줍니다.",
                "- 아래에만 설치하면 윗부분이 들린다는 평이 있기에 창틀 아래와 위 모두 설치하는 것을 추천드립니다."
              ] 
    },
    { 
      title: "창문 안전장치 4 + 경보기", 
      link: "https://smartstore.naver.com/allinone2002/products/4426920468?NaPm=ct%3Dm31g8kiw%7Cci%3D0zq00011i2rB29KA20YL%7Ctr%3Dpla%7Chk%3D8165dd36566e6dee9194856920498b7a9f9428d0%7Cnacn%3DrlfIDYAQKmzDA", 
      details: [
                "- 가격: 약 3만원 대",
                "- 창문 안전 잠금장치와 경보기가 달려있는 제품입니다.", 
                "- 충격이 감지되면 동작모드로 전환되어 30초동안 약 90dB의 경보기가 울립니다."
              ] 
    },
    { 
      title: "현관문 안전장치", 
      link: "https://smartstore.naver.com/impetus/products/6656148729?NaPm=ct%3Dm31fqb48%7Cci%3Dec6c5b27e68ae95da388178f69ced24549bab4ca%7Ctr%3Dslsl%7Csn%3D1164235%7Chk%3D4e6732a485cffb06de0e57604df3ca7d9ac5592b&nl-au=157d2249cac847478556406b980fcee4&nl-query=%EB%AC%B4%ED%83%80%EA%B3%B5+%EC%B0%BD%EB%AC%B8+%EC%95%88%EC%A0%84%EC%9E%A5%EC%B9%98", 
      details: [
                "- 가격: 3,900원", 
                "- 현재 존재하는 현관문 안전장치는 거의 대부분의 제품이 손잡이를 잡고 내리는 문고리에 맞게 출시되었습니다. 따라서 돌려서 여는 구조의 문고리나, 밀어서 여는 도어락 구조의 경우에는 사용이 어려울 수 있습니다.",
                "- 무타공 이중잠금 안전장치입니다."
              ] 
    },
    { 
      title: "현관문 안전장치", 
      link: "https://smartstore.naver.com/allinone2002/products/4744951432?", 
      details: [
                "- 가격: 11,700원(고리형 기준)", 
                "- 현재 존재하는 현관문 안전장치는 거의 대부분의 제품이 손잡이를 잡고 내리는 문고리에 맞게 출시되었습니다. 따라서 돌려서 여는 구조의 문고리나, 밀어서 여는 도어락 구조의 경우에는 사용이 어려울 수 있습니다.",
                "- 타공이 필요합니다."
              ] 
    }
  ];

  return (
    <MainContainer>
      <TextSection>
        <Title>보안장치 추천</Title>
        <BackIcon onClick={() => router.back()}>←</BackIcon>
        <Description>
          이미지를 클릭하면 상세 설명을 볼 수 있습니다.
          <br />
        </Description>
      </TextSection>

      {contentData.map((content, index) => (
        <Content key={index}>
          <SectionTitle>{content.title}</SectionTitle>
          <StyledImage
            src={`/safety-defense${index + 1}.png`}
            alt={`Safety defense Image ${index + 1}`}
            onClick={() => handleImageClick(`content${index + 1}`)}
          />
        </Content>
      ))}

      {/* 모달 컴포넌트 */}
      {selectedContent && (
        <ModalOverlay onClick={handleCloseModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            {contentData.map((content, index) => (
              selectedContent === `content${index + 1}` ? (
                <div key={index}>
                  <h3>{content.title}</h3>
                  <p>
                    <StyledLink
                      href={content.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      구매 링크
                    </StyledLink>
                  </p>
                  <ul>
                    {content.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                </div>
              ) : null
            ))}
            <CloseButton onClick={handleCloseModal}>닫기</CloseButton>
          </ModalContent>
        </ModalOverlay>
      )}
    </MainContainer>
  );
};

export default HomeSafetyPage;

// 스타일링 부분은 동일하게 유지합니다.
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
`;

const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 700px;
  margin-bottom: 40px;
  text-align: center;
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
  font-size: 36px;
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
  text-align: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 700px;
  padding: 30px;
  background-color: #ffffff;
  border-radius: 16px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  margin-top: 40px;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 22px;
  margin-bottom: 20px;
  color: #1f2a38;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  text-align: center;
`;

const StyledImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 12px;
  cursor: pointer;
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.05);
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 12px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
`;

const StyledLink = styled.a`
  color: #0070f3;
  text-decoration: underline;
  display: inline-block;
  margin-top: 10px;
`;

const CloseButton = styled.button`
  background-color: #1f2a38;
  border: none;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  transition: background-color 0.3s;
  &:hover {
    background-color: #667094;
  }
`;
