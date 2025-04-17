import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useRef } from 'react';
import { register } from 'swiper/element/bundle';

export function Swiper(props) {
    const swiperRef = useRef(null);
    const { children, ...rest } = props;
    useEffect(() => {
        register();
        const params = {
            ...rest
        };
        Object.assign(swiperRef.current, params);
        swiperRef.current.initialize();
    }, []);
    return (_jsx("swiper-container", { init: "false", ref: swiperRef, children: children }));
}
export function SwiperSlide(props) {
    const { children, ...rest } = props;
    return (_jsx("swiper-slide", { ...rest, children: children }));
}
