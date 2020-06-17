import React from 'react'
import HomePage from '../../components/pages/homePage'
import {useDispatch,useSelector} from 'react-redux';
import {fetching_product} from '../../redux/actions/products'
const Index = () => {
    const dispatch = useDispatch();
    const {data} = useSelector((state:any) => state.products)
    React.useEffect(() => {
        dispatch(fetching_product())
    },[dispatch])
    React.useEffect(() => {
        console.log(data)
    },[data])
    return <HomePage/>
}

export default Index
