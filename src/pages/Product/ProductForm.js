import { AvField, AvForm } from "availity-reactstrap-validation";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Button, Card, CardBody, Col, Container, Label, Row } from "reactstrap";
import Breadcrumbs from '../../components/Common/Breadcrumb';
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";

const initForm = {
    code: '',
    nom: '',
    matricule: '',
    dateEntree: '',
    numeroCompteTiers: '',
    dateNaissance: '',
    lieunaiss: '',
    nationalite: null,
    adresse: '',
    tel: '',
    email: '',
    departement: null,
    fonction: '',
    equipe: null,
    banque: '',
    num: ''
}
const ProductForm = () => {

    const { t } = useTranslation('translation');
    const [formState, setForm] = useState(initForm);

    let { id } = useParams();

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            let payload = {
                id,
                onSuccess: (data) => {
                    setForm({ ...data });
                }
            }
           // dispatch(empActions.find(payload))
        }
    }, [])

    const formik = useFormik({
        initialValues: { ...formState },
        enableReinitialize: true,
        onSubmit: (values) => {
            let payload = {
                data: values,
                onSuccess: () => {
                    navigate(DATABASE_EMPLOYE_PAGE);
                }
            }
            //dispatch(empActions.create(payload))
        }
    });


    const breadcrumbItems = [
        { title: t('database'), link: "#" },
        { title: t('products'), link: "#" },
        { title: t('newprod'), link: "#" }
    ];

 
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid={true}>
                    <Breadcrumbs title={t('newprod')} breadcrumbItems={breadcrumbItems} />
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

export default ProductForm;