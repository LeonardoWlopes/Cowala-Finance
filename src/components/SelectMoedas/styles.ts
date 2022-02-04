import { Picker } from "@react-native-picker/picker";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const SelectContainer = styled.View`
  width: 315px;
  height: 55px;
  border-radius: 12px;
  background: #f5f5f5;
`;

export const Select = styled(Picker)`
  width: 100%;
  height: 100%;
  color: #858585;`;

export const AddButton = styled.TouchableOpacity`
  width: 55px;
  height: 55px;
  background: #0a1633;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
`;
