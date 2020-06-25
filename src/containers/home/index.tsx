import React from 'react'
import HomePage from '../../components/pages/homePage/homePage'
import {useDispatch,useSelector} from 'react-redux';
import {fetching_product} from '../../redux/actions/products'
const Index = () => {
    // console.log(match)
    const dispatch = useDispatch();
    const {data,loading} = useSelector((state:any) => state.products)
    React.useEffect(() => {
        dispatch(fetching_product())
    },[dispatch])
    React.useEffect(() => {
        console.log(data)
    },[data])
    return <HomePage data = {data} loading = {loading}/>
}

export default Index
