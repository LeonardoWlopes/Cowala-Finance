import React, { useContext } from "react";
import * as S from "./styles";

//components
import { FlatList } from "react-native";
import DisplayMoedas from "../../DisplayMoedas";

//context
import { MoedasContext } from "../../../contexts/MoedasContext";

//Interfaces
import { IMoedas } from "../../../interfaces/Moedas";
import AppLoading from "expo-app-loading";

export default function FlatListMoedas() {
  const { moedas } = useContext(MoedasContext);

  return (
    <S.Container>
      {!!moedas ? (
        <FlatList<IMoedas>
          data={moedas}
          renderItem={({ item, index }) => {
            return (
              <DisplayMoedas
                nome={item.name}
                symbol={item.symbol}
                valor={item.priceUsd}
                cp24={item.changePercent24Hr}
              />
            );
          }}
          keyExtractor={(moeda) => moeda.id}
        />
      ) : (
        <AppLoading />
      )}
    </S.Container>
  );
}
