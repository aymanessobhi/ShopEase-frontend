import React, { useState } from 'react';
import { AvField, AvForm } from 'availity-reactstrap-validation';
import { Card, CardBody, Col, Row } from 'reactstrap';
import { useTranslation } from 'react-i18next';
import { FormikProvider } from 'formik';

const ActiveDates = ({ formik }) => {
    const { t } = useTranslation('translation');
    const { getFieldProps, values } = formik;
    const [setEndDate, setSetEndDate] = useState(false);

    const handleSetEndDateChange = () => {
        setSetEndDate(!setEndDate);
    };

    const validateEndDate = (value, cb) => {
        if (setEndDate) {
            const startDate = new Date(values.startDate);
            const endDate = new Date(value);
            if (endDate < startDate) {
                cb(false);
            } else {
                cb(true);
            }
        } else {
            cb(true);
        }
    };

    return (
        <FormikProvider value={formik}>
            <Card>
                <CardBody>
                        <span style={{ fontSize: '15px', fontWeight: 'bold', color: '#333' }}>{t('discount.activeDates')}</span>
                        <Row>
                            <Col md="6">
                                <div className="mb-3">
                                    <AvField
                                        name="startDate"
                                        type="date"
                                        className="form-control"
                                        {...getFieldProps('startDate')}
                                        id="startDate"
                                        label={t('discount.startDate')}
                                    />
                                </div>
                                <Row>
                                    <Col md="6">
                                        <div className="mb-3">
                                            <AvField
                                                name="startTime"
                                                type="time"
                                                className="form-control"
                                                {...getFieldProps('startTime')}
                                                id="startTime"
                                                label={t('discount.startTime')}
                                            />
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md="6">
                                        <div className="mb-3 form-check">
                                            <AvField
                                                type="checkbox"
                                                {...getFieldProps('setEndDate')}
                                                className="form-check-input"
                                                id="setEndDate"
                                                onChange={handleSetEndDateChange}
                                            />
                                            <label className="form-check-label" htmlFor="setEndDate">{t('discount.setEndDate')}</label>
                                        </div>
                                    </Col>
                                </Row>
                                {setEndDate && (
                                    <>
                                        <div className="mb-3">
                                            <AvField
                                                name="endDate"
                                                type="date"
                                                className="form-control"
                                                {...getFieldProps('endDate')}
                                                id="endDate"
                                                label={t('discount.endDate')}
                                                validate={{ custom: validateEndDate }}
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <AvField
                                                name="endTime"
                                                type="time"
                                                className="form-control"
                                                {...getFieldProps('endTime')}
                                                id="endTime"
                                                label={t('discount.endTime')}
                                            />
                                        </div>
                                    </>
                                )}
                            </Col>
                        </Row>
                </CardBody>
            </Card>
        </FormikProvider>
    );
};

export default ActiveDates;
