"use client";

import Colourchanger from "../components/colourchanger";
import Counter from "../components/counter";
import UiBanner from "../components/uibanner";

export default function CounterApp() {
  return (
    <>
      <UiBanner text="this is me" />
      <Counter />
      <Colourchanger />
    </>
  );
}
