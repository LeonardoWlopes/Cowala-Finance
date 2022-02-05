import React, { useEffect, useState, memo, useContext } from "react";
import * as S from "./styles";
import api from "../../services/api";

//components
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { LineChart as LineC } from "react-native-svg-charts";
import AppLoading from "expo-app-loading";

//Contexts
import { MoedasContext } from "../../contexts/MoedasContext";

//Interfaces
type props = {
  nome: string;
  symbol: string;
  valor: string;
  cp24: string;
  id: string;
};

type IGraphData = {
  priceUsd: string;
  time: number;
  date: string;
};

function DisplayMoedas({ nome, symbol, valor, cp24, id }: props) {
  const [alta, setAlta] = useState(false);
  const [graphData, setGraphData] = useState<IGraphData[] | null>(null);
  const [selectorActive, setSelectorActive] = useState("h1");
  const { renderList, setRenderList } = useContext(MoedasContext);

  //Busca o historico da moeda na API
  useEffect(() => {
    getGraphData();
  }, [selectorActive]);

  function getGraphData() {
    api
      .get(`/assets/${id}/history?interval=${selectorActive}`)
      .then((res) => setGraphData(res.data.data))
      .catch((err) => console.log(err));
  }

  //Formatador de valores
  function currencyFormat(num: string | number) {
    return parseFloat(num as string)
      .toFixed(2)
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
  }

  //Verifica se esta em alta ou baixa
  useEffect(() => {
    setAlta(cp24.includes("-"));
  }, [cp24]);

  //Gera o  grafico
  function redeenGraph() {
    if (!!graphData) {
      const data = graphData.map((item) => {
        var n = item.priceUsd.indexOf(".");
        var price = item.priceUsd.substring(
          0,
          n != -1 ? n : item.priceUsd.length
        );
        return parseInt(price);
      });
      return data;
    } else return [0, 1, 2];
  }

  //Grafico
  function LineChart() {
    return !!graphData ? (
      <LineC
        style={{ height: 150 }}
        data={redeenGraph()}
        svg={{
          stroke: `${!alta ? "#4BD1A0" : "#F94747"}`,
          strokeWidth: 3,
        }}
        contentInset={{ top: 20, bottom: 20 }}
      />
    ) : (
      <AppLoading />
    );
  }

  //Exclui a moeda da renderList
  function removeItemFromRenderList() {
    if (!!renderList) {
      const newRenderList = renderList?.filter((item) => item.id !== id);

      setRenderList(newRenderList);
    }
  }

  //pega o menor e maior valor para
  const allValues = graphData?.map((item) => parseInt(item.priceUsd));

  return (
    <S.Container>
      <S.Head>
        <S.SupHead>
          <S.SupHeadText>
            {nome}
            <S.SupHeadTextBold> ({symbol})</S.SupHeadTextBold>
          </S.SupHeadText>
          <Feather
            onPress={removeItemFromRenderList}
            name="x"
            size={36}
            color="#858585"
          />
        </S.SupHead>
        <S.BaseHead>
          <S.BaseHeadText>$ {currencyFormat(valor)}</S.BaseHeadText>
          <AntDesign
            name={`${!alta ? "up" : "down"}circle`}
            size={12}
            color={!alta ? "#4BD1A0" : "#F94747"}
          />
          <S.Percent style={{ color: `${!alta ? "#4BD1A0" : "#F94747"}` }}>
            {!alta ? cp24.substring(0, 1) + "%" : cp24.substring(1, 2) + "%"}
          </S.Percent>
        </S.BaseHead>
      </S.Head>
      <S.Body>
        <S.Graphic>
          <LineChart />
        </S.Graphic>
        <S.TimeSelect>
          <S.TimeSelector
            onPress={() => setSelectorActive("m1")}
            active={selectorActive === "m1" ? true : false}
          >
            <S.SelectorText active={selectorActive === "m1" ? true : false}>
              1m
            </S.SelectorText>
          </S.TimeSelector>
          <S.TimeSelector
            onPress={() => setSelectorActive("h1")}
            active={selectorActive === "h1" ? true : false}
          >
            <S.SelectorText active={selectorActive === "h1" ? true : false}>
              1h
            </S.SelectorText>
          </S.TimeSelector>
          <S.TimeSelector
            onPress={() => setSelectorActive("d1")}
            active={selectorActive === "d1" ? true : false}
          >
            <S.SelectorText active={selectorActive === "d1" ? true : false}>
              1d
            </S.SelectorText>
          </S.TimeSelector>
        </S.TimeSelect>
      </S.Body>
      <S.Footer>
        <S.FooterLeft>
          <S.FooterText>MÍN</S.FooterText>
          <S.FooterValue>
            $ {!!allValues && currencyFormat(Math.min(...allValues))}
          </S.FooterValue>
        </S.FooterLeft>
        <S.FooterRight>
          <S.FooterText>MÁX</S.FooterText>
          <S.FooterValue>
            $ {!!allValues && currencyFormat(Math.max(...allValues))}
          </S.FooterValue>
        </S.FooterRight>
      </S.Footer>
    </S.Container>
  );
}

export default memo(DisplayMoedas);
