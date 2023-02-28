import React from "react";
import messages from "../../../Messages";
import { useIntl } from "react-intl";

// Types
import { CategoryItemType } from "../landing-section";

// Styles
import { CategorySection, Text } from "./categories.styles";
import { Button } from "../../../App.styles";

export type CategoryItemProps = {
  category: CategoryItemType;
};

const CartItem: React.FunctionComponent<CategoryItemProps> = ({ category }) => {
  const intl = useIntl();

  return (
    <CategorySection>
      <Text>
        <h3>{category.name}</h3>
        <div>
          <p>{category.description}</p>
        </div>
      </Text>
      <Button>
        <a href="/adventures">{intl.formatMessage(messages.learnMore)}</a>
      </Button>
    </CategorySection>
  );
};

export default CartItem;
