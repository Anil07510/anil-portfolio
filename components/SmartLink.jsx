import Link from 'next/link'; 
  
const SmartLink = (link, url) => {
  const regEx = /^http/;

  return regEx.test(url) ? <Link href={url}>{link}</Link> : <a href={url}>{link}</a>;
}

export default SmartLink;