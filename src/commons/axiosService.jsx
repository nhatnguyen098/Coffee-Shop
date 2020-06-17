import axios from 'axios'
class AxiosService{
    constructor(){
        // request token to access
        // const instance = axios.create({
        //     headers: {csrf: 'token'}
        //   });
        const instance = axios.create();
        instance.interceptors.response.use(this.handleSuccess,this.handleError)
        this.instance = instance;
 
    }
    handleSuccess(res) {
        return res
    }
    handleError(error){
        return Promise.reject(error)
    }
    get(url) {
        return this.instance.get(url)
    }
    post(url){
        return this.instance.post(url)
    }
}
export default new AxiosService()