import React from 'react';
import { AvField, AvForm } from 'availity-reactstrap-validation';
import { Card, CardBody, Col, Row } from 'reactstrap';
import { useTranslation } from 'react-i18next';
import { FormikProvider } from 'formik';
import { useSelector } from 'react-redux';

const CustomerEligibility = ({ formik }) => {
    const { t } = useTranslation('translation');
    const { getFieldProps, values } = formik;

    // Accessing data from Redux state
    const customerEligib = useSelector(state => state.data.customerEligib);

    return (
        <FormikProvider value={formik}>
            <Card>
                <CardBody>
                        <span style={{ fontSize: '15px', fontWeight: 'bold', color: '#333' }}>{t('discount.customerEligibility')}</span>
                        <Row>
                            <span className="mb-4" style={{ fontSize: '15px', fontWeight: 'normal', color: '#333' }}>{t('discount.customerEligibilityDescription')}</span>
                            <Col md="12">
                                {customerEligib.map((eligibility, index) => (
                                    <div key={index} className="mb-3 form-check">
                                        <AvField
                                            type="radio"
                                            {...getFieldProps('customerEligibility')}
                                            value={eligibility.code}
                                            className="form-check-input"
                                            id={`customerEligibility_${index}`}
                                            checked={values.customerEligibility === eligibility.code} 
                                        />
                                        <label className="form-check-label" htmlFor={`customerEligibility_${index}`}>{t(eligibility.description)}</label>
                                        {values.customerEligibility === eligibility.code && eligibility.code === 'SPECIFIC_SEGMENTS' && (
                                            <div className="mb-3">
                                                <AvField
                                                    {...getFieldProps('specificSegmentsInput')} 
                                                    name="specificSegmentsInput"
                                                    placeholder={t('discount.specificSegmentsPlaceholder')}
                                                    type="text"
                                                    errorMessage={t('message.required')}
                                                    className="form-control"
                                                    validate={{ required: { value: true } }}
                                                    id={`specificSegmentsInput_${index}`}
                                                />
                                            </div>
                                        )}
                                        {values.customerEligibility === eligibility.code && eligibility.code === 'SPECIFIC_CUSTOMERS' && (
                                            <div className="mb-3">
                                                <AvField
                                                    {...getFieldProps('specificCustomersInput')} 
                                                    name="specificCustomersInput"
                                                    placeholder={t('discount.specificCustomersPlaceholder')}
                                                    type="text"
                                                    errorMessage={t('message.required')}
                                                    className="form-control"
                                                    validate={{ required: { value: true } }}
                                                    id={`specificCustomersInput_${index}`}
                                                />
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </Col>
                        </Row>
                </CardBody>
            </Card>
        </FormikProvider>
    );
};

export default CustomerEligibility;
