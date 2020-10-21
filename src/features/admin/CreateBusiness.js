import {Formik}              from 'formik'
import React                 from 'react'
import 'react-image-crop/dist/ReactCrop.css'
import {
    useDispatch,
    useSelector
}                            from 'react-redux'
import FieldSwitch           from '../../Forms/FieldSwitch'
import Button                from '../../shared/Basic/Button'
import Div                   from '../../shared/Basic/Div'
import Form                  from '../../shared/Basic/Form'
import H2                    from '../../shared/Basic/H2'
import {defaultNewFormStyle} from '../../themes/forms'
import {postContentStyle}    from '../../themes/layout'
import {businessFieldTypes}  from '../../variables/fieldTypes'

const CreateBusiness = () => {
    const dispatch = useDispatch()
    const {_id, token} = useSelector(state => state.user)

    return (
        <Div theme={postContentStyle()}>
            <Formik
                initialValues={{name: '', description: '', photo: '', image: ''}}
                onSubmit={values => dispatch({
                    type: 'admin/createBusiness',
                    payload: {_id: _id, token: token, values: values}
                })}
            >
                {formik => (
                    <Form onSubmit={formik.handleSubmit}>
                        <H2 theme={defaultNewFormStyle.heading}>Create Business</H2>
                        <Div theme={defaultNewFormStyle.inner}>
                            {businessFieldTypes.map((f, i) =>
                                <FieldSwitch
                                    key={i}
                                    formik={formik}
                                    field={f}
                                />
                            )}
                            <Button>
                                Create Business
                            </Button>
                        </Div>
                    </Form>
                )}
            </Formik>
        </Div>
    )
}

export default CreateBusiness