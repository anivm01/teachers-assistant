import Button from "@/components/Button/Button";
import React from "react";

const Home: React.FC = () => {
  return (
    <main>
      <Button variant="outlined" type="submit">
        Button
      </Button>
      <Button variant="filled" type="submit">
        Button
      </Button>
      <Button component="a" href="/sign-in">
        Link
      </Button>
    </main>
  );
};

export default Home;
