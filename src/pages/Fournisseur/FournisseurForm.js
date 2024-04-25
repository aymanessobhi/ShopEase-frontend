import { AvField, AvForm } from "availity-reactstrap-validation";
import React from "react";
import { useTranslation } from "react-i18next";
import { Button, Card, CardBody, Col, Container, Label, Row } from "reactstrap";
import Breadcrumbs from '../../components/Common/Breadcrumb';

const FournisseurForm = () => {

    const { t } = useTranslation('translation');
    const breadcrumbItems = [
        { title: t('database'), link: "#" },
        { title: t('fournisseurs'), link: "#" },
        { title: t('newfourn'), link: "#" }
    ];
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid={true}>
                    <Breadcrumbs title={t('newfourn')} breadcrumbItems={breadcrumbItems} />
                    <Card>
                        <CardBody>
                            <AvForm className="needs-validation" >
                                <Row>
                                    <Col md="6">
                                        <div className="mb-3">
                                            <Label className="form-label" htmlFor="validationCustom01">Désignation</Label>
                                            <AvField
                                                name="firstname"
                                                placeholder="First name"
                                                type="text"
                                                errorMessage="Enter First Name"
                                                className="form-control"
                                                validate={{ required: { value: true } }}
                                                id="validationCustom01"
                                            />
                                        </div>
                                    </Col>
                                    <Col md="6">
                                        <div className="mb-3">
                                            <Label className="form-label" htmlFor="validationCustom02">SKU</Label>
                                            <AvField
                                                name="lastname"
                                                placeholder="Last name"
                                                type="text"
                                                errorMessage="Enter Last name"
                                                className="form-control"
                                                validate={{ required: { value: true } }}
                                                id="validationCustom02"
                                            />
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md="4">
                                        <div className="mb-3">
                                            <Label className="form-label" htmlFor="validationCustom04">Marque</Label>
                                            <AvField
                                                name="state"
                                                placeholder="State"
                                                type="text"
                                                errorMessage="Please provide a valid state."
                                                className="form-control"
                                                validate={{ required: { value: true } }}
                                                id="validationCustom04"
                                            />
                                        </div>
                                    </Col>
                                    <Col md="4">
                                        <div className="mb-3">
                                            <Label className="form-label" htmlFor="validationCustom03">Prix d'achat HT</Label>
                                            <AvField
                                                name="city"
                                                placeholder="City"
                                                type="text"
                                                errorMessage=" Please provide a valid city."
                                                className="form-control"
                                                validate={{ required: { value: true } }}
                                                id="validationCustom03"
                                            />
                                        </div>
                                    </Col>
                                    <Col md="4">
                                        <div className="mb-3">
                                            <Label className="form-label" htmlFor="validationCustom05">Prix de vente</Label>
                                            <AvField
                                                name="zip"
                                                placeholder="Zip"
                                                type="text"
                                                errorMessage=" Please provide a valid zip."
                                                className="form-control"
                                                validate={{ required: { value: true } }}
                                                id="validationCustom05"
                                            />
                                        </div>
                                    </Col>
                                    <Col md="4">
                                        <div className="mb-3">
                                            <Label className="form-label" htmlFor="validationCustom05">Prix PPH</Label>
                                            <AvField
                                                name="zip"
                                                placeholder="Zip"
                                                type="text"
                                                errorMessage=" Please provide a valid zip."
                                                className="form-control"
                                                validate={{ required: { value: true } }}
                                                id="validationCustom05"
                                            />
                                        </div>
                                    </Col>
                                    <Col md="4">
                                        <div className="mb-3">
                                            <Label className="form-label" htmlFor="validationCustom05">Remise (%)</Label>
                                            <AvField
                                                name="zip"
                                                placeholder="Zip"
                                                type="text"
                                                errorMessage=" Please provide a valid zip."
                                                className="form-control"
                                                validate={{ required: { value: true } }}
                                                id="validationCustom05"
                                            />
                                        </div>
                                    </Col>
                                    <Col md="4">
                                        <div className="mb-3">
                                            <Label className="form-label" htmlFor="validationCustom05">TVA (%)</Label>
                                            <AvField
                                                name="zip"
                                                placeholder="Zip"
                                                type="text"
                                                errorMessage=" Please provide a valid zip."
                                                className="form-control"
                                                validate={{ required: { value: true } }}
                                                id="validationCustom05"
                                            />
                                        </div>
                                    </Col>
                                </Row>
                                
                                <Button color="primary" type="submit">Enregistrer</Button>
                            </AvForm>
                        </CardBody>
                    </Card>
                </Container>
            </div>
        </React.Fragment>
    )
}

export default FournisseurForm;