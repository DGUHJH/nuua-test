import { NotificationsNoneOutlined } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import styled from 'styled-components';

export const Root = styled(Box)`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  box-sizing: border-box;
  border-bottom: 1px #e9ebee solid;
`;

export const LogoImageWrapper = styled(Box)`
  width: 160px;
  height: 30px;
  position: relative;
`;

export const MenuContainer = styled(Box)`
  width: 247px;
  height: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MenuCountrySelectContainer = styled(Box)`
  width: 79px;
  height: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 4px;
  box-sizing: border-box;
  border-radius: 4px;
  background: #989dad;
`;

export const MenuCountrySelectIconWrapper = styled(Box)`
  width: 16px;
  height: 16px;
  position: relative;
`;

export const MenuCountrySelectTypo = styled(Typography)`
  &&& {
    font-family: Poppins-Regular;
    font-size: 11px;
    color: #fff;
  }
`;

export const MenuUserContainer = styled(Box)`
  width: 72px;
  height: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

export const MenuUserTypo = styled(Typography)`
  &&& {
    font-family: Poppins-Regular;
    font-size: 13px;
    color: #333849;
  }
`;

export const MenuUserAlarmContainer = styled(Box)`
  width: 20px;
  height: 16px;
`;

export const MenuUserAlarmIconWrapper = styled(Box)`
  width: 16px;
  height: 16px;
  position: relative;
`;

export const MenuUserAlarmIcon = styled(NotificationsNoneOutlined)`
  font-size: 16px;
`;

export const MenuUserAlarmPointIconWrapper = styled(Box)`
  width: 4px;
  height: 16px;
  position: relative;
`;

export const MenuCustomerServiceTypo = styled(Typography)`
  &&& {
    font-family: Poppins-Regular;
    font-size: 13px;
    color: #777e97;
  }
`;
