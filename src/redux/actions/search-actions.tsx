import { SET_FILTER } from "../action-types";

const setFilter = (filter: {
  where: string;
  from: string;
  to: string;
  radius: number | undefined;
}) => ({
  type: SET_FILTER,
  payload: {
    where: filter.where,
    from: filter.from,
    to: filter.to,
    radius: filter.radius,
  },
});

export { setFilter };
