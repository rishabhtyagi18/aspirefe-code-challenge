import { useEffect, useRef } from 'react';
import { register } from 'swiper/element/bundle';

export function Swiper(props: any) {
  const swiperRef = useRef<any>(null);
  const {
    children,
    ...rest
  } = props;

  useEffect(() => {
    register();

    const params = {
      ...rest
    };

    Object.assign(swiperRef.current, params);

    swiperRef.current.initialize();
  }, []);

  return (
    <swiper-container init="false" ref={swiperRef}>
      {children}
    </swiper-container>
  );
}
export function SwiperSlide(props: any) {
  const {
    children,
    ...rest
  } = props;

  return (
    <swiper-slide {...rest}>
      {children}
    </swiper-slide>
  );
}