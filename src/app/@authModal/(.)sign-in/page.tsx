import CloseAuthModal from "@/components/CloseAuthModal";
import SignIn from "@/components/SignIn";
import { FC } from "react";

const page: FC = () => {
  return (
    <div>
      <CloseAuthModal>
        <SignIn />
      </CloseAuthModal>
    </div>
  );
};

export default page;
