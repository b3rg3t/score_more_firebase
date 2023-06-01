import React from "react";

import Accordion from "../layout/accordion/Accordion";

const Home = () => {
  return (
    <section className="w-100">
      Home
      <Accordion title="Active games">
        <>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
          doloremque, dolores aliquid repellat saepe nesciunt illum tempora
          libero officia qui, aut atque laudantium cupiditate? Voluptatem
          deleniti aut fugiat libero accusantium.
        </>
      </Accordion>
      <Accordion title="Finished games">
        <>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
          doloremque, dolores aliquid repellat saepe nesciunt illum tempora
          libero officia qui, aut atque laudantium cupiditate? Voluptatem
          deleniti aut fugiat libero accusantium.
        </>
      </Accordion>
    </section>
  );
};

export default Home;
