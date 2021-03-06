import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  CheckboxField,
  DatetimeLocalField,
  Submit,
  SelectField,
} from '@redwoodjs/forms'

const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '')
  }
}

const IncidentForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.incident?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />
        <Label
          name="serviceId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Service id
        </Label>
        <TextField
          name="serviceId"
          defaultValue={props.incident?.serviceId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="serviceId" className="rw-field-error" />
        <Label
          name="closed"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Closed
        </Label>
        <CheckboxField
          name="closed"
          defaultChecked={props.incident?.closed}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />
        <FieldError name="closed" className="rw-field-error" />
        <Label
          name="closedAt"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Closed at
        </Label>
        <DatetimeLocalField
          name="closedAt"
          defaultValue={formatDatetime(props.incident?.closedAt)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />
        <FieldError name="closedAt" className="rw-field-error" />
        <Label
          name="message"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Message
        </Label>
        <TextField
          name="message"
          defaultValue={props.incident?.message}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="message" className="rw-field-error" />

        <Label
          name="type"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Type
        </Label>

        <SelectField
          name="type"
          multiple={false}
          validation={{ required: true }}
        >
          <option selected={props.incident?.type === 'DOWN'} value="DOWN">
            Down
          </option>
          <option selected={props.incident?.type === 'WARN'} value="WARN">
            Warn
          </option>
          <option selected={props.incident?.type === 'INFO'} value="INFO">
            Info
          </option>
        </SelectField>

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default IncidentForm
