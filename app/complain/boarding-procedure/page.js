"use client";

import Layout from "@/components/layout/Layout";
import BoardingTop from "./BoardingTop";

export default function Page() {
  return (
    <Layout headerStyle={1} footerStyle={1}>
      <div style={{ marginTop: 30 }}>
        <BoardingTop />
      </div>
    </Layout>
  );
}
