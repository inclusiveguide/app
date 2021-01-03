import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import CKEditor      from '@ckeditor/ckeditor5-react'
import React from 'react'
import Div   from 'shared/Basic/Div'
import H3 from 'shared/Basic/H3'
import {
    RichTextStyle,
    defaultFieldHeadingStyle
}                    from './styles'

const RichTextEditor = ({name, formik, label}) => {
    return (
        <Div theme={RichTextStyle}>
            <H3 theme={defaultFieldHeadingStyle}>{label}</H3>
            <CKEditor
                id={name}
                editor={ClassicEditor}
                data={formik.values[name]}
                onChange={(event, editor) => {
                    formik.setFieldValue(name, editor.getData())
                }}
            />
        </Div>
    )
}

export default RichTextEditor
