import { Badge } from '@mui/material';
import Header from 'components/Header/pc';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import * as Styled from 'styles/styled';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>누아 마이페이지</title>
        <meta name="description" content="누아 마이페이지" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PC />
    </div>
  );
};

const testInfoNumberData = [
  {
    label: '알림',
    number: 5,
    isBadgeInVisible: false,
  },
  {
    label: '찜하기',
    number: 32,
    isBadgeInVisible: true,
  },
  {
    label: '예약',
    number: 2,
    isBadgeInVisible: true,
  },
  {
    label: '문의내역',
    number: 3,
    isBadgeInVisible: true,
  },
];

const infoManageMenuList = [
  {
    label: '나의 계정',
  },
  {
    label: '탑승자 정보',
  },
  {
    label: '결제수단',
  },
];

const PC = () => {
  const [isBadgeInVisible, setIsBadgeInVisible] = useState<boolean>(false);
  return (
    <Styled.Root>
      <Header />
      <Styled.Body>
        <Styled.BodyContainer>
          <Styled.TitleTypo>안녕하세요. TripAI 회원님</Styled.TitleTypo>
          <Styled.InfoManageButton>
            <Styled.InfoManageButtonTypo>정보관리</Styled.InfoManageButtonTypo>
          </Styled.InfoManageButton>
          <Styled.InfoNumberContainer>
            {testInfoNumberData.map((numberData, index) => (
              <Styled.InfoNumberWrapper key={`info_number_wrapper_${index}`}>
                <Styled.InfoNumberTitleTypo>
                  {numberData.label}
                </Styled.InfoNumberTitleTypo>
                <Badge
                  color="secondary"
                  variant="dot"
                  invisible={numberData.isBadgeInVisible}
                >
                  <Styled.InfoNumberTypo>
                    {numberData.number}
                  </Styled.InfoNumberTypo>
                </Badge>
              </Styled.InfoNumberWrapper>
            ))}
          </Styled.InfoNumberContainer>
          <Styled.InfoManageContainer>
            <Styled.InfoManageTitleTypo>정보관리</Styled.InfoManageTitleTypo>
            <Styled.InfoManageMenuContainer>
              {infoManageMenuList.map((manageMenu, index) => (
                <Styled.InfoManageMenuTypo
                  key={`info_manage_menu_typo_${index}`}
                >
                  {manageMenu.label}
                </Styled.InfoManageMenuTypo>
              ))}
            </Styled.InfoManageMenuContainer>
            <Styled.InfoManageCreditContainer>
              <Styled.InfoManageCreditEditButtonContainer>
                <Styled.InfoManageCreditEditButton>
                  <Styled.InfoManageCreditEditButtonTypo>
                    편집
                  </Styled.InfoManageCreditEditButtonTypo>
                </Styled.InfoManageCreditEditButton>
              </Styled.InfoManageCreditEditButtonContainer>
              <Styled.InfoManageCreditCardContainer />
              <Styled.InfoManageCreditAddContainer>
                <Styled.InfoManageCreditAddIconWrapper>
                  <Styled.InfoManageCreditAddIcon />
                </Styled.InfoManageCreditAddIconWrapper>
                <Styled.InfoManageCreditAddTypo>
                  결제수단 추가
                </Styled.InfoManageCreditAddTypo>
              </Styled.InfoManageCreditAddContainer>
            </Styled.InfoManageCreditContainer>
          </Styled.InfoManageContainer>
        </Styled.BodyContainer>
      </Styled.Body>
    </Styled.Root>
  );
};

export default Home;
