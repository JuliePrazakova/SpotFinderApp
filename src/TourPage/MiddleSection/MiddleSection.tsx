// Types
import ItemTour from './Item/ItemTour'

// Styles
import { Wrapper, Grid } from './MiddleSection.styles'
import * as React from 'react'
import Tours from '../../Data/typesOfTours.json'

const tours = Tours.reindeers


export interface IItemProps {}

const Item: React.FunctionComponent<IItemProps> = (props) => (

    <Wrapper>
        <span>
            {tours?.map(item => (
                <Grid key={item.id} >
                    <ItemTour item={item} />
                </Grid>
            ))}
        </span>
    </Wrapper>

)

export default Item
