import React from 'react'
import { AvField, AvForm } from 'availity-reactstrap-validation';
import { Button, ButtonGroup, Card, CardBody, Col, Label, Row } from 'reactstrap';
import { useTranslation } from 'react-i18next';
import { FormikProvider } from 'formik';

const Availability = ({ formik }) => {

    const { t } = useTranslation('translation');
    const { getFieldProps } = formik;

    return (
        <FormikProvider value={formik}>
            <Card>
                <CardBody>
                    <AvForm>
                        <span style={{ fontSize: '15px', fontWeight: 'bold', color: '#333' }}>{t('discount.availability')}</span>
                        <Row>
                        <span className="mb-4" style={{ fontSize: '15px', fontWeight: 'normal', color: '#333' }}>{t('discount.avaiDescription')}</span>
                        <Col md="4">
                                <div className="mb-3 form-check">
                                    <input type="checkbox" {...getFieldProps('availability')} className="form-check-input" id="availability" />
                                    <Label className="form-check-label" htmlFor="availability">{t('discount.avaiDescriptionA')}</Label>
                                </div>
                            </Col>
                        </Row>
                    </AvForm>
                </CardBody>
            </Card>
        </FormikProvider>
    )
}

export default Availability