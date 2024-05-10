import React, { useState } from 'react'
import { AvField, AvForm } from 'availity-reactstrap-validation';
import { useTranslation } from 'react-i18next';
import { Button, Card, CardBody, Col, Label, Row , Input, Table } from 'reactstrap';
import { FormikProvider } from 'formik';
import { Link } from 'react-router-dom';

const PointOfSaleAccess = ({ formik ,locations}) => {

    const { t } = useTranslation('translation');
    const { getFieldProps } = formik;
    const [pin, setPin] = useState('');

    const handleLocation = (checked, equip) => {
        if(checked){
            console.log('checked',[equip]);
            formik.setFieldValue('locations', [...formik.values.locations,equip]);
        }else{
            let filtred = formik.values.locations.filter(e => e.code !== equip.code);
            formik.setFieldValue('locations', [...filtred]);
        }
    }
    const generateRandomPin = () => {
        const randomPin = Math.floor(1000 + Math.random() * 900000);
        formik.setFieldValue('pin',randomPin)
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
            <Card>
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
                                        type="number"
                                        placeholder={t('staff.pin')}
                                        className="form-control"
                                        validate={{ required: { value: true } }}
                                        id="pin"
                                        value={pin}
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
            </Card>
            <Card>
                <CardBody>
                    <AvForm>
                    <Row>
                         <Col xs={12}>
                            <Card>
                                <CardBody>
                                    <h4 className="card-title">List des Emplacements</h4>
                                    <div className="table-responsive">
                                        <Table striped className=" mb-0">

                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>{t('location.city')}</th>
                                        <th>{t('location.address')}</th>
                                        <th>{t('location.name')}</th>
                                    </tr>
                                </thead>
                            <tbody>
                                {
                                    locations.map(e => {
                                        return (
                                            <tr>
                                                <td>
                    <React.Fragment>
                    <div className="form-check mb-3">
                    <Input className="form-check-input" type="checkbox" onChange={(event) => handleLocation(event.target.checked, e)} />
                    </div>
                    </React.Fragment>
                                                </td>
                                                <td>{e.city}</td>
                                                <td>{e.address}</td>
                                                <td>{e.name}</td>
                                            </tr>
                                        )
                                    })
                                }

                                    
                                            </tbody>
                                        </Table>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                    </AvForm>
                </CardBody>
            </Card>
        </FormikProvider>
    )
}

export default PointOfSaleAccess