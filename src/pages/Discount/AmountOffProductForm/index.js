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

const initForm = {
    discountType:'',
    discountMethod: 'CODE',
    discountCode: '',
    autoCode: '', 
    discountValue: '', 
    percentage: '', 
    amount: '', 
    specification: '', 
    searchCollections: '',
    searchProducts: '', 
    OncePerOrder: false, 
    minimumPurchaseRequirement: 'NO_MIN', 
    minimumAmountValue: '', 
    minimumQuantityValue: '',
    customerEligibility: 'ALL', 
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

    const breadcrumbItems = [
        { title: t('database'), link: "#" },
        { title: t('discounts'), link: "#" },
        { title: t('New Discount'), link: "#" }
    ];

    const handleSave = () => {
        formik.handleSubmit();
        // You can also include additional logic here if needed
    };

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid={true}>
                    <Breadcrumbs title={t('create discount')} breadcrumbItems={breadcrumbItems} />
                    <AmountOffProducts formik={formik} handleButtonToggle={handleButtonToggle}/> 
                    <DiscountValue formik={formik} /> 
                    {showAvailability && <Availability formik={formik} />}
                    <Purchase formik={formik} automaticDiscountClicked={!showNoMinimumRequirements} />
                    {showCustomerEligibility && <CustomerEligibility formik={formik} />}
                    {showMaximumDiscountUses && <MaximumDiscountUses formik={formik} />}
                    <Combinations formik={formik}/> 
                    <ActiveDates formik={formik}/> 
                    <Button color="primary" onClick={handleSave}>{t('action.enregistrer')}</Button>
                </Container>
            </div>
        </React.Fragment>
    )
}

export default AmountOffProductForm;
