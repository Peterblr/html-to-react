import './scss/App.scss';
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";

function App() {
  return (
      <body className="u-body u-overlap u-overlap-contrast">
      <Section1/>
      <Section2/>
      {/*<style className="u-overlap-style">*/}
      {/*    .u-overlap: not(.u-sticky-scroll)*/}
      {/*    .u-header {*/}
      {/*      background-color: #f15048 !important*/}
      {/*       }*/}
      {/*</style>*/}


      </body>
  );
}

export default App;
