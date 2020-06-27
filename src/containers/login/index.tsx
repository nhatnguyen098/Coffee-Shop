import React from 'react'
import LoginPage from '../../components/pages/signIn'
import {fetching_user} from '../../redux/actions/users'
import {useDispatch,useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'
interface ILogin {
    match?: any
    history?: any
    state?: any
}
const Index:React.FC<ILogin> = () => {
    const dispatch = useDispatch()
    const {token} = useSelector((state:any) => state.users.data)
    let history = useHistory();
    React.useEffect(() => {
        if(token !== null && token !== undefined) {
            if(history.location.state !== undefined) {
                const {from} : any = history.location.state
                history.push(from.pathname)
            }else {
                history.push('/')
            }
        }
    },[token,history])
    const onSubmitForm = (val:any) => {
        dispatch(fetching_user(val))
    }
    return <LoginPage onSubmitForm = {(val) => onSubmitForm(val)}/>
}

export default Index
