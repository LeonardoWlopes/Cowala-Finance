import React, { useContext } from "react";
import * as S from "./styles";

//components
import SelectMoedas from "../../components/SelectMoedas";
import FlatListMoedas from "../../components/FlatLists/Moedas";

//Contexr
import { MoedasContext } from "../../contexts/MoedasContext";

export default function Home() {
  const { renderList } = useContext(MoedasContext);
  return (
    <S.Container>
      <SelectMoedas />
      <FlatListMoedas />
    </S.Container>
  );
}
