import {DISPLAY_MODAL} from '../../constants/actionTypes/navBarType'

export const display_modal = (show:any) => {
    return {
        type: DISPLAY_MODAL,
        show
    }
}
