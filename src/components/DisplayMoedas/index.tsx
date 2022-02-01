import React, { useEffect, useState } from "react";
import * as S from "./styles";

//components
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { LineChart as LineC } from "react-native-svg-charts";

//Interfaces
type props = {
  nome: string;
  symbol: string;
  valor: string;
  cp24: string;
};

type IGraphData = {
  priceUsd: string;
  time: number;
  date: string;
};

export default function DisplayMoedas({ nome, symbol, valor, cp24 }: props) {
  const [alta, setAlta] = useState(false);
  const [graphData, setGraphData] = useState<IGraphData[]>([
    {
      priceUsd: "57545.7099640184863335",
      time: 1615766400000,
      date: "2021-03-15T00:00:00.000Z",
    },
    {
      priceUsd: "55373.8874327415775713",
      time: 1615852800000,
      date: "2021-03-16T00:00:00.000Z",
    },
    {
      priceUsd: "56173.7828102339561008",
      time: 1615939200000,
      date: "2021-03-17T00:00:00.000Z",
    },
    {
      priceUsd: "58458.9100438092589776",
      time: 1616025600000,
      date: "2021-03-18T00:00:00.000Z",
    },
    {
      priceUsd: "58281.6977855599021484",
      time: 1616112000000,
      date: "2021-03-19T00:00:00.000Z",
    },
    {
      priceUsd: "58791.3113214802289918",
      time: 1616198400000,
      date: "2021-03-20T00:00:00.000Z",
    },
    {
      priceUsd: "57314.8002441758366639",
      time: 1616284800000,
      date: "2021-03-21T00:00:00.000Z",
    },
    {
      priceUsd: "56805.4296811490388822",
      time: 1616371200000,
      date: "2021-03-22T00:00:00.000Z",
    },
    {
      priceUsd: "54720.7868644972649712",
      time: 1616457600000,
      date: "2021-03-23T00:00:00.000Z",
    },
    {
      priceUsd: "55180.6757789643260303",
      time: 1616544000000,
      date: "2021-03-24T00:00:00.000Z",
    },
    {
      priceUsd: "52191.3506455183312756",
      time: 1616630400000,
      date: "2021-03-25T00:00:00.000Z",
    },
    {
      priceUsd: "53262.4424142483836350",
      time: 1616716800000,
      date: "2021-03-26T00:00:00.000Z",
    },
    {
      priceUsd: "55203.8059188787479721",
      time: 1616803200000,
      date: "2021-03-27T00:00:00.000Z",
    },
    {
      priceUsd: "55849.9489096826113726",
      time: 1616889600000,
      date: "2021-03-28T00:00:00.000Z",
    },
    {
      priceUsd: "56924.4985723684343779",
      time: 1616976000000,
      date: "2021-03-29T00:00:00.000Z",
    },
    {
      priceUsd: "58375.6191686124054002",
      time: 1617062400000,
      date: "2021-03-30T00:00:00.000Z",
    },
    {
      priceUsd: "58766.3458463164589049",
      time: 1617148800000,
      date: "2021-03-31T00:00:00.000Z",
    },
    {
      priceUsd: "58942.0539526027739233",
      time: 1617235200000,
      date: "2021-04-01T00:00:00.000Z",
    },
    {
      priceUsd: "59343.0090317354899870",
      time: 1617321600000,
      date: "2021-04-02T00:00:00.000Z",
    },
    {
      priceUsd: "58927.1110376388919824",
      time: 1617408000000,
      date: "2021-04-03T00:00:00.000Z",
    },
    {
      priceUsd: "57740.5879076736194260",
      time: 1617494400000,
      date: "2021-04-04T00:00:00.000Z",
    },
    {
      priceUsd: "58097.0633999067806230",
      time: 1617580800000,
      date: "2021-04-05T00:00:00.000Z",
    },
    {
      priceUsd: "58471.0289234004571113",
      time: 1617667200000,
      date: "2021-04-06T00:00:00.000Z",
    },
    {
      priceUsd: "56999.9728252053067291",
      time: 1617753600000,
      date: "2021-04-07T00:00:00.000Z",
    },
    {
      priceUsd: "57201.4014041570965378",
      time: 1617840000000,
      date: "2021-04-08T00:00:00.000Z",
    },
  ]);

  //Formatador de valores
  function currencyFormat(num: string) {
    return parseFloat(num)
      .toFixed(2)
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
  }

  //Verifica se esta em alta ou baixa
  useEffect(() => {
    setAlta(cp24.includes("-"));
  }, [cp24]);

  //Gera o  grafico
  function getGraphData() {
    const data = graphData.map((item) => {
      var n = item.priceUsd.indexOf(".");
      var price = item.priceUsd.substring(
        0,
        n != -1 ? n : item.priceUsd.length
      );
      return parseInt(price);
    });
    return data;
  }

  //Grafico
  function LineChart() {
    return (
      <LineC
        style={{ height: 150 }}
        data={getGraphData()}
        svg={{
          stroke: `${!alta ? "#4BD1A0" : "#F94747"}`,
          strokeWidth: 3,
        }}
        contentInset={{ top: 20, bottom: 20 }}
      />
    );
  }

  return (
    <S.Container>
      <S.Head>
        <S.SupHead>
          <S.SupHeadText>
            {nome}
            <S.SupHeadTextBold> ({symbol})</S.SupHeadTextBold>
          </S.SupHeadText>
          <Feather
            onPress={() => console.log(nome, "X pressed")}
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
        <S.TimeSelect></S.TimeSelect>
      </S.Body>
      <S.Footer>
        <S.FooterLeft>
          <S.FooterText>MÍN</S.FooterText>
          <S.FooterValue>$ {currencyFormat(valor)}</S.FooterValue>
        </S.FooterLeft>
        <S.FooterRight>
          <S.FooterText>MÁX</S.FooterText>
          <S.FooterValue>$ {currencyFormat(valor)}</S.FooterValue>
        </S.FooterRight>
      </S.Footer>
    </S.Container>
  );
}
