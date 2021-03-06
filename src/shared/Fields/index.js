import {
    ADDRESS,
    AUDIO_UPLOAD,
    COUNT,
    COUNTRY,
    EMAIL,
    IMAGE_UPLOAD,
    NUMBER,
    PASSWORD,
    REGION,
    RICH_TEXT,
    SELECT,
    TEL,
    TEXT,
    TOGGLE
}                     from 'config'
import React, {memo}  from 'react'
import UploadAudio    from 'shared/Fields/UploadAudio'
import UploadImage    from 'shared/Fields/UploadImage'
import Address        from './Address'
import Count          from './Count'
import Country        from './Country'
import Region         from './Region'
import RichTextEditor from './RichTextEditor'
import Select         from './Select'
import SmartInput     from './SmartInput'
import Toggle         from './Toggle'

const FieldSwitch = memo(({field, formik, options, autoSubmit}) => {
    switch (field.type) {
        case TEXT:
        case PASSWORD:
        case EMAIL:
        case NUMBER:
        case TEL:
            return <SmartInput
                {...formik.getFieldProps(field.name)}
                id={field.name}
                inputLabel={field.inputLabel}
                type={field.type}
                disabled={field.disabled}
                className={formik.touched[field.name] && formik.errors[field.name] ? 'error' : ''}
                errorMessage={formik.touched[field.name] && formik.errors[field.name] ? formik.errors[field.name] : null}
                autoSubmit
                formik={formik}
            />
        case RICH_TEXT:
            return <RichTextEditor
                formik={formik}
                name={field.name}
                label={field.inputLabel}
                className={formik.touched[field.name] && formik.errors[field.name] ? 'error' : ''}
                errorMessage={formik.touched[field.name] && formik.errors[field.name] ? formik.errors[field.name] : null}
            />
        case IMAGE_UPLOAD:
            return <UploadImage
                formik={formik}
                id={field.name}
                file={field.file}
                cropWidth={field.cropWidth}
                cropHeight={field.cropHeight}
                aspect={field.aspect}
                s3Path={field.s3Path}
                inputLabel={field.inputLabel}
                className={formik.touched[field.name] && formik.errors[field.name] ? 'error' : ''}
                errorMessage={formik.touched[field.name] && formik.errors[field.name] ? formik.errors[field.name] : null}
            />
        case AUDIO_UPLOAD:
            return <UploadAudio
                formik={formik}
                id={field.name}
                file={field.file}
                cropWidth={field.cropWidth}
                cropHeight={field.cropHeight}
                s3Path={field.s3Path}
                inputLabel={field.inputLabel}
                className={formik.touched[field.name] && formik.errors[field.name] ? 'error' : ''}
                errorMessage={formik.touched[field.name] && formik.errors[field.name] ? formik.errors[field.name] : null}
            />
        case TOGGLE:
            return <Toggle
                name={field.name}
                formik={formik}
                inputLabel={field.inputLabel}
            />
        case SELECT:
            return <Select
                {...formik.getFieldProps(field.name)}
                field={field}
                options={options}
                className={formik.touched[field.name] && formik.errors[field.name] ? 'error' : ''}
                errorMessage={formik.touched[field.name] && formik.errors[field.name] ? formik.errors[field.name] : null}
            />
        case COUNTRY:
            return <Country
                name={field.name}
                formik={formik}
            />
        case REGION:
            return <Region
                name={field.name}
                formik={formik}
            />
        case ADDRESS:
            return <Address
                name={field.name}
                formik={formik}
            />
        case COUNT:
            return <Count
                name={field.name}
                formik={formik}
            />


        default:
            return null
    }
})

export default FieldSwitch