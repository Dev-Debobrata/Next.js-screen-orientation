import React from "react";
import dynamic from "next/dynamic";
const Screen = dynamic(() => import("../component/Screen"),{ssr: false})

export default function Home() {

  return(
    <Screen />
  )
}
