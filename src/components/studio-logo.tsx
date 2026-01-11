import Image from 'next/image';
import logo from '../assets/logo/logo.svg';

export const StudioLogo = () => (
  <Image src={logo} alt='Logo' width={25} height={25} />
)