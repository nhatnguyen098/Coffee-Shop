import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {fetching_pro_by_id} from '../../redux/actions/products'
import ProductDetail from '../../components/pages/productDetail'
const Index = ({match}: any) => {
    const dispatch = useDispatch();
    const {productDetail} = useSelector((state:any) => state.products)
    React.useEffect(() => {
        dispatch(fetching_pro_by_id(match.params.id))
    },[dispatch,match])
    return <ProductDetail data = {productDetail}/>
}

export default Index
