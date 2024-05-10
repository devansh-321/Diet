import { deleteRequest, getRequest, postRequest, putRequest } from './../../axios';

/**
 * Api call
 */
class authService {

    getLogin = async (urlParam = {}) => {
        return await postRequest('user/auth/login', urlParam);
    }

    getLogout = async (urlParam = {}) => {
        return await postRequest('user/auth/logout', urlParam);
    }

    getSignup = async (urlParam = {}) => {
        return await postRequest('user/auth/sign-up', urlParam);
    }

    updatePassword = async (urlParam = {}) => {
        return await putRequest('user/auth/update-password', urlParam);
    }

    // forgotPassword = async (urlParam = {}) => {
    //     return await postRequest('customer/auth/forgot-password', urlParam);
    // }

    dietPlanCalculating = async (payload = {}) => {
        return await postRequest('diet/plan', payload);
    }
}

const instance = new authService();

export default instance;