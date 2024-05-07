import React, { useMemo, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Card, CardBody, Container} from "reactstrap";
import { useNavigate } from "react-router-dom";
import Breadcrumbs from '../../components/Common/Breadcrumb';
import TableContainer from "../../components/Common/TableContainer";
import { locationActions } from "../../sagas/locationSlice";
import { useDispatch ,useSelector} from 'react-redux';



const LocationPage = () => {
    const [fetchedData, setFetchedData] = useState(null);
    const { t } = useTranslation('translation');
    const { locations, loading } = useSelector((state) => state.location);



    const breadcrumbItems = [
        { title: t('database'), link: "#" },
        { title: t('locations'), link: "#" }
    ];
    const navigate = useNavigate();

    const columns = useMemo(
        () => [{
            Header: t('location.name'),
            accessor: "name",
            disableFilters: true,
            filterable: false,
          },
          {
            Header: t('location.address'),
            accessor: "adresse",
            disableFilters: true,
            filterable: false,
          },
          {
            Header: t('location.country'),
            accessor: "country.code",
            disableFilters: true,
            filterable: false,
          },
          {
            Header: t('location.appartment'),
            accessor: "appartment",
            disableFilters: true,
            filterable: false,
          },
          {
            Header: t('location.postalcode'),
            accessor: "postalCode",
            disableFilters: true,
            filterable: false,
          },
          {
            Header: t('location.city'),
            accessor: "city",
            disableFilters: true,
            filterable: false,
          },
          {
            Header: t('location.phone'),
            accessor: "phone",
            disableFilters: true,
            filterable: false,
          },],
        []
      );
      
      const dispatch = useDispatch();
      useEffect(() => {
            dispatch(locationActions.locationfetch());  
    }, []);
    return (
    
        <React.Fragment>
            {loading ? <div id="preloader">
                    <div id="status">
                        <div className="spinner">
                            <i className="ri-loader-line spin-icon"></i>
                        </div>
                    </div>
                </div> :
            <div className="page-content">
                <Container fluid>
                    <Breadcrumbs title={t('locations')} breadcrumbItems={breadcrumbItems} />

                    <Card>
                        <CardBody>
                        <TableContainer
                                columns={columns}
                                data={locations ?? []}
                                isPagination={false}
                                isAddLocationList={true}
                                customPageSizeOptions={true}
                                iscustomPageSize={false}
                                handleLocationClick={() => navigate("/base/location/new")}
                                isBordered={false}
                                customPageSize={10}
                            />
                        </CardBody>
                    </Card>
                </Container>
            </div>}
        </React.Fragment>
      
    )
}

export default LocationPage;