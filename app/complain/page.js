"use client";

import Layout from "@/components/layout/Layout";
import ComplainTop from "./ComplainTop";

export default function Page() {
  return (
    <Layout headerStyle={1} footerStyle={1}>
      <div style={{ marginTop: 30 }}>
        <ComplainTop />
      </div>
    </Layout>
  );
}
