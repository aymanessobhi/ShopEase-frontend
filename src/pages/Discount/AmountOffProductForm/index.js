import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import Breadcrumbs from '../../../components/Common/Breadcrumb';
import { Button, Card, CardBody, Container} from "reactstrap";
import AmountOffProducts from './AmountOffProducts';
import DiscountValue from './DiscountValue';
import Availability from './Availability';
import Purchase from './Purchase';
import CustomerEligibility from './CustomerEligibility';
import Combinations from './Combinations';
import ActiveDates from './ActiveDates';
import MaximumDiscountUses from './MaximumDiscountUses';
import { discountActions } from "../../../sagas/discountSlice";
import { AvForm } from 'availity-reactstrap-validation';

const initForm = {
    discountType:'',
    discountMethod: null,
    discountCode: '',
    autoCode: '', 
    discountValue: null, 
    percentage: '', 
    amount: '', 
    specification: null, 
    searchCollections: '',
    searchProducts: '', 
    OncePerOrder: false, 
    minimumPurchaseRequirement: null, 
    minimumAmountValue: '', 
    minimumQuantityValue: '',
    customerEligibility: null, 
    specificSegmentsInput: '', 
    specificCustomersInput: '',
    limitTotalUsage: false, 
    totalUsageLimit: '', 
    limitPerCustomer: false,
    combineWithProductDiscounts: false,
    combineWithOrderDiscounts: false,
    combineWithShippingDiscounts: false,
    startDate: '', 
    startTime: '', 
    setEndDate: false, 
    endDate: '', 
    endTime: '' 
}

const AmountOffProductForm = () => {
    const { t } = useTranslation('translation');
    const [formState, setForm] = useState(initForm);
    let {id, type } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [showAvailability, setShowAvailability] = useState(true);
    const [showCustomerEligibility, setShowCustomerEligibility] = useState(true);
    const [showNoMinimumRequirements, setShowNoMinimumRequirements] = useState(true);
    const [showMaximumDiscountUses, setShowMaximumDiscountUses] = useState(true);

    const handleButtonToggle = (show) => {
        setShowAvailability(show);
        setShowCustomerEligibility(!show);
        setShowNoMinimumRequirements(show);
        setShowMaximumDiscountUses(!show);
    };

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
    }, []);

    const formik = useFormik({
        initialValues: { ...formState, discountType:type },
        enableReinitialize: true,
        onSubmit: (values) => {
            console.log("Form values:", values);
            let payload = {
                data: values,
                onSuccess: () => {
                    navigate('/base/discount');
                }
            }
            dispatch(discountActions.create(payload))
        }
    });
    const { errors, handleSubmit, isSubmitting } = formik;

    const breadcrumbItems = [
        { title: t('database'), link: "#" },
        { title: t('discounts'), link: "#" },
        { title: t('New Discount'), link: "#" }
    ];

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid={true}>
                    <AvForm  className="needs-validation" onValidSubmit={handleSubmit} >
                        <Breadcrumbs title={t('create discount')} breadcrumbItems={breadcrumbItems} />
                        <AmountOffProducts formik={formik} handleButtonToggle={handleButtonToggle}/> 
                        <DiscountValue formik={formik} /> 
                        {showAvailability && <Availability formik={formik} />}
                        <Purchase formik={formik} automaticDiscountClicked={!showNoMinimumRequirements} />
                        {showCustomerEligibility && <CustomerEligibility formik={formik} />}
                        {showMaximumDiscountUses && <MaximumDiscountUses formik={formik} />}
                        <Combinations formik={formik}/> 
                        <ActiveDates formik={formik}/> 
                        <Button  variant='contained' type='submit' color='success'>
                            {t("actions.save")}
                        </Button>
                    </AvForm>
                </Container>
            </div>
        </React.Fragment>
    )
}

export default AmountOffProductForm;
