// Types
import { TourType } from '../../TourSection';

// Styles
import { Wrapper } from './ItemTour.styles';
import {Link} from "react-router-dom";
import React from "react";

export interface IItemProps {
    item: TourType;
}

const ItemTour: React.FunctionComponent<IItemProps> = ({ item }) => (
  <Wrapper>
      <div className='title'>{item.title}</div>
      <div className='description'>{item.description}</div>
      <div><b>What is included:</b></div>
      <div className='included'>
          <div><i className="check icon"></i>   {item.included1}</div>
          <div><i className="check icon"></i>   {item.included2}</div>
          <div><i className="check icon"></i>   {item.included3}</div>
      </div>

      <div className='tag'>From <b>${item.price}</b> per person</div>
  </Wrapper>
);

export default ItemTour;
