import React from 'react'
import { AvField, AvForm } from 'availity-reactstrap-validation';
import { useTranslation } from 'react-i18next';
import { Card, CardBody, Col, Label, Row } from 'reactstrap';
import { FormikProvider } from 'formik';

const FulfillmentDetails = ({ formik }) => {
    const { t } = useTranslation('translation');
    const { getFieldProps } = formik;
    
  return (
    <FormikProvider value={formik}>
    <Card>
        <CardBody>
            <AvForm>
            <h4 className="card-title">{t('location.fulfillmentDetailes')}</h4>
                <Row>
                    <Col md="12">
                        <div className="mb-3">
                            <Row>
                            <Col md="4">
                                <div className="mb-3 form-check">
                                    <input type="checkbox" {...getFieldProps('fulfillOnlineOrders')} className="form-check-input" id="fulfillOnlineOrders" />
                                    <Label className="form-check-label" htmlFor="fulfillOnlineOrders">{t('location.fulfillment')}</Label>
                                    <p>{t('location.OnlineAvailability')}</p>
                                </div>
                            </Col>
                        </Row>
                        </div>
                    </Col>
                </Row>
            </AvForm>
        </CardBody>
    </Card>
</FormikProvider>
  )
}

export default FulfillmentDetails