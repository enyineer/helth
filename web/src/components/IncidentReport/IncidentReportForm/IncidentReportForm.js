import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  CheckboxField,
  DatetimeLocalField,
  Submit,
} from '@redwoodjs/forms'

const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '')
  }
}

const IncidentReportForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.incidentReport?.id)
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
          defaultValue={props.incidentReport?.serviceId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="serviceId" className="rw-field-error" />

        <Label
          name="message"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Message
        </Label>
        <TextField
          name="message"
          defaultValue={props.incidentReport?.message}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="message" className="rw-field-error" />

        <Label
          name="closed"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Closed
        </Label>
        <CheckboxField
          name="closed"
          defaultChecked={props.incidentReport?.closed}
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
          defaultValue={formatDatetime(props.incidentReport?.closedAt)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="closedAt" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default IncidentReportForm
