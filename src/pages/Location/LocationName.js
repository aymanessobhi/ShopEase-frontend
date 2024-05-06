import React from 'react'
import { AvField, AvForm } from 'availity-reactstrap-validation';
import { useTranslation } from 'react-i18next';
import { Card, CardBody, Col, Label, Row } from 'reactstrap';
import { FormikProvider } from 'formik';

const LocationName = ({ formik }) => {
    const { t } = useTranslation('translation');
    const { getFieldProps } = formik;
    return (
        <FormikProvider value={formik}>
            <Card>
                <CardBody>
                    <AvForm>
                    <h4 className="card-title">{t('location.name')}</h4>
                        <Row>
                            <Col md="12">
                                <div className="mb-3">
                                    <p>
                                    {t('location.identification')}
                                    </p>
                                    <AvField
                                        {...getFieldProps('dto.name')}
                                        placeholder={t('location.name')}
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

export default LocationName