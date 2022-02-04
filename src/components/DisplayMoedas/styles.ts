import styled from "styled-components/native";

interface props {
  active?: boolean;
}

export const Container = styled.View`
  width: 370px;
  height: 363px;
  background: #f5f5f5;
  border-radius: 12px;
  margin: 4px 0px;
  padding: 16px 32px;
`;

export const Head = styled.View`
  display: flex;
  width: 100%;
  height: 65px;
  justify-content: space-between;
`;
export const SupHead = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const SupHeadText = styled.Text`
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 26px;
  color: #000000;
`;

export const SupHeadTextBold = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 26px;
  color: #000000;
`;

export const BaseHead = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const BaseHeadText = styled.Text`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  color: #000000;
  margin-right: 12px;
`;

export const Percent = styled.Text`
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;
  margin-left: 4px;
`;

export const Body = styled.View``;

export const Graphic = styled.View`
  width: 100%;
  height: 145px;
  background: #e7e7e7;
  border-radius: 14px;
  margin-top: 8px;
`;

export const TimeSelect = styled.View`
  width: 100%;
  height: 37px;
  background: #e7e7e7;
  border-radius: 12px;
  margin-top: 8px;
  justify-content: center;
  padding: 0px 4px;
  align-items: center;
  flex-direction: row;
`;

export const Footer = styled.View`
  width: 100%;
  height: 60px;
  margin-top: 12px;
  display: flex;
  flex-direction: row;
`;

export const FooterLeft = styled.View`
  width: 50%;
  height: 60px;
`;

export const FooterRight = styled.View`
  width: 50%;
  height: 60px;
`;

export const FooterText = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  color: #000000;
`;

export const FooterValue = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 26px;
  color: #000000;
`;

export const TimeSelector = styled.TouchableOpacity<props>`
  width: 87px;
  height: 31px;
  background: ${(props) => (props.active ? "#9b9b9b" : "transparent")};
  border-radius: 10px;
  margin: 0px 4px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const SelectorText = styled.Text<props>`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 23px;
  color: ${(props) => (props.active ? "#ffffff" : "#9b9b9b")};
`;
