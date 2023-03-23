export type OrderItemWithId = {
  id: number;
  cart: CartPacked;
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
};

export type TourItem = {
  id: string;
  company: string;
  companyId: string;
  name: string;
  country: string;
  city: string;
  street: string;
  zip: string;
  descShort: string;
  descLong: string;
  ticketPrice: number;
  image: string;
  duration: string;
};

export type CompanyType = {
  id: string;
  name: string;
  country: string;
  city: string;
  street: string;
  zip: string;
  descShort: string;
  descLong: string;
  image1: string;
  image2: string;
  image3: string;
};

export type RouteParams = {
  companyId: string;
};

export type AdventurePageType = {
  company: CompanyType;
  tours: Array<TourItem>;
};
export type TourType = {
  tour?: TourItem;
};

export type OrderItem = {
  tour: TourItem;
  quantity: number;
  time: number;
  date: number;
};

export type CartState = {
  itemsList: Array<OrderItem>;
  totalQuantity: number;
  totalPrice: number;
  showCart: boolean;
};

export type MapProps = {
  cityCoordinates: [number, number] | undefined;
  cityA: [number, number] | undefined;
  cityB: [number, number] | undefined;
  radius: number;
  companies: CompanyType[] | undefined;
};

export type MapSearchType = {
  id: string;
};

export type SearchData = {
  companies: CompanyType[] | undefined;
  tours: TourItem[] | undefined;
};

export type SearchItemType = {
  where: string;
  from: string;
  to: string;
  radius: number;
};

export type CategoryItemType = {
  id: number;
  name: string;
  description: string;
};

export type HeaderType = {
  visible: boolean;
};
export type CategoryItemProps = {
  category: CategoryItemType;
};

export type TourProps = {
  tour: TourItem;
  btn: boolean;
  onData?: (data: { tour: TourItem }) => void;
};
export type ItemProps = {
  item: OrderItem;
};
export type CartPacked = {
  cart: CartState;
};

export type OrderProps = {
  order: OrderItemWithId;
};
export type SmallTourProps = {
  tour: TourItem;
};
