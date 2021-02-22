import Divider from "ui/Divider";
import SignupForm from "../components/SignupForm";
import RemainingSteps from "../components/RemainingSteps";
import { SignupFormValues } from "../utils/types";

interface Props {
  onSubmit: (values: SignupFormValues) => void;
  isLoading: boolean;
}

function SignupWithEmail({ onSubmit, isLoading }: Props) {
  return (
    <>
      <SignupForm handleSubmitForm={onSubmit} isLoading={isLoading} />
      <Divider my={48} large />
      <RemainingSteps numberOfStepsLeft={4} />
    </>
  );
}

export default SignupWithEmail;
