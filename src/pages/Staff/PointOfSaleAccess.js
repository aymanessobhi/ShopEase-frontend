import React, { useState } from 'react'
import { AvField, AvForm } from 'availity-reactstrap-validation';
import { useTranslation } from 'react-i18next';
import { Button, Card, CardBody, Col, Label, Row } from 'reactstrap';
import { FormikProvider } from 'formik';
import { Link } from 'react-router-dom';

const PointOfSaleAccess = ({ formik }) => {

    const { t } = useTranslation('translation');
    const { getFieldProps } = formik;
    const [pin, setPin] = useState('');

    const generateRandomPin = () => {
        const randomPin = Math.floor(1000 + Math.random() * 900000);
        setPin(randomPin);
    };

    return (
        <FormikProvider value={formik}>
            <Card>
                <CardBody>
                    <AvForm>
                        <h4 className="card-title">{t('staff.permisson')}</h4>
                        <Row>
                            <Col md="12">
                                <div className="mt-3">
                                    <p>{t('staff.permissionDescription')}</p>
                                    <p>{t('staff.permissionDescriptionA')}</p>
                                </div>
                            </Col>
                        </Row>
                        <hr></hr>
                        <Row>
                            <Col md="8">
                                <div className="mb-3">
                                    <h4 className="card-title">{t('staff.posrole')}</h4>
                                </div>
                            </Col>
                            <Col md="4">
                                <Link to="#" className="card-link">
                                    <h4 className="card-title">{t('staff.managePosRoles')}</h4>
                                </Link>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="12">
                                <div className="mb-3">
                                    <AvField
                                        {...getFieldProps('posRole')}
                                        placeholder={t('staff.role')}
                                        type="select"
                                        errorMessage={t('message.required')}
                                        className="form-control"
                                        validate={{ required: { value: true } }}
                                        id="name"
                                    >
                                        <option>
                                            {t('staff.selectRole')}
                                        </option>
                                        <option>
                                            role A
                                        </option>
                                        <option>
                                            role B
                                        </option>
                                    </AvField>
                                </div>
                            </Col>
                        </Row>
                    </AvForm>
                </CardBody>
            </Card>
            {/* <Card>
                <CardBody>
                    <AvForm>
                        <h4 className="card-title">{t('staff.pin')}</h4>
                        <Row>
                            <Col md="12">
                                <div className="mt-3">
                                    <p>{t('staff.pinDescription')}</p>
                                </div>
                            </Col>
                            <Col md="4">
                                <div className="mt-3">
                                    <AvField
                                        {...getFieldProps('pin')}
                                        type="text"
                                        placeholder={t('staff.pin')}
                                        className="form-control"
                                        validate={{ required: { value: true } }}
                                        id="pin"
                                        value={pin}
                                        onChange={() => { }}
                                    />
                                </div>
                            </Col>
                            <Col md="8">
                                <div className="mt-3">
                                    <Button onClick={generateRandomPin}>{t('staff.generatePin')}</Button>
                                </div>
                            </Col>
                        </Row>
                    </AvForm>
                </CardBody>
            </Card> */}
            <Card>
                <CardBody>
                    <AvForm>
                        <Row>
                            {/* <Col md="10">
                                <div className="mb-3">
                                    <h4 className="card-title">{t('staff.location')}</h4>
                                </div>
                            </Col> */}
                                 <Col md="6">
                                <div className="mb-3">
                                    <Label className="form-label" htmlFor="firstname">{t('Location')}</Label>
                                    <AvField
                                        {...getFieldProps('location')}
                                        placeholder={t('Location')}
                                        type="text"
                                        errorMessage={t('message.required')}
                                        className="form-control"
                                        validate={{ required: { value: true } }}
                                        id="location"
                                    />
                                </div>
                            </Col>
                            {/* <Col md="2">
                                <div className="mb-2">
                                    <Button>{t('staff.restrictAccess')}</Button>
                                </div>
                            </Col> */}
                        </Row>
                    </AvForm>
                </CardBody>
            </Card>
        </FormikProvider>
    )
}

export default PointOfSaleAccess