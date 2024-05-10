import React from 'react'
import { AvField, AvForm } from 'availity-reactstrap-validation';
import { useTranslation } from 'react-i18next';
import { Card, CardBody, Col, Label, Row } from 'reactstrap';
import { FormikProvider } from 'formik';

const ContactInformaton = ({ formik }) => {

    const { t } = useTranslation('translation');
    const { getFieldProps } = formik;

    return (
        <FormikProvider value={formik}>
            <Card>
                <CardBody>
                    <AvForm>
                        <h4 className="card-title">{t('staff.contact')}</h4>
                        <Row>
                            <Col md="6">
                                <div className="mb-3">
                                    <Label className="form-label" htmlFor="firstname">{t('staff.firstname')}</Label>
                                    <AvField
                                        {...getFieldProps('firstName')}
                                        placeholder={t('staff.firstname')}
                                        type="text"
                                        errorMessage={t('message.required')}
                                        className="form-control"
                                        validate={{ required: { value: true } }}
                                        id="name"
                                    />
                                </div>
                            </Col>
                            <Col md="6">
                                <div className="mb-3">
                                    <Label className="form-label" htmlFor="lastname">{t('staff.lastname')}</Label>
                                    <AvField
                                        {...getFieldProps('lastName')}
                                        placeholder={t('staff.lastname')}
                                        type="text"
                                        errorMessage={t('message.required')}
                                        className="form-control"
                                        validate={{ required: { value: true } }}
                                        id="name"
                                    />
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="6">
                                <div className="mb-3">
                                    <Label className="form-label" htmlFor="email">{t('staff.email')}</Label>
                                    <AvField
                                        {...getFieldProps('email')}
                                        placeholder={t('staff.email')}
                                        type="text"
                                        errorMessage={t('message.required')}
                                        className="form-control"
                                        validate={{ required: { value: true } }}
                                        id="name"
                                    />
                                </div>
                            </Col>
                            <Col md="6">
                                <div className="mb-3">
                                    <Label className="form-label" htmlFor="phone">{t('staff.phone')}</Label>
                                    <AvField
                                        {...getFieldProps('phone')}
                                        placeholder={t('staff.phone')}
                                        type="text"
                                        errorMessage={t('message.required')}
                                        className="form-control"
                                        validate={{ required: { value: true } }}
                                        id="name"
                                    />
                                </div>
                            </Col>
                        </Row>
                    </AvForm>
                </CardBody>
            </Card>
        </FormikProvider>
    )
}

export default ContactInformaton