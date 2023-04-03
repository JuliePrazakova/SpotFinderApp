// Tour types
export type TourItem = {
  _id: string;
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

export type TourType = {
  tour?: TourItem;
};

export type TourProps = {
  tour: TourItem;
  btn: boolean;
  onData?: (data: { tour: TourItem }) => void;
};

export type SmallTourProps = {
  tour: TourItem;
};

export type TourListProps = {
  tour?: TourItem;
  onTourClick: (tour: TourItem) => void;
};

export type CompanyListProps = {
  company?: CompanyType;
  onCompanyClick: (company: CompanyType) => void;
};

// Company types
export type CompanyType = {
  _id: string;
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
  email: string;
  phone: string;
};

// Company types
export type CompanyTypeWithLoc = {
  _id: string;
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
  location: {
    type: string;
    coordinates: number[];
  };
  email: string;
  phone: string;
};

// Route parameters types
export type RouteParams = {
  companyId: string;
};

// Adventure page types
export type AdventurePageType = {
  company: CompanyType;
  tours: Array<TourItem>;
};

// Search types
export type SearchData = {
  companies: CompanyType[] | undefined;
  tours: TourItem[] | undefined;
};

export type GetDataFromDB = {
  companies: CompanyTypeWithLoc[] | undefined;
  tours: TourItem[] | undefined;
};

export type SearchItemType = {
  where: string;
  from: string;
  to: string;
  radius?: number;
};

export type MapSearchType = {
  _id: string;
};

export type MapProps = {
  cityCoordinates: [number, number] | undefined;
  cityA: [number, number] | undefined;
  cityB: [number, number] | undefined;
  radius: number;
  companies: CompanyType[] | undefined;
};

// Category types
export type CategoryItemType = {
  _id: string;
  name: string;
  description: string;
};

export type CategoryItemProps = {
  category: CategoryItemType;
};

// Header types
export type HeaderType = {
  visible: boolean;
};

// Order types
export type CartPacked = {
  cart: CartState;
};

export type OrderProps = {
  order?: OrderItemWithId;
};

export type OrdersListProps = {
  order?: OrderItemWithId;
  onOrderClick: (order: OrderItemWithId) => void;
};

export type ItemProps = {
  item: OrderItem;
};

export type OrderItemWithId = {
  _id: string;
  cart: CartState;
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
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

export type SendDataToParent = {
  activeItem: string;
  onData?: (data: { activeItem: string }) => void;
};
