import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import api from "../services/api";
import AsyncStorage from '@react-native-async-storage/async-storage';

//interfaces
type props = {
  children: ReactNode;
};

import { IMoedas } from "../interfaces/Moedas.interface";

type IMoedasContext = {
  moedas: IMoedas[] | null;
  renderList: IMoedas[] | null;
  setRenderList: Dispatch<SetStateAction<IMoedas[] | null>>;
};

const MoedasContext = createContext({} as IMoedasContext);

export default function MoedasProvider({ children }: props) {
  const [moedas, setMoedas] = useState<IMoedas[] | null>([
    {
      id: "bitcoin",
      rank: "1",
      symbol: "BTC",
      name: "Bitcoin",
      supply: "18945368.0000000000000000",
      maxSupply: "21000000.0000000000000000",
      marketCapUsd: "727254805011.0540651300682056",
      volumeUsd24Hr: "11419573833.7008787862476746",
      priceUsd: "38386.9452950744511867",
      changePercent24Hr: "2.7087711314725875",
      vwap24Hr: "37768.2900056632522782",
    },
    {
      id: "ethereum",
      rank: "2",
      symbol: "ETH",
      name: "Ethereum",
      supply: "101160540.0000000000000000",
      maxSupply: null,
      marketCapUsd: "40967739219.6612727047843840",
      volumeUsd24Hr: "1026669440.6451482672850841",
      priceUsd: "404.9774667045200896",
      changePercent24Hr: "-0.0999626159535347",
      vwap24Hr: "415.3288028454417241",
    },
  ]);
  const [renderList, setRenderList] = useState<IMoedas[] | null>(null);

  //Busca as moedas na API
  useEffect(() => {
    api
      .get("/assets")
      .then((res) => {
        const shortItems = res.data.data.sort((a: any, b: any) =>
          a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
        );
        setMoedas(shortItems);
      })
      .catch((err) => console.log(err));
  }, []);

  //Salva a lista de favoritos no async storage
  useEffect(() => {
    !!renderList &&
      (async () => {
        const jsonValue = JSON.stringify(renderList);
        await AsyncStorage.setItem("@CowalaFinance_RenderList", jsonValue);
      })();
  }, [renderList]);

  //Retorna a lista salva em memoria
  useEffect(() => {
    (async () => {
      const jsonValue = await AsyncStorage.getItem("@CowalaFinance_RenderList");

      if (!!jsonValue) {
        setRenderList(JSON.parse(jsonValue));
      }
    })();
  }, []);

  return (
    <MoedasContext.Provider
      value={{
        moedas,
        renderList,
        setRenderList,
      }}
    >
      {children}
    </MoedasContext.Provider>
  );
}

export { MoedasContext };
