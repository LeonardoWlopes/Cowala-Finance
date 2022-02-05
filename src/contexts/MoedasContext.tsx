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
  const [moedas, setMoedas] = useState<IMoedas[] | null>(null);
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
