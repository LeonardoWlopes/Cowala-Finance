import React from "react";
import * as S from "./styles";

//components
import SelectMoedas from "../../components/SelectMoedas";
import FlatListMoedas from "../../components/FlatLists/Moedas";

export default function Home() {
  return (
    <S.Container>
      <SelectMoedas />
      <FlatListMoedas />
    </S.Container>
  );
}
