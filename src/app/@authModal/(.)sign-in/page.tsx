import CloseAuthModal from "@/components/CloseAuthModal/CloseAuthModal";
import SignIn from "@/components/SignIn/SignIn";
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
