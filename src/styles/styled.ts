import { Add } from '@mui/icons-material';
import { Box, Button, Typography } from '@mui/material';
import styled from 'styled-components';

export const Root = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Body = styled(Box)`
  width: 100%;
  min-height: calc(100vh - 100px);
  background: #dddee5;
  display: flex;
  justify-content: center;
  padding-bottom: 200px;
`;

export const BodyContainer = styled(Box)`
  width: 1224px;
  height: 1049px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-top: 81px;
`;

export const TitleTypo = styled(Typography)`
  &&& {
    font-family: Poppins-Bold;
    font-weight: 700;
    font-size: 30px;
    color: #111d2d;
  }
`;

export const InfoManageButton = styled(Button)`
  &&& {
    width: 65px;
    height: 32px;
    background: #fff;
    border: 1px #dddee5 solid;
    border-radius: 4px;
    margin-top: 16px;
  }
`;

export const InfoManageButtonTypo = styled(Typography)`
  &&& {
    font-family: Poppins-Bold;
    font-weight: 700;
    font-size: 11px;
    color: #777e97;
  }
`;

export const InfoNumberContainer = styled(Box)`
  width: 640px;
  height: 68px;
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
`;

export const InfoNumberWrapper = styled(Box)`
  width: 160px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  border-left: 1px #0002 solid;
  &:first-child {
    border-left: 0;
  }
`;

export const InfoNumberTitleTypo = styled(Typography)`
  &&& {
    font-family: Poppins-Regular;
    font-weight: 400;
    font-size: 15px;
    color: #777e97;
    line-height: 18px;
  }
`;

export const InfoNumberTypo = styled(Typography)`
  &&& {
    font-family: Poppins-Bold;
    font-weight: 700;
    font-size: 30px;
    color: #333849;
    line-height: 42px;
  }
`;

export const InfoManageContainer = styled(Box)`
  width: 1224px;
  height: 787px;
  background: #fff;
  display: flex;
  flex-direction: column;
  padding: 64px;
  box-sizing: border-box;
  border-radius: 8px;
  margin-top: 64px;
`;

export const InfoManageTitleTypo = styled(Typography)`
  &&& {
    font-family: Poppins-Bold;
    font-weight: 700;
    font-size: 25px;
    color: #333849;
    line-height: 35px;
  }
`;

export const InfoManageMenuContainer = styled(Box)`
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 64px;
`;

export const InfoManageMenuTypo = styled(Typography)`
  &&& {
    font-family: Poppins-Bold;
    font-weight: 700;
    font-size: 15px;
    color: #aab0bc;
    line-height: 18px;
    padding: 0 16px;
    box-sizing: border-box;
    border-right: 1px #dddee5 solid;
  }
  &:first-child {
    &&& {
      padding-left: 0;
    }
  }
  &:last-child {
    &&& {
      border-right: 0;
      color: #333849;
    }
  }
`;

export const InfoManageCreditContainer = styled(Box)`
  width: 1096px;
  height: 496px;
  display: flex;
  flex-direction: column;
  margin-top: 24px;
`;

export const InfoManageCreditEditButtonContainer = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const InfoManageCreditEditButton = styled(Button)`
  width: 60px;
  height: 32px;
  background: #fff;
  border: 1px #dddee5 solid;
  border-radius: 4px;
`;

export const InfoManageCreditEditButtonTypo = styled(Typography)`
  &&& {
    font-family: Poppins-Bold;
    font-weight: 700;
    font-size: 11px;
    color: #777e97;
  }
`;

export const InfoManageCreditCardContainer = styled(Box)`
  width: 1096px;
  height: 360px;
  background: #f6f7fb;
  border: 1px #e9ebee solid;
  border-radius: 8px;
  margin-top: 24px;
`;

export const InfoManageCreditAddContainer = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`;

export const InfoManageCreditAddIconWrapper = styled(Box)`
  width: 40px;
  height: 40px;
  position: relative;
`;

export const InfoManageCreditAddIcon = styled(Add)`
  font-size: 40px;
  color: #ccced8;
`;

export const InfoManageCreditAddTypo = styled(Typography)`
  &&& {
    font-family: Poppins-Bold;
    font-weight: 700;
    font-size: 20px;
    color: #555e70;
    margin-left: 8px;
  }
`;
