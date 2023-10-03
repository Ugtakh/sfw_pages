import React, { Component } from "react";
import { FacebookProvider, CustomChat } from "react-facebook";

const FID = process.env.NEXT_PUBLIC_FID;
const PID = process.env.NEXT_PUBLIC_PID;

export default class Example extends Component {
  render() {
    return (
      <FacebookProvider appId={FID!} chatSupport>
        <CustomChat pageId={PID!} minimized={true} />
      </FacebookProvider>
    );
  }
}
