import React, { createContext, ReactNode, useEffect, useState } from "react";
import axios from "axios";
import { IMoedas } from "../interfaces/Moedas";

//interfaces
type props = {
  children: ReactNode;
};

type IMoedasContext = {
  moedas: IMoedas[] | null;
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

  //   useEffect(() => {
  //     axios
  //       .get("https://api.coincap.io/v2/assets")
  //       .then((res) => setMoedas(res.data.data))
  //       .catch((err) => console.log(err));
  //   }, []);

  return (
    <MoedasContext.Provider value={{ moedas }}>
      {children}
    </MoedasContext.Provider>
  );
}

export { MoedasContext };
