import React from 'react'
import LoginPage from '../../components/pages/loginPage'
import {fetching_user} from '../../redux/actions/users'
import {useDispatch,useSelector} from 'react-redux'
interface ILogin {
    match?: any
    history?: any
    state?: any
}
const Index:React.FC<ILogin> = ({match,history}) => {
    const dispatch = useDispatch()
    const {token} = useSelector((state:any) => state.users.data)
    React.useEffect(() => {
        if(token !== null) {
            if(history.location.state !== undefined) {
                history.push(history.location.state.from.pathname)
            }else {
                history.push('/')
            }
        }
    },[token,history])
    return <LoginPage onSubmitForm = {(val) => dispatch(fetching_user(val))}/>
}

export default Index
