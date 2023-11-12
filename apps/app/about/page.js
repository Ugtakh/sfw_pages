import Layout from "@/components/layout/Layout";

import Top from "./Top";
import Middle from "./Middle";
import Counter from "./Counter";
import Services from "./Services";

import CultureMain from "./CultureMain";

export default function Page() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Манай хамт олон">
        <div>
          <Top />
          <Middle />
          <Counter />
          <Services />
          <CultureMain />
        </div>
      </Layout>
    </>
  );
}
