import { withModalManagementActions } from "modules/shared/ModalManagement";
import Button from "ui/Button";
import ImageResponsive from "ui/ImageResponsive";
import Text from "ui/Text";
import spacings from "ui/theme/spacings";

import { SuccessContainer } from "../styles";

const Success = ({ closeModal }) => {
  return (
    <SuccessContainer data-testid="success-component">
      <ImageResponsive
        src="/static_assets/images/rebranding/person-inside-phone.svg"
        alt="Pessoa acenando dentro de um celular"
      />
      <Text align="center" mt={spacings.MEGA} variant="bodySmall">
        Vamos te notificar quando seu modelo estiver disponível 😉
      </Text>
      <Button
        mt={spacings.TERA + spacings.KILO}
        fullWidth
        onClick={closeModal}
        variant="secondary"
      >
        Voltar para o início
      </Button>
    </SuccessContainer>
  );
};

export default withModalManagementActions(Success);
