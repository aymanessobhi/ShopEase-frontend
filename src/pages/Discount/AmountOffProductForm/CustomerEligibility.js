import React from 'react';
import { AvField, AvForm } from 'availity-reactstrap-validation';
import { Card, CardBody, Col, Row } from 'reactstrap';
import { useTranslation } from 'react-i18next';
import { FormikProvider } from 'formik';

const CustomerEligibility = ({ formik }) => {
    const { t } = useTranslation('translation');
    const { getFieldProps, values } = formik;

    return (
        <FormikProvider value={formik}>
            <Card>
                <CardBody>
                    <AvForm>
                        <span style={{ fontSize: '15px', fontWeight: 'bold', color: '#333' }}>{t('discount.customerEligibility')}</span>
                        <Row>
                            <span className="mb-4" style={{ fontSize: '15px', fontWeight: 'normal', color: '#333' }}>{t('discount.customerEligibilityDescription')}</span>
                            <Col md="12">
                                <div className="mb-3 form-check">
                                    <AvField type="radio" {...getFieldProps('customerEligibility')} value="allCustomers" className="form-check-input" id="allCustomers" />
                                    <label className="form-check-label" htmlFor="allCustomers">{t('discount.allCustomers')}</label>
                                </div>
                                <div className="mb-3 form-check">
                                    <AvField type="radio" {...getFieldProps('customerEligibility')} value="specificSegments" className="form-check-input" id="specificSegments" />
                                    <label className="form-check-label" htmlFor="specificSegments">{t('discount.specificCustomerSegments')}</label>
                                </div>
                                {values.customerEligibility === 'specificSegments' && (
                                    <div className="mb-3">
                                        <AvField
                                            name="specificSegmentsInput"
                                            placeholder={t('discount.specificSegmentsPlaceholder')}
                                            type="text"
                                            errorMessage={t('message.required')}
                                            className="form-control"
                                            validate={{ required: { value: true } }}
                                            id="specificSegmentsInput"
                                        />
                                    </div>
                                )}
                                <div className="mb-3 form-check">
                                    <AvField type="radio" {...getFieldProps('customerEligibility')} value="specificCustomers" className="form-check-input" id="specificCustomers" />
                                    <label className="form-check-label" htmlFor="specificCustomers">{t('discount.specificCustomers')}</label>
                                </div>
                                {values.customerEligibility === 'specificCustomers' && (
                                    <div className="mb-3">
                                        <AvField
                                            name="specificCustomersInput"
                                            placeholder={t('discount.specificCustomersPlaceholder')}
                                            type="text"
                                            errorMessage={t('message.required')}
                                            className="form-control"
                                            validate={{ required: { value: true } }}
                                            id="specificCustomersInput"
                                        />
                                    </div>
                                )}
                            </Col>
                        </Row>
                    </AvForm>
                </CardBody>
            </Card>
        </FormikProvider>
    );
};

export default CustomerEligibility;
