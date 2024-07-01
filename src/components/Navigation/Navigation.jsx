import { CNavbar, CNavbarBrand, CContainer, CNavItem, CNavLink, CCollapse, CNavbarToggler, CNavbarNav } from '@coreui/react';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navigation = () => {

    const [visible, setVisible] = useState(true);
    const navigate = useNavigate();

    return (
        <CNavbar expand="lg" className="bg-body-tertiary">
            <CContainer fluid>
                <CNavbarToggler onClick={() => setVisible(!visible)} />
                <CCollapse className="navbar-collapse" visible={visible}>
                    <CNavbarNav>
                        <CNavItem>
                            <CNavLink href="#" active>
                                Accounts
                            </CNavLink>
                        </CNavItem>
                        <CNavItem>
                            <CNavLink href="#">
                                View Transactions
                            </CNavLink>
                        </CNavItem>
                        <CNavItem>
                            <CNavLink href="#">
                                View Loans
                            </CNavLink>
                        </CNavItem>
                        <CNavItem>
                            <CNavLink href="#">
                                View Debit Orders
                            </CNavLink>
                        </CNavItem>
                        <CNavItem>
                            <CNavLink href="#">
                                Log out
                            </CNavLink>
                        </CNavItem>
                    </CNavbarNav>
                </CCollapse>
            </CContainer>
        </CNavbar>
    )
}

export default Navigation