import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {fetching_pro_by_id} from '../../redux/actions/products'
const Index = ({match}: any) => {
    const dispatch = useDispatch();
    const {productDetail} = useSelector((state:any) => state.products)
    React.useEffect(() => {
        dispatch(fetching_pro_by_id(match.params.id))
    },[dispatch,match])
    console.log(productDetail)
    return (
        <div>
            {productDetail && productDetail.name}
            {/* {productDetail.description}
            {productDetail.price} */}
        </div>
    )
}

export default Index
