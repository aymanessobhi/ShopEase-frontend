import React, { Component } from "react";
import { Row, Col, Collapse, Container } from "reactstrap";
import { Link } from "react-router-dom";
import classname from "classnames";

//i18n
import { withTranslation } from "react-i18next";

import { connect } from 'react-redux';
import withRouter from "../Common/withRouter";

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidUpdate(prevProps) {
        if (prevProps !== this.props) {
            this.setState({});
        }
    }

    componentDidMount() {
        var matchingMenuItem = null;
        var ul = document.getElementById("navigation");
        var items = ul.getElementsByTagName("a");
        for (var i = 0; i < items.length; ++i) {
            if (this.props.router.location.pathname === items[i].pathname) {
                matchingMenuItem = items[i];
                break;
            }
        }
        if (matchingMenuItem) {
            this.activateParentDropdown(matchingMenuItem);
        }
    }

    activateParentDropdown = item => {
        item.classList.add("active");
        const parent = item.parentElement;
        if (parent) {
            parent.classList.add("active"); // li
            const parent2 = parent.parentElement;
            parent2.classList.add("active"); // li
            const parent3 = parent2.parentElement;
            if (parent3) {
                parent3.classList.add("active"); // li
                const parent4 = parent3.parentElement;
                if (parent4) {
                    parent4.classList.add("active"); // li
                    const parent5 = parent4.parentElement;
                    if (parent5) {
                        parent5.classList.add("active"); // li
                        const parent6 = parent5.parentElement;
                        if (parent6) {
                            parent6.classList.add("active"); // li
                        }
                    }
                }
            }
        }
        return false;
    };

    render() {
        return (
            <React.Fragment>
                <div className="topnav">
                    <Container fluid>
                        <nav className="navbar navbar-light navbar-expand-lg topnav-menu" id="navigation">

                            <Collapse isOpen={this.props.menuOpen} className="navbar-collapse" id="topnav-menu-content">
                                <ul className="navbar-nav">

                                    <li className="nav-item">
                                        <Link className="nav-link" to="/">
                                            <i className="ri-dashboard-line me-2"></i> {this.props.t('Dashboard')}
                                        </Link>
                                    </li>

                                    <li className="nav-item dropdown">
                                        <Link onClick={e => { e.preventDefault(); this.setState({ appSales: !this.state.appSales }); }} className="nav-link dropdown-toggle arrow-none" to="/#" id="topnav-sales" role="button">
                                            <i className="ri-exchange-dollar-line me-2"></i>{this.props.t('sales')} <div className="arrow-down"></div>
                                        </Link>
                                        <div className={classname("dropdown-menu dropdown-menu-end", { show: this.state.appSales })} aria-labelledby="topnav-sales">

                                            <Link to="#" className="dropdown-item">{this.props.t('orders')}</Link>
                                            <Link to="#" className="dropdown-item">{this.props.t('factures')}</Link>
                                            <Link to="#" className="dropdown-item">{this.props.t('pos')}</Link>
                                        </div>
                                    </li>

                                    <li className="nav-item dropdown">
                                        <Link onClick={e => { e.preventDefault(); this.setState({ appBuys: !this.state.appBuys }); }} className="nav-link dropdown-toggle arrow-none" to="/#" id="topnav-apps" role="button">
                                            <i className="ri-store-2-line me-2"></i>{this.props.t('buys')} <div className="arrow-down"></div>
                                        </Link>
                                        <div className={classname("dropdown-menu dropdown-menu-end", { show: this.state.appBuys })} aria-labelledby="topnav-apps">

                                            <Link to="#" className="dropdown-item">{this.props.t('bons')}</Link>
                                            <Link to="#" className="dropdown-item">{this.props.t('livraison')}</Link>
                                            <Link to="#" className="dropdown-item">{this.props.t('factforun')}</Link>
                                        </div>
                                    </li>

                                    <li className="nav-item dropdown">
                                        <Link onClick={e => { e.preventDefault(); this.setState({ appStock: !this.state.appStock }); }} className="nav-link dropdown-toggle arrow-none" to="/#" id="topnav-apps" role="button">
                                            <i className="ri-article-line me-2"></i>{this.props.t('stock')} <div className="arrow-down"></div>
                                        </Link>
                                        <div className={classname("dropdown-menu dropdown-menu-end", { show: this.state.appStock })} aria-labelledby="topnav-apps">

                                            <Link to="#" className="dropdown-item">{this.props.t('valorisation')}</Link>
                                            <Link to="#" className="dropdown-item">{this.props.t('transfert')}</Link>
                                            <Link to="#" className="dropdown-item">{this.props.t('inventaire')}</Link>
                                        </div>
                                    </li>

                                    <li className="nav-item dropdown">
                                        <Link onClick={e => {
                                            e.preventDefault();
                                            this.setState({ componentState: !this.state.componentState });
                                        }} className="nav-link dropdown-toggle arrow-none" to="/#" id="topnav-components" role="button">
                                            <i className="ri-settings-line me-2"></i>{this.props.t('admin')} <div className="arrow-down"></div>
                                        </Link>
                                        <div className={classname("dropdown-menu", { show: this.state.componentState })} aria-labelledby="topnav-components">
                                            <div className="dropdown">
                                                <Link onClick={e => {
                                                    e.preventDefault();
                                                    this.setState({ formState: !this.state.formState });
                                                }} className="dropdown-item dropdown-toggle arrow-none" to="/#" id="topnav-form"
                                                    role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    {this.props.t('database')} <div className="arrow-down"></div>
                                                </Link>
                                                <div className={classname("dropdown-menu", { show: this.state.formState })} aria-labelledby="topnav-form">
                                                    <Link to="/base/product" className="dropdown-item">{this.props.t('products')}</Link>
                                                    <Link to="#" className="dropdown-item">{this.props.t('fournisseur')}</Link>
                                                    <Link to="#" className="dropdown-item">{this.props.t('clients')}</Link>
                                                </div>
                                            </div>
                                            <div className="dropdown">
                                                <Link onClick={e => {
                                                    e.preventDefault();
                                                    this.setState({ tableState: !this.state.tableState });
                                                }} className="dropdown-item dropdown-toggle arrow-none" to="/#" id="topnav-table"
                                                    role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    {this.props.t('admin')} <div className="arrow-down"></div>
                                                </Link>
                                                <div className={classname("dropdown-menu", { show: this.state.tableState })} aria-labelledby="topnav-table">
                                                    <Link to="#" className="dropdown-item">{this.props.t('gestusers')}</Link>
                                                    <Link to="#" className="dropdown-item">{this.props.t('sauvsecu')}</Link>
                                                    <Link to="#" className="dropdown-item">{this.props.t('integ')}</Link>
                                                </div>
                                            </div>
                                            <div className="dropdown">
                                                <Link onClick={e => {
                                                    e.preventDefault();
                                                    this.setState({ chartState: !this.state.chartState });
                                                }} className="dropdown-item dropdown-toggle arrow-none" to="/#" id="topnav-charts"
                                                    role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    {this.props.t('reporting')} <div className="arrow-down"></div>
                                                </Link>
                                                <div className={classname("dropdown-menu", { show: this.state.chartState })} aria-labelledby="topnav-charts">
                                                    <Link to="#" className="dropdown-item">{this.props.t('tablebord')}</Link>
                                                    <Link to="#" className="dropdown-item">{this.props.t('export')}</Link>
                                                </div>
                                            </div>
                                            <div className="dropdown">
                                                <Link onClick={e => {
                                                    e.preventDefault();
                                                    this.setState({ iconState: !this.state.iconState });
                                                }} className="dropdown-item dropdown-toggle arrow-none" to="/#" id="topnav-icons"
                                                    role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    {this.props.t('gestfin')} <div className="arrow-down"></div>
                                                </Link>
                                                <div className={classname("dropdown-menu", { show: this.state.iconState })} aria-labelledby="topnav-icons">
                                                    <Link to="#" className="dropdown-item">{this.props.t('comptagen')}</Link>
                                                    <Link to="#" className="dropdown-item">{this.props.t('banque')}</Link>
                                                    <Link to="#" className="dropdown-item">{this.props.t('lettrage')}</Link>
                                                </div>
                                            </div>
                                            <div className="dropdown">
                                                <Link onClick={e => {
                                                    e.preventDefault();
                                                    this.setState({ mapState: !this.state.mapState });
                                                }} className="dropdown-item dropdown-toggle arrow-none" to="/#" id="topnav-map"
                                                    role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    {this.props.t('crm')} <div className="arrow-down"></div>
                                                </Link>
                                                <div className={classname("dropdown-menu", { show: this.state.mapState })} aria-labelledby="topnav-map">
                                                    <Link to="#" className="dropdown-item">{this.props.t('historique')}</Link>
                                                    <Link to="#" className="dropdown-item">{this.props.t('segment')}</Link>
                                                    <Link to="#" className="dropdown-item">{this.props.t('service')}</Link>
                                                </div>
                                            </div>

                                            
                                        </div>
                                    </li>

                                    <li className="nav-item dropdown">
                                        <Link onClick={e => { e.preventDefault(); this.setState({ appState: !this.state.appState }); }} className="nav-link dropdown-toggle arrow-none" to="/#" id="topnav-apps" role="button">
                                            <i className="ri-question-answer-line me-2"></i>{this.props.t('support')} <div className="arrow-down"></div>
                                        </Link>
                                        <div className={classname("dropdown-menu dropdown-menu-end", { show: this.state.appState })} aria-labelledby="topnav-apps">

                                            <Link to="#" className="dropdown-item">{this.props.t('baseconnai')}</Link>
                                            <Link to="#" className="dropdown-item">{this.props.t('supptech')}</Link>
                                        </div>
                                    </li>

                                   
                                </ul>
                            </Collapse>
                        </nav>
                    </Container>
                </div>
            </React.Fragment>
        );
    }
}

const mapStatetoProps = state => {
    const { leftSideBarType, leftSideBarTheme } = state.Layout;
    return { leftSideBarType, leftSideBarTheme };
}

export default withRouter(connect(mapStatetoProps, {})(withTranslation()(Navbar)));
