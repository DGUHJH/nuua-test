import { Badge } from '@mui/material';
import global from 'assets/images/icon/icon_16_global.svg';
import inputDown from 'assets/images/icon/icon_16_inputDown_white.svg';
import logo from 'assets/images/logo.png';
import Image from 'next/image';
import { useState } from 'react';
import * as Styled from './styled';

const Header = () => {
  const [isBadgeInVisible, setIsBadgeInVisible] = useState<boolean>(false);

  return (
    <Styled.Root>
      <Styled.LogoImageWrapper>
        <Image src={logo} layout="fill" />
      </Styled.LogoImageWrapper>
      <Styled.MenuContainer>
        <Styled.MenuCountrySelectContainer>
          <Styled.MenuCountrySelectIconWrapper>
            <Image src={global} layout="fill" />
          </Styled.MenuCountrySelectIconWrapper>
          <Styled.MenuCountrySelectTypo align="center">
            한국어
          </Styled.MenuCountrySelectTypo>
          <Styled.MenuCountrySelectIconWrapper>
            <Image src={inputDown} layout="fill" />
          </Styled.MenuCountrySelectIconWrapper>
        </Styled.MenuCountrySelectContainer>
        <Styled.MenuUserContainer>
          <Styled.MenuUserTypo align="center">홍길동님</Styled.MenuUserTypo>
          <Badge
            color="secondary"
            variant="dot"
            invisible={isBadgeInVisible}
            onClick={() => setIsBadgeInVisible((prev) => !prev)}
          >
            <Styled.MenuUserAlarmContainer>
              <Styled.MenuUserAlarmIconWrapper>
                <Styled.MenuUserAlarmIcon />
              </Styled.MenuUserAlarmIconWrapper>
            </Styled.MenuUserAlarmContainer>
          </Badge>
        </Styled.MenuUserContainer>
        <Styled.MenuCustomerServiceTypo>
          고객센터
        </Styled.MenuCustomerServiceTypo>
      </Styled.MenuContainer>
    </Styled.Root>
  );
};

export default Header;
