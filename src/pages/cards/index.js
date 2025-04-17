import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import MHidden from '../../components/MHidden';
import CardDesktopContent from './CardDesktopContent';
import CardMobileContent from './CardMobileContent';
import CreateCardDialog from './sections/CreateCardDialog';

function CardsPage() {
    return (_jsxs("div", { children: [_jsx(MHidden, { width: 'smUp', children: _jsx(CardMobileContent, {}) }), _jsx(MHidden, { width: 'smDown', children: _jsx(CardDesktopContent, {}) }), _jsx(CreateCardDialog, {})] }));
}

export default CardsPage;
