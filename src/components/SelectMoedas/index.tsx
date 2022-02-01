import React from "react";
import * as S from "./styles";

//Components
import { Foundation } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";

export default function SelectMoedas() {
  return (
    <S.Container>
      <S.SelectContainer>
        <S.Select>
          <Picker.Item label="Java" value="java" />
        </S.Select>
      </S.SelectContainer>
      <S.AddButton>
        <Foundation name="plus" color="white" size={30} />
      </S.AddButton>
    </S.Container>
  );
}
