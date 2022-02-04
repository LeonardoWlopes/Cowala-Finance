import React, { useContext } from "react";
import * as S from "./styles";

//components
import { FlatList } from "react-native";
import DisplayMoedas from "../../DisplayMoedas";

//context
import { MoedasContext } from "../../../contexts/MoedasContext";

//Interfaces
import { IMoedas } from "../../../interfaces/Moedas.interface";
import AppLoading from "expo-app-loading";

export default function FlatListMoedas() {
  const { renderList } = useContext(MoedasContext);

  if (!!renderList && renderList.length > 0) {
    return (
      <S.Container>
        <FlatList<IMoedas>
          data={renderList}
          renderItem={({ item, index }) => {
            return (
              <DisplayMoedas
                nome={item.name}
                symbol={item.symbol}
                valor={item.priceUsd}
                cp24={item.changePercent24Hr}
                id={item.id}
              />
            );
          }}
          keyExtractor={(moeda) => moeda.id}
        />
      </S.Container>
    );
  } else {
    return (
      <S.Container>
        <S.Text>Que tal adicionar uma moeda na sua home? Basta selecionar uma moeda acima e apertar em +</S.Text>
      </S.Container>
    );
  }
}
