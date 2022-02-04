import React, { useContext, useEffect, useState } from "react";
import * as S from "./styles";

//Context
import { MoedasContext } from "../../contexts/MoedasContext";

//Components
import { Foundation } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";

export default function SelectMoedas() {
  const { moedas, renderList, setRenderList } = useContext(MoedasContext);
  const [selectedMoeda, setSelectedMoeda] = useState("null");

  //Adiciona um item na rendelist
  function addItemToRenderList() {
    if (!!moedas && selectedMoeda !== "null") {
      const index = moedas?.findIndex((moeda) => moeda.name === selectedMoeda);
      const moeda = moedas[index];

      if (!!renderList) {
        const exist = renderList.map((item) => item.name === selectedMoeda);

        if (!exist.includes(true)) {
          const newRenderList = [...renderList, moeda];
          setRenderList(newRenderList);
        }
      } else {
        setRenderList([moeda]);
      }
    }
  }

  return (
    <S.Container>
      <S.SelectContainer>
        <S.Select
          mode="dropdown"
          selectedValue={selectedMoeda}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedMoeda(itemValue as string)
          }
        >
          <Picker.Item label="Selecione uma moeda" value="null" />
          {moedas?.map((moeda) => (
            <Picker.Item label={moeda.name} value={moeda.name} key={moeda.id} />
          ))}
        </S.Select>
      </S.SelectContainer>
      <S.AddButton onPress={addItemToRenderList}>
        <Foundation name="plus" color="white" size={30} />
      </S.AddButton>
    </S.Container>
  );
}
