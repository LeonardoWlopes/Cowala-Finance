import React, { ReactNode } from "react";

import * as S from "./styles";

type props = {
  children: ReactNode;
};

export default function Layout({ children }: props) {
  return (
    <S.Container>
      <S.Header>
        <S.Logo source={require("../../assets/Logo.png")} />
      </S.Header>
      {children}
    </S.Container>
  );
}
