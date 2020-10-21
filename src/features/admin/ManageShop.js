import React, {useEffect}             from 'react'
import {
    useDispatch,
    useSelector
}                                     from 'react-redux'
import Div                            from '../../shared/Basic/Div'
import {adminMarketplaceWrapperStyle} from '../../themes/admin'
import {postContentStyle}             from '../../themes/layout'
import AdminControls                  from './AdminControls'
import AdminShop                      from './AdminShop'
import DeletePrompt                   from './DeletePrompt'

const ManageShop = () => {
    const {slug} = useSelector(state => state.site)
    const {shop} = useSelector(state => state.shop)
    const {confirmDelete} = useSelector(state => state.admin)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({type: 'shop/getShop'})

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [confirmDelete])


    return (
        <Div theme={postContentStyle(slug)}>
            <Div theme={adminMarketplaceWrapperStyle}>
                <AdminControls
                    data={shop}
                    title={'Shop'}
                    create={'/create/product'}
                />
                <AdminShop shop={shop}/>
                <DeletePrompt destroyAction={'admin/destroyProduct'}/>
            </Div>
        </Div>
    )
}

export default ManageShop
