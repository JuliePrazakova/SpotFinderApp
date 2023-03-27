import React from "react";
import messages from "../../../Messages";
import { useIntl } from "react-intl";
import { Link } from "react-router-dom";
import paths from "../../../utilities/pathnames";

// Styles
import { Button } from "../../../App.styles";

// Types
import { CategoryItemProps } from "../../../utilities/types";
import {
  CategorySection,
  Text,
} from "../../landing-page/categories/categories.styles";

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
        <Link to={paths.adventures.path}>
          {intl.formatMessage(messages.learnMore)}
        </Link>
      </Button>
    </CategorySection>
  );
};

export default CartItem;
